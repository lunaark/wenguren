window.STORIES = window.STORIES || {};
window.STORIES['su-dongpo'] =
{
  id: "su-dongpo",
  name: "苏东坡",
  dynasty: "北宋",
  subtitle: "乌台风雨",
  quote: "问汝平生功业，黄州惠州儋州。",
  intro: "一代文豪，因诗获罪，从天之骄子跌落为阶下囚。在黄州的三年流放中，他失去了一切，却找到了真正的自己。",
  duration: "约8分钟",
  choiceCount: 4,
  status: "available",

  traits: {
    courage:    { name: "勇气", desc: "面对逆境时的态度：正面对抗还是以退为进" },
    idealism:   { name: "理想", desc: "对入世与出世的取舍" },
    connection: { name: "连接", desc: "与天地万物的关系" },
    resilience: { name: "坚韧", desc: "在困境中扎根生存的能力" }
  },

  totalNodes: 16,

  nodes: {
    // ===== 第一章 · 风暴将至 =====
    "start": {
      chapter: "第一章 · 风暴将至",
      year: "元丰二年 · 七月",
      scenes: [
        { type: "atmosphere", text: "湖州。夏末。蝉鸣如沸。" },
        { type: "narration", text: "你刚到湖州任知州不过三个月。江南的夏天潮湿闷热，你坐在官署里批完公文，顺手写了几首诗寄给朋友。" },
        { type: "narration", text: "诗里有几句牢骚——朝廷推行的新法让百姓怨声载道，你看不惯，就写了出来。这不是第一次了，你向来嘴上不饶人。弟弟子由不止一次劝你管住这张嘴，你知道他说得对，但你就是咽不下去。" },
        { type: "narration", text: "你不知道的是，这些诗正在被人一首一首地摘录、注解、装订成册，送往御史台。" },
        { type: "dialogue", speaker: "幕僚", text: "大人，京中来了人。说是奉御史台之命……" },
        { type: "narration", text: "你放下茶盏。御史台派人来湖州，这不寻常。你看见来人身后跟着的皇甫遵，面无表情。" },
        { type: "narration", text: "你心里明白了大半。" }
      ],
      action: {
        type: "choice",
        prompt: "你的选择",
        options: [
          { text: "整理衣冠，从容出迎。该来的躲不掉。", next: "arrest_calm", trait: "courage", value: 2, flash: "从容面对命运" },
          { text: "先稳住，找借口拖延，连夜给京中的朋友写信求援。", next: "arrest_delay", trait: "idealism", value: -1, flash: "试图掌控局面" }
        ]
      }
    },

    "arrest_calm": {
      chapter: "第一章 · 风暴将至",
      year: "元丰二年 · 七月",
      scenes: [
        { type: "narration", text: "你换上官服，走出厅堂。皇甫遵看见你，微微一愣——大概没料到你这么平静。" },
        { type: "narration", text: "「苏轼接旨。」" },
        { type: "narration", text: "你跪下听完。御史台弹劾你以诗文讪谤朝政，即刻押赴京城受审。" },
        { type: "narration", text: "你站起来的时候腿有点软，但脸上没有露出来。身后传来衙役和家人的哭声，你回头看了一眼妻子王闰之，她抱着孩子站在廊下，眼眶红了但没有哭出声。" },
        { type: "narration", text: "你转过身，跟着皇甫遵走了。" },
        { type: "narration", text: "一路上你想了很多。你想起王安石变法那年你第一次上书反对，想起弟弟子由劝你少说话，想起父亲当年教你读书时说的「文章是天下公器，不可以私意乱之」。" }
      ],
      action: {
        type: "continue",
        next: "prison_arrive"
      }
    },

    "arrest_delay": {
      chapter: "第一章 · 风暴将至",
      year: "元丰二年 · 七月",
      scenes: [
        { type: "narration", text: "你推说身体不适，让幕僚先去接待。自己匆匆铺开纸，给京城的王诜和驸马写信——他们在朝中还有些人脉。" },
        { type: "narration", text: "但信刚写了一半，皇甫遵已经带人闯了进来。" },
        { type: "narration", text: "「苏轼，御史台令你即刻进京，不得拖延。」" },
        { type: "narration", text: "你看着写到一半的信，墨迹未干。皇甫遵顺着你的目光也看到了，什么也没说，只是催促你尽快上路。" },
        { type: "narration", text: "你心里发苦。不是怕死——当了这么多年官，你比谁都清楚，文字狱一旦开头，辩解是没有用的。你发苦的是连累了别人。那些跟你通信的朋友、收过你诗的人，一个都跑不掉。" }
      ],
      action: {
        type: "continue",
        next: "prison_arrive"
      }
    },

    // ===== 第一章（续）· 乌台入狱 =====
    "prison_arrive": {
      chapter: "第一章 · 风暴将至",
      year: "元丰二年 · 八月",
      scenes: [
        { type: "atmosphere", text: "御史台狱。又称「乌台」。高墙之内，柏树上栖满乌鸦。" },
        { type: "narration", text: "你被关进了乌台大狱。牢房潮湿阴暗，你是堂堂三品官员，此刻却和普通囚犯一样席地而坐。" },
        { type: "narration", text: "审讯很快开始了。御史们把你这些年写的诗翻了个遍，逐字逐句地追问：「这句'根到九泉无曲处，世间唯有蛰龙知'，是什么意思？你说的蛰龙是不是在影射陛下？」" },
        { type: "narration", text: "你知道这是欲加之罪。但在这间牢房里，逻辑和道理都不重要了。" },
        { type: "dialogue", speaker: "审讯御史", text: "苏轼，你最好老实交代，不要妄想蒙混过关。你的诗里藏了多少对朝廷的怨恨？" }
      ],
      action: {
        type: "choice",
        prompt: "你的选择",
        options: [
          { text: "一条条辩解，据理力争。那些诗就是写景抒情，哪有什么影射。", next: "prison_defiant", trait: "courage", value: 2, flash: "你选择了正面对抗" },
          { text: "低头认错，把他们想听的话说了。保命要紧。", next: "prison_submit", trait: "courage", value: -1, flash: "你选择了以退为进" },
          { text: "沉默。不辩解也不认错。说什么都是错。", next: "prison_silent", trait: "resilience", value: 1, flash: "你选择了沉默以对" }
        ]
      }
    },

    // ===== 第二章 · 乌台风雨 =====
    "prison_defiant": {
      chapter: "第二章 · 乌台风雨",
      year: "元丰二年 · 八至十二月",
      scenes: [
        { type: "narration", text: "你逐首解释，引经据典，说明每一句诗的来历和用意。你说得有理有据，御史们一时语塞。" },
        { type: "narration", text: "但这反而激怒了他们。第二天审讯变本加厉，连你二十年前写的诗都翻出来了。有人提议将你处以极刑。" },
        { type: "narration", text: "一百三十天。你在乌台待了一百三十天。" },
        { type: "narration", text: "每天晚上，你听着牢房外的乌鸦叫声，想着白天审讯时自己说的话是不是又给朋友们添了麻烦。你开始后悔的不是写那些诗，而是想——也许自己没必要在牢里还逞口舌之快。" }
      ],
      action: {
        type: "continue",
        next: "rescue"
      }
    },

    "prison_submit": {
      chapter: "第二章 · 乌台风雨",
      year: "元丰二年 · 八至十二月",
      scenes: [
        { type: "narration", text: "你低下头，把他们想要的供词签了。承认部分诗句确有「讥讽之意」。" },
        { type: "narration", text: "签完的那一刻你觉得恶心。不是因为认了不该认的罪，而是你突然意识到——你苏轼，一辈子最看不起的就是说假话的人，现在自己也成了其中之一。" },
        { type: "narration", text: "一百三十天。审讯断断续续，你在阴暗的牢房里度过了整个秋天和初冬。低头并没有让事情变好多少，他们要的不是你的态度，是你的命。" }
      ],
      action: {
        type: "continue",
        next: "rescue"
      }
    },

    "prison_silent": {
      chapter: "第二章 · 乌台风雨",
      year: "元丰二年 · 八至十二月",
      scenes: [
        { type: "narration", text: "你什么也不说。御史们问什么，你就沉默。沉默让他们比暴怒更不安。" },
        { type: "narration", text: "「苏轼，你以为不说话就能过关？」" },
        { type: "narration", text: "你不是以为不说话能过关。你只是觉得累了。从二十岁进京赶考到现在，你一直在说话——写诗、上书、辩论、讥讽。说了二十多年，说到进了大牢。也许该歇歇了。" },
        { type: "narration", text: "一百三十天的沉默。牢房里没有笔墨，你只能在脑子里写诗。有些句子写了又忘，有些句子忘不掉，到死都忘不掉。" }
      ],
      action: {
        type: "continue",
        next: "rescue"
      }
    },

    "rescue": {
      chapter: "第二章 · 乌台风雨",
      year: "元丰二年 · 十二月",
      scenes: [
        { type: "narration", text: "狱中的日子漫长得像一辈子。你以为自己会死在这里。" },
        { type: "narration", text: "你不知道的是，墙外有很多人在为你奔走。" },
        { type: "narration", text: "弟弟苏辙上书朝廷，愿意交出自己的官职来换你的命。曹太后（仁宗的皇后）对神宗说：「苏轼兄弟是先帝看重的人才，不可因诗获罪。」就连已经退隐的王安石，你政治上最大的对手，也写了一封信：「岂有盛世而杀才士者乎？」" },
        { type: "narration", text: "十二月底，判决下来了。" },
        { type: "narration", text: "死罪免了。贬为黄州团练副使，不得签署公事。" },
        { type: "narration", text: "团练副使——一个没有任何实权的虚职，相当于流放。" },
        { type: "atmosphere", text: "你活了下来。但你的人生，从此分成了「乌台之前」和「乌台之后」。" }
      ],
      action: {
        type: "continue",
        next: "huangzhou_arrive"
      }
    },

    // ===== 第三章 · 黄州初到 =====
    "huangzhou_arrive": {
      chapter: "第三章 · 黄州初到",
      year: "元丰三年 · 二月",
      scenes: [
        { type: "transition", year: "元丰三年", desc: "黄 州" },
        { type: "divider" },
        { type: "atmosphere", text: "长江南岸。黄州。一座偏僻的小城。" },
        { type: "narration", text: "你带着家人到了黄州。没有官邸，没有俸禄，一家老小二十多口人挤在一间借来的旧屋里。" },
        { type: "narration", text: "从前你是当朝名士，出门前呼后拥；现在你是戴罪之身，连本地官员都不太敢跟你来往。" },
        { type: "narration", text: "第一个月的生活费很快就花完了。你妻子王闰之开始精打细算——每月初一取出固定数额的铜钱，分成三十份挂在房梁上，每天只许取一份。" },
        { type: "narration", text: "一天傍晚，你站在江边，看着浑浊的江水。你四十三岁了，从天之骄子变成了阶下囚，从朝廷命官变成了无业游民。" }
      ],
      action: {
        type: "choice",
        prompt: "你的选择",
        options: [
          { text: "给京城的朋友写信，想办法调回去。你不甘心就这样被埋没。", next: "huangzhou_resist", trait: "idealism", value: 2, flash: "入世之心未灭" },
          { text: "既来之则安之。先想办法解决吃饭问题。", next: "huangzhou_settle", trait: "resilience", value: 2, flash: "务实求生" },
          { text: "找个安静的地方喝酒写诗。管他的，先把心里的苦闷倒出来。", next: "huangzhou_art", trait: "connection", value: 1, flash: "以文字疗愈自我" }
        ]
      }
    },

    "huangzhou_resist": {
      chapter: "第三章 · 黄州初到",
      year: "元丰三年 · 春",
      scenes: [
        { type: "narration", text: "你写了几封信，小心翼翼地措辞，试探朝中旧友的态度。" },
        { type: "narration", text: "回信很慢。有的人回了，字里行间都是客气的疏远；有的人根本没回。你明白了——乌台诗案不只关了你一个人，它吓住了所有人。谁都不敢跟你走得太近。" },
        { type: "narration", text: "你把信烧了，站在院子里看天。黄州的天倒是很大很干净，不像京城，总是灰蒙蒙的。" },
        { type: "narration", text: "算了。调不回去就调不回去。" },
        { type: "narration", text: "你开始认真打量这座小城。" }
      ],
      action: {
        type: "continue",
        next: "east_slope"
      }
    },

    "huangzhou_settle": {
      chapter: "第三章 · 黄州初到",
      year: "元丰三年 · 春",
      scenes: [
        { type: "narration", text: "你开始盘算。没有俸禄，坐吃山空不是办法。" },
        { type: "narration", text: "你听说城东有一片荒地，以前是军营，现在没人管。你跑去看了看——荒草齐腰，泥地板结，但面积不小。" },
        { type: "narration", text: "你做了一个在朝中同僚看来不可思议的决定：你苏轼，进士出身、三品大员，要去种地。" },
        { type: "narration", text: "你跟当地农民借了工具，卷起袖子开始翻地。手上磨出的水泡破了又长，长了又破。你妻子心疼你，你笑着说：「陶渊明种地种出了名堂，我也试试。」" }
      ],
      action: {
        type: "continue",
        next: "east_slope"
      }
    },

    "huangzhou_art": {
      chapter: "第三章 · 黄州初到",
      year: "元丰三年 · 春",
      scenes: [
        { type: "narration", text: "你找到了城里唯一还愿意跟你喝酒的人——一个叫潘丙的卖酒老头。他不懂诗词，不关心朝政，只知道你苏大人是个好酒客。" },
        { type: "narration", text: "你在他的酒铺里喝到深夜，然后踉跄着走到江边。月光照在江面上，你突然想写点什么。" },
        { type: "narration", text: "但写什么呢？从前你写诗是为了议政、讽喻、表达自己对天下的看法。现在天下跟你没关系了。你只是一个被放逐的人，站在一条陌生的江边，喝了太多酒。" },
        { type: "narration", text: "你还是写了。不为任何人，只为自己。" }
      ],
      action: {
        type: "continue",
        next: "east_slope"
      }
    },

    // ===== 第四章 · 东坡 =====
    "east_slope": {
      chapter: "第四章 · 东坡",
      year: "元丰三年至五年",
      scenes: [
        { type: "transition", year: "东 坡", desc: "一个名字的诞生" },
        { type: "divider" },
        { type: "narration", text: "日子一天天过去。你真的种起了地。城东那片荒坡被你开垦出来，种上了庄稼。你给它起了个名字——「东坡」。" },
        { type: "narration", text: "从此你不再叫自己苏轼了。你叫苏东坡。" },
        { type: "narration", text: "一个前朝名士在田间劳作，这件事在黄州传开了。有人笑话你，但更多人开始对你产生了一种奇怪的亲近感——你不再是高高在上的苏大人，你是一个会种地、会做饭、会跟卖酒老头喝酒的普通人。" },
        { type: "narration", text: "你发明了一道菜：猪肉切大块，小火慢炖，加黄酒和酱油。你管它叫「东坡肉」。这道菜后来传遍了天下，一千年后还有人在做。" },
        { type: "narration", text: "但内心深处，你并不平静。深夜里你还是会想起乌台的牢房、朋友们因你受到的牵连、和这辈子可能再也回不去的朝堂。" }
      ],
      action: {
        type: "choice",
        prompt: "你的选择",
        options: [
          { text: "去赤壁看看。你听说城外有个叫赤壁的地方，江面开阔。", next: "chibi", trait: "connection", value: 2, flash: "寄情山水" },
          { text: "去寺里坐坐。你最近开始对佛学感兴趣。", next: "temple", trait: "resilience", value: 2, flash: "向内求索" }
        ]
      }
    },

    // ===== 第五章 · 赤壁 =====
    "chibi": {
      chapter: "第五章 · 赤壁",
      year: "元丰五年 · 七月",
      scenes: [
        { type: "atmosphere", text: "壬戌之秋，七月既望。苏子与客泛舟游于赤壁之下。" },
        { type: "narration", text: "你和几个朋友借了一条小船，夜游赤壁。" },
        { type: "narration", text: "江面开阔，月光如银。有人带了酒，有人带了箫。你们在船上喝酒、唱歌，箫声呜咽，飘过江面。" },
        { type: "narration", text: "你看着眼前的赤壁矶——当年曹操八十万大军南下，就在这一带折戟沉沙。如今英雄们都去了哪里？只剩下这条江还在流。" },
        {
          type: "poem",
          title: "念奴娇 · 赤壁怀古",
          lines: [
            "大江东去，浪淘尽，",
            "千古风流人物。",
            "故垒西边，人道是，",
            "三国周郎赤壁。"
          ],
          note: "写于元丰五年，黄州赤壁。"
        },
        { type: "narration", text: "你喝了一口酒，突然觉得通透了。" },
        { type: "dialogue", speaker: "你（苏东坡）", text: "天地之间，万物各有其主。不是自己的东西，一分一毫也拿不到。但这江上的清风、山间的明月，耳朵听到就是音乐，眼睛看到就是美景——这些是取之不尽的，是造物者给所有人的礼物。" },
        { type: "narration", text: "你回去写下了《赤壁赋》。这篇文章让你重新站到了中国文学的最顶端——不是以一个愤怒的批评者，而是以一个看透了人生起落的人。" }
      ],
      action: {
        type: "continue",
        next: "hanshi"
      }
    },

    // ===== 第五章 · 安国寺 =====
    "temple": {
      chapter: "第五章 · 安国寺",
      year: "元丰三年至五年",
      scenes: [
        { type: "narration", text: "你开始频繁地去安国寺。不是因为信佛，而是因为那里安静。" },
        { type: "narration", text: "住持继连和尚跟你年纪相仿，话不多，但每次你去，他都会泡好茶等你。你们有时聊到深夜，有时什么都不说，就坐在院子里听风。" },
        { type: "narration", text: "有一天你问他：「大师，我这辈子是不是做错了什么？」" },
        { type: "narration", text: "继连看着你，说了一句：「施主不是做错了什么，是想要的太多。」" },
        { type: "narration", text: "你愣了很久。他说得对。你想当好官、想写好诗、想让天下人都过上好日子、想让朝廷走上正确的路。你什么都想要，所以什么都放不下。" },
        { type: "narration", text: "你开始学着放下一些东西。不是放弃，是接受——接受有些事情不是你能改变的。" }
      ],
      action: {
        type: "continue",
        next: "hanshi"
      }
    },

    // ===== 第六章 · 寒食雨 =====
    "hanshi": {
      chapter: "第六章 · 寒食雨",
      year: "元丰五年 · 寒食节",
      scenes: [
        { type: "transition", year: "元丰五年", desc: "寒 食 节" },
        { type: "divider" },
        { type: "atmosphere", text: "春天。连日阴雨。寒食节不许生火，只能吃冷食。" },
        { type: "narration", text: "来黄州已经三年了。" },
        { type: "narration", text: "寒食节这天，雨下个不停。你坐在漏雨的屋子里，灶台冷着，孩子们嚷嚷肚子饿。你看着满地的泥水，忽然想笑——堂堂苏学士，连灶都生不起。" },
        { type: "narration", text: "你铺开纸，随手写了两首诗。不是为了给谁看，就是心里的话憋不住了。" },
        {
          type: "poem",
          title: "寒食雨二首（其二）",
          lines: [
            "春江欲入户，雨势来不已。",
            "小屋如渔舟，濛濛水云里。",
            "空庖煮寒菜，破灶烧湿苇。",
            "那知是寒食，但见乌衔纸。",
            "君门深九重，坟墓在万里。",
            "也拟哭途穷，死灰吹不起。"
          ]
        },
        { type: "narration", text: "写到最后一句——「也拟哭途穷，死灰吹不起」——你停了笔。手在发抖。不是冷的，是你突然意识到自己真的走到了人生的最低处。" },
        { type: "narration", text: "但诗写完之后，你觉得好了一些。好像把心里最重的那块石头搬了出来，摆在纸上看了看，也就那么回事。" }
      ],
      action: {
        type: "choice",
        prompt: "你的选择",
        options: [
          { text: "把诗烧了。太丧了，不想让别人看到这样的自己。", next: "ending_burn", trait: "courage", value: -1, flash: "不愿示弱" },
          { text: "留着。这就是你此刻最真实的样子，没什么好藏的。", next: "ending_keep", trait: "courage", value: 2, flash: "坦然面对真实的自己" }
        ]
      }
    },

    // ===== 结局分支 =====
    "ending_burn": {
      chapter: "第六章 · 寒食雨",
      year: "元丰五年",
      scenes: [
        { type: "narration", text: "你把纸揉成一团，想扔进火里——然后想起来今天寒食节，不能生火。" },
        { type: "narration", text: "你看着手里皱巴巴的纸，突然笑了出来。想烧都烧不了，这大概就是命。" },
        { type: "narration", text: "你把纸展开，抚平，放在桌上晾干。" },
        { type: "narration", text: "好吧，留着就留着。" }
      ],
      action: {
        type: "ending"
      }
    },

    "ending_keep": {
      chapter: "第六章 · 寒食雨",
      year: "元丰五年",
      scenes: [
        { type: "narration", text: "你把诗放在桌上晾干。墨迹歪歪扭扭的——你写的时候手确实在抖。" },
        { type: "narration", text: "后来这两首诗和你写的字被合称为《寒食帖》，成为中国书法史上「天下第三行书」。一千年后，人们在博物馆的玻璃柜前排队，只为看一眼你当年在漏雨的房子里写下的那些歪歪扭扭的字。" },
        { type: "narration", text: "但此刻的你并不知道这些。你只知道雨还在下，肚子很饿，明天应该去东坡看看地里的菜淹了没有。" }
      ],
      action: {
        type: "ending"
      }
    }
  },

  ending: {
    epilogue: "黄州之后的苏东坡，再也不是从前那个苏轼了。\n他不再是那个锋芒毕露的天才，\n而是一个经历过至暗时刻、\n依然选择好好活着的人。",
    stats: [
      { num: 4, label: "次抉择" },
      { num: 3, label: "年黄州岁月" },
      { num: 1, label: "次重生" }
    ],
    traitAnalysis: {
      courage: {
        high: "你在逆境中选择了正面对抗，不肯低头。这份勇气让人想起苏东坡在乌台狱中写的诗——即使身陷囹圄，也不肯折断自己的笔。",
        mid: "你在刚与柔之间寻找平衡。这很像苏东坡后来领悟的——真正的强大不是永远硬扛，而是知道什么时候该弯腰。",
        low: "你更倾向于保存实力，等待时机。这是一种不同的智慧——苏东坡如果早些学会这一点，也许不会走到乌台那一步。"
      },
      idealism: {
        high: "即使身处低谷，你心中仍有不甘。入世之心未灭。这让人想起苏东坡——即使被贬到天涯海角，他心里始终装着天下。",
        mid: "你在理想与现实之间找到了自己的位置。",
        low: "你选择了面对现实。这种务实并非放弃，而是一种更深层的接受。"
      },
      connection: {
        high: "你在孤独中寻找与天地的连接，试图从更大的尺度理解人生。就像苏东坡在赤壁之夜领悟的——江上清风与山间明月，才是永恒的馈赠。",
        mid: "你在入世与出世之间游走，这本身就是一种丰富的人生姿态。",
        low: "你更关注眼前和身边的人，这是一种踏实的温暖。"
      },
      resilience: {
        high: "你展现出极强的适应力，能在任何处境中扎下根来。这正是苏东坡最了不起的地方——无论被扔到哪里，他都能把日子过出滋味来。",
        mid: "你在适应中保持着自己的节奏，不急不缓。",
        low: "你的内心仍在风暴中。但记住，苏东坡也是用了三年才走出来的。给自己时间。"
      }
    },
    reflection: "你在苏东坡的人生里做出的每一个选择，\n其实都是你自己面对逆境时的本能反应。",
    comingSoon: "「对话苏东坡」功能即将上线\n穿越时空，与东坡先生面对面交谈"
  }
};
