//let splitQuestion = function (text) {
//     var index = 1;
//     const dlimiter = function(text) {
//         var dlims = ['．', '[\.]'];
//         for (var i = 0; i < dlims.length; i++) {
//             if (-1 !== text.search(dlims[i])) {
//                 return dlims[i];
//             }
//         }
//         return dlims[0];
//     }(text);       

//     let token = function (index) { return `${index}${dlimiter}`; }
//     var nextstart = 0;
//     var next = text.substring(nextstart).search(token(index));
//     index = index + 1;
//     var ranges = new Array();
//     while (next !== -1) {
//         ranges.push({ beg: nextstart, end: nextstart + next })
//         nextstart = nextstart + next;
//         next = text.substring(nextstart).search(token(index));
//         index = index + 1;
//     }

//     if (nextstart < text.length) {
//         ranges.push({ beg: nextstart, end: text.length });
//     }

//     ranges.shift();
//     return ranges;
// }

// let f = function(text) {
//     var ranges = splitQuestion(text);
//     ranges.forEach((e) => {
//         console.log(e);
//         console.log(text.substring(e.beg, e.end));
//         console.log("====");
//     });
    
// }

// //const text = '南安一中23-24学年上学期第一次阶段考初 三 年 化 学 试 题（满分100分；考试时间：60分钟）命题人：潘明芬    审核人：陈培根班级               姓名                    座号            相对原子质量：H 1 C 12 O 16 一、选择题：本题共10小题，每小题3分，共30分。在每小题给出的四个选项中，只有一项是符合题目要求的。1．空气成分中，体积分数最大的是A．氮气     B．二氧化碳    C．氧气     D．稀有气体2．各种元素在地壳里的含量(质量分数)如右图，其中含量最多的金属元素是 A．铁      B．铝          C．硅       D．氧3．化学用语是学习化学的重要工具。下列化学用语表示正确的是A．两个氯原子：Cl2                B．氧化铝：AlOC．2个镁离子：2Mg+2             D．水中氧元素的化合价为-2 价：4．物质的性质决定其用途，下列因果关系不成立的是A．金刚石硬度大，可用于切割玻璃B．氧气具有氧化性，可作为燃料C．稀有气体通电能发不同颜色光，用作霓虹灯D．氮气的化学性质不活泼，可用于填充灯泡5．手机和笔记本电脑使用的大多是锂离子电池，其材料之一是钴酸锂LiCoO2，其中锂元素为+1价，则钴元素（Co）的化合价是A．-1           B．+2           C．+3           D．+46．下列实验操作不正确的是                   A．点燃酒精灯       B．倾倒液体       C．加热液体       D．读取液体体积 7．三七是我国珍贵的药材，其含有的三七素（C5H8N2O5），又名田七氨酸，结构如下图。下列关于三七素的说法正确的是A．氧元素的质量分数最大B．相对分子质量为176 gC．三七素分子含有一个氮分子D．C、H、O三种元素的质量比是5∶8∶58．砷元素广泛地存在于矿物中，例如雌黄（主要成分为As2S3）与古代的纸张颜色相近，常用来修改错字，是古代的“涂改液”根据如图砷元素的信息，说法错误的是A．砷元素位于周期表中第四周期B．砷原子核中的质子数是33C．砷原子的相对原子质量是74.92 gD．As2S3读作三硫化二砷9．下列说法完全正确的是A．1个氖原子—Ne1个钠离子—Na+1B．决定元素种类—电子数决定元素的化学性质—最外层电子数C．铁—由原子构成二氧化碳—由二氧化碳分子构成D．分子—化学变化中的最小粒子原子—保持物质化学性质的最小粒子10．某同学为了探究微粒的性质，按下图所示装置进行实验，并借助数字传感器测得U形管a、b中氨气浓度随时间变化的曲线。下列关于该实验的说法错误的是A．曲线X对应的U形管为a  B．实验证明了微粒运动速率与温度有关C．0~1 min，氨气浓度为零是因为微粒静止不动D．湿棉花的作用是吸收NH3，减少NH3对空气的污染二、非选择题：本题共8小题，共70分。11．（9分）第19届亚运会在中国杭州举行，体育运动中处处充满着化学知识。（1）体操、举重等运动员赛前常在手上涂抹碳酸镁粉末（如图）。碳酸镁是由Mg2+和           （填离子符号）构成。（2）足球比赛中可向受伤部位使用含有氯乙烷（CH3CH2Cl）的喷剂来缓解疼痛。从物质分类的角度看，氯乙烷属于              。（3）赛跑时发令枪响的同时会产生白烟，反应的化学方程式为5KClO3+6P3X+5KCl，根据反应前后原子的种类和数目不变，可知X的化学式为               。（4）体育机构允许运动员使用的药物有：葡萄糖酸锌、氨基酸混合物、维生素C等。①葡萄糖酸锌可以预防           病。②葡萄糖（C6H12O6）在人体内酶的催化下与O2反应生成CO2和H2O，为人体提供所需能量。该反应的符号表达式为                               。12．（9分）央视栏目《遇鉴文明》展现了人类文明魅力，其中有许多中外文明主题互鉴。（1）瓷器与玻璃器——瓷器是火与土的结合，玻璃器是火与沙的交融。烧制瓷器所用的黏土中含氧、硅、铝等元素，写出其中一种非金属元素的元素符号             ，普通玻璃中所含钠离子的符号是           。（2）国画与油画——国画气韵生动，油画抽象浪漫。博物馆保存珍贵名画时用氮气作保护气，因为氮气的化学性质                                             。（3）茶与咖啡——中国茶清香四溢，西方咖啡醇香浓厚。从微观角度解释闻到香味的原因是                                             。（4）中餐与西餐——烹饪上中国菜主要是蒸和炒，西餐则以煎与炸见长。烹饪食物提倡使用铁锅的原因                                                。13．（8分）根据如图所示仪器回答：（1）写出A、D、F仪器名称：A为         ；D为         ；F为        。（2）用上述仪器编号回答下列问题：①用于夹持试管的仪器是          ；②既可用作反应容器又能直接受热的是           。（3）使用量筒时，量筒必须放平，视线要跟             保持水平。图H中量筒内液体的读数是     mL，该量筒的量程是     （填“20”、“50”或“100”）mL。14．（8分）从分子、原子的角度认识化学反应是化学研究的基本方法。如图是某密闭容器中物质变化过程的微观示意图（“”表示氧原子，“”表示氢原子）。请回答：（1）发生变化Ⅰ后的物质是           （填“单质”或“氧化物”）；变化Ⅰ的过程中，没有发生变化的最小粒子是                    （填微粒名称）。（2）根据图写出变化Ⅰ的化学符号表达式                                     ，基本反应类型                。（3）下列关于变化Ⅱ的说法中，正确的是              （填写序号）。A．分子的化学性质没有改变B．分子变小了C．分子间的间隔变小了D．分子的种类发生了改变（4）从微观角度可分析出，变化Ⅱ属于           变化。15．（6分）青铜是人类使用最久的金属材料，它是铜锡合金。青铜常用于制造齿轮等耐磨零部件和耐腐蚀配件。锡原子结构示意图如图1所示。回答下列问题：（1）下列说法错误的是         （填标号）。A．图中x＝18                         B．锡原子的核外电子数为50C．青铜可塑性好，抗腐蚀性强          D．锡元素位于元素周期表的第三周期（2）图2中A～D所示粒子共表示          种元素，其中与锡元素化学性质相似的是            （填标号）元素。（3）锡砂主要成分为二氧化锡，写出该化合物的化学式：              ，其中锡元素的化合价为           。16．（10分）阅读下列科技短文并回答问题近年来，我国载人航天事业取得了举世瞩目的成就。在太空中，如何补充宇航员吸入的氧气和处理呼出的二氧化碳气体，是科学家需要解决的问题。在空间站中，利用太阳能电池板提供的电能，通过电解水制备氧气，利用分子吸附技术，吸收航天员呼出的二氧化碳，同时利用舱内外压强差实现二氧化碳的脱附，将其排入太空。我国神舟十三号载人飞船座舱通过专用风机将座舱空气引入净化罐，利用无水氢氧化锂吸收二氧化碳，净化后的的空气再重新流回座舱。（1）文中提到的氧化物有            （填化学式）。（2）空间站内的空气为        （填“混合物”或“纯净物”）。（3）宇航员呼出的气体中除CO2外，还含有          （填1种即可）。（4）LiOH、NaOH均可吸收CO2，生成对应的碳酸锂、碳酸钠和另一种氧化物。请写出NaOH吸收CO2反应的化学方程式                 。（5）相同条件下，不同吸收剂吸收CO2的最大质量关系如图所示。由上图可知，选用LiOH作吸收剂的原因是                                                    。17．（14分）空气中氧气含量测定的再认识。【实验1】 用白磷燃烧测定空气中氧气含量（如图所示）（1）检查装置气密性的方法是                     。（2）白磷燃烧的符号表达式是                     。（3）实验结束后，最终量筒中液面约降至     mL刻度线处。【实验2】 用红磷燃烧测定空气中氧气含量的实验中，用传感器记录集气瓶中压强、温度随时间变化的情况，如下图所示。其中a是打开活塞的时刻。（4）反应开始时压强增大的原因是                                        。（5）a点处的压强        （填“大于”、“等于”或“小于”，下同）大气压，a点的温度           室温。（6）a点后气压增大的原因是                                。【实验3】测定空气中氧气含量的新设计。往有机玻璃管右侧装入足量的食品脱氧剂（主要成分为活性铁粉，铁粉锈蚀会消耗氧气），并迅速向管的左侧注入一滴水，测出AO的长度为L1（图1）。然后轻轻抖动玻璃管，使脱氧剂粉末平铺在玻璃管右侧，待水滴停止移动后，测得AB的长度为L2（图2）。（7）用该方法测得的空气中氧气的体积分数为                   （用L1和L2表示）。18．（6分）某葡萄糖（C6H12O6）注射液的标签如图所示，回答问题：（1）葡萄糖注射液的物理性质             （写一点）。（2）葡萄糖的相对分子质量                        。（3）葡萄糖中碳元素的质量分数为                。（4）推测葡萄糖注射液的化学性质                  。'
// const text = ' 2023-2024学年度上学期第一次教学质量检测初三年语文试题（）本卷共21题；满分：150分； 考试时间：120分钟）友情提示：所有答案必须填写到答题卡相应的位置上。组卷者：陈爱清      审核者：江聪毅一、积累与运用（25分）班级开展“魅力语文”的综合性活动，请你参加并完成任务。1.下面是晓语同学用收集的名句写的一段心得，请补写出其中的空缺部分。（10分）心持家国情怀，肩担时代重任，善养“浩然之气”，是我们青年人应该具备的品质。何为浩然正气？是范仲淹《岳阳楼记》中“    ①      ，       ②   ” 以天下为己任的政治抱负；是韩愈《左迁至蓝关示侄孙湘》里“      ③    ，      ④         ” 老而弥坚、刚直不阿的胆气；是毛泽东《沁园春·雪》里“俱往矣，    ⑤   ，    ⑥  ” 对人民大众的坚定信念；是李白《行路难》中体现的“    ⑦   ，   ⑧   ” 自强不息和乐观进取的人生态度；是刘禹锡《酬乐天扬州初逢席上见赠》中 “  ⑨    ，   ⑩   ” 的豁达开朗。正是这种凝聚而成的一腔热忱，形成了我们的文化基因，成为中华民族的根与魂。2.观看春晚后，晓语同学整理了“国色”的相关资料，请帮助她加以完善。（9分）2023年春晚《满庭芳·国色》唱出了曼妙“秀色”。那么，颜色从何而来?其芳名又是何人所取?史料告诉我们：先人们从自然万物、天地四时中（   ）色彩，从植物和矿物中（   ）颜料，并（   ）它们雅致动听的名字。比如，玄色即    ①    （lí）明太阳将出未出时天空的黑里透红；绿沈就是西瓜皮颜色。“国色”不直接采用“青白黄赤黑”，而从中遴选出“桃红、凝脂、缃叶、群青、沉香”，则是艺术表达“吉    ②    （xiáng）寓意和美之色相”的需要。其中，蓝色系用的群青，最早来自青金石，从丝    ③    （chóu）之路传到中国。它们已不只代表了沉淀下来的中华民族千百年的审美意趣，还是色彩符号。（1）根据拼音，依次写出相应的汉字（正楷字或行楷字）（3分）（2）依次填入文中括号内的词语，全部恰当的一项是（3分）A.发现 汲取 给予  B.发现 提取 赋予C.发明 提取 赋予  D.发明 汲取 给予（3）文中画波浪线的句子有语病，下列修改最恰当的一项是（3分）A.它们已不只是色彩符号，还代表了千百年沉淀下来的中华民族的审美意趣。B.它们已不只代表了沉淀下来的千百年的中华民族审美意趣，还是色彩符号。C.它们已不只是色彩符号，还代表了中华民族千百年沉淀下来的审美意趣。D.它们已不只代表了中华民族千百年沉淀下来的审美意趣，还是色彩符号。3.班级开展以“经典名著中的人生智慧”为主题的读书分享活动。你所在的小组确定了“困境与突围”的专题。请你结合以下名著中的一个人物的“困境与突围”的事迹，谈谈你获得的人生智慧。（6分）①《水浒传》②《骆驼祥子》③《钢铁是怎样炼成的》二、阅读（65分）（一）阅读下面诗歌，完成题目4-5题。（6分）题大庾岭北驿①【唐】宋之问阳月②南飞雁，传闻至此回。我行殊③未已，何日复归来？江静潮初落，林昏瘴④不开。明朝望乡处，应见陇⑤头梅。【注】①驿：驿站。②阳月：农历十月。③殊：实。④瘴：南方湿热蒸郁之气。⑤陇：此处指大庾岭，岭上多梅，故又称梅岭。4.这首诗是宋之问被流放岭南途经大庾岭时所作。请分析尾联表达的思想感情。(3分)5.诗歌的前两联运用了什么表达技巧？请做简要赏析。(3分) （二）阅读下面的文言文，完成6-9题。（16分）友人袁炳，字叔明，陈郡阳夏人。其人天下之士，幼有异才，学无不览，文章俶傥①清淡出一时，任心观书，不为章句之学。常念荫松柏咏诗书志气跌宕不与俗人交 俯眉暂仕②，历国常侍员外郎、府功曹、临湘令。粟之入者，悉散以赡亲。其为节也如此，数百年未有此人焉。撰《晋史》，奇功未遂，不幸卒官，春秋二十有八。与余有青云之交网，非直衔杯酒而已。（节选自江淹《袁友人传》）【注释】①俶傥：卓异不凡。②仕：为官。③青云之交：喻指同有高远之志的友谊。6.根据语境，参考方法提示，解释下列加点词语的意思。(3分)加点词语方法提示解释（填写文字）数百年未有此人渔歌互答，此乐何极！（《岳阳楼记》）（1）此：       非直衔杯酒而已使用词典选择义项直： ①一直；②只是；③当，对着。（2）直：       俯眉暂仕参考词典解释，联系语境形成新的解释。俯眉：低下头。（3）俯眉：       7.下列对文中画波浪线部分的断句，正确的一项是(3分)A.常念荫松柏/咏诗书/志气跌宕/不与俗人交B.常念荫松柏/咏诗书志/气跌宕/不与俗人交C.常念荫松柏/咏诗书/志气跌宕不与/俗人交D.常念荫松柏/咏诗书志/气跌宕不与/俗人交8.把文中画横线的句子翻译成现代汉语。(6分)①粟之入者，悉散以赡亲。(3分)②撰《晋史》，奇功未遂，不幸卒官，春秋二十有八。（3分）9.作者对袁炳的读书和写作赞赏有加，请简要分析。(4分)（二）阅读下面的文字，完成10-15题。（20分）    走近红旗渠 时国金  走在一块块太行山石垒砌的渠堤上，一面是斧劈刀斩的峭壁，一面是望之胆寒的万丈深渊。清澈的渠水顺着山势缓缓地流淌，就像一条碧绿的飘带，紧紧地绕在太行山腰。站在红旗渠坚固的石堤上，我终于明白，为什么有人把它称为“世界奇迹”。  回望历史的深处，位于太行山麓的河南林县（今林州市），自古山高坡陡，土薄石厚，十年九旱，水源奇缺。1959年，林县再次遭遇特大旱灾，从春到秋，没下过一场透雨。这年年底，林县县委向全县人民发出“重新安排林县河山”的号召。从山西平顺将漳河水拦腰截流，把河水引上太行山、引进林县。这就是有名的——“引漳入林”工程。这个号召，顺应了世世代代林县人民摆脱缺水之困的夙愿，一经提出就得到热烈响应。  元宵佳节，县委书记杨贵和县委全体同志率领由3万多民工组成的修渠大军，冒着寒风，踏着霜冻，浩浩荡荡开上了太行山，扑到荒无人烟的漳河滩和“引漳入林”工程的各个施工段。过去峰峦叠嶂、冷壁清寒的太行山间，顿时成了红旗招展、热火朝天的战场。  在寒冷的太行山深处，铁锤声、钢钎声打破了太行山几千年的宁静，坚硬的岩石和血肉之躯开始碰撞。千军万马战太行，那是人与大自然的较量。  这战场一摆就是十年。今天，在老鹰嘴，我仰头注视着那几欲下坠的绝壁悬崖，试图复原出当年建设者之一任羊成和他的除险队凌空除险的场景和心境。难以想象，在这飞鸟不能驻足、猿猴难以攀援的石壁上悬空作业，需要多强的意志和多大的勇气！当时，为保证安全，总指挥部决定组成一支专业除险队，实施凌空除险。除险队员用绳索捆住腰，手持长杆抓钩，身背铁锤钢钎等工具，将一块块浮石勾撬、掀落下来。因腰部长时间被粗绳捆绑系磨，久而久之，任羊成的腰部形成了厚厚一层老茧，粗糙如老榆树的树皮。一次，任羊成去排除塌方险情，炸药突然爆炸，他一下子被崩裂的烂石埋住，瞬间失去知觉。人们赶紧东找西寻，终于从乱石堆中拽出了血肉模糊的任羊成。历史这样记载着：从1960年2月动工，到1969年7月建成，杨贵带领林县人民历经10年，削平了1250座山头，凿通了211个隧洞，架设152座渡槽，挖砌土石方2225万立方米，在万仞壁立的太行山上，建成了全长1500公里的人工天河——红旗渠，终于结束了林县“十年九旱、水贵如油”的苦难历史。漳河南岸，太行山腰的轰山炸石、锤钎叮当已过去半个多世纪。在林州人的接续奋斗下，放眼望去，如今的林州俨然已是“银龙舞太行，千里谷米香”。站在庙荒村红旗渠旁的板栗树下，我发现日新月异的林州城可以尽收眼底。10年前，坐落在太行山脚下的庙荒村还是个贫困村。这里土薄石厚，房屋破旧。2012年，郁林英担任庙荒村党支部书记。在村民眼里，这是个敢拼敢做的“女汉子”。上任伊始，郁林英铁了心带领村民改变村里的贫穷面貌。她与乡亲们一起，不等不靠，立足村子背靠太行山、红旗渠穿村而过的优势，发展乡村旅游。这几年，庙荒村成立了旅游开发公司，打造起特色民宿旅游村……如今，村里已建成农家院14户，特色院20户，每年接待游客10余万人，小山村的面貌焕然一新。红旗渠的故事并未远去，红旗渠精神始终闪耀着历久弥新的光芒，在林州大地上代代流传……（选自《 人民日报 》，有删改）为了传承“红旗渠精神”，班级组织观看“寻访红旗渠，筑梦新时代”的短视频。请对照上文视频蓝本，参与观后交流讨论。10.对短视频中有关镜头拍摄意图的理解分析，有误的一项是（3分）A. 用动态俯视镜头拍摄太行山脉，是为了突出红旗渠雄伟壮观的景象。B. 拍摄太行山的悬崖峭壁和万丈深渊，是为了表现红旗渠的坚固耐用。C. 镜头中 “千里谷米香”的壮丽景象，是为了突出红旗渠的重要作用。D. 全景拍摄穿村而过的红旗渠，是为了展现庙荒村民宿旅游的独特优势。11.短视频少了对当年“引漳入林”工程得到热烈响应的背景介绍，需要补充，请结合文章内容简要概括。（3 分）12.（1）同学们对短视频中“拽”的动作特写镜头印象深刻，请结合语境赏析。（3分）人们赶紧东找西寻，终于从乱石堆中拽出了血肉模糊的任羊成。（2）视频旁白中的各项数据特别让人震撼，请结合语境分析其表达效果。（3分）从1960年2月动工，到1969年7月建成，杨贵带领林县人民历经10年，削平了1250座山头，凿通了211个隧洞，架设152座渡槽，挖砌土石方2225万立方米，在万仞壁立的太行山上，建成了全长1500公里的人工天河——红旗渠。13.有同学认为，红旗渠现已通渠58年，那么短视频中郁林英的事迹就显得多余了。你赞同吗？请说明理由。（3分）14.通过此次活动，同学们对“红旗渠精神”有了进一步的认识。结合文章内容和链接材料，阐释“红旗渠精神”内核。（5分）【链接材料】红旗渠精神是我们党的性质和宗旨的集中体现，历久弥新，永远不会过时。                                                     ——习近平（三）阅读下面文字，完成15-17题。（13分）心存敬畏，方能行有所止①《明史》中记载：一日早朝，明太祖朱元璋问群臣，天下何人最快活？大家众说纷纭，或曰金榜题名者，或曰功成名就者，或曰富甲天下者，不一而足，却皆未获赞许，唯独大臣万钢回答“畏法度者快活”时，朱元璋点头称是，称其见解“甚独”，并说“人有所畏，则不敢妄为”。②敬畏，是一种人生态度，也是一种行为准则。心存敬畏，方能行有所止。③敬是会意字，由茍和攴两部分组成。茍意为自我告诫、自我反省。攴意为敲击。《说文解字》中说：“敬，肃也”，敬字本义为恭敬、端肃。④畏的甲骨文字形像是鬼以手持杖的样子。《说文解字》说：“畏，恶也，从甶，虎省，鬼头而虎爪，可畏也。”畏的本义为害怕、畏惧。⑤敬畏一词最早见于《管子·小匡》：“故以耕则多粟，以仕则多贤，是以圣王敬畏戚农。”自此之后，敬畏便成了一种固定用法，用来指对人和事物心存崇敬尊重。敬畏虽然由敬与畏两种情感组成，却并非二者的简单组合。畏因敬而生，内心敬服，方能有所戒惧，从而约束规范言行。敬中有畏，畏中有敬，二者相融通，方能体现敬畏意识的真谛。⑥宋人李俊甫所撰《莆阳比事》中记载：北宋林逵居官清白，任职于泉州市舶司时，有人赠其十瓮海蜇。林逵起初以为不过是腌制的海产品，只能当小菜用，也不好意思拒绝，就勉强接受。过了一些日子，家人发现十个瓮中竟然全部装着白银。林逵知道后感叹道：“昔人畏四知，予独畏一心”，急忙叫人将白银送还。林逵洞悉送礼者的居心，内省自己的贪心，而幡然醒悟，正是因为其心存敬畏，方能自省自警。⑦中国传统文化十分强调敬畏意识。孔子说：“君子有三畏：畏天命，畏大人，畏圣人之言。”朱熹在《中庸注》中说：“君子之心，常存敬畏。”明代张居正曾说：“志成于惧，而荒于怠。”这里的惧并非害怕、戒惧，而是对人生的敬畏。明代吕坤亦有云：“畏则不敢肆而德以成，无畏则从其所欲而及于祸。”意思是说，常怀敬畏则不敢放肆妄为，因此能修养德行；若无敬畏则随心所欲，从而招致灾祸及身。⑧对为官从政者来说，敬畏之心十分重要。明朝清官鲁穆为官正直，被称为“鲁铁面”，初任都察院监察御史，出巡江北、两淮等地，所到之处，秉公执法，刚正无私。常州有一巨商，犯法当斩，其家人托鲁穆的一个亲戚向他馈金300镒，请求免去其死罪。鲁穆不为所动，斥责说情的亲戚道：“你难道还不了解我吗？如果我真想靠做官发财又何必等到今日呢！”打发走亲戚后，鲁穆按原定刑罚对巨商予以处置。鲁穆所为，是对法律的敬畏，更是对手中权力的敬畏。正因为心存敬畏，因而能公正无私、正道直行。⑨敬畏是自律的开端，也是行为的界限。只有时刻保持敬畏，方能心不妄动、行不逾矩，让我们用敬畏之琴，弹奏出生命的强音！15.选出下列对选文理解分析有误的一项是(3分)A.选文第②段中画线句子在结构上起到承上启下的过渡作用。B.选文③④⑤段中引用的典籍内容解释了“敬畏”的含义及来源。C.选文第⑥段《莆阳比事》中记载的故事，论述“敬”与“畏”的关系。D.选文第9段最后一句话运用比喻修辞，发出号召，引起读者的共呜。16. 选文第⑦段画线句子运用了哪两种论证方法？有什么作用？（4分）明代吕坤亦有云：“畏则不敢肆而德以成，无畏则从其所欲而及于祸。”意思是说，常怀敬畏则不敢放肆妄为，因此能修养德行；若无敬畏则随心所欲，从而招致灾祸及身。17.下面三则材料中有一则不适合做本文的事实论据，请找出并谈谈你的理解。(6分）【材料一】北宋时期，有个叫杨时的进士，敬仰程颐的才学赶去向他请教，却赶上程颐正在屋中小睡。杨时于是静立门口，等老师醒来。即使天空飘起鹅毛大雪，杨时却还立在雪中。等到程颐一觉醒来，才赫然发现门外的杨时已成雪人。程颐深受感动，尽心尽力教杨时，使得杨时学有所成。【材料二】从历史上雅典的大瘟疫、欧洲的黑死病，再到 SARS 、 NCP ，比人类渺小的病毒却可以给人类带来灭顶之灾。大自然是博大的，它用它的规则主宰世间万物，如果一味地漠视甚至逾越、违背自然规则，就会遭到应有的惩罚。【材料三】（祖逖）与司空刘琨俱为司州主簿，情好绸缪、共被同寝。中夜闻荒鸡鸣，蹴琨觉，曰：“此非恶声也”因起舞。（四）阅读下面文字，完成18-20题。（10分）【材料一】①一夜之间，官员直播“带货”风靡全国。许多政府官员化身网红，为农副产品代言，成为老百姓眼中的“带货员”。②领导干部的直播间，对接起农户与市场。从公共管理的角度看，这更是一场政府服务的变革。在新媒体日新月异的背景下，领导干部做工作不能只搞文山会海、发号施令、签字审批、纸上来纸上去的形式主义，还要走出办公室，走到田间地头，深入移动互联网世界，实实在在为老百姓干实事儿。不可否认，领导干部“直播带货”，兴起于疫情特殊环境，有其偶然性。但其必然性，是新技术的滚滚浪潮对基层治理理念、方式和效能产生的根本性影响。这种嵌入移动互联网、利用新技术手段优化行政生态、提高行政效能的有益尝试，拓宽了政府与民众互动的空间和渠道，增强了老百姓对政府的信任感，值得大力探索。（摘编自《要带货，更要带新思维》）【材料二】①中国消费者协会发布的《直播电商购物消费者满意度在线调查报告》显示，消费者对于虚假宣传和商品来源渠道不正等乱象颇为担心。“假货太多”、“鱼龙混杂”、“货不对板”，是消费者反馈较多的内容。直播带货频频“翻车”的背后，是部分主播和主播运营公司缺乏足够的产品鉴别能力，有的甚至不问质量、给钱就播。②今年5月，中国就业培训技术指导中心将“互联网营销师”列为10个拟新增的职业之一，并专门下设了“直播销售员”工种。业内人士希望，相关部门尽快完善法律法规，制定行业标准，引导直播带货从野蛮生长走向规范，促进行业长远健康发展。（摘编自《半月谈》）【材料三】①在新的商业形态里，零售业的关键成功因素变成了SSS：Social（社群化）——企业与顾客不能只是交易关系，必须是社群化的生活伙伴关系，才能生存；Service（服务化）——传统零售的服务仅限于卖场内的便利，未来零售的服务必须提供直达家庭的服务；Supply-chain（供应链）——在渠道决定购买的阶段，供应链体现为采购的强权与压价，未来供应链则体现为对优质供应资源的争夺与供应链关系的维护。②直播电商是对传统电商的一场颠覆。这不仅体现在渠道、终端、传播、支付等方面，更体现在流量格局的重新分配。流量就是网民的自然访问量，是所有互联网经济的基础。传统电商需要靠其他网站引流，但是直播电商把直播过程做成内容，本身自带流量。究其原因，是商业生态背后的社会形态发生了巨变。社会化媒体、即时通讯媒体的出现，使人类历史上第一次实现了信息的无障碍、自由、高保真、即时化的传递及互动。这让每个人都可以不受地域、生活圈的限制，与互联网上的任何个人实现交流。自此，商品售卖不用跨越万水千山，也无须在强势媒体上大搞宣传，只要掌握新媒体的社交化属性，便可相对容易地与目标顾客建立关系。（摘编自《直播带货风靡，商业模式升级》）18.下列对文本相关内容的理解和分析，不正确的一项是（ ）(3分)A.领导干部“直播带货”虽是疫情催生的偶然结果，但也是新技术浪潮对基层治理理念、方式和效能产生的根本性影响。B.嵌入了移动互联网和新技术手段的官员“直播带货”，优化提升行政生态和效能，拓宽了政府与民众互动的空间和渠道，是政府服务的变革。C.尽管直播带货出现虚假宣传等销售乱象，但面对新兴形式带来的这些问题，消费者可以暂且容忍。D.从传统电商到直播电商，在渠道、终端、传播、支付和流量格局的重新分配等方面都发生了重大变化。19.请简要梳理材料三最后一段的行文思路。(4分)20.根据文本内容，简要概括如何营造“直播带货”的健康生态。(3分)三、写作（60分）21.阅读下列文字，按要求作文。（60分）出发，是一声铿锵的号令，是一种积极的心态，是一次逐梦的行动。一旦出发，很难返程，出发有了方向才不会盲动，才有前行的动力。人生就是这样，在出发中领略万千风景。以上文字给你怎样的联想和感悟，请以“出发”为题，写一篇记叙文或议论文。要求：确定立意；符合文体，不要套作，不少于600字；正文中如需出现真实的人名、地名、校名等，请用化名代替。';
// module.exports = {
//     splitQuestion: splitQuestion,
     
//     API: function() {         
//         f(text);
//     }
// }

let hashCode2 = function(s) {
    var h = 0, l = this.length, i = 0;
    if ( l > 0 )
      while (i < l)
        h = (h << 5) - h + this.charCodeAt(i++) | 0;
    return h;
  };

let hashCode = function() {
    const len = this.length;
    let ret = 0;
    for (let i = 0; i < len; i++) {
      ret = Math.trunc(31 * ret + this.charCodeAt(i));
    }
    return ret;
};

let generateRevisionId = function (expectedKey) {
    const maxKeyLength = 128; // the max key length is 128
    let expKey = expectedKey;
    if (expKey.length > maxKeyLength) { // if the expected key length is greater than the max key length
      // the expected key is hashed and a fixed length value is stored in the string format
      expKey = hashCode(expKey).toString();
    }
  
    const key = expKey.replace(/[^0-9-.a-zA-Z_=]/g, '_');
  
    return key.substring(0, Math.min(key.length, maxKeyLength)); // the resulting key is of the max key length or less
  };

let f = function()
{
    var key1="http://localhost/example/download?fileName=%E7%AC%94%E6%9B%B0%E5%AF%BC%E5%85%A5%E6%B5%8B%E8%AF%95%E6%83%85%E5%86%B55%EF%BC%9A%E9%AB%98%E5%B9%B4%E7%BA%A7%E8%8B%B1%E8%AF%AD%EF%BC%88%E5%AF%B9%E9%BD%90%E3%80%81%E5%AE%8C%E5%9E%8B%E5%A1%AB%E7%A9%BA%E3%80%81%E5%A4%A7%E5%B0%8F%E9%A2%98%EF%BC%89.doc&useraddress=192.168.65.11705932524307"
    var key2="http://localhost/example/download?fileName=%E7%AC%94%E6%9B%B0%E5%AF%BC%E5%85%A5%E6%B5%8B%E8%AF%95%E6%83%85%E5%86%B52%EF%BC%9A%E4%B8%80%E5%B9%B4%E7%BA%A7%E8%AF%AD%E6%96%87%EF%BC%88%E6%8B%BC%E9%9F%B3%E3%80%81%E5%8A%A0%E7%82%B9%E3%80%81%E7%94%B0%E5%AD%97%E6%A0%BC%E3%80%81%E5%9B%BE%E7%89%87%EF%BC%89.doc&useraddress=192.168.65.11705932618564"

    console.log(generateRevisionId(key1));
    console.log(generateRevisionId(key2));
}

module.exports = {
    generateRevisionId: generateRevisionId,
     
     API: function() {         
         f();
     }
}
  
require('make-runnable');

 
  
  