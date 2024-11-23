const sentences = [
    "虽然现在学习是苦的，但以后生活是甜的。",
    "生活不止眼前的苟且，还有诗和远方。",
    "人生如梦，我努力向前。",
    "世上无难事，只要肯登攀。",
    "没有什么能够阻挡，我对自由的向往。",
    "无论身处何处，不忘初心。",
    "独处时光，心灵得以宁静。",
    "以梦为马，不负韶华。",
    "山高水长，志在远方。",
    "勇敢前行，无畏困难。",
    "保持热爱，奔赴山海。",
    "勇往直前，无畏困难。",
    "保持热爱，奔赴山海。",
    "以梦为马，不负韶华。",
    "山高水长，志在远方。",
    "生活不止眼前的苟且，还有诗和远方。",
    "人生如梦，我努力向前。",
    "世上无难事，只要肯登攀。",
    "无论身处何处，不忘初心。",
    "独处时光，心灵得以宁静。",
    "珍惜当下，把握未来。",
    "心态决定一切，态度决定高度。",
    "勤奋是你将来的投资，懒惰是你现在的花费。",
    "人生没有回头路，只能勇敢面对。",
    "脚踏实地，心怀梦想。",
    "每一次挫折，都是成长的垫脚石。",
    "学会包容，世界会更美好。",
    "付出就有回报，坚持就是胜利。",
    "道路虽远，行之则将至。",
    "用微笑面对生活，用泪水洗礼心灵。",
    "积极向上，勇往直前。",
    "追逐梦想，永不言弃。",
    "人生短暂，珍惜每一刻。",
    "勇敢面对，做自己的人生导师。",
    "智慧照亮人生，知识改变命运。",
    "善待他人，温暖世界。",
    "心怀感恩，所遇皆美好。",
    "自律为人，严谨行事。",
    "烦恼无数，学会放下。",
    "与人为善，与己为善。",
    "乐观面对，一切都会好起来。",
    "走出舒适区，挑战自己。",
    "拥抱变化，勇敢前行。",
    "激发潜能，勇攀高峰。",
    "关爱他人，收获幸福。",
    "保持善良，人间值得。",
    "尽自己最大努力，不留遗憾。",
    "热爱生活，每一天都是美好的。",
    "拓宽视野，世界在你眼前。",
    "学会调整，适应一切。",
    "勇敢迈出第一步，不怕失败。",
    "尊重他人，尊重自己。",
    "真诚待人，无愧于心。",
    "坚持目标，砥砺前行。",
    "人生无常，珍惜当下。",
    "遇到困难，要相信自己。",
    "拥抱希望，光明就在前方。",
    "小事不小，细节决定成败。",
    "勇敢去尝试，失败不可怕。",
    "自律使人进步，懒散使人落后。",
    "积极进取，砥砺前行。",
    "善待自己，享受生活。",
    "关心他人，温暖世界。",
    "勇于承担责任，不负使命。",
    "拥抱阳光，驱散阴霾。",
    "相信自己，你可以做到。",
    "坚持到底，永不放弃。",
    "勇敢追求，做自己命运的舵手。",
    "学会倾听，善于沟通。",
    "善待家人，珍惜团圆。",
    "乐观向上，一切都会好起来。",
    "保持谦逊，不断学习。",
    "拥抱变化，勇往直前。",
    "关爱自然，保护环境。",
    "坚持信念，追求梦想。",
    "勤奋努力，天道酬勤。",
    "乐于助人，收获快乐。",
    "怀揣希望，迎接未来。",
    "敢于突破，成就自己。",
    "严以律己，宽以待人。",
    "勇敢面对，挑战自己。",
    "心态决定一切，态度决定高度。",
    "拥抱希望，拥抱明天。",
    "小事不小，珍惜每一刻。",
    "学会原谅，心境宽广。",
    "坚持努力，终会成功。",
    "拥抱生活，热爱每一天。",
    "关注细节，做到最好。",
    "尊重他人，友善待人。",
    "勇于尝试，不怕失败。",
    "坚持目标，永不言弃。",
    "人生短暂，珍惜当下。",
    "关爱他人，温暖世界。",
    "保持善良，收获美好。",
    "保持感恩，所遇皆美好。",
    "自律为人，严谨行事。",
    "我永远都不会做，无法实现的梦。",
    "现在努力了，以后就轻松了",
    "每天清晨我从梦中苏醒，只为享受自由和甜美的安闲：我读书很少，睡觉很多，浮云般的虚名我不去捕捉。普希金《叶甫盖尼·奥涅金》",
    "人生最大的错误，就是会不断犯错。",
    "人生，总会有一些说不出的秘密，藏在心底深处；人活着，也总有一些解不开的结，困扰着喜乐哀伤。",
    "一天一个太阳，点一盏灯，生活才会温柔。",
    "梦想总是星辰，看得到却又摸不到。",
    "只要努力，就不会被梦想抛下。",
    "不做无法实现的梦",
    /*
    按照上面的样子可以添加更多的句子
    */
];

function getRandomSentence() {
    return sentences[Math.floor(Math.random() * sentences.length)];
}

const sentenceDisplay = document.getElementById("sentence-display");

const initialSentence = getRandomSentence();
sentenceDisplay.textContent = initialSentence;

sentenceDisplay.addEventListener("click", () => {
    const newSentence = getRandomSentence();
    sentenceDisplay.textContent = newSentence;
})
