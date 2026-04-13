module.exports = {
  id: "li-qingzhao-2",
  name: "李清照",
  dynasty: "两宋",
  subtitle: "汴京春早",
  quote: "莫道不销魂，帘卷西风，人比黄花瘦。",
  intro: "你十八岁，嫁给了一个和你一样痴迷金石碑帖的人。你们穷得叮当响，却觉得自己是天底下最富有的人。二十年的好日子，你以为会一直这样过下去——直到北方的马蹄声越来越近。",
  duration: "约10分钟",
  choiceCount: 5,
  status: "available",

  traits: {
    talent:      { name: "才情", desc: "才华外露还是含蓄隐忍" },
    obsession:   { name: "执念", desc: "对金石书画的痴迷程度" },
    perception:  { name: "敏锐", desc: "对时局变化的感知力" },
    devotion:    { name: "深情", desc: "对赵明诚的爱的方式" }
  },

  totalNodes: 18,

  nodes: {
    // ===== 第一章 · 归来堂 =====
    "start": {
      chapter: "第一章 · 归来堂",
      year: "建中靖国元年 · 秋",
      scenes: [
        { type: "atmosphere", text: "汴京。秋天。满城桂花香。" },
        { type: "narration", text: "你十八岁，嫁到了赵家。" },
        { type: "narration", text: "赵明诚二十一岁，太学生，家里是当朝宰相赵挺之的门第。但他跟那个世界不沾边——他满脑子都是碑帖、拓片、青铜器。第一次见面的时候，别人家公子聊的是仕途前程，他跟你聊的是一块东汉残碑上某个字的写法。" },
        { type: "narration", text: "你当时就知道，这个人是你的。" },
        { type: "narration", text: "新婚的日子穷得叮当响。他是太学生，没有俸禄。你的嫁妆也不多——你爹李格非是个清官，没什么积蓄。你们租了一间小院子，两间屋子，一间住人，一间堆书。" },
        { type: "narration", text: "但你们快乐得要命。" },
        { type: "narration", text: "每月初一和十五，你们去相国寺淘旧书。相国寺的庙会什么都卖——吃的、穿的、玩的——但你们眼里只有书摊。两个人蹲在地上翻旧书，翻到好的就互相使眼色。" },
        { type: "narration", text: "你们只有一千钱的预算。站在摊位前商量半天买哪一本。有一次为了一本带注的《礼记》争了半刻钟，最后你说「买」，他说「再看看」。你直接掏钱买了。" },
        { type: "narration", text: "回家的路上他嘟囔了一路「太贵了太贵了」，但到家之后两个人对坐翻看，煮了一壶茶，他翻着翻着忽然说「买对了」。你笑了。" },
        { type: "narration", text: "晚饭后你们发明了一个游戏——赌书泼茶。指着一堆书说「某某典故在哪本书第几卷第几页」，谁先猜对谁先喝茶。你记性比他好，总是赢。赢了就大笑，笑得前仰后合，茶泼了一身。" },
        { type: "narration", text: "他看着你笑，也笑。说「你这样子哪像大家闺秀」。你说「大家闺秀赢不了你」。" },
        { type: "narration", text: "日子就这样过着。很穷，很快乐。" },
        { type: "divider" },
        { type: "narration", text: "但外面的世界不太平。" },
        { type: "narration", text: "朝堂上新旧党争愈演愈烈。你父亲李格非是苏轼的学生，被列入「元祐党籍」——简单说就是政治上站错了队。朝廷下令：元祐党人的子女，不得与在京官员通婚。" },
        { type: "narration", text: "你的公公赵挺之，恰恰是当朝宰相，新党一方的人。" },
        { type: "narration", text: "这道禁令像一把刀，直接劈在你和明诚之间。你嫁到赵家的身份，忽然变成了一个政治问题。" },
        { type: "narration", text: "赵挺之没有明说，但他身边的人暗示过明诚——跟李家保持距离。你父亲也写信来，让你别给赵家添麻烦。" },
        { type: "narration", text: "明诚什么都没说。他不擅长处理这种事。他只是每天照常跟你看书、淘碑帖，假装什么都没发生。但你注意到他翻书的时候会发呆，手指停在一页上半天不动。" },
        { type: "narration", text: "你知道他在想什么。你也在想。" }
      ],
      action: {
        type: "choice",
        prompt: "你的选择",
        options: [
          { text: "给父亲写信，让他低调一些，别再跟旧党的人来往了。你不想让明诚夹在中间为难。", next: "party_quiet", trait: "devotion", value: 2, flash: "他已经够为难了" },
          { text: "你写了一首词投给朝中旧党的故交——「学诗谩有惊人句」——你是李格非的女儿，你不能装聋作哑。", next: "party_speak", trait: "talent", value: 2, flash: "我不是谁的附庸" },
          { text: "什么都不做。朝堂的事你管不了，也不想管。你只想和明诚好好过日子。", next: "party_ignore", trait: "obsession", value: 1, flash: "书里没有党争" }
        ]
      }
    },

    "party_quiet": {
      chapter: "第一章 · 归来堂",
      year: "建中靖国元年 · 冬",
      scenes: [
        { type: "narration", text: "你给父亲写了一封长信。措辞很小心——你没有让他屈服，只是劝他「暂避锋芒」。你知道父亲的脾气，他是苏轼的学生，骨子里跟苏轼一样倔。但你还是写了。" },
        { type: "narration", text: "父亲回了信。信很短，只有一句话：「吾儿不必忧。做人做事，问心无愧即可。」" },
        { type: "narration", text: "你看着这句话，眼眶热了。你知道他不会听你的。他这辈子没有听过任何人的。" },
        { type: "narration", text: "明诚那天晚上回来，看你的眼神有些不一样。他大概猜到你做了什么。他走过来，把一本新淘来的碑帖放在你面前，说「你看看这个，我觉得断代有问题」。" },
        { type: "narration", text: "他没提党争的事。你也没提。你们用一块碑帖把那个夜晚填满了。" },
        { type: "narration", text: "后来你父亲还是被罢了官，贬出了汴京。赵挺之也没能保住宰相的位子。朝堂上的人换了一拨又一拨，只有你和明诚的小院子没变——还是那两间屋子，一间住人，一间堆书。书越堆越多了。" }
      ],
      action: {
        type: "continue",
        next: "jinshi"
      }
    },

    "party_speak": {
      chapter: "第一章 · 归来堂",
      year: "建中靖国元年 · 冬",
      scenes: [
        { type: "narration", text: "你写了一首词。不是闺中愁思，是借古讽今——你用汉代党锢之祸的典故，暗指当下对元祐党人的打压。" },
        { type: "narration", text: "词传了出去。汴京的文人圈子不大，很快就有人在议论——「赵家那个新媳妇，胆子倒是不小」。" },
        { type: "narration", text: "赵挺之的脸色很不好看。他没有直接找你，但明诚被叫去谈了一次话。明诚回来的时候脸色发白，坐在桌前半天没说话。" },
        { type: "dialogue", speaker: "赵明诚", text: "你不该写那首词的。" },
        { type: "narration", text: "你看着他。他不是在怪你。他是在害怕。他怕你被牵连，怕你们的日子被搅乱。" },
        { type: "dialogue", speaker: "你（李清照）", text: "我是李格非的女儿。他们打压我父亲的时候，我不能一个字都不说。" },
        { type: "narration", text: "他沉默了很久。然后他说了一句让你意外的话——" },
        { type: "dialogue", speaker: "赵明诚", text: "词写得好。" },
        { type: "narration", text: "你愣了一下。然后你笑了。他也笑了，虽然笑得有点勉强。" },
        { type: "narration", text: "后来你父亲还是被罢了官。你的词也没能改变什么。但你不后悔。有些话说出来不是为了有用，是为了对得起自己。" }
      ],
      action: {
        type: "continue",
        next: "jinshi"
      }
    },

    "party_ignore": {
      chapter: "第一章 · 归来堂",
      year: "建中靖国元年 · 冬",
      scenes: [
        { type: "narration", text: "你把自己关在书房里。外面的事你不想听，也不想管。" },
        { type: "narration", text: "你知道自己在逃避。但你真的不知道该怎么办。帮父亲说话，会连累明诚的家族；不帮父亲说话，你又觉得自己不配姓李。" },
        { type: "narration", text: "于是你选择了书。" },
        { type: "narration", text: "你把最近淘来的碑帖全部重新整理了一遍，按年代排序，按书体分类。你在每一件上面都用小字标注了来源、价格、品相。做这些事的时候，你的脑子可以不想别的。" },
        { type: "narration", text: "明诚看你整理得那么认真，什么都没说，默默坐到你旁边帮忙。你们对坐了一整夜，把所有的藏品做了第一份目录。" },
        { type: "narration", text: "后来你父亲被罢了官。你没能帮上什么忙。但那份目录留了下来——后来它变成了《金石录》最早的底稿。" },
        { type: "narration", text: "你有时候想，那些在大事面前选择低头做事的人，算不算一种懦弱？你不知道。但你知道那张目录是真的。" }
      ],
      action: {
        type: "continue",
        next: "jinshi"
      }
    },

    // ===== 第二章 · 金石缘 =====
    "jinshi": {
      chapter: "第二章 · 金石缘",
      year: "大观年间 · 约1107年",
      scenes: [
        { type: "transition", year: "大观年间", desc: "青 州" },
        { type: "divider" },
        { type: "atmosphere", text: "青州。你们搬来这里已经两年了。" },
        { type: "narration", text: "公公赵挺之死后，赵家在汴京待不下去了。你和明诚搬到了青州老家。远离了朝堂，反而松了一口气。" },
        { type: "narration", text: "明诚在地方上做了几任小官。你们的日子宽裕了一些——不是大富大贵，但够你们做一件事：收集金石碑帖。" },
        { type: "narration", text: "你们像着了魔一样。" },
        { type: "narration", text: "明诚每次出门办公务，回来的时候马车上一定多出几个箱子——碑帖拓片、残碑断碣、旧书古画。有一次他从一个老农手里买到一块北齐的残碑，上面只剩七个字，他兴奋得在院子里转了三圈。" },
        { type: "narration", text: "你也不遑多让。你把嫁妆里最后一支金钗当了，换回来一幅展子虔的《游春图》。明诚回家看见你头上插着一根木簪，愣了三秒。你把画展开给他看——" },
        { type: "dialogue", speaker: "你（李清照）", text: "你看值不值？" },
        { type: "narration", text: "他看了一眼画，又看了一眼你的木簪。然后他笑了，笑得眼睛弯成了月牙。" },
        { type: "dialogue", speaker: "赵明诚", text: "值。" },
        { type: "narration", text: "你们给这间院子取了个名字，叫「归来堂」。十间屋子，从地上摞到房梁，全是你们的宝贝。你在堂上挂了一块匾——「易安室」。从此你自号「易安居士」。" },
        { type: "narration", text: "日子安心了。你觉得这辈子可以就这样了。" },
        { type: "divider" },
        { type: "narration", text: "你们开始编撰《金石录》。这是一部野心很大的书——要把天下所有能搜集到的金石碑帖都考证一遍，断代、辨伪、校勘。" },
        { type: "narration", text: "白天各忙各的。你整理目录、校对文字；明诚在外面跑，拓碑、访古、寻访藏家。晚上你们对坐，一条一条讨论。" },
        { type: "narration", text: "他的考据很扎实，但你的直觉更敏锐。你常常能从字体风格、刻工手法这些细节里发现他没注意到的问题。他开始习惯在拿不准的地方问你。" },
        { type: "narration", text: "有一天你校对到一篇碑帖，是一块东汉「建宁」年间的残碑。明诚在稿子里把它断为西汉。你仔细看了拓片上的隶书笔法——波磔太重，不是西汉风格。你又查了「建宁」这个年号，汉灵帝的年号——确实是东汉。" },
        { type: "narration", text: "明诚写错了。而且这篇稿子他已经拿给几个朋友看过了。" }
      ],
      action: {
        type: "choice",
        prompt: "你的选择",
        options: [
          { text: "直接告诉他，摆出证据。学术面前没有面子。他错了就是错了。", next: "correct_direct", trait: "talent", value: 2, flash: "学问不看脸面" },
          { text: "旁敲侧击，找个机会引导他自己发现错误。他的自尊心你清楚。", next: "correct_subtle", trait: "devotion", value: 2, flash: "他发现的，就是他的" },
          { text: "记在自己的笔记里，先不说。反正这不是定稿，以后校对的时候再改也不迟。", next: "correct_wait", trait: "perception", value: 1, flash: "不急这一时" }
        ]
      }
    },

    "correct_direct": {
      chapter: "第二章 · 金石缘",
      year: "大观年间",
      scenes: [
        { type: "narration", text: "你把拓片和稿子摆在他面前，用手指点着那几个字——" },
        { type: "dialogue", speaker: "你（李清照）", text: "你看这个波磔，转折太方了，这是东汉的刻法。而且「建宁」是汉灵帝的年号，不是西汉的。" },
        { type: "narration", text: "他的脸一下子红了。" },
        { type: "narration", text: "他没有争辩。他把拓片拿过去又看了一遍，又查了年号表，然后把稿子翻到那一页，在旁边用朱笔写了一个「误」字。" },
        { type: "narration", text: "他一整个晚上没怎么说话。你知道他不高兴——不是因为你指出了他的错，而是因为他在朋友面前丢了脸。" },
        { type: "narration", text: "第二天早上他起来，煮了茶，端到你面前。" },
        { type: "dialogue", speaker: "赵明诚", text: "以后校对的事，你多把把关。" },
        { type: "narration", text: "他说这句话的时候没有看你，但语气是认真的。你知道——他服了。不是服你这个人，是服你的眼力。" },
        { type: "narration", text: "从那以后，《金石录》的每一条都要经过你的手。他写初稿，你来校。他开玩笑说你是「终审官」。你说「我是给你兜底的」。" },
        { type: "narration", text: "他笑了。这次是真的笑。" }
      ],
      action: {
        type: "continue",
        next: "separation"
      }
    },

    "correct_subtle": {
      chapter: "第二章 · 金石缘",
      year: "大观年间",
      scenes: [
        { type: "narration", text: "你没有直接说。你等了两天，等到一个晚上你们一起整理另一批碑帖拓片的时候，故意把那块「建宁」残碑的拓片翻出来——" },
        { type: "dialogue", speaker: "你（李清照）", text: "明诚，你帮我看看这个。这块碑的隶书笔法跟昨天整理的那块西汉碑差别好大，波磔完全不一样。" },
        { type: "narration", text: "他接过去看了一会儿。你看见他的眉头皱了一下，然后松开了。" },
        { type: "dialogue", speaker: "赵明诚", text: "嗯……这个波磔确实更像东汉的风格。等等——建宁……" },
        { type: "narration", text: "他查了年号表。然后他把稿子翻出来，看了自己写的「西汉」两个字，沉默了几秒。" },
        { type: "dialogue", speaker: "赵明诚", text: "我写错了。" },
        { type: "narration", text: "你假装刚反应过来的样子：「啊？错了吗？」" },
        { type: "narration", text: "他看了你一眼。你觉得他大概看穿了——他认识你十年了，你什么时候在碑帖上反应迟钝过？但他没有戳破。他笑了一下，用朱笔把稿子改了。" },
        { type: "narration", text: "那天晚上他心情很好，主动提出赌书泼茶。你让了他两局。他赢了之后笑得像个孩子。你觉得两局茶水换他一个笑，很值。" }
      ],
      action: {
        type: "continue",
        next: "separation"
      }
    },

    "correct_wait": {
      chapter: "第二章 · 金石缘",
      year: "大观年间",
      scenes: [
        { type: "narration", text: "你在自己的笔记本上记了一行小字：「建宁碑，疑为东汉，非西汉。波磔风格不类。待校。」" },
        { type: "narration", text: "你没跟他说。不是怕他不高兴，是你觉得不急。《金石录》还在编撰初期，离定稿远着呢，以后总有机会改。" },
        { type: "narration", text: "但你没想到的是，过了两个月，明诚自己发现了这个错误。他在整理另一批东汉碑帖的时候，注意到了笔法的相似性，翻回去一查，脸上的表情变了——" },
        { type: "dialogue", speaker: "赵明诚", text: "易安，你有没有看过那块建宁碑？我好像把年代搞错了。" },
        { type: "narration", text: "你把笔记本翻给他看。他看见你两个月前写的那行字，愣住了。" },
        { type: "dialogue", speaker: "赵明诚", text: "你两个月前就发现了？" },
        { type: "narration", text: "你点了点头。" },
        { type: "dialogue", speaker: "赵明诚", text: "为什么不早说？" },
        { type: "narration", text: "你想了想，说：「我想让你自己找到。」" },
        { type: "narration", text: "他看着你，表情很复杂——有一点感动，也有一点不服气。然后他叹了口气，说了一句你记了一辈子的话——" },
        { type: "dialogue", speaker: "赵明诚", text: "嫁给你这种人，压力很大。" },
        { type: "narration", text: "你笑了。他也笑了。" }
      ],
      action: {
        type: "continue",
        next: "separation"
      }
    },

    // ===== 第三章 · 聚散 =====
    "separation": {
      chapter: "第三章 · 聚散",
      year: "政和年间 · 约1115年",
      scenes: [
        { type: "transition", year: "政和年间", desc: "归来堂" },
        { type: "divider" },
        { type: "narration", text: "你们在青州的日子过了快十年。归来堂的藏品越来越多，十间屋子快装不下了。你给每间屋子都编了号，哪间放碑帖、哪间放字画、哪间放青铜器，门上贴着你写的标签。" },
        { type: "narration", text: "明诚说你管这些东西比管家还上心。你说「家可以乱，东西不能乱」。" },
        { type: "narration", text: "但明诚又要出去做官了。莱州知州。" },
        { type: "narration", text: "你送他到十里长亭。秋天的风很凉，他的马瘦了，行李倒是不少——他走到哪儿都带着一箱碑帖，说是「路上看」。你知道他根本看不了，马车颠得字都花了。但你没拆穿他。" },
        { type: "narration", text: "回来的路上你一个人走。院子里的桂花开了，满院子甜腻腻的香气。你走进归来堂，十间屋子的金石碑帖安安静静地摆在架子上，像是在等谁。" },
        { type: "narration", text: "你坐在书桌前，满屋子的宝贝，却没有一个人陪你说话。" },
        { type: "narration", text: "你提起笔。窗外暮色渐浓，菊花的影子映在纱窗上。你写了一首词——" },
        {
          type: "poem",
          title: "醉花阴",
          lines: [
            "薄雾浓云愁永昼，",
            "瑞脑消金兽。",
            "佳节又重阳，",
            "玉枕纱厨，",
            "半夜凉初透。",
            "",
            "东篱把酒黄昏后，",
            "有暗香盈袖。",
            "莫道不销魂，",
            "帘卷西风，",
            "人比黄花瘦。"
          ],
          note: "政和年间，赵明诚在外为官，李清照独居青州所作。"
        },
        { type: "narration", text: "你把词寄给了明诚。" },
        { type: "narration", text: "后来听朋友说，明诚看了你的词，又佩服又不服——他关起门来连写了五十首词，想压过你这首。写完了拿给朋友陆德夫看。陆德夫翻了半天，说「只有三句好」。" },
        { type: "narration", text: "明诚问哪三句。" },
        { type: "dialogue", speaker: "陆德夫", text: "「莫道不销魂，帘卷西风，人比黄花瘦。」" },
        { type: "narration", text: "全是你写的。" },
        { type: "narration", text: "你听到这个故事的时候笑了好一会儿。笑完之后又有一点心酸——他写五十首词来跟你较劲，说明他心里有你。但他为什么不直接回来看你呢？" },
        { type: "divider" },
        { type: "narration", text: "明诚在外面的日子越来越长了。一年回来两三次，每次住不了几天就走。来信也越来越少——刚去莱州的时候三天一封，后来半个月一封，再后来一个月都不一定有一封。" },
        { type: "narration", text: "有一天你收到一个朋友的信。信里随口提了一句——明诚在任上纳了一个侍妾。" },
        { type: "narration", text: "你把信看了三遍。手没有抖，但心里像被人攥了一下。" },
        { type: "narration", text: "宋代士大夫纳妾是常事。你知道。你从来不觉得自己是那种会为这种事伤心的人。但你还是伤心了。" },
        { type: "narration", text: "你坐在归来堂里。满屋子的金石碑帖看着你。它们不会变心。" }
      ],
      action: {
        type: "choice",
        prompt: "你的选择",
        options: [
          { text: "写信质问他。你不是那种吞得下委屈的人。你要他给你一个说法。", next: "concubine_confront", trait: "talent", value: 1, flash: "我不是泥捏的" },
          { text: "不问。你把心思全放在整理藏品上。他有他的生活，你有你的金石碑帖。", next: "concubine_ignore", trait: "obsession", value: 2, flash: "这些东西不会负你" },
          { text: "你写了一首词寄给他。不质问，不抱怨。但他读得懂。", next: "concubine_poem", trait: "devotion", value: 2, flash: "词是我的武器" }
        ]
      }
    },

    "concubine_confront": {
      chapter: "第三章 · 聚散",
      year: "政和年间",
      scenes: [
        { type: "narration", text: "你写了一封信。不长，但每一个字都扎人。你没有哭天抢地，你只是问了一个问题——" },
        { type: "dialogue", speaker: "你（李清照）", text: "你纳妾的时候，有没有想过先跟我说一声？" },
        { type: "narration", text: "明诚的回信来得很快。他说那个侍妾是朋友送的，「不过是个伺候起居的人」，让你不要多想。" },
        { type: "narration", text: "你看完信，冷笑了一下。「不过是个伺候起居的人」——如果你也这样轻描淡写地说他，他受不受得了？" },
        { type: "narration", text: "你又回了一封信。这次更短：「我在青州等你。回来再说。」" },
        { type: "narration", text: "他过了两个月回来了。你们面对面坐着，气氛有点僵。他试图解释，你听着，没有打断。听完之后你说了一句——" },
        { type: "dialogue", speaker: "你（李清照）", text: "你写五十首词来跟我较劲，说明你心里有我。你纳妾不跟我说一声，说明你心里也没那么有我。明诚，你到底要哪个？" },
        { type: "narration", text: "他沉默了很久。最后他说：「你比任何人都重要。」" },
        { type: "narration", text: "你不知道这句话是真的还是假的。但你选择信了。因为不信的话，你们之间就什么都没有了。" },
        { type: "narration", text: "那个侍妾后来怎么样了，你没有再问过。有些事知道了比不知道更难受。" }
      ],
      action: {
        type: "continue",
        next: "eve"
      }
    },

    "concubine_ignore": {
      chapter: "第三章 · 聚散",
      year: "政和年间",
      scenes: [
        { type: "narration", text: "你把那封信折起来，压在了一本书下面。" },
        { type: "narration", text: "你走进库房，打开了一个新到的碑帖箱子。里面是一批从洛阳收来的北魏造像拓片，品相极好，上面的飞天衣带清晰得像刚刻的。" },
        { type: "narration", text: "你开始整理。分类、编号、登记。你的手很稳，字写得一丝不苟。你做这些事的时候脑子可以不想别的。" },
        { type: "narration", text: "但夜里不行。夜里你躺在床上，听着归来堂外面的风声，脑子里全是那句「纳了一个侍妾」。你翻来覆去，最后起来喝了半壶酒，才迷迷糊糊睡着了。" },
        { type: "narration", text: "你开始喝酒。不是从前和明诚赌书泼茶时那样浅浅地喝，是一个人闷着头喝。喝到头晕，就能暂时不去想那些事。" },
        { type: "narration", text: "但你没有放下手里的活。你把那段时间整理出来的碑帖目录寄给了明诚，附了一行字：「新到拓片三十七件，详目附后。其中北魏造像八件，品相上佳，可入《金石录》正编。」" },
        { type: "narration", text: "公事公办。一个字也没提别的。" },
        { type: "narration", text: "明诚回信了，信里全是对碑帖的讨论，最后加了一句：「甚想归来堂。」" },
        { type: "narration", text: "你看着那五个字，喝了一口酒。想不想是你的事，回不回来是你的事。" }
      ],
      action: {
        type: "continue",
        next: "eve"
      }
    },

    "concubine_poem": {
      chapter: "第三章 · 聚散",
      year: "政和年间",
      scenes: [
        { type: "narration", text: "你没有写信。你写了一首词。" },
        {
          type: "poem",
          title: "一剪梅",
          lines: [
            "红藕香残玉簟秋。",
            "轻解罗裳，独上兰舟。",
            "云中谁寄锦书来，",
            "雁字回时，月满西楼。",
            "",
            "花自飘零水自流。",
            "一种相思，两处闲愁。",
            "此情无计可消除，",
            "才下眉头，却上心头。"
          ],
          note: "政和年间，赵明诚在外为官，李清照寄词遥思。"
        },
        { type: "narration", text: "「花自飘零水自流。一种相思，两处闲愁。」" },
        { type: "narration", text: "你没有提侍妾的事。你只是写了相思。但明诚读得懂——「两处闲愁」，两处。你在这里愁，他在那里是不是也在愁？如果不愁，为什么会纳妾？" },
        { type: "narration", text: "你把所有的委屈都揉进了词里。这是你的本事——你可以不哭不闹不质问，但你的词会替你说出一切。" },
        { type: "narration", text: "词寄出去一个月，明诚回来了。他没有提侍妾的事，你也没提。他只是在你的书桌前坐下来，看了你新整理的碑帖目录，然后说——" },
        { type: "dialogue", speaker: "赵明诚", text: "「此情无计可消除」。你这句写得我心里发酸。" },
        { type: "narration", text: "你没接话。你给他倒了一杯茶。他喝了一口，说茶凉了。你说「你回来晚了」。" },
        { type: "narration", text: "他愣了一下。然后他伸手过来握住了你的手。你没有抽开。" },
        { type: "narration", text: "你不知道这算原谅还是不算。但那天晚上你们又赌书泼茶了。你赢了三局。" }
      ],
      action: {
        type: "continue",
        next: "eve"
      }
    },

    // ===== 第四章 · 乱世前夜 =====
    "eve": {
      chapter: "第四章 · 乱世前夜",
      year: "宣和末年 · 约1125年",
      scenes: [
        { type: "transition", year: "宣和末年", desc: "归来堂" },
        { type: "divider" },
        { type: "narration", text: "北方不太平了。" },
        { type: "narration", text: "消息是从商队那里传来的。金国灭了辽，铁骑南下，打到了大宋的边境。朝堂上吵成一锅粥——有人主战，有人主和，有人说这是联金灭辽的后果。" },
        { type: "narration", text: "你坐在归来堂里，看着窗外的天。天还是那个天，桂花还是那个味道。但你心里有一种说不清的不安。" },
        { type: "narration", text: "你开始做一件事：整理收藏品的清单。" },
        { type: "narration", text: "你把十间屋子的东西全部重新盘点了一遍。每一件碑帖、每一幅字画、每一尊铜器，你都记下了品名、年代、来源、保存状况。你做得很仔细，仔细到每一件东西的位置你都画了图。" },
        { type: "narration", text: "明诚看你做这些，问你为什么。" },
        { type: "dialogue", speaker: "你（李清照）", text: "万一要搬家呢。" },
        { type: "dialogue", speaker: "赵明诚", text: "搬什么家？青州好好的。" },
        { type: "narration", text: "你没有接话。你只是继续低头写你的清单。" },
        { type: "narration", text: "明诚觉得你多虑了。也许他是对的——金兵还在北边，离青州远着呢。但你就是有一种直觉：好日子不会太久了。" },
        { type: "divider" },
        { type: "narration", text: "靖康元年。金兵围了汴京。" },
        { type: "narration", text: "消息传到青州的时候，所有人都不信。汴京——那是天子脚下，百万人口的京城。怎么可能？" },
        { type: "narration", text: "但消息越来越确凿。太原失守了。汴京被围了。皇帝在求和。" },
        { type: "narration", text: "明诚从任上匆匆赶回来。他的脸色很差。你们坐在归来堂里，四面墙上全是你们二十年攒下的宝贝。烛光照在那些碑帖和字画上，影子微微晃动。" },
        { type: "narration", text: "你们第一次认真讨论一个问题：如果要走，带什么？" },
        { type: "narration", text: "十间屋子的东西，几十车都装不完。必须分级。" },
        { type: "narration", text: "明诚的标准很明确：学术价值最高的排第一——孤本碑帖、无法复制的拓片、考证价值最大的青铜器。" },
        { type: "narration", text: "但你的想法不太一样。你拿起了一本旧书——就是二十年前你们在相国寺用一千钱买的那本《礼记》。书页已经泛黄了，上面有你和明诚用不同颜色笔写的批注。" },
        { type: "narration", text: "它的学术价值不高。但它是你们的开始。" }
      ],
      action: {
        type: "choice",
        prompt: "你的选择",
        options: [
          { text: "听明诚的。他是《金石录》的作者，学术排序他更专业。那本《礼记》……放在后面吧。", next: "sort_his", trait: "devotion", value: 1, flash: "你说了算" },
          { text: "各让一步。前五车按学术价值排，第六车留给你们的私人收藏——那些承载了你们二十年回忆的东西。", next: "sort_both", trait: "perception", value: 2, flash: "学术和记忆都要留" },
          { text: "坚持你的标准。碑帖以后还能找到别的版本，但这些回忆丢了就再也没有了。", next: "sort_hers", trait: "obsession", value: 2, flash: "物是人非的时候，你会庆幸留下了这些" }
        ]
      }
    },

    "sort_his": {
      chapter: "第四章 · 乱世前夜",
      year: "靖康元年",
      scenes: [
        { type: "narration", text: "你把那本《礼记》放回了架子上。" },
        { type: "narration", text: "明诚开始排序。他做得很专业——哪些是孤本、哪些有其他版本传世、哪些碑帖原石已毁只有这一份拓片。他排得又快又准，像在打仗。" },
        { type: "narration", text: "你在旁边帮忙打包。你的手很稳。你把每一件东西都用棉布裹好，外面再包一层油纸，标上编号。你做这些事比任何人都细致。" },
        { type: "narration", text: "装到第十车的时候，明诚停下来看了你一眼。你的眼圈红了，但手没有停。" },
        { type: "dialogue", speaker: "赵明诚", text: "你心疼那本《礼记》？" },
        { type: "narration", text: "你摇了摇头。你不是心疼那本书。你是心疼——你们怎么就到了要给自己的东西排生死的地步。" },
        { type: "dialogue", speaker: "你（李清照）", text: "你排得对。先保最重要的。" },
        { type: "narration", text: "他点了点头。然后他从一个箱子里翻出一面很小的铜镜，东汉的，铜绿斑斑。他把它塞进了你的包袱里。" },
        { type: "dialogue", speaker: "赵明诚", text: "这个不占地方。你带着。" },
        { type: "narration", text: "你接过铜镜。它很凉，沉甸甸的。你不知道为什么，觉得他塞给你这面镜子，比说「我爱你」还重。" }
      ],
      action: {
        type: "continue",
        next: "farewell"
      }
    },

    "sort_both": {
      chapter: "第四章 · 乱世前夜",
      year: "靖康元年",
      scenes: [
        { type: "narration", text: "你跟明诚谈了一个方案：前五车按学术价值排，由他定；第六车留给你们的「私藏」——那些也许不值钱，但对你们有意义的东西。" },
        { type: "narration", text: "他想了想，同意了。" },
        { type: "narration", text: "你们开始分头干。他整理他的学术排序，你整理你的第六车。你把那本《礼记》放了进去。又放了几样东西——新婚时他送你的一方端砚，你们第一次合作校对的一卷手稿，还有一面东汉铜镜。" },
        { type: "narration", text: "铜镜不值什么钱，但你记得它的来历——是你们在一个村集上花了三百钱买的，回来的路上下了雨，你把铜镜揣在怀里怕淋湿，结果自己淋成了落汤鸡。明诚一路笑你。" },
        { type: "narration", text: "你把铜镜擦了擦，放进箱子里。" },
        { type: "narration", text: "忙到半夜。你们坐在院子里歇了一会儿，各喝了一碗凉茶。院子里的桂花还没落完，风一吹，有几片花瓣落在了你的茶碗里。" },
        { type: "dialogue", speaker: "你（李清照）", text: "我们什么时候能回来？" },
        { type: "narration", text: "明诚没有回答。你也知道这个问题没有答案。" }
      ],
      action: {
        type: "continue",
        next: "farewell"
      }
    },

    "sort_hers": {
      chapter: "第四章 · 乱世前夜",
      year: "靖康元年",
      scenes: [
        { type: "narration", text: "你把那本《礼记》放在了第一车。" },
        { type: "narration", text: "明诚看着你，皱了皱眉。" },
        { type: "dialogue", speaker: "赵明诚", text: "易安，这本书哪儿都买得到。你把它放在第一车，那幅展子虔的《游春图》怎么办？" },
        { type: "dialogue", speaker: "你（李清照）", text: "《游春图》是画。这本书是你我。" },
        { type: "narration", text: "他沉默了。他知道你说的是什么——这本书上有你们二十年前写的批注，有你的字，也有他的字。两个人的笔迹交织在一起，分不清谁是谁的。" },
        { type: "narration", text: "他争不过你。他从来争不过你。最后的方案是折中的——你的私藏放在前三车的缝隙里，不单独占一整车，但一定跟着走。" },
        { type: "narration", text: "你把那面东汉铜镜也塞了进去。明诚看见了，没说什么，帮你用棉布裹好。" },
        { type: "narration", text: "后来在逃难的路上，你丢掉了无数东西。但那本《礼记》你一直带着，直到最后。你有时候翻开它，看见上面二十年前的笔迹——他的字比你写得好，但你的注解比他写得准。" },
        { type: "narration", text: "你不知道这算执念还是深情。也许是一回事。" }
      ],
      action: {
        type: "continue",
        next: "farewell"
      }
    },

    // ===== 第五章 · 最后的春天 =====
    "farewell": {
      chapter: "第五章 · 最后的春天",
      year: "靖康二年 · 春",
      scenes: [
        { type: "transition", year: "靖康二年", desc: "青 州" },
        { type: "divider" },
        { type: "narration", text: "汴京丢了。" },
        { type: "narration", text: "二帝被俘，北狩。太上皇、皇帝、后妃宗室、文武百官，全被金兵掳走了。整个大宋朝的天塌了一半。" },
        { type: "narration", text: "消息传到青州的时候你正在院子里晒碑帖拓片。你手里的拓片掉了，落在地上沾了土。你弯腰去捡，蹲在地上没有起来。" },
        { type: "narration", text: "明诚接到了朝廷的调令——新朝廷在南方重建，他被任命为江宁知府，即刻赴任。" },
        { type: "narration", text: "他要先走。你留下来收拾东西。" },
        { type: "narration", text: "临行前的那个晚上，你们最后一次在归来堂里坐着。蜡烛烧得很低。十间屋子里的东西在黑暗中安静地待着，像一群沉默的老朋友。" },
        { type: "narration", text: "你帮他收拾行装。你在他的包袱底下塞了一幅小画——是你最喜欢的一幅花鸟小品，不大，巴掌那么宽。他不知道你塞了。" },
        { type: "narration", text: "你还放了一双新鞋垫。你不擅长做针线，鞋垫缝得歪歪扭扭。但你还是做了。" },
        { type: "divider" },
        { type: "narration", text: "第二天早上。春寒料峭。" },
        { type: "narration", text: "明诚牵着马站在门口。马瘦了——这几个月兵荒马乱，连马都没吃饱。" },
        { type: "dialogue", speaker: "赵明诚", text: "我先去江宁安顿。你尽快南下来找我。" },
        { type: "narration", text: "你点了点头。你想说「路上小心」，但觉得太平常了。你又想说「我会把所有东西都带过来的」，但你不确定自己做得到。" },
        { type: "narration", text: "他翻身上马。马蹄敲在石板路上，嗒嗒嗒。他走出了巷口，要转弯了。" },
        { type: "narration", text: "你叫住了他。" },
        { type: "dialogue", speaker: "你（李清照）", text: "明诚！" },
        { type: "narration", text: "他回头看你。早晨的光照在他脸上，你看见他的鬓角有了白发。他二十年前来娶你的时候，鬓角是黑的。" },
        { type: "narration", text: "你想说什么？" }
      ],
      action: {
        type: "choice",
        prompt: "你的选择",
        options: [
          { text: "「明诚，如果真的来不及——东西可以丢，你不能丢。」", next: "farewell_person", trait: "devotion", value: 2, flash: "你比什么都重要" },
          { text: "「明诚，我会把所有东西都带过来。一件都不会丢。」", next: "farewell_things", trait: "obsession", value: 2, flash: "我答应你" },
          { text: "你什么都没说。你只是看着他。他也看着你。然后他走了。", next: "farewell_silence", trait: "perception", value: 1, flash: "有些告别，说什么都不对" }
        ]
      }
    },

    "farewell_person": {
      chapter: "第五章 · 最后的春天",
      year: "靖康二年 · 春",
      scenes: [
        { type: "narration", text: "你的声音比你以为的要大。整条巷子都听见了。" },
        { type: "narration", text: "明诚勒住了马。他回头看你，表情很复杂——像是想笑，又像是想哭。" },
        { type: "dialogue", speaker: "赵明诚", text: "你什么时候变得这么婆妈了。" },
        { type: "narration", text: "你没笑。你看着他。你知道这不是婆妈。这是你这辈子说过的最认真的一句话。" },
        { type: "narration", text: "他沉默了一会儿，然后轻轻点了一下头。" },
        { type: "dialogue", speaker: "赵明诚", text: "我知道了。你也是。" },
        { type: "narration", text: "然后他走了。马蹄声越来越远，消失在了巷子尽头。" },
        { type: "narration", text: "你站在门口，风把你的头发吹乱了。你没有回屋。你就站在那里，直到再也看不见他的影子。" },
        { type: "narration", text: "你不知道的是——从这次分别之后，你们再也没有好好在一起过。他会在两年后的建康病死。你会独自走完后面的路。" },
        { type: "narration", text: "但此刻你不知道这些。你只知道他答应你了——他不会丢。" },
        { type: "narration", text: "你转身回到归来堂，开始收拾东西。" }
      ],
      action: {
        type: "continue",
        next: "finale"
      }
    },

    "farewell_things": {
      chapter: "第五章 · 最后的春天",
      year: "靖康二年 · 春",
      scenes: [
        { type: "narration", text: "明诚听见你这句话，笑了。" },
        { type: "dialogue", speaker: "赵明诚", text: "我信你。你比我仔细。" },
        { type: "narration", text: "他说的是实话。你们都知道——论做事的周全，你永远比他强。他负责找东西、买东西，你负责保东西、管东西。二十年的分工，从来没变过。" },
        { type: "narration", text: "他走了。马蹄声消失在巷口。" },
        { type: "narration", text: "你转身走进归来堂。你看着那十间屋子，深吸了一口气。" },
        { type: "narration", text: "你开始干活。按照之前排好的顺序，一件一件打包，一箱一箱装车。你日夜不停地干，手上磨出了水泡，水泡破了又磨出新的。" },
        { type: "narration", text: "你答应了他一件都不丢。你做不到——最后你还是丢了三间屋子的东西。但你尽力了。你跪在路边求过撤退的驻军帮你多运几车。李清照跪在路边，为了那些碑帖。" },
        { type: "narration", text: "后来你在逃亡路上一件件丢掉它们的时候，你会想起今天早上说的这句话。你说「一件都不丢」。但命运不同意。" },
        { type: "narration", text: "你只能尽力。" }
      ],
      action: {
        type: "continue",
        next: "finale"
      }
    },

    "farewell_silence": {
      chapter: "第五章 · 最后的春天",
      year: "靖康二年 · 春",
      scenes: [
        { type: "narration", text: "你叫了他的名字，他回了头。你们隔着半条巷子对视。" },
        { type: "narration", text: "你张了张嘴，但什么都没说出来。" },
        { type: "narration", text: "你想说的话太多了——小心路上的流寇、到了江宁先找个安全的地方、别忘了吃饭、别忘了按时喝药（他的胃一直不好）、那些碑帖我会带过来的、你要等我。" },
        { type: "narration", text: "但你什么都没说。因为你忽然有一种感觉——不管你说什么，都不够。而且说了之后，好像就把某种东西说破了。" },
        { type: "narration", text: "他看着你。他也没说话。" },
        { type: "narration", text: "你们就这样对视了几秒。然后他对你笑了一下——很浅的一个笑。转过头，打马走了。" },
        { type: "narration", text: "他走了之后你站在门口站了很久。隔壁的大娘出来倒水，看见你说「赵夫人，外面冷，回屋吧」。你「嗯」了一声，没动。" },
        { type: "narration", text: "你在想——你是不是应该说点什么的？但你又觉得，他都知道。二十年了，他应该什么都知道了。" },
        { type: "narration", text: "后来你无数次想起这个早上。你后悔过。也释然过。也许他都知道。也许他不全知道。但你再也没有机会问了。" },
        { type: "narration", text: "你转身回到归来堂，开始收拾东西。" }
      ],
      action: {
        type: "continue",
        next: "finale"
      }
    },

    // ===== 尾声 =====
    "finale": {
      chapter: "尾声",
      year: "靖康二年 · 春",
      scenes: [
        { type: "divider" },
        { type: "narration", text: "你开始收拾东西。十间屋子。" },
        { type: "narration", text: "你按照之前排好的顺序，一件件取下来，一层层包好。棉布、油纸、麻绳。你做得很仔细，每一件都像在包一个婴儿。" },
        { type: "narration", text: "日夜不停。手上磨出了水泡。" },
        { type: "narration", text: "窗外的春天不管不顾地来了。桃花开了，杏花也开了。风从山上吹下来，暖的。你从前最喜欢青州的春天，院子里会开很多花，你和明诚坐在花下面校对《金石录》的底稿。" },
        { type: "narration", text: "但现在花开了，人走了。你没有时间看花。你在跟时间赛跑。" },
        { type: "narration", text: "你走过归来堂的每一间屋子。你记得每一件东西的位置。那尊商代铜鼎在东屋第三个架子上，是明诚花了三个月俸禄买的。那幅展子虔的《游春图》挂在西屋南墙上，是你用金钗换的。那套汉碑拓片在北屋的大箱子里，是你们一起去洛阳收来的。" },
        { type: "narration", text: "你触摸着这些东西。你的手指记得它们的每一处纹理。" },
        { type: "narration", text: "你不知道你还能回来吗。你不知道这些东西还能不能全部带走。你不知道外面的世界正在以怎样的速度崩塌。" },
        { type: "narration", text: "你只知道——此刻你还在这里，它们还在这里。归来堂的匾还挂在门上。「易安室」三个字是你自己写的。" },
        { type: "atmosphere", text: "二十年。从相国寺的旧书摊到十间屋子的金石碑帖。从一千钱的预算到装不完的车。从赌书泼茶到隔着千里寄词。你以为你在收藏天下，其实天下从来不属于任何人。但那些日子——赌书泼茶的笑声、半夜看碑帖的烛光、一千钱买的快乐——那些日子是真的。" }
      ],
      action: { type: "ending" }
    }
  },

  ending: {
    epilogue: "二十年。\n从相国寺的旧书摊\n到十间屋子的金石碑帖。\n她以为这样的日子\n会一直过下去。\n但好日子从来不打招呼就走了。\n留下的，只有满屋子的宝贝\n和一个人的春天。",
    stats: [
      { num: 5, label: "次抉择" },
      { num: 20, label: "年好日子" },
      { num: 10, label: "间归来堂" }
    ],
    traitAnalysis: {
      talent: {
        high: "你从不掩饰自己的才华。在那个时代，一个女人写词写得比丈夫好，是件危险的事。但你不在乎。后来的人记住了你的词，忘了那些劝你收敛的人。",
        mid: "你的才华有锋芒，也有分寸。知道什么时候该亮出来，什么时候该收一收。这是一种需要智慧的平衡。",
        low: "你更愿意把才华藏在日常里。不是没有，是不必时时亮给别人看。但别忘了——李清照最好的词，都是不吐不快的时候写出来的。"
      },
      obsession: {
        high: "你对那些金石书画的爱，不亚于明诚。后来你万里逃亡还带着它们，不是因为它们值钱，是因为你们的日子都浸在里面了。每一件东西都是一段时间的凝固。",
        mid: "你在爱物和务实之间找到了自己的位置。知道什么该留、什么该放，是经历过才学得会的。",
        low: "你更看重人，而不是物。东西丢了可以再找，人走了就真的走了。这种清醒让人敬佩，但李清照可能会说——有些东西丢了，就像人走了一样。"
      },
      perception: {
        high: "你在太平盛世里就嗅到了危险。当所有人都觉得天下太平的时候，你已经在列清单、做准备了。这种敏锐救了你，也让你比别人更早开始承受恐惧。",
        mid: "你对世事有自己的判断，不会盲目乐观，也不至于草木皆兵。这种分寸感在乱世中是最稀缺的品质。",
        low: "你更愿意活在当下。明天的事明天再说。这种态度在好日子里是一种福气——因为你能比别人更纯粹地享受眼前的快乐。"
      },
      devotion: {
        high: "你爱明诚，连他的弱点一起爱。后来在乌江写「生当作人杰」，不是不爱他了，是太爱了所以心痛。你把他当作跟你一样的人——但他不是。这是你的深情，也是你的痛。",
        mid: "你的爱有温度也有底线。不盲目崇拜，也不刻薄挑剔。二十年的相处让你学会了一种成熟的深情——看见他的好，也接受他的不够好。",
        low: "你更独立，不把全部的心都系在一个人身上。这种清醒在后来的乱世中也许救了你——因为你知道，到最后能依靠的只有自己。"
      }
    },
    reflection: "你在李清照最好的日子里走了一遍。\n赌书泼茶、金石碑帖、\n相国寺的旧书摊、归来堂的烛光。\n你知道这一切都会结束。\n但知道结局不影响你认真地过每一天。\n也许这就是「易安」的意思——\n安心的日子不在于长短，在于真不真。",
    comingSoon: "「对话李清照」功能即将上线\n穿越时空，与易安居士共饮一杯"
  }
}
