;(function (window, undefined) {
	let biyueCustomData = {}
	let question_map = {}
	let questionList = []
	let tree_map = {}
	let type_options = {
		0: '未关联',
		1: '已关联'
	}
	let ques_use = []
	let hidden_empty_struct = false
	let target_id = 0
	let target_type = 'drawing'
	window.Asc.plugin.init = function () {
	  console.log('imageRelation init')
	  window.Asc.plugin.sendToPlugin('onWindowMessage', { type: 'BiyueMessage' })
	}

	function init() {
		window.Asc.plugin.callCommand(function() {
			var oDocument = Api.GetDocument()
			var selectDrawings = oDocument.GetSelectedDrawings() || []
			var selectionInfo = oDocument.Document.getSelectionInfo()
			if (selectDrawings.length && selectDrawings[0].Drawing) {
				var drawing = selectDrawings[0].Drawing
				var parentRun = drawing.GetRun()
				if (parentRun) {
					var oRun = Api.LookupObject(parentRun.Id)
					var oRange = oRun.GetRange()
					oRange.private_SetRangePos(selectionInfo.selectionStart, selectionInfo.selectionEnd)
					oRange.Select()
					let text_data = {
						data:     "",
						// 返回的数据中class属性里面有binary格式的dom信息，需要删除掉
						pushData: function (format, value) {
							this.data = value ? value.replace(/class="[a-zA-Z0-9-:;+"\/=]*/g, "") : "";
						}
					};
					Api.asc_CheckCopy(text_data, 2);
					return {
						html: text_data.data,
						title: drawing.docPr.title,
						type: 'drawing',
						target_id: drawing.Id
					}
				}
			} else if (selectionInfo.curPos) {
				var oTable = null
				for (var i = 0; i < selectionInfo.curPos.length; ++i) {
					if (selectionInfo.curPos[i].Class) {
						var oElement = Api.LookupObject(selectionInfo.curPos[i].Class.Id)
						if (oElement && oElement.GetClassType && oElement.GetClassType() == 'table') {
							oTable = oElement
							break
						}
					}
				}
				if (oTable) {
					var oRange = oTable.GetRange()
					oRange.Select()
					let text_data = {
						data:     "",
						// 返回的数据中class属性里面有binary格式的dom信息，需要删除掉
						pushData: function (format, value) {
							this.data = value ? value.replace(/class="[a-zA-Z0-9-:;+"\/=]*/g, "") : "";
						}
					};
					Api.asc_CheckCopy(text_data, 2);
					return {
						html: text_data.data,
						title: oTable.GetTableTitle(),
						type: 'table',
						target_id: oTable.Table.Id
					}
				}
			}
		}, false, false, function(res) {
			if (res) {
				initData(res)
			}
		})
	}

	function getJsonData(str) {
		if (!str || str == '' || typeof str != 'string') {
			return {}
		}
		try {
			return JSON.parse(str)
		} catch (error) {
			console.log('json parse error', error)
			return {}
		}
	}

	function initData(res) {
		if (!res) {
			return
		}
		target_id = res.target_id
		target_type = res.type
		var titleObj = getJsonData(res.title)
		if (target_type == 'table') {
			ques_use = titleObj.ques_use ? titleObj.ques_use.split('_') : []
		} else {
			if (titleObj.feature && titleObj.feature.ques_use) {
				ques_use = titleObj.feature.ques_use.split('_')
			} else {
				ques_use = []
			}
		}
		getOptions()
		$('#header').html(target_type == 'table' ? '当前表格：' : '当前图片：')
		$('#imageContainer').html(res.html)
		$('#confirm').on('click', onConfirm)
		$('#hidden_empty_struct').on('click', onSwitchStruct)
	}

	function getOptions() {
	  renderData()
	}

	function handleQuesUse(id, val) {
		if (val == 1) {
			ques_use.push(id)
		} else {
			ques_use.splice(ques_use.indexOf(id), 1)
		}
	}

	function renderData() {
		// debugger
	  let node_list = biyueCustomData.node_list || []
	  question_map = biyueCustomData.question_map || {}

	  let html = ''
	  let question_list = []
	  let tree = {}
	  let pre_struct = ''
	  for (const key in node_list) {
		let item = question_map[node_list[key].id] || ''
		if (node_list[key].level_type == 'question') {
		  if (item) {
			html += `<span class="question" title="${ item.text }">${(item.ques_name || item.ques_default_name || '')}`
			var used = ques_use.find(item => item == node_list[key].id)
			html += `<select class="type-item ques-${ node_list[key].id }" style="color:${used ? '#4CAF50' : ''}">`
			// html += `<option value="" style="display:none;"></option>`
			for (const key in type_options) {
			  let selected = ''
			  if (used && key == 1) {
				  selected = 'selected'
			  } else if (!used && key == 0) {
				  selected = 'selected'
			  }
			  html += `<option value="${key}" ${selected}>${type_options[key]}</option>`
			}

			html += `</select></span>`

			if (!question_list.includes(node_list[key].id)) {
			  question_list.push(node_list[key].id)
			}
			if (!pre_struct && !tree[pre_struct]) {
			  tree[pre_struct] = []
			}
			if (pre_struct && tree[pre_struct]) {
			  tree[pre_struct].push(node_list[key].id)
			}
		  }
		} else if (node_list[key].level_type == 'struct' && item){
		  pre_struct = node_list[key].id

		  html += `<div class="group" id="group-id-${ pre_struct }"><span>${ item.text.split('\r\n')[0] }</span></div>`
		  if (!tree[pre_struct]) {
			  tree[pre_struct] = []
		  }
		}
	  }
	  tree_map = tree
	  questionList = question_list || []
	  $('.batch-setting-type-info').html(html)

	  // 处理题目的下拉选项事件
	  for (const key in questionList) {
		let id = questionList[key]
		let doms = document.querySelectorAll('.ques-' + id) || []
		doms.forEach(function(dom) {
			dom.addEventListener('change', function() {
				handleQuesUse(id, dom.value || '')
				if (dom.value > 0) {
				dom.style.color = '#4CAF50'
				} else {
				dom.style.color = ''
				}
			})
			if (dom.value > 0) {
				dom.style.color = '#4CAF50'
			} else {
				dom.style.color = ''
			}
		})
	  }

	  for (const key in tree_map) {
		  if (tree_map[key].length > 0) {
			  // 对有题的结构增加批量设置题型的下拉框
			  let dom = document.querySelector('#group-id-' + key)
			  if (dom) {
				  let html = dom.innerHTML // 取出当前的题组内容
				  let selectHtml = `<select id="bat-type-group-${key}" class="type-item">`
				  selectHtml += `<option value="" style="display: none;"></option>`
				  for (const key in type_options) {
					selectHtml += `<option value="${key}">${type_options[key]}</option>`
				  }
				  selectHtml += "</select>"

				  let inputHtml = `<div class="bat-type-set">设置为${selectHtml}<span class="bat-type-set-btn" id="bat-type-set-btn-${ key }" data-id="${ key }">设置</span></div>`
				  dom.innerHTML = html + inputHtml

				  let btnDom = document.querySelector(`#bat-type-set-btn-${ key }`)
				  if (btnDom) {
					btnDom.addEventListener('click', function() {
						let id = btnDom.dataset.id || ''
						let inputDom = document.querySelector(`#bat-type-group-${ id }`)
						batchSetStructType(id, inputDom.value || 0)
					})
				  }
			  }
		  }
	  }
	}

	function batchSetStructType(struct_id, value) {
	  // 根据结构批量写入题目类型
	  	let arr = tree_map[struct_id] || []
	  	for (const key in arr) {
			handleQuesUse(arr[key], value || '')
	  	}
	  renderData()
	}

	function onSwitchStruct() {
	  //  开启/隐藏 无题目的结构
	  hidden_empty_struct = !hidden_empty_struct
	  $('#hidden_empty_struct').prop('checked', hidden_empty_struct)

	  for (const key in tree_map) {
		  let arr = tree_map[key] || []
		  if (arr.length === 0) {
			  if (hidden_empty_struct) {
				  $('#group-id-'+ key).hide()
			  } else {
				  $('#group-id-'+ key).show()
			  }
		  }
	  }
	}

	function onConfirm() {
		// 将窗口的信息传递出去
		window.Asc.plugin.sendToPlugin('onWindowMessage', {
			type: 'imageRelationMessage',
			data: {
				target_id: target_id,
				target_type: target_type,
				ques_use: ques_use
			}
		})
	}

	window.Asc.plugin.attachEvent('initInfo', function (message) {
	  	biyueCustomData = message || {}
	  	init()
	})
  })(window, undefined)