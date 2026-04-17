window.STORIES = window.STORIES || {};
window.STORIES['su-shi-3'] =
{
  id: "su-shi-3",
  name: "苏轼",
  dynasty: "北宋",
  subtitle: "少年入京",
  quote: "人生到处知何似，应似飞鸿踏雪泥。",
  intro: "你二十岁，和弟弟一起进京赶考。主考官欧阳修读了你的文章，说「此人日后文章必独步天下」。从此你一路高歌，少年得志，锋芒毕露——直到有一天，你发现才华挡不住的东西，叫政治。",
  duration: "约10分钟",
  choiceCount: 5,
  status: "available",

  traits: {
    sharpness:  { name: "锋芒", desc: "才华外露还是含蓄内敛" },
    loyalty:    { name: "道义", desc: "对师友、对原则的坚守程度" },
    pragmatism: { name: "务实", desc: "理想与现实之间如何取舍" },
    empathy:    { name: "悲悯", desc: "对百姓疾苦的感受力" }
  },

  totalNodes: 18,

  nodes: {
    // ===== 第一章 · 出川 =====
    "start": {
      chapter: "第一章 · 出川",
      year: "嘉祐元年 · 春",
      scenes: [
        { type: "atmosphere", text: "眉山。三月。油菜花开满了岷江两岸。" },
        { type: "narration", text: "你叫苏轼，字子瞻。今年二十岁。" },
        { type: "narration", text: "你的父亲苏洵是个读书人，考了很多年功名没考上，把全部希望押在了你和弟弟苏辙身上。你从小跟着他读经史、练文章，十岁能写赋，十五岁通读诸子百家。你知道自己有才，整个眉山县也知道。" },
        { type: "narration", text: "今年春天，父亲决定带你们兄弟进京赶考。从眉山到汴京，水路转陆路，要走两个月。" },
        { type: "narration", text: "出发那天早上，母亲程氏站在门口送你们。她身体一直不好，最近咳嗽得更厉害了，但她没有说一句担心的话。她帮你整了整衣领，看着你的眼睛说——" },
        { type: "dialogue", speaker: "母亲程氏", text: "到了京城，少说狂话。你什么都好，就是嘴上不饶人。" },
        { type: "narration", text: "你应了一声。但你心里想的是另一件事——京城有多大？天下的才子都在那里，你的文章放到那堆人里面，够不够看？" },
        { type: "narration", text: "你觉得够。" }
      ],
      action: {
        type: "choice",
        prompt: "你的选择",
        options: [
          { text: "你一路上兴奋得睡不着，不停跟弟弟讨论京城会是什么样。", next: "journey_eager", trait: "sharpness", value: 2, flash: "少年意气" },
          { text: "你在船上安安静静地读书。路还长，先把文章再磨一磨。", next: "journey_steady", trait: "pragmatism", value: 1, flash: "沉得住气" }
        ]
      }
    },

    "journey_eager": {
      chapter: "第一章 · 出川",
      year: "嘉祐元年 · 春",
      scenes: [
        { type: "narration", text: "你拉着弟弟站在船头，看两岸的山从眼前退过去。你说：「子由，你说欧阳修长什么样？」弟弟白了你一眼：「你先把文章写好再想这些。」" },
        { type: "narration", text: "过三峡的时候，你被两岸的绝壁震住了。你当场写了一首诗。弟弟看了，说写得好，但有两个字可以换。你想了想，换了。确实更好。" },
        { type: "narration", text: "你对弟弟有一种天然的信任。他的才华不在你之下，只是更沉稳、更内敛。你负责冲锋，他负责兜底——从小到大都是这样。" },
        { type: "narration", text: "两个月后，汴京的城墙出现在地平线上。你的心跳快了起来。" }
      ],
      action: {
        type: "continue",
        next: "exam"
      }
    },

    "journey_steady": {
      chapter: "第一章 · 出川",
      year: "嘉祐元年 · 春",
      scenes: [
        { type: "narration", text: "你在船舱里读《庄子》。读到「逍遥游」的时候，你放下书，看着窗外的江水发呆。" },
        { type: "narration", text: "弟弟苏辙坐在你对面，也在看书。你们兄弟俩经常这样，各看各的，偶尔抬头聊两句，然后又各自沉进去。" },
        { type: "narration", text: "父亲在隔壁舱里整理他的文稿——《六国论》和其他政论文章。他打算到京城后拿给文坛前辈看。你知道父亲的文章好，但父亲更知道你的文章更好。他从不说，但你看得出来。" },
        { type: "narration", text: "过三峡的时候你写了一首诗，反复改了三遍才满意。弟弟说第二版最好，你想了想，他说得对。" },
        { type: "narration", text: "两个月后，汴京到了。" }
      ],
      action: {
        type: "continue",
        next: "exam"
      }
    },

    // ===== 第二章 · 名动京师 =====
    "exam": {
      chapter: "第二章 · 名动京师",
      year: "嘉祐二年 · 正月",
      scenes: [
        { type: "transition", year: "嘉祐二年", desc: "科 举" },
        { type: "divider" },
        { type: "atmosphere", text: "汴京。贡院。天还没亮，考生们排着长队等候入场。" },
        { type: "narration", text: "这一年的主考官是欧阳修。整个大宋文坛的领袖，你最仰慕的人。" },
        { type: "narration", text: "考场上你写了一篇《刑赏忠厚之至论》。你写得很快，洋洋洒洒，一气呵成。写完之后你重新读了一遍，觉得不错。" },
        { type: "narration", text: "你不知道的是，欧阳修在阅卷房里读到这篇文章时，拍了一下桌子。他以为是自己的学生曾巩写的——为了避嫌，把它从第一名改判为第二。" },
        { type: "narration", text: "放榜那天，你和弟弟同时中了进士。消息传回眉山，全城轰动。" },
        { type: "narration", text: "但真正让你扬名的，是欧阳修后来说的一句话——" },
        { type: "dialogue", speaker: "欧阳修", text: "读苏轼的文章，不觉汗出。此人日后文章，必独步天下。老夫当避此人，放出一头地。" },
        { type: "narration", text: "欧阳修当时五十岁，天下文宗。他说要给你「放出一头地」——让出文坛第一的位子。你二十一岁，一夜之间成了汴京最耀眼的年轻人。" }
      ],
      action: {
        type: "choice",
        prompt: "你的选择",
        options: [
          { text: "你觉得受之无愧。欧阳公的眼光不会错，你确实写得好。", next: "fame_confident", trait: "sharpness", value: 2, flash: "我配得上这个评价" },
          { text: "你有点不安。欧阳公捧得太高了，树大招风。", next: "fame_cautious", trait: "pragmatism", value: 2, flash: "盛名之下" }
        ]
      }
    },

    "fame_confident": {
      chapter: "第二章 · 名动京师",
      year: "嘉祐二年 · 春",
      scenes: [
        { type: "narration", text: "你去拜见欧阳修。他见了你，笑着说：「果然是你。我就知道那篇文章不是曾巩写的，曾巩没有你这么野。」" },
        { type: "narration", text: "你和他聊了整个下午。他问你读什么书，你说什么都读。他问你最喜欢谁的文章，你说贾谊和陆贽——一个死得早，一个被贬了。欧阳修笑了：「你倒是挑了两个命不好的。」" },
        { type: "narration", text: "从欧阳修府上出来，汴京的春风扑面而来。你走在御街上，觉得整个世界都在向你敞开。" },
        { type: "narration", text: "你不知道的是，这种感觉不会持续太久。" }
      ],
      action: {
        type: "continue",
        next: "mother_death"
      }
    },

    "fame_cautious": {
      chapter: "第二章 · 名动京师",
      year: "嘉祐二年 · 春",
      scenes: [
        { type: "narration", text: "你去拜见欧阳修时，特意穿了一身旧衣服。不是买不起新的，是觉得太张扬不好。" },
        { type: "narration", text: "欧阳修倒是毫不在意这些，拉着你聊了整个下午。他说：「你的文章有古风，不拘一格，这是最难得的。」你说：「学生还差得远。」他摆摆手：「你要是差得远，那别人就不用写了。」" },
        { type: "narration", text: "出门的时候弟弟苏辙在外面等你。他看你的表情，说：「怎么，欧阳公对你不好？」你说：「太好了。好到我有点怕。」" },
        { type: "narration", text: "苏辙说：「怕什么？」你说不上来。你只是隐隐觉得，站得越高，风就越大。" }
      ],
      action: {
        type: "continue",
        next: "mother_death"
      }
    },

    // ===== 第三章 · 噩耗 =====
    "mother_death": {
      chapter: "第三章 · 噩耗",
      year: "嘉祐二年 · 四月",
      scenes: [
        { type: "transition", year: "嘉祐二年", desc: "四月" },
        { type: "divider" },
        { type: "narration", text: "好消息和坏消息总是一起来。" },
        { type: "narration", text: "你们兄弟刚中了进士，京城里人人称羡。四月的一封家书打碎了一切。" },
        { type: "narration", text: "母亲程氏病逝了。" },
        { type: "narration", text: "你拿着信站在院子里，太阳晒在脸上，热得发烫，但你浑身发冷。你想起出发那天早上她帮你整衣领的手——那双手当时就在抖，你以为是晨风冷的。" },
        { type: "narration", text: "你没能见她最后一面。从眉山到汴京要走两个月，她去世的时候你正在欧阳修的府上谈笑风生，正在被全京城的人吹捧，正在觉得自己了不起。" },
        { type: "narration", text: "弟弟苏辙那天晚上一直坐在你旁边，也不说话。你们兄弟俩从小到大，什么话都说，但这件事没有话好说。" },
        { type: "narration", text: "你和弟弟跟着父亲扶柩回乡。从汴京到眉山，来的时候你兴高采烈走了两个月，回去的时候你一路沉默走了两个月。" }
      ],
      action: {
        type: "choice",
        prompt: "你的选择",
        options: [
          { text: "守孝三年，闭门不出。你觉得自己亏欠她太多了——她让你少说狂话，你一句都没听。", next: "mourning_guilt", trait: "empathy", value: 2, flash: "子欲养而亲不待" },
          { text: "守孝三年，把悲痛化为读书。母亲最想看到的，是你们兄弟有出息。", next: "mourning_study", trait: "pragmatism", value: 1, flash: "不负所望" }
        ]
      }
    },

    "mourning_guilt": {
      chapter: "第三章 · 噩耗",
      year: "嘉祐二年至嘉祐四年",
      scenes: [
        { type: "narration", text: "你在眉山守了三年孝。" },
        { type: "narration", text: "头一年你几乎什么都没写。你坐在母亲坟前拔草，把坟头打理得干干净净。有时候你会跟她说话——说你中了进士了，说欧阳修夸你了，说弟弟也中了。说这些的时候你觉得自己像个傻子，但不说更难受。" },
        { type: "narration", text: "她说的那句话一直在你脑子里转——「少说狂话」。你在京城什么都说了。你当着欧阳修的面说自己最喜欢贾谊和陆贽，两个命不好的。这不就是狂话吗？" },
        { type: "narration", text: "第二年你开始重新读书。不是为了功名，是因为你发现不读书的时候脑子就停不下来想她。你读《庄子》，读到「鱼相忘于江湖，人相忘于道术」，你合上书，又坐了很久。" },
        { type: "narration", text: "第三年快结束的时候，你写了一首诗。写完才发现——你又开始想写东西了。不是因为想出名，只是因为不写会更难受。" },
        { type: "narration", text: "守孝结束后，你参加了制科考试，以最高等级入第三等通过——这个等级在大宋开国以来只有你一个人拿到过。" }
      ],
      action: {
        type: "continue",
        next: "fengxiang"
      }
    },

    "mourning_study": {
      chapter: "第三章 · 噩耗",
      year: "嘉祐二年至嘉祐四年",
      scenes: [
        { type: "narration", text: "你在眉山守了三年孝。" },
        { type: "narration", text: "母亲在世的时候最重视你们兄弟的学业。你记得小时候她教你们读《后汉书·范滂传》——范滂因为坚持正义被杀，临死前跟母亲告别。你当时问母亲：「如果我以后也像范滂那样，您愿意吗？」她说：「你能做范滂，我就能做范滂的母亲。」" },
        { type: "narration", text: "这句话你一直记着。她不要你平安富贵，她要你做对的事。" },
        { type: "narration", text: "你把悲痛压进了书堆里。三年间你通读了史书，重新研究了贾谊、陆贽的文章，还开始认真读《庄子》。你发现以前读书是为了考试，现在读书是在找一个东西——什么东西，你说不清楚。也许是一种活法。" },
        { type: "narration", text: "守孝结束后，你参加了制科考试，以最高等级入第三等通过。这个等级在大宋开国以来只有你一个人拿到过。" },
        { type: "narration", text: "你在母亲坟前烧了一份报喜的纸。风把灰吹散了，你站了很久才走。" }
      ],
      action: {
        type: "continue",
        next: "fengxiang"
      }
    },

    // ===== 第四章 · 凤翔 =====
    "fengxiang": {
      chapter: "第四章 · 凤翔",
      year: "嘉祐六年 · 冬",
      scenes: [
        { type: "transition", year: "嘉祐六年", desc: "凤 翔" },
        { type: "divider" },
        { type: "atmosphere", text: "凤翔。关中大地。黄土漫天。" },
        { type: "narration", text: "朝廷授你凤翔府签判。你第一次做官，第一次离开家人，第一次独自面对真实的世界。" },
        { type: "narration", text: "凤翔的日子让你第一次明白了什么叫「读书是一回事，做事是另一回事」。你管过刑狱，判过田产纠纷，修过水渠。你发现老百姓不在乎你的诗写得好不好，他们在乎的是今年的麦子能不能收上来。" },
        { type: "narration", text: "让你更头疼的是你的顶头上司——知府陈希亮。他是个老派官员，铁面无私，看谁都不顺眼。你是京城来的名士，走到哪儿都有人吹捧，他偏偏不吃这一套。公文批回来永远挑毛病，开会时当众让你难堪。" },
        { type: "narration", text: "但真正让你受不了的，不是陈希亮。" },
        { type: "narration", text: "这年冬天，关中大旱。庄稼全死了。你亲眼看见有人在路边啃树皮。你跑去找陈希亮申请开仓放粮、减价卖官粮赈灾。" },
        { type: "dialogue", speaker: "陈希亮", text: "开仓要上报朝廷，没有批文谁来担这个责任？你苏签判写诗写得好，这道公文你能替我写？" },
        { type: "narration", text: "你知道他说的是实话。大宋的规矩就是这样——地方官没有权力擅自开仓。但外面的人等不了公文在路上跑一个月。" }
      ],
      action: {
        type: "choice",
        prompt: "你的选择",
        options: [
          { text: "先斩后奏。你自己写了一道公文，盖了签判的章，先开仓放粮再说。大不了将来被追责。", next: "fengxiang_act", trait: "empathy", value: 2, flash: "人命大于规矩" },
          { text: "按规矩来。你连夜写了一道加急奏折，快马送京城。同时发动当地富户先捐粮应急。", next: "fengxiang_rule", trait: "pragmatism", value: 2, flash: "在规矩里救人" }
        ]
      }
    },

    "fengxiang_act": {
      chapter: "第四章 · 凤翔",
      year: "嘉祐六年至治平二年",
      scenes: [
        { type: "narration", text: "你没等批文。你以签判的名义写了一道公文，把官仓打开了。粮食发下去的时候，已经有人饿死了——但活下来的更多。" },
        { type: "narration", text: "陈希亮知道之后脸色铁青。他没有骂你，但也没有替你说话。如果朝廷追究下来，你一个七品签判扛不住。" },
        { type: "narration", text: "后来朝廷没有追究。不是因为你做得对，是因为那年旱灾太大了，朝廷自己后来也下了开仓的令。你的先斩后奏变成了「提前执行」。" },
        { type: "narration", text: "但你第一次明白了一件事：做对的事和做被允许的事，经常是两件事。你在书里读过无数遍「为生民立命」，现在你知道这四个字有多重——重到你可能要拿自己的前途去换。" },
        { type: "narration", text: "陈希亮后来对你的态度微妙地变了。不是变好，是变成了一种不情愿的认可。很多年后他去世，你给他写了一篇祭文，说他「方正之人，不苟合于世」。你到那时候才明白，他不是针对你，他是对所有人都这样。" },
        { type: "narration", text: "治平二年，父亲苏洵病逝。你和弟弟扶柩回乡，守孝三年。" },
        { type: "narration", text: "等你再次回到汴京的时候，一切都变了。" }
      ],
      action: {
        type: "continue",
        next: "new_policies"
      }
    },

    "fengxiang_rule": {
      chapter: "第四章 · 凤翔",
      year: "嘉祐六年至治平二年",
      scenes: [
        { type: "narration", text: "你连夜写了奏折，快马送京城。同时你挨家挨户去敲当地富户的门，低头求人捐粮。你苏轼从来没有求过人——但你在路上见过啃树皮的人，你放不下。" },
        { type: "narration", text: "有几家捐了，不多，但够撑半个月。等朝廷批文下来的时候，粮食终于到了。但中间那半个月——有人没撑过去。" },
        { type: "narration", text: "你站在粥棚前看着排队的灾民。有个老妇人抱着孙子，孩子已经哭不出声了。你给了她一碗粥，她跪下给你磕头。你想扶她起来，她的手冷得像冰。" },
        { type: "narration", text: "那天晚上你一个人坐在官署里，想了很久。规矩你是守了，但人呢？如果你第一天就把仓开了，那些死掉的人是不是能活下来？" },
        { type: "narration", text: "你不知道。你只知道你这辈子再也忘不掉那个老妇人的手有多冷。" },
        { type: "narration", text: "凤翔三年，你学到了在书里学不到的东西。陈希亮后来去世，你给他写了一篇祭文，说他「方正之人，不苟合于世」。你到那时候才理解他——他不是针对你，他是对所有人都这样。" },
        { type: "narration", text: "治平二年，父亲苏洵病逝。你和弟弟扶柩回乡，守孝三年。" },
        { type: "narration", text: "等你再次回到汴京的时候，一切都变了。" }
      ],
      action: {
        type: "continue",
        next: "new_policies"
      }
    },

    // ===== 第五章 · 变法 =====
    "new_policies": {
      chapter: "第五章 · 变法",
      year: "熙宁二年 · 春",
      scenes: [
        { type: "transition", year: "熙宁二年", desc: "变 法" },
        { type: "divider" },
        { type: "narration", text: "神宗即位了。新皇帝年轻气盛，要变法图强。他找到了一个人——王安石。" },
        { type: "narration", text: "王安石。你对这个名字有一种复杂的感情。" },
        { type: "narration", text: "你们没有私交，但你读过他所有的文章。他的《伤仲永》你读了三遍，觉得写得极好。他的政论文章更是一等一的锋利，比你更克制，比你更有力。你打心底里敬佩这个人——他是你之外，你最想成为的那种文人。" },
        { type: "narration", text: "但他现在做的事，你看不下去。" },
        { type: "narration", text: "青苗法、均输法、保甲法——一道道新政从中书省发下来，整个朝廷上下都被搅动了。有些你觉得有道理：方田均税，丈量土地、公平赋税，这是好事。但有些你觉得太急了。" },
        { type: "narration", text: "青苗法本意是让官府贷款给农民，不让高利贷盘剥。可执行的人呢？你在凤翔见过那些地方官——为了完成任务，他们会把好政策变成催命符。强行摊派、逼人借贷，比高利贷还狠。" },
        { type: "narration", text: "你的老师欧阳修也反对了。弟弟苏辙已经上书。所有人都在看你——苏轼，你站哪边？" }
      ],
      action: {
        type: "choice",
        prompt: "你的选择",
        options: [
          { text: "上书直言。新法出发点好但执行有问题，不能为了改革而改革。你要对得起凤翔那些你见过的人。", next: "oppose_direct", trait: "loyalty", value: 2, flash: "说该说的话" },
          { text: "先去找王安石谈。你敬佩他，不想还没说清楚就变成敌人。", next: "oppose_private", trait: "pragmatism", value: 2, flash: "先敬后争" }
        ]
      }
    },

    "oppose_direct": {
      chapter: "第五章 · 变法",
      year: "熙宁二年至四年",
      scenes: [
        { type: "narration", text: "你上了《上神宗皇帝书》。洋洋万言，逐条分析新法的利弊。你写得克制而有力，没有骂王安石，但把执行中的问题一条条摆了出来——强制摊派、中饱私囊、百姓苦不堪言。" },
        { type: "narration", text: "你写的时候想起了凤翔。想起了粥棚前排队的灾民，想起了那个老妇人冰冷的手。你不是在反对变法，你是在替那些说不出话的人说话。" },
        { type: "narration", text: "神宗看了你的奏折，沉默了很久，说：「苏轼说的有道理，但朕已经决意变法了。」" },
        { type: "narration", text: "王安石看了你的奏折，脸色很不好看。" },
        { type: "narration", text: "你后来听说，他在中书省跟人说：「苏轼的文章确实好，但他不懂治国。」你心里有点难受——不是因为他说你不懂治国，而是因为你真心敬佩的人，从此把你当成了对手。" },
        { type: "narration", text: "朝堂分成了两派。反对者一个个被贬出京。欧阳修致仕了。司马光也走了。你越来越孤立。" }
      ],
      action: {
        type: "continue",
        next: "leave_capital"
      }
    },

    "oppose_private": {
      chapter: "第五章 · 变法",
      year: "熙宁二年至四年",
      scenes: [
        { type: "narration", text: "你找了一个机会，在宴席上跟王安石坐到了一起。" },
        { type: "narration", text: "近距离看他，你有点意外。他衣服上有墨渍，头发也没怎么打理。他不在意这些。你想，这个人跟自己有点像——都是那种心里装着大事就不管小事的人。" },
        { type: "narration", text: "你说：「介甫兄，青苗法的本意是好的，但下面的人在乱来。我在凤翔做过签判，亲眼见过地方官怎么把好政策变成害人的东西。」" },
        { type: "narration", text: "王安石听了，沉默了一会儿，说：「任何新政都有阵痛期。不能因为个别地方出了问题就否定整个方向。」" },
        { type: "narration", text: "你说：「可是这些'个别地方'加起来，是几百万人的生计。」" },
        { type: "narration", text: "他看了你一眼。那个眼神很复杂——有不服气，但也有一丝你没料到的东西。也许是尊重，也许是惋惜。他说：「子瞻，你写文章是天下第一。但治国不是写文章。」" },
        { type: "narration", text: "你后来还是上了奏折。不上不行——凤翔那些人的脸一直在你眼前晃。奏折递上去之后，你和王安石的关系就回不去了。" },
        { type: "narration", text: "你失去了一个你最想成为朋友的人。" }
      ],
      action: {
        type: "continue",
        next: "leave_capital"
      }
    },

    // ===== 第六章 · 离京 =====
    "leave_capital": {
      chapter: "第六章 · 离京",
      year: "熙宁四年 · 夏",
      scenes: [
        { type: "transition", year: "熙宁四年", desc: "离 京" },
        { type: "divider" },
        { type: "narration", text: "京城待不下去了。" },
        { type: "narration", text: "新党的人开始针对你。有人弹劾你「讪谤朝政」，有人在背后说你「恃才傲物」。你在史馆编书的差事也做得不痛快——你写的东西动不动就被打回来。" },
        { type: "narration", text: "弟弟苏辙来找你。他说：「兄长，三十六计走为上。你不适合在京城搞政治。你太直了。」" },
        { type: "narration", text: "你知道他说得对。你不是不懂政治，你是不愿意玩那一套。你在凤翔学会了对老百姓低头，但你学不会对权力低头。" },
        { type: "narration", text: "你决定请求外放——离开京城，去地方做官。至少在地方上，你还能做点实事。" }
      ],
      action: {
        type: "choice",
        prompt: "你的选择",
        options: [
          { text: "走之前再上一道书，把该说的话说完。母亲说少说狂话——可是不说，那些人怎么办。", next: "ending_speak", trait: "loyalty", value: 2, flash: "此去不知归期" },
          { text: "安静地走。你已经说了够多了。从今以后，把话写进诗里。", next: "ending_quiet", trait: "pragmatism", value: 2, flash: "沉默也是态度" }
        ]
      }
    },

    // ===== 结局 =====
    "ending_speak": {
      chapter: "第六章 · 离京",
      year: "熙宁四年 · 七月",
      scenes: [
        { type: "narration", text: "你写了《再上皇帝书》。这一次你比上次更直白，几乎是在跟神宗说：新法正在毁掉这个国家。" },
        { type: "narration", text: "奏折递上去之后，你知道自己在京城的路算是彻底断了。" },
        { type: "narration", text: "临走那天，你去看了欧阳修最后一面。老先生已经退隐在家，头发全白了。他拉着你的手说：「子瞻，文章是你的命，也是你的债。好自为之。」" },
        { type: "narration", text: "你想起母亲说的「少说狂话」，想起欧阳修说的「文章是命也是债」。你觉得他们说的是同一件事。你这辈子最大的本事和最大的麻烦，是同一个东西。" },
        { type: "narration", text: "你去杭州赴任。七月出发，顺运河南下。汴京的城墙在身后越来越远。" },
        { type: "narration", text: "你想起十五年前第一次进京的时候，油菜花开满了岷江两岸，母亲站在门口帮你整衣领。" },
        { type: "narration", text: "现在你知道了——世界确实向你敞开过，然后又合上了。但你手里还有一支笔。那是谁也合不上的。" }
      ],
      action: {
        type: "ending"
      }
    },

    "ending_quiet": {
      chapter: "第六章 · 离京",
      year: "熙宁四年 · 七月",
      scenes: [
        { type: "narration", text: "你没有再上书。收拾好行李，跟弟弟告了别。" },
        { type: "narration", text: "苏辙送你到城门口。你们站在那里，谁都没说话。从眉山出来到现在，你们兄弟俩头一次要分开这么远。" },
        { type: "dialogue", speaker: "苏辙", text: "到了杭州写信给我。别又犯你那个毛病——想说什么就说什么。" },
        { type: "narration", text: "你笑了笑：「放心。我就是管不住嘴，又不是不知道管不住嘴。」" },
        { type: "narration", text: "苏辙没笑。他太了解你了。你知道自己的毛病，但你从来不改。母亲知道，弟弟知道，欧阳修也知道。这才是最让所有人操心的地方。" },
        { type: "narration", text: "你去杭州赴任。七月出发，顺运河南下。运河两岸的柳树在风里摇晃，你靠在船舷上，看着水面发呆。" },
        { type: "narration", text: "你突然想起那年过三峡时写的那首诗——「人生到处知何似，应似飞鸿踏雪泥。泥上偶然留指爪，鸿飞那复计东西。」" },
        { type: "narration", text: "那时候你二十岁，觉得这是潇洒。现在你三十四岁，发现这是实话——你确实不知道自己下一站会飞到哪里。但你隐隐觉得，不管飞到哪里，麻烦都会跟着你。因为你就是那种人。" },
        { type: "narration", text: "你不知道的是，八年后，你的诗会把你送进大牢。那场风暴叫乌台诗案。" },
        { type: "narration", text: "但那是另一个故事了。" }
      ],
      action: {
        type: "ending"
      }
    }
  },

  ending: {
    epilogue: "从眉山少年到京城名士，再到外放地方，\n十五年间，苏轼完成了一个天才的第一次坠落。\n他还不知道，更大的风暴还在后面——\n八年后，乌台诗案将把他推进深渊。\n但那是另一个故事了。",
    stats: [
      { num: 5, label: "次抉择" },
      { num: 15, label: "年少年岁月" },
      { num: 1, label: "次离京" }
    ],
    traitAnalysis: {
      sharpness: {
        high: "你和年轻时的苏轼一样锋芒毕露。才华是藏不住的，你也不打算藏。但锋芒越盛，越容易被风折断——后来的乌台诗案，就是这把双刃剑的另一面。",
        mid: "你在锐利和收敛之间找到了一种平衡。这是苏轼花了半辈子才学会的事情。",
        low: "你选择了含蓄内敛。这是一种智慧，但也可能是一种遗憾——苏轼如果不那么张扬，也许不会有乌台之祸。但也不会有赤壁赋。"
      },
      loyalty: {
        high: "你对道义有一种近乎执拗的坚守。就像苏轼面对新法时的态度——明知说了没用，还是要说。因为不说，就不是你了。",
        mid: "你在坚持和妥协之间寻找空间。这不是软弱，是另一种勇气。",
        low: "你更倾向于保全自己。这并非不义，而是对「说真话的代价」有清醒的认识。"
      },
      pragmatism: {
        high: "你展现了超越年龄的务实。年轻的苏轼如果有你这份冷静，也许能少吃很多苦——但也可能少写很多传世名篇。",
        mid: "你在理想与现实之间摇摆，这本身就是青年时代最真实的状态。",
        low: "你是一个理想主义者。就像年轻的苏轼——相信才华可以改变世界，相信好文章能够打动人心。这份天真很珍贵，也很危险。"
      },
      empathy: {
        high: "你对百姓的苦难有真实的感受力。这是苏轼最好的品质——他不是那种在书斋里忧国忧民的文人，他真的在旱灾里开过仓，在粥棚前见过快死的人。后来他在杭州疏浚西湖、在惠州修桥铺路，都是从凤翔那几年开始的。",
        mid: "你关心天下，也关心自己的前途。这是人之常情。",
        low: "你更关注自我的表达和实现。这在少年时代无可厚非，但苏轼后来最动人的作品，恰恰是在他开始关心别人之后才写出来的。"
      }
    },
    reflection: "十五年前那个从眉山出发的少年，\n一路走来，才华是他的翅膀，也是他的罪名。\n母亲说「少说狂话」，他没有听。\n也许他永远不会听。\n但正因如此，他才是苏轼。",
    comingSoon: "「对话苏轼」功能即将上线\n穿越时空，与东坡先生面对面交谈"
  }
}
;
