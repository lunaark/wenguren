window.STORIES = window.STORIES || {};
window.STORIES["su-shi-2"] =
{
  id: "su-shi-2",
  name: "苏轼",
  dynasty: "北宋",
  subtitle: "岭南纪行",
  quote: "九死南荒吾不恨，兹游奇绝冠平生。",
  intro: "你以为黄州已经是人生的最低谷。你错了。朝廷的贬谪令一道接一道，把你从惠州推到儋州，从大宋的版图推到天涯海角。但越走越远的路上，你反而越来越轻了。",
  duration: "约10分钟",
  choiceCount: 5,
  status: "available",

  traits: {
    detachment: { name: "旷达", desc: "面对反复贬谪，是愤怒还是释然" },
    warmth:     { name: "温度", desc: "在困境中与身边人的关系" },
    rootedness: { name: "扎根", desc: "在异乡是否能落地生活" },
    clarity:    { name: "通透", desc: "对人生终极问题的理解深度" }
  },

  totalNodes: 18,

  nodes: {
    // ===== 第一章 · 杭州 =====
    "start": {
      chapter: "第一章 · 杭州",
      year: "元祐四年 · 春",
      scenes: [
        { type: "atmosphere", text: "杭州。三月。西湖边柳絮纷飞，画舫往来。" },
        { type: "narration", text: "你在杭州做知州。" },
        { type: "narration", text: "离开黄州已经五年了。这五年你像坐过山车——先被调到汝州，又回了京城，做了翰林学士、知制诰，给皇帝起草诏书。你一度以为苦日子到头了。" },
        { type: "narration", text: "但京城的朋党之争让你厌透了。新党旧党轮流坐庄，你哪边都不想站，结果哪边都不待见你。你主动请求外放，来了杭州。" },
        { type: "narration", text: "杭州是个好地方。你疏浚西湖，用挖出来的淤泥筑了一道长堤，堤上种满了桃树和柳树。杭州人管它叫「苏公堤」。每到春天，堤上桃红柳绿，游人如织。" },
        { type: "narration", text: "朝云替你在后院种了一畦菜。她说：「在杭州还种菜，你以为你还在黄州呢？」你说黄州的习惯改不了了，她笑你。" },
        { type: "narration", text: "有一天傍晚，你和朝云坐在西湖边喝茶。湖面上下起了小雨，远山忽然模糊了，像一幅刚落笔的水墨画。" },
        { type: "dialogue", speaker: "朝云", text: "官人，你看这雨。西湖晴天好看，雨天更好看。" },
        { type: "narration", text: "你笑了。顺手写了一首诗——「水光潋滟晴方好，山色空蒙雨亦奇。欲把西湖比西子，淡妆浓抹总相宜。」" },
        { type: "narration", text: "你五十四岁了。经历过乌台的牢狱、黄州的荒坡，此刻坐在西湖边上，有茶、有雨、有身边的人。你觉得这大概是你这辈子最好的日子。" }
      ],
      action: {
        type: "continue",
        next: "fall_again"
      }
    },

    // ===== 第一章（续）· 坠落 =====
    "fall_again": {
      chapter: "第一章 · 杭州",
      year: "绍圣元年 · 四月",
      scenes: [
        { type: "transition", year: "绍圣元年", desc: "变 天" },
        { type: "divider" },
        { type: "narration", text: "好日子没有持续太久。" },
        { type: "narration", text: "高太后去世了。哲宗亲政，章惇拜相。章惇——你年轻时一起爬山涉水的朋友。你们曾经同游终南山，在万丈悬崖上互相拽着衣角往前走。那时候你笑他胆大，他笑你文弱。" },
        { type: "narration", text: "现在他是宰相，你是他的政敌。他要清洗旧党，而你苏轼，写过的每一首诗、上过的每一道奏折，都是现成的罪证。" },
        { type: "narration", text: "贬谪令下来了。先是知英州——你还没到，半路又改了：贬惠州。一个比英州更远的岭南小城。" },
        { type: "narration", text: "你五十九岁了。你数了数这辈子被贬了多少次，数到第四次的时候不想数了。" },
        { type: "narration", text: "弟弟苏辙也被贬了，去筠州。你们在汝州分别。" },
        { type: "dialogue", speaker: "苏辙", text: "兄长，你这张嘴，什么时候能改改？" },
        { type: "narration", text: "你看着弟弟花白的头发，想起四十年前你们一起进京赶考。那时候他也说过一模一样的话。你还是没改。" }
      ],
      action: {
        type: "choice",
        prompt: "你的选择",
        options: [
          { text: "带上朝云和苏过，一起走。她跟了你大半辈子，这次也不例外。", next: "south_family", trait: "warmth", value: 2, flash: "此心安处是吾乡" },
          { text: "让朝云和苏过留在北方。岭南瘴气重，你不想拿她的命去赌。", next: "south_alone", trait: "warmth", value: 1, flash: "怕的不是远，是失去" }
        ]
      }
    },

    "south_family": {
      chapter: "第一章 · 杭州",
      year: "绍圣元年 · 秋",
      scenes: [
        { type: "narration", text: "朝云说：「你去哪里，我就去哪里。这不是商量。」" },
        { type: "narration", text: "她跟了你二十多年。从杭州到密州、到徐州、到湖州、到黄州——每一次你以为是最差的境遇，她都在旁边，不抱怨，不多说，只是把日子一天天过下去。她给你生过一个儿子，夭折了。那之后她开始念佛，你有时候半夜醒来，听见她在隔壁小声诵经。" },
        { type: "narration", text: "过了大庾岭，气候突然变了。空气黏稠闷热，路边长满你叫不出名字的植物。朝云开始咳嗽——她从小体弱，北方人到岭南都要过一关。你让她在车里躺着，自己走在旁边。" },
        { type: "narration", text: "她掀开车帘看你，说：「走车里来，外头太晒了。」你说不热。她说：「你骗人。你后背都湿透了。」" }
      ],
      action: {
        type: "continue",
        next: "huizhou_arrive"
      }
    },

    "south_alone": {
      chapter: "第一章 · 杭州",
      year: "绍圣元年 · 秋",
      scenes: [
        { type: "narration", text: "你跟朝云说：「岭南瘴气重，你身体不好，留在北方我放心些。」" },
        { type: "narration", text: "朝云看着你，没有生气，但眼睛红了。她低头整理你的行李，把你常穿的旧袍子叠得整整齐齐，在袍子里面缝了一个小口袋，塞了一包她常吃的安神药。" },
        { type: "dialogue", speaker: "朝云", text: "你记得按时吃。你一个人的时候什么都忘。" },
        { type: "narration", text: "你刚走了三天，朝云带着苏过追上来了。" },
        { type: "narration", text: "你站在路边看着她从车上下来，灰头土脸，气喘吁吁。你张了张嘴想说什么，她先开口了：「你不要我跟着是为我好，我知道。但你一个人去那种地方，我睡不着觉。睡不着觉比瘴气更要命。」" },
        { type: "narration", text: "你没再说什么。三个人一起过了大庾岭，往惠州去了。" }
      ],
      action: {
        type: "continue",
        next: "huizhou_arrive"
      }
    },

    // ===== 第二章 · 惠州 =====
    "huizhou_arrive": {
      chapter: "第二章 · 惠州",
      year: "绍圣元年 · 十月",
      scenes: [
        { type: "transition", year: "绍圣元年", desc: "惠 州" },
        { type: "divider" },
        { type: "atmosphere", text: "岭南。惠州。西湖边。秋天依然炎热。" },
        { type: "narration", text: "惠州比你想象的好。有山有水，有一个小西湖——虽然比不上杭州的西湖，但也有几分秀气。你站在湖边，想起几年前在杭州跟朝云一起看雨。" },
        { type: "narration", text: "你被安置在合江楼，后来搬到嘉祐寺。没有官邸，没有俸禄。但比起黄州那会儿挂铜钱在房梁上度日，你已经习惯了穷。" },
        { type: "narration", text: "让你意外的是，惠州人对你很热情。你毕竟是苏东坡——你的诗词早就传到了这里。本地知州詹范是你的读者，隔三差五请你喝酒。" },
        { type: "narration", text: "你很快又闲不住了。你发现惠州的水利年久失修，东江上没有像样的桥；你发现当地人生了病只会找巫师跳大神，连个药铺都没有。" }
      ],
      action: {
        type: "choice",
        prompt: "你的选择",
        options: [
          { text: "管不了那么多了，先把桥修了、药铺建了再说。你是戴罪之身，但你不是废人。", next: "huizhou_active", trait: "rootedness", value: 2, flash: "到哪都想管闲事" },
          { text: "安分一点吧。上次就是因为管不住嘴才到今天这步。", next: "huizhou_quiet", trait: "detachment", value: 1, flash: "学过教训了吗" }
        ]
      }
    },

    "huizhou_active": {
      chapter: "第二章 · 惠州",
      year: "绍圣二年 · 春夏",
      scenes: [
        { type: "narration", text: "你又开始忙了。" },
        { type: "narration", text: "你出钱出力，帮惠州修了东新桥，横跨东江。你画设计图，请工匠用铁链加固桥墩。有人问你：「苏大人，你自己都是贬官，哪来的钱？」你说：「写字卖钱。我的字还值几个钱的。」" },
        { type: "narration", text: "你还推广了治疟疾的药方，自己掏钱买药材，熬好了免费发。朝云帮你分装药包，她手上全是药渣的味道。晚上你闻到她衣服上的药味，说「你比我还像郎中」，她说「我是郎中的老婆」。" },
        { type: "narration", text: "然后你发现了荔枝。一口咬下去，汁水四溢，甜得你愣住了。你写了一首诗——" },
        {
          type: "poem",
          title: "惠州一绝",
          lines: [
            "罗浮山下四时春，",
            "卢橘杨梅次第新。",
            "日啖荔枝三百颗，",
            "不辞长作岭南人。"
          ],
          note: "写于绍圣二年，惠州。"
        },
        { type: "narration", text: "这首诗传回了京城。章惇看了，冷笑一声：「苏子瞻在惠州过得挺好啊。」" },
        { type: "narration", text: "你不知道，这首诗会给你带来更大的麻烦。" }
      ],
      action: {
        type: "continue",
        next: "chaoyun_daily"
      }
    },

    "huizhou_quiet": {
      chapter: "第二章 · 惠州",
      year: "绍圣二年 · 春夏",
      scenes: [
        { type: "narration", text: "你告诉自己安分一点。不写讽刺诗，不议论朝政，不多管闲事。种种花、读读书、跟朝云和苏过过几天安稳日子。" },
        { type: "narration", text: "但你管不住自己。" },
        { type: "narration", text: "你看见惠州百姓过河要绕很远的路，就跟当地人合计能不能修座桥。你看见有人得了疟疾去找巫师跳大神，就自己翻医书配药方。朝云帮你分装药包，手上全是药渣的味道。她说：「说好的安分呢？」你说：「桥和药不算多管闲事。」" },
        { type: "narration", text: "然后你看见市场上的荔枝又便宜又好吃，高高兴兴地写了一首诗——" },
        {
          type: "poem",
          title: "惠州一绝",
          lines: [
            "罗浮山下四时春，",
            "卢橘杨梅次第新。",
            "日啖荔枝三百颗，",
            "不辞长作岭南人。"
          ],
          note: "写于绍圣二年，惠州。"
        },
        { type: "narration", text: "你还是那个管不住嘴的苏东坡。只不过这一次，你写的不是牢骚，是快乐。" },
        { type: "narration", text: "但快乐也能得罪人。这首诗传回京城，章惇看了，冷笑一声：「苏子瞻在惠州过得挺好啊。」" }
      ],
      action: {
        type: "continue",
        next: "chaoyun_daily"
      }
    },

    // ===== 第三章 · 朝云 =====
    "chaoyun_daily": {
      chapter: "第三章 · 朝云",
      year: "绍圣二年 · 秋",
      scenes: [
        { type: "atmosphere", text: "惠州。秋夜。虫鸣如潮。" },
        { type: "narration", text: "惠州的日子慢。慢到你能听见时间流过去的声音。" },
        { type: "narration", text: "每天傍晚，你和朝云会绕着西湖走一圈。她走得慢，你就走慢一点。有时候你们什么也不说，就听蛙叫虫鸣。有时候她会突然指着湖里的鱼说：「你看那条大的，是不是上次那条？」你说鱼长得都一样，她说才不是。" },
        { type: "narration", text: "有一天晚上你写东西写到很晚，抬头发现朝云坐在旁边打瞌睡。她手里还攥着一卷经书——她每天晚上抄经，说是给你和苏过祈福。" },
        { type: "narration", text: "你把她的经书抽出来，给她披了件衣服。她迷迷糊糊地说了一句：「写完了？」你说写完了。她说：「骗人。你每次都说写完了，然后又写到天亮。」" },
        { type: "narration", text: "你笑了。她太了解你了。二十三年了，你身边的人换了一拨又一拨，走的走、散的散。只有她一直在。" },
        { type: "narration", text: "你忽然想跟她说句什么——说谢谢也好，说对不起也好。但你张了张嘴，什么也没说出来。有些话，你写诗写得出来，当面反而说不出口。" }
      ],
      action: {
        type: "continue",
        next: "chaoyun_sick"
      }
    },

    "chaoyun_sick": {
      chapter: "第三章 · 朝云",
      year: "绍圣三年 · 夏",
      scenes: [
        { type: "transition", year: "绍圣三年", desc: "夏" },
        { type: "divider" },
        { type: "atmosphere", text: "惠州。雨季。瘴气弥漫的南方夏天。" },
        { type: "narration", text: "朝云病了。" },
        { type: "narration", text: "岭南的瘴气对北方人是致命的。她先是发热，然后咳嗽不止。你找遍了惠州的郎中，用了你知道的所有方子，都不见好。" },
        { type: "narration", text: "她一天比一天瘦。脸颊凹下去了，手腕细得你不敢握。但她还是笑着跟你说话，还是每天让苏过扶她到院子里坐一会儿。" },
        { type: "narration", text: "有一天傍晚你坐在她床边，她突然开口念了一句：「花褪残红青杏小……」那是你年轻时写的《蝶恋花》。念到「枝上柳绵吹又少，天涯何处无芳草」的时候，她停下来，眼泪流了出来。" },
        { type: "dialogue", speaker: "朝云", text: "我以前觉得这句词是洒脱。天涯何处无芳草嘛——走到哪里都有好风景。现在我觉得不是。芳草年年都有，可人就这一辈子。" },
        { type: "narration", text: "她看着你，声音很轻：「官人，我走了之后你一个人怎么办？你连自己的衣服放在哪里都不知道。」" },
        { type: "narration", text: "你想说些什么。你这辈子说过无数漂亮话——在朝堂上、在诗文里、在朋友面前。但此刻你坐在她床边，一个字都说不出来。" }
      ],
      action: {
        type: "choice",
        prompt: "你的选择",
        options: [
          { text: "握住她的手，说：「你哪都不许去。等你好了，我带你回杭州看西湖。」", next: "chaoyun_promise", trait: "warmth", value: 2, flash: "明知是谎也要说" },
          { text: "给她念经。她信佛，你就陪她念。你不知道该说什么，但你可以陪她。", next: "chaoyun_sutra", trait: "clarity", value: 1, flash: "陪伴是最后的语言" }
        ]
      }
    },

    "chaoyun_promise": {
      chapter: "第三章 · 朝云",
      year: "绍圣三年 · 七月",
      scenes: [
        { type: "narration", text: "你握住她的手。她的手凉得像一块玉。" },
        { type: "dialogue", speaker: "你（苏轼）", text: "你哪都不许去。等你好了，我们回杭州。你不是说杭州西湖的雨最好看吗？我还欠你一场春天的雨。" },
        { type: "narration", text: "朝云笑了一下。那个笑容你一辈子都忘不掉——她明明知道你在说谎，但她领了你这个情。" },
        { type: "dialogue", speaker: "朝云", text: "好。那你记得提醒我。我怕我忘了。" },
        { type: "narration", text: "七月五日。朝云死了。年仅三十四岁。临终前她念的是《金刚经》里的一句：「一切有为法，如梦幻泡影，如露亦如电，应作如是观。」" },
        { type: "narration", text: "你坐在她床边很久。苏过进来了两次，你都没有抬头。" },
        { type: "narration", text: "你把她葬在惠州西湖边的栖禅寺旁。你在墓旁建了一座亭子，取名「六如亭」——取自她临终念的那段经文。亭柱上你刻了两行字：" },
        { type: "narration", text: "「不合时宜，惟有朝云能识我；\n独弹古调，每逢暮雨倍思卿。」" },
        { type: "narration", text: "此后你常去六如亭坐坐。有时候你觉得朝云还在你身边——她以前总在你写诗写到深夜的时候端一碗姜汤进来，什么都不说，放下就走。你现在半夜写东西的时候，偶尔还会往桌角看一眼。" },
        { type: "narration", text: "朝云死后，你再也没有纳妾。余生只有你和苏过两个人。" }
      ],
      action: {
        type: "continue",
        next: "danzhou_decree"
      }
    },

    "chaoyun_sutra": {
      chapter: "第三章 · 朝云",
      year: "绍圣三年 · 七月",
      scenes: [
        { type: "narration", text: "你拿起她枕边的经书，翻到她上次折角的地方，开始念。" },
        { type: "narration", text: "「一切有为法，如梦幻泡影，如露亦如电，应作如是观。」" },
        { type: "narration", text: "你的声音一开始发抖，念着念着就稳了。朝云闭着眼睛听，嘴角微微上翘。你不知道她在想什么。也许她什么都没想，只是觉得有你在旁边念经，就够了。" },
        { type: "narration", text: "你念了很久。念到窗外的天全暗了，念到蜡烛快燃尽了。她不知道什么时候睡着的，呼吸很浅很慢。你把经书放下，给她掖了掖被角。" },
        { type: "narration", text: "七月五日。朝云死了。年仅三十四岁。她走的时候很安静。你甚至不确定她是什么时候停止呼吸的——你守了一夜，天亮的时候发现她的手已经凉了。" },
        { type: "narration", text: "你把她葬在惠州西湖边的栖禅寺旁。你在墓旁建了一座亭子，取名「六如亭」——如梦、如幻、如泡、如影、如露、如电。亭柱上你刻了两行字：" },
        { type: "narration", text: "「不合时宜，惟有朝云能识我；\n独弹古调，每逢暮雨倍思卿。」" },
        { type: "narration", text: "你写过那么多诗、那么多赋。但你觉得这两句是你写过最好的东西。因为你没有在遣词造句，你只是把心里的话说了出来。" },
        { type: "narration", text: "朝云死后，你再也没有纳妾。" }
      ],
      action: {
        type: "continue",
        next: "danzhou_decree"
      }
    },

    // ===== 第四章 · 儋州 =====
    "danzhou_decree": {
      chapter: "第四章 · 天涯",
      year: "绍圣四年 · 四月",
      scenes: [
        { type: "transition", year: "绍圣四年", desc: "再 贬" },
        { type: "divider" },
        { type: "narration", text: "朝云走了不到一年，贬谪令又来了。" },
        { type: "narration", text: "这一次，是儋州。海南岛。" },
        { type: "narration", text: "在宋朝，贬到海南只比杀头好一级。那里是蛮荒之地，瘴气横行，去了就几乎没有回来的。" },
        { type: "narration", text: "你隐隐感觉到了——章惇不会停手的。他要把你推到大宋版图的最边缘，推到没有人能听到你声音的地方。你还活着就让他不安心。不是因为你有权力，而是因为你会写诗。一个会写诗的人，比一个有兵权的人更危险。" },
        { type: "narration", text: "你六十二岁了。胡子全白了，牙齿掉了好几颗。你连愤怒的力气都快没了。" },
        { type: "dialogue", speaker: "苏过", text: "父亲，我陪您去。" },
        { type: "narration", text: "苏过二十七岁。本来可以考功名、做官、过正常人的日子。但他选择了陪你渡海。" }
      ],
      action: {
        type: "choice",
        prompt: "你的选择",
        options: [
          { text: "坦然接受。贬到哪里都是天地之间，有什么区别。", next: "cross_sea_calm", trait: "detachment", value: 2, flash: "天地即是吾家" },
          { text: "心里发苦。不是为自己，是为苏过。他不该替你受这个罪。", next: "cross_sea_guilt", trait: "warmth", value: 2, flash: "最怕连累亲人" }
        ]
      }
    },

    "cross_sea_calm": {
      chapter: "第四章 · 天涯",
      year: "绍圣四年 · 六月",
      scenes: [
        { type: "atmosphere", text: "琼州海峡。小船。浪高风急。" },
        { type: "narration", text: "渡海那天风浪很大。小船在波涛中颠簸，苏过脸色发白，死死抓着船舷。" },
        { type: "narration", text: "你反而很平静。你靠在船板上，听着海浪的声音，心里突然冒出一个念头——这辈子从眉山到汴京，从汴京到杭州，从杭州到黄州，从黄州到惠州，现在到了海南。每一次都以为走到了尽头，每一次尽头之后又是新的路。" },
        { type: "narration", text: "你笑了一下，跟苏过说：「你看这海，多大。比朝廷大。」" },
        { type: "narration", text: "苏过没心情欣赏，他正在吐。" }
      ],
      action: {
        type: "continue",
        next: "danzhou_crisis"
      }
    },

    "cross_sea_guilt": {
      chapter: "第四章 · 天涯",
      year: "绍圣四年 · 六月",
      scenes: [
        { type: "atmosphere", text: "琼州海峡。小船。浪高风急。" },
        { type: "narration", text: "渡海那天风浪很大。苏过脸色发白，死死抓着船舷。你看着他，心里像被针扎了一下。" },
        { type: "narration", text: "他二十七岁。如果他有一个正常的父亲——不是苏轼，不是这个永远得罪人的苏轼——他现在应该在京城做官，娶妻生子，过安安稳稳的日子。" },
        { type: "narration", text: "可他摊上了你。" },
        { type: "narration", text: "你伸手拍了拍他的后背，想说点什么，但喉咙发紧。苏过转过头看了你一眼，说：「父亲，过了这片海就到了。」" },
        { type: "narration", text: "你点点头。他在安慰你。明明该是你安慰他的。" }
      ],
      action: {
        type: "continue",
        next: "danzhou_crisis"
      }
    },

    // ===== 第五章 · 儋州 =====
    "danzhou_crisis": {
      chapter: "第五章 · 海南",
      year: "绍圣四年 · 秋冬",
      scenes: [
        { type: "transition", year: "儋 州", desc: "天涯海角" },
        { type: "divider" },
        { type: "narration", text: "儋州比你想象的还要荒凉。" },
        { type: "narration", text: "你和苏过住在官府废弃的破屋子里，墙有裂缝，下雨就漏。后来当地黎族人帮你搭了几间茅屋，你管它叫「桄榔庵」——因为旁边长了一棵桄榔树。" },
        { type: "narration", text: "到儋州的第一个冬天，对岸的补给船断了。连续四十多天没有米运过来。" },
        { type: "narration", text: "你和苏过靠当地人接济过日子。黎族的阿婆送来一筐芋头，邻居老黄拎来几条鱼。但也不够吃。有三天你们只吃了一顿正经饭。苏过把芋头让给你，说他不饿。你知道他在撒谎——他二十七岁，年轻人哪有不饿的。" },
        { type: "narration", text: "你饿得头晕的时候去海边转了一圈，看见退潮后礁石上粘着一些生蚝。你撬了几个下来，回去用炭火烤了。第一口腥得你直皱眉，但加了点酒再烤，味道忽然变了——鲜、甜、还有一点点海水的咸。" },
        { type: "narration", text: "你吃着烤生蚝，忽然笑了出来。苏过问你笑什么，你说：「我在想，要不要给苏迈写封信，告诉他这里的生蚝极好。然后叮嘱他千万不要告诉朝里的人——免得他们也想来。」" },
        { type: "narration", text: "苏过也笑了。你们父子已经很久没有一起笑了。" },
        { type: "narration", text: "但笑完之后，你半夜里咳了整夜。潮湿、蚊虫、水土不服，加上长期吃不饱，你的身体在一点点垮下去。你开始觉得膝盖疼，眼睛也越来越模糊。你六十二岁了，你不知道自己还能撑多久。" }
      ],
      action: {
        type: "choice",
        prompt: "你的选择",
        options: [
          { text: "把该交代的事交代了。给苏过写一份遗嘱，把书稿的事安排好。万一走了，别留一堆烂摊子。", next: "danzhou_prepare", trait: "clarity", value: 2, flash: "坦然面对终局" },
          { text: "不想这些。你还没死呢。明天去看看能不能找当地人学种芋头，自己种总比等补给靠谱。", next: "danzhou_root", trait: "rootedness", value: 2, flash: "活一天就好好活" }
        ]
      }
    },

    "danzhou_prepare": {
      chapter: "第五章 · 海南",
      year: "元符元年",
      scenes: [
        { type: "narration", text: "你夜里睡不着的时候，开始整理书稿。" },
        { type: "narration", text: "你把《东坡志林》的手稿理了理，又翻出未完成的《论语说》和《书传》。你跟苏过说：「这些东西，万一我走了，你替我保管好。找个机会送回眉山老家。」" },
        { type: "narration", text: "苏过听了脸色变了。你说：「别这个表情。你爹我什么大风大浪没见过，就是提前说一声。」" },
        { type: "narration", text: "说完你反而踏实了。该交代的交代了，剩下的日子都是赚的。" },
        { type: "narration", text: "你开始跟时间赛跑。白天太热写不了字，你就等傍晚凉快了再动笔。苏过磨墨，你写到半夜。没有墨了，苏过就用松烟自己做。纸不够，就写在树皮上。" },
        { type: "narration", text: "你还是闲不住。你发现儋州的黎族孩子没有人教读书，就在桄榔庵旁边搭了个简陋的学堂。没有桌椅，学生们席地而坐。没有课本，你口述，苏过抄。" },
        { type: "narration", text: "有个叫姜唐佐的年轻人特别聪明。你给他讲杜甫的诗，他听完沉默了很久，问你：「先生，为什么杜甫明知道救不了天下，还要一直写？」" },
        { type: "dialogue", speaker: "你（苏轼）", text: "因为不写会更难受。" },
        { type: "narration", text: "你给姜唐佐写了两句诗勉励他：「沧海何曾断地脉，白袍端合破天荒。」他后来果然中了举——海南有史以来第一个举人。" }
      ],
      action: {
        type: "continue",
        next: "midnight"
      }
    },

    "danzhou_root": {
      chapter: "第五章 · 海南",
      year: "元符元年",
      scenes: [
        { type: "narration", text: "第二天你真的去找了当地的黎族老农，比划着学种芋头。语言不太通，但种地这件事不需要太多语言——他挖坑，你看；他下种，你跟着做。手上又磨出了水泡。你想起黄州开荒的那段日子，笑了一下——你苏东坡的手，一辈子都在笔和锄头之间切换。" },
        { type: "narration", text: "三个月后，你种的芋头长出来了。个头小，但能吃。你和苏过蒸了一锅，蘸着海盐吃。苏过说：「父亲种的芋头比眉山的红薯好吃。」你说：「你是饿的。饿了什么都好吃。」" },
        { type: "narration", text: "吃饱了，你就有力气做别的了。你发现儋州的黎族孩子没人教读书，就在桄榔庵旁边搭了个简陋的学堂。你口述，苏过抄写。一开始来了七八个人，后来越来越多。" },
        { type: "narration", text: "有个叫姜唐佐的年轻人特别聪明。你给他讲杜甫的诗，他听完问你：「先生，为什么杜甫明知道救不了天下，还要一直写？」" },
        { type: "narration", text: "你想了想，说：「因为不写会更难受。」" },
        { type: "narration", text: "你给姜唐佐写了两句诗：「沧海何曾断地脉，白袍端合破天荒。」他后来中了举，成为海南有史以来第一个举人。" },
        { type: "narration", text: "你在全中国最远的地方，做了一件跟写诗一样重要的事。" }
      ],
      action: {
        type: "continue",
        next: "midnight"
      }
    },

    // ===== 第六章 · 归途 =====
    "midnight": {
      chapter: "第六章 · 归途",
      year: "元符二年 · 除夕",
      scenes: [
        { type: "transition", year: "元符二年", desc: "除 夕" },
        { type: "divider" },
        { type: "atmosphere", text: "儋州。除夕夜。桄榔庵外的天空布满星星，比你见过的任何地方都多。" },
        { type: "narration", text: "除夕。你和苏过对坐在桄榔庵里。桌上是一条当地人送的鱼、一碗苏过煮的芋头、和半壶浊酒。" },
        { type: "narration", text: "苏过说：「父亲，又一年了。」" },
        { type: "narration", text: "你数了数。到海南已经两年多了。弟弟苏辙在雷州，隔着一道海峡，见不着面。大儿子苏迈、二儿子苏迨都在大陆，书信一来一回要两三个月。" },
        { type: "narration", text: "你喝了一口酒，忽然想起几年前在杭州西湖边的那个傍晚。朝云坐在你旁边，湖上下着小雨，她说「西湖雨天更好看」。那时候你觉得那是你这辈子最好的日子。" },
        { type: "narration", text: "如今你坐在海南的茅屋里，胡子全白，牙齿半掉，手边是一碗芋头和一条鱼。朝云不在了。杭州回不去了。" },
        { type: "narration", text: "但这碗芋头是热的。这条鱼是邻居老黄送的。头顶的星星比你这辈子见过的任何地方都亮。" }
      ],
      action: {
        type: "choice",
        prompt: "你的选择",
        options: [
          { text: "对苏过说：「这辈子值了。黄州惠州儋州——别人走不了的路，我都走过了。」", next: "ending_peace", trait: "clarity", value: 2, flash: "九死南荒吾不恨" },
          { text: "对苏过说：「想回家。想回眉山看看老家的月亮。」", next: "ending_home", trait: "warmth", value: 2, flash: "万里归心" }
        ]
      }
    },

    // ===== 结局分支 =====
    "ending_peace": {
      chapter: "第六章 · 归途",
      year: "元符三年",
      scenes: [
        { type: "narration", text: "苏过看了你一眼，笑了。他很少见你这样说话——不是在安慰别人，也不是在自嘲，而是真的、发自心底地觉得满足。" },
        { type: "narration", text: "元符三年正月，哲宗驾崩，徽宗即位，大赦天下。你终于接到了北归的诏令。" },
        { type: "narration", text: "离开儋州那天，当地百姓扶老携幼送你到海边。你回头看了最后一眼桄榔庵——那间破屋子，那棵桄榔树，那些席地而坐听你讲诗的年轻面孔。" },
        { type: "narration", text: "渡海的时候风平浪静。你站在船头，写下了一首诗——" },
        {
          type: "poem",
          title: "六月二十日夜渡海",
          lines: [
            "参横斗转欲三更，",
            "苦雨终风也解晴。",
            "云散月明谁点缀？",
            "天容海色本澄清。",
            "空余鲁叟乘桴意，",
            "粗识轩辕奏乐声。",
            "九死南荒吾不恨，",
            "兹游奇绝冠平生。"
          ],
          note: "写于元符三年六月，渡琼州海峡北归。"
        },
        { type: "narration", text: "九死南荒吾不恨，兹游奇绝冠平生。" },
        { type: "narration", text: "你六十五岁了。头发全白，身体大不如前。但你从海南带回来了一摞书稿、一肚子故事、和一颗比年轻时更干净的心。" }
      ],
      action: {
        type: "ending"
      }
    },

    "ending_home": {
      chapter: "第六章 · 归途",
      year: "元符三年",
      scenes: [
        { type: "narration", text: "苏过没有说话。他知道你说的「回家」不是回京城——你对京城没什么留恋。你说的是眉山。你出生的地方。四十年没回去了。" },
        { type: "narration", text: "元符三年正月，哲宗驾崩，徽宗即位，大赦天下。你终于接到了北归的诏令。" },
        { type: "narration", text: "离开儋州那天，你走得很慢。你回头看了最后一眼桄榔庵。你在这间破屋子里住了三年，写了几万字的书稿，教了十几个学生，吃了数不清的生蚝和芋头。" },
        { type: "narration", text: "渡海的时候风平浪静。你站在船头，看着海面上的月亮。月亮在海南和在眉山看起来是一样的——这一点让你觉得安心。" },
        { type: "narration", text: "你写下了一首诗——" },
        {
          type: "poem",
          title: "六月二十日夜渡海",
          lines: [
            "参横斗转欲三更，",
            "苦雨终风也解晴。",
            "云散月明谁点缀？",
            "天容海色本澄清。",
            "空余鲁叟乘桴意，",
            "粗识轩辕奏乐声。",
            "九死南荒吾不恨，",
            "兹游奇绝冠平生。"
          ],
          note: "写于元符三年六月，渡琼州海峡北归。"
        },
        { type: "narration", text: "你没能回到眉山。第二年七月，你病逝于常州，享年六十六岁。" },
        { type: "narration", text: "但你在生命的最后一年里，经过了很多地方。每到一处，都有人请你吃饭、喝酒、看你写字。你走到哪里，哪里就是一场小小的节日。" },
        { type: "narration", text: "你没能回到故乡的月亮下面。但或许，你一直都在回家的路上。" }
      ],
      action: {
        type: "ending"
      }
    }
  },

  ending: {
    epilogue: "从杭州西湖到海南儋州，\n从「不辞长作岭南人」到「九死南荒吾不恨」，\n他失去了朝云，失去了健康，\n失去了回到朝堂的最后一丝可能。\n但他在天涯海角活成了自己最喜欢的样子。",
    stats: [
      { num: 5, label: "次抉择" },
      { num: 6, label: "年岭南岁月" },
      { num: 1, label: "次渡海" }
    ],
    traitAnalysis: {
      detachment: {
        high: "你面对反复的打击时展现了罕见的旷达。就像苏轼渡海时写下的——九死南荒吾不恨。不恨，不是因为不痛，而是因为他已经超越了痛苦本身。",
        mid: "你在愤怒与释然之间摇摆，这恰恰是最真实的人。苏轼也不是一开始就旷达的，他用了一辈子才学会。",
        low: "你心中有放不下的怒火和委屈。这也是一种真实。不是所有人都需要原谅，有些不公就是不该被原谅的。"
      },
      warmth: {
        high: "你始终把身边的人放在心上。这是苏轼最动人的地方——即使自己身处绝境，他最心疼的还是连累了别人。朝云走后，他再没纳妾。有些感情，是用一辈子来回答的。",
        mid: "你在独处与牵挂之间找到了平衡。",
        low: "你更多地独自消化苦难。这种独立让人敬佩，但也让人心疼。"
      },
      rootedness: {
        high: "无论被扔到哪里，你都能扎下根来。这是苏轼最了不起的能力——他不是在忍受流放，他是在经营每一个落脚的地方。杭州的苏堤、惠州的东新桥、儋州的学堂——他走过的每个地方都留下了痕迹。",
        mid: "你在适应与抗拒之间寻找着自己的节奏。",
        low: "你的心始终在别处。也许对你来说，真正的归宿不在任何一个具体的地方。"
      },
      clarity: {
        high: "你展现了苏轼晚年那种通透的智慧——看清了一切之后，不是悲观，而是一种更深的平静。天容海色本澄清。",
        mid: "你在困惑与领悟之间前行，这本身就是一种修行。",
        low: "你还在路上。但别急，苏轼也是用了六十年才走到那种通透的。给自己时间。"
      }
    },
    reflection: "从杭州的春雨到海南的星空，\n你陪苏轼走完了他人生最后的旅程。\n你在他的选择中，\n看到了自己面对失去、远行与孤独时的本能反应。",
    comingSoon: "「对话苏轼」功能即将上线\n穿越时空，与东坡先生面对面交谈"
  }
}
;
