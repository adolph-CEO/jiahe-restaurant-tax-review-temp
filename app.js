const STAGES = {
  1: "01 開店前｜地址・登記",
  2: "02 準備開幕｜稅籍・發票",
  3: "03 開始營業｜收款・報稅",
  4: "04 生意成長｜外送・營收",
  5: "05 擴張或收店｜員工・停歇業"
};

const posts = [
  {
    id:"01", stage:1, title:"賣一碗滷肉飯，要先認識幾個政府機關？",
    cards:[
      ["賣一碗滷肉飯，要先認識幾個政府機關？","開店，不只是煮好一碗飯，還要懂規則。"],
      ["我只是賣飯，又不是開跨國企業！","賣小吃也要登記？\n真的要辦稅籍嗎？\n還要食品登錄？"],
      ["其實這三件事不一樣。","商業登記＝商號／行號\n稅籍登記＝稅務身分\n食品業者登錄＝食品安全管理"],
      ["商業登記好了，就全部搞定？","不一定\n稅籍仍需確認\n食品業者登錄仍需確認\n店面也有其他相關規定"],
      ["鍋子可以先買，登記別靠猜！","商號／公司怎麼選\n稅籍怎麼處理\n食品登錄要不要辦\n店面是否合法"]
    ],
    fb:"很多人以為開一家小吃店，只要租店、裝潢、煮得好吃就行。真正開始辦理時才發現，商業登記、稅籍登記、食品業者登錄，其實是三件不同的事。\n\n別急著把它們全部混在一起，也別以為辦了一項就萬事 OK。開店前先把身分、稅務、食品與場所規定搞清楚，會比開店後補救輕鬆很多。\n\n你目前最不清楚的是哪一項？歡迎留言告訴我們。\n\n佳赫稅務｜餐飲開店不踩雷",
    ig:"開一家小吃店，不只是把飯煮好。\n\n商業登記、稅籍登記、食品業者登錄，是三件不同的事；辦完其中一項，也不代表其他程序會自動完成。\n\n開店前先把身分、稅務、食品與場所規定釐清，日後會省下很多補救時間。\n\n#佳赫稅務 #餐飲創業 #開店準備 #商業登記 #稅籍登記 #食品業者登錄"
  },
  {
    id:"02", stage:1, title:"店面租好了，才發現不能開餐廳？",
    cards:[
      ["店租了、押金付了，結果不能開餐廳？","真正讓老闆心痛的，可能不是房租。"],
      ["看到人潮多，就直接簽？先等等。","租店面 ≠ 一定可以做餐飲。"],
      ["簽約前至少先確認這些","建物用途\n土地使用\n消防與相關規定\n房東是否同意登記"],
      ["主理人提醒：順序不要反了。","先確認 → 再簽約 → 再裝潢\n不是裝潢完才開始問。"],
      ["最貴的不是查資料，是拆掉重來。","簽租約前，把「能不能營業」先搞清楚。"]
    ],
    fb:"店面地點很好、人潮很多、租金也能接受，就直接簽？\n\n餐飲創業最昂貴的錯誤之一，就是先租、先裝潢，最後才發現場所不符合相關規定。簽約前先確認建物用途、土地使用、消防與登記條件。\n\n多花一點時間確認，通常比拆掉重來便宜得多。準備看店面時，記得先把這篇存起來。\n\n佳赫稅務｜餐飲開店不踩雷",
    ig:"地點好、人潮多，不等於一定能做餐飲。\n\n正確順序是：先確認 → 再簽約 → 再裝潢。\n\n簽約前至少確認建物用途、土地使用、消防規定，以及房東是否同意登記。最貴的往往不是查資料，而是拆掉重來。\n\n#佳赫稅務 #餐飲創業 #店面租賃 #開店選址 #創業避雷"
  },
  {
    id:"03", stage:1, title:"在家賣甜點、接 LINE 訂單，也算開店嗎？",
    cards:[
      ["沒有店面，只在 LINE 接單，就不算做生意？",""],
      ["網路接單也是銷售。","FB／IG／LINE／網站／平台\n不是沒有招牌就不存在。"],
      ["先看「怎麼賣、賣多少」。","是否需要稅籍登記，要依實際銷售情況判斷。"],
      ["沒到營業稅起徵點 ≠ 完全不用管稅。","營利所得仍可能涉及個人所得稅。"],
      ["在家創業先問 3 件事","每月賣多少\n怎麼收款\n食品相關規定是否適用"]
    ],
    fb:"現在很多餐飲創業，不是先租店，而是先從家裡、IG、LINE 開始接單。沒有實體店面，不代表沒有銷售行為。\n\n真正要看的，是你的營業方式、每月銷售額、收款方式與食品相關規定。小量開始很好，但越早建立正確觀念，之後做大時越不容易手忙腳亂。\n\n你是從哪個平台開始接單的呢？\n\n佳赫稅務｜餐飲開店不踩雷",
    ig:"沒有店面，也可能正在做生意。\n\nFB、IG、LINE、網站與外送平台上的接單，都是銷售行為。是否需要稅籍登記，要看實際銷售方式與金額；沒到營業稅起徵點，也不代表完全不用處理所得問題。\n\n#佳赫稅務 #在家創業 #甜點創業 #網路接單 #餐飲創業"
  },
  {
    id:"04", stage:1, title:"一間雞排店，需要先成立雞排集團嗎？",
    cards:[
      ["開雞排店，要設公司？還是行號就好？",""],
      ["不是「公司比較厲害」這麼簡單。","規模／股東／風險／未來計畫"],
      ["一句話講清楚","行號＝獨資／合夥經營\n公司＝獨立法人組織"],
      ["差別會影響什麼？","責任範圍\n稅務處理\n股東結構\n未來展店與募資"],
      ["先決定怎麼做生意，再決定怎麼登記。","不要只因朋友說：大家都開有限公司。"]
    ],
    fb:"很多創業者第一個問題就是：「我要不要開公司？」但公司不是比較高級的行號。\n\n組織型態會牽涉責任、稅務、股東結構與未來展店方式。先想清楚這家店未來怎麼經營，再選適合的組織，會比跟著朋友的答案走更實際。\n\n你的店是自己做、找合夥人，還是計畫未來展店？這些答案都會影響選擇。\n\n佳赫稅務｜餐飲開店不踩雷",
    ig:"公司不是「比較厲害的行號」。\n\n開店要選公司或行號，應該看經營規模、股東、風險與未來計畫。責任範圍、稅務處理、股東結構與展店募資，都可能因此不同。\n\n先決定怎麼做生意，再決定怎麼登記。\n\n#佳赫稅務 #公司設立 #行號登記 #餐飲創業 #創業規劃"
  },
  {
    id:"05", stage:2, title:"月營收不到 10 萬，就完全不用繳稅？",
    cards:[
      ["月營收不到 10 萬，就完全不用繳稅？",""],
      ["這句話只講了一半。","10 萬談的是一般飲食業營業稅起徵點。"],
      ["營業稅 ≠ 所有稅。","沒有營業稅，不代表沒有所得問題。"],
      ["老闆最容易混在一起的三件事","營業額／營業稅／所得稅"],
      ["小店也要把帳留下來。","今天沒超過，不代表永遠不會超過。"]
    ],
    fb:"「我一個月不到 10 萬，所以什麼稅都不用管？」這是餐飲創業最常見的誤會之一。\n\n10 萬元主要是在談一般飲食業營業稅起徵點，不代表所有稅務問題一起消失。營業額、營業稅、所得稅是不同概念。\n\n店還小的時候就把帳記好，未來生意變好才不會突然全部重來。\n\n佳赫稅務｜餐飲開店不踩雷",
    ig:"月營收不到 10 萬，就什麼稅都不用管？這句話只講了一半。\n\n10 萬談的是一般飲食業的營業稅起徵點；營業額、營業稅與所得稅，是三個不同概念。小店也要留下帳務紀錄，因為今天沒超過，不代表永遠不會超過。\n\n#佳赫稅務 #營業稅 #所得稅 #餐飲創業 #小店經營"
  },
  {
    id:"06", stage:2, title:"月營收超過 20 萬，就一定要開發票？",
    cards:[
      ["月營收超過 20 萬，就一定要開發票？",""],
      ["20 萬很重要，但不要背成死規則。",""],
      ["還要看營業性質與國稅局認定。",""],
      ["簡單理解","10 萬以下：可能未達起徵點\n10～20 萬：常見查定課徵\n達 20 萬或經認定：可能使用統一發票"],
      ["生意變好是好事。","帳務制度也要跟著升級。"]
    ],
    fb:"「超過 20 萬就一定要開發票」這句話很常聽到，但真正判斷時還要看營業性質、規模與國稅局認定。\n\n20 萬是一個非常重要的門檻，但不要把它背成所有店家都一模一樣的死規則。生意變好值得開心，帳務制度也要同步升級。\n\n如果營收正在接近門檻，建議提早整理帳務與收款資料。\n\n佳赫稅務｜餐飲開店不踩雷",
    ig:"20 萬很重要，但不要背成所有店家都一樣的死規則。\n\n是否使用統一發票，還要看營業性質、規模與國稅局認定。生意變好是好事，帳務制度也要跟著升級。\n\n#佳赫稅務 #統一發票 #營業稅 #餐飲創業 #帳務管理"
  },
  {
    id:"07", stage:2, title:"隔壁麵店不用開發票，為什麼我要？",
    cards:[
      ["隔壁麵店不用開發票，為什麼我要？",""],
      ["因為國稅局不是在玩「大家找不同」。",""],
      ["看起來都是麵店，條件可能完全不同。","營業規模／設備／交易方式／實際營業狀況"],
      ["稅務不能抄隔壁答案。",""],
      ["別問：他為什麼不用？","先問：我的店適用哪一種？"]
    ],
    fb:"同一條街、同樣賣麵，為什麼隔壁不用開發票，我卻要？\n\n因為稅務判斷不是只看招牌寫什麼。營業規模、設備、交易方式與實際營業狀況都有可能不同。最危險的做法，就是直接照抄隔壁店的做法。\n\n你的店，還是要看你自己的條件。\n\n佳赫稅務｜餐飲開店不踩雷",
    ig:"稅務不能抄隔壁答案。\n\n看起來都是麵店，營業規模、設備、交易方式與實際營業狀況都可能不同。與其問「他為什麼不用」，更應該先確認「我的店適用哪一種」。\n\n#佳赫稅務 #統一發票 #餐飲稅務 #麵店創業 #開店知識"
  },
  {
    id:"08", stage:2, title:"咖啡機買了 20 萬，發票卻被老闆丟了？",
    cards:[
      ["咖啡機買了 20 萬，發票呢？「不知道耶。」",""],
      ["開店最容易消失的，不是錢，是單據。",""],
      ["這些東西都別亂丟","設備\n裝潢\n進貨\n租金與相關憑證"],
      ["花錢不等於帳上自動有成本。","憑證要留、帳要做。"],
      ["開店第一個 SOP","錢付出去 → 憑證留下來 → 分類保存"]
    ],
    fb:"裝潢、咖啡機、冰箱、桌椅、第一批進貨……開店前錢花得像流水，但最常發生的事情是：東西都買了，憑證不知道去哪裡。\n\n花錢不等於帳上自動會出現成本。開店第一個 SOP 很簡單：錢付出去，憑證留下來，再做好分類。\n\n今天就準備一個固定位置，專門收好每一張單據。\n\n佳赫稅務｜餐飲開店不踩雷",
    ig:"開店最容易消失的，不是錢，是單據。\n\n設備、裝潢、進貨、租金與相關憑證都別亂丟。花錢不等於帳上自動有成本。\n\n第一個 SOP：錢付出去 → 憑證留下來 → 分類保存。\n\n#佳赫稅務 #憑證管理 #餐飲帳務 #咖啡店創業 #創業SOP"
  },
  {
    id:"09", stage:3, title:"客人用 LINE Pay，國稅局就看不到？",
    cards:[
      ["客人不用現金，這筆就不算營業額？",""],
      ["刷卡、轉帳、LINE Pay 都只是「怎麼收錢」。",""],
      ["營收看交易，不是看鈔票有沒有進抽屜。",""],
      ["餐飲店常見四種錢","現金\n刷卡\n行動支付\n平台款項"],
      ["收款管道越多，對帳越重要。","不要月底才開始猜錢去哪裡。"]
    ],
    fb:"現在餐飲店收錢的方式越來越多：現金、刷卡、轉帳、LINE Pay、外送平台。\n\n支付方式只是「錢怎麼進來」，不是決定「這算不算營收」。收款管道越多，越需要把每一筆交易與撥款對清楚。\n\n別等月底才開始猜錢跑去哪裡。你目前有幾種收款方式呢？\n\n佳赫稅務｜餐飲開店不踩雷",
    ig:"支付方式只是「怎麼收錢」，不是決定「算不算營收」。\n\n現金、刷卡、行動支付與平台款項，都要回到實際交易來看。收款管道越多，對帳越重要。\n\n#佳赫稅務 #LINEPay #行動支付 #餐飲營收 #對帳"
  },
  {
    id:"10", stage:3, title:"餐點沒漏單，帳卻漏了一整排？",
    cards:[
      ["POS 12 萬，刷卡 8 萬，銀行卻不是 20 萬？",""],
      ["先別懷疑店員。","可能還有手續費／退款／平台撥款時間差。"],
      ["每天至少對這四個數字","POS\n現金\n刷卡與支付\n外送平台"],
      ["對帳不是為了抓人。","是要知道：錢到底有沒有進來。"],
      ["生意越忙，越不能月底才算帳。",""]
    ],
    fb:"餐點沒有漏單，為什麼銀行帳戶的數字還是對不起來？\n\n別急著先懷疑店員，餐飲業常見的差異還包括刷卡手續費、退款、平台撥款時間差。每天把 POS、現金、刷卡、行動支付與外送平台簡單對一次，月底就不需要考古。\n\n對帳不是為了抓人，而是知道錢到底有沒有進來。\n\n佳赫稅務｜餐飲開店不踩雷",
    ig:"POS、刷卡與銀行數字對不起來，先別急著懷疑店員。\n\n手續費、退款、平台撥款時間差，都可能造成差異。每天對一次 POS、現金、刷卡支付與外送平台，月底就不必考古。\n\n#佳赫稅務 #餐飲對帳 #POS系統 #現金流 #餐飲管理"
  },
  {
    id:"11", stage:3, title:"每天排隊三小時，老闆月底卻吃泡麵？",
    cards:[
      ["每天排隊，為什麼月底還是沒錢？",""],
      ["因為營業額不是你的薪水。",""],
      ["一碗飯賣 100 元，不代表賺 100 元。","食材／人事／租金／平台與其他成本"],
      ["老闆至少要看 3 個數字。","營業額／毛利／最後剩多少"],
      ["人潮很漂亮，現金流才是真的。",""]
    ],
    fb:"店門口每天排隊，老闆卻到了月底還在問：「錢到底去哪裡？」\n\n因為營業額不是利潤。一碗 100 元的餐點，裡面還有食材、人事、租金、平台費與其他成本。\n\n人潮很漂亮，但最後真正能留下多少，才是經營。老闆至少要看營業額、毛利，以及最後剩多少。\n\n佳赫稅務｜餐飲開店不踩雷",
    ig:"排隊不等於賺錢，營業額也不是老闆的薪水。\n\n一碗 100 元的餐點，還要扣掉食材、人事、租金、平台與其他成本。人潮很漂亮，現金流才是真的。\n\n#佳赫稅務 #餐飲成本 #毛利 #現金流 #餐飲經營"
  },
  {
    id:"12", stage:4, title:"外送平台抽走三成，我到底要報多少？",
    cards:[
      ["客人點 1,000 元，平台只匯 700 元。那我營收是 700？",""],
      ["先把兩件事拆開。","客人的消費金額\n平台收取的相關費用"],
      ["入帳淨額，不一定等於你的銷售額。",""],
      ["外送對帳至少看","訂單金額\n折扣\n退款\n平台費用\n實際撥款"],
      ["不要只看銀行進多少錢。","平台帳單也要一起看。"]
    ],
    fb:"外送平台匯進帳戶的金額，通常已經扣過平台相關費用。如果只看銀行實際入帳，很容易把「銷售」與「平台費用」混在一起。\n\n做平台生意，訂單金額、折扣、退款、平台費用、實際撥款都要一起看。帳看懂了，才知道平台到底替你帶來多少生意。\n\n別只看銀行入帳，記得下載並保存平台帳單。\n\n佳赫稅務｜餐飲開店不踩雷",
    ig:"客人點 1,000 元，平台只匯 700 元，營收就是 700 元嗎？\n\n入帳淨額不一定等於銷售額。訂單金額、折扣、退款、平台費用與實際撥款，都要一起對。\n\n#佳赫稅務 #外送平台 #平台抽成 #餐飲對帳 #營收管理"
  },
  {
    id:"13", stage:5, title:"媽媽來幫忙洗碗，也要研究勞健保？",
    cards:[
      ["媽媽偶爾來幫忙，跟正式請員工，是同一件事嗎？",""],
      ["重點不是叫媽媽、弟弟還是朋友。","要看實際工作關係。"],
      ["人一多，薪資與投保問題就會跟著來。",""],
      ["開始請人，就建立基本資料","到職資料\n薪資紀錄\n出勤\n相關投保"],
      ["別等員工出問題才補制度。",""]
    ],
    fb:"剛開店時，家人來幫忙很常見。但當店越來越忙、開始固定排班、請工讀生或正職，人事制度就不能再靠默契。\n\n薪資、出勤、到職資料與相關投保應該逐步建立。這篇佳赫不談勞動法細節，只提醒老闆：人一多，制度就要跟著長大。\n\n別等員工出問題，才回頭補制度。\n\n佳赫稅務｜餐飲開店不踩雷",
    ig:"重點不是叫媽媽、弟弟還是朋友，而是實際工作關係。\n\n開始固定排班、請工讀生或正職後，到職資料、薪資紀錄、出勤與相關投保，就應該逐步建立。人一多，制度也要跟著長大。\n\n#佳赫稅務 #餐飲人事 #員工管理 #薪資紀錄 #餐飲創業"
  },
  {
    id:"14", stage:5, title:"老闆都退休了，稅籍還在上班？",
    cards:[
      ["店關了，稅籍不會自己下班。",""],
      ["鐵門拉下來 ≠ 手續結束。",""],
      ["收店還有事情要處理","商業／公司狀態\n稅籍\n食品業者資料\n未完成申報"],
      ["「先放著」最容易變成未來的麻煩。",""],
      ["開店要有流程，收店也要。","停／歇業前，把該結束的事情結束乾淨。"]
    ],
    fb:"很多老闆以為店門一關、生意不做了，事情自然就結束。\n\n實際上，商業或公司狀態、稅籍、食品業者資料與未完成申報，都可能還需要處理。開店有流程，收店也一樣。\n\n真正的結束，不是鐵門拉下來，而是該完成的程序都完成。\n\n佳赫稅務｜餐飲開店不踩雷",
    ig:"鐵門拉下來，不等於手續全部結束。\n\n商業或公司狀態、稅籍、食品業者資料與未完成申報，都可能需要處理。開店有流程，收店也要把該結束的事情結束乾淨。\n\n#佳赫稅務 #停業 #歇業 #稅籍 #餐飲收店"
  }
];

const state = { post: 0, card: 0, caption: "fb" };
const listEl = document.querySelector("#postList");
const detailEl = document.querySelector("#postDetail");
const searchInput = document.querySelector("#searchInput");
const sidebar = document.querySelector("#sidebar");
const backdrop = document.querySelector("#backdrop");

function imagePath(postId, cardIndex){
  return "./" + postId + "-" + String(cardIndex + 1).padStart(2,"0") + ".jpg";
}

function renderList(query=""){
  const q = query.trim().toLowerCase();
  listEl.innerHTML = posts.map((post,index) => {
    const visible = !q || (post.id + post.title + STAGES[post.stage]).toLowerCase().includes(q);
    if(!visible) return "";
    return '<button class="post-link ' + (index===state.post ? 'active' : '') + '" data-index="' + index + '">' +
      '<span class="post-number">' + post.id + '</span><span><strong>' + post.title + '</strong><small>' + STAGES[post.stage] + '</small></span></button>';
  }).join("");
  listEl.querySelectorAll(".post-link").forEach(button => button.addEventListener("click", () => selectPost(Number(button.dataset.index))));
}

function renderDetail(){
  const post = posts[state.post];
  const card = post.cards[state.card];
  const caption = state.caption === "fb" ? post.fb : post.ig;
  detailEl.innerHTML =
    '<article class="detail">' +
      '<div class="eyebrow">POST ' + post.id + ' · 佳赫稅務</div>' +
      '<h1>' + post.title + '</h1>' +
      '<div class="meta-row"><span class="pill">' + STAGES[post.stage] + '</span><span class="pill">5 張圖卡</span><span class="pill">FB／IG 共用 4:6</span></div>' +
      '<div class="gallery-layout">' +
        '<div class="viewer">' +
          '<div class="card-stage"><img src="' + imagePath(post.id,state.card) + '" alt="' + post.title + '，第 ' + (state.card+1) + ' 張">' +
          '<button class="nav-arrow prev" aria-label="上一張">‹</button><button class="nav-arrow next" aria-label="下一張">›</button></div>' +
          '<div class="thumbs">' + post.cards.map((_,i) => '<button class="thumb ' + (i===state.card?'active':'') + '" data-card="' + i + '" aria-label="顯示第 ' + (i+1) + ' 張"><img src="' + imagePath(post.id,i) + '" alt=""></button>').join("") + '</div>' +
          '<div class="counter">' + (state.card+1) + ' / 5</div>' +
        '</div>' +
        '<div class="content-copy">' +
          '<p class="section-label">圖卡逐張內容</p>' +
          '<div class="cards-copy">' + post.cards.map((item,i) => '<div class="card-copy ' + (i===state.card?'active':'') + '" data-card="' + i + '"><b>' + String(i+1).padStart(2,"0") + '</b><div><strong>' + item[0] + '</strong>' + (item[1]?'<p>'+item[1]+'</p>':'') + '</div></div>').join("") + '</div>' +
          '<p class="section-label">社群貼文文案</p>' +
          '<div class="caption-tabs"><button class="caption-tab ' + (state.caption==="fb"?'active':'') + '" data-caption="fb">Facebook</button><button class="caption-tab ' + (state.caption==="ig"?'active':'') + '" data-caption="ig">Instagram</button></div>' +
          '<div class="caption-box"><p class="caption-text">' + caption + '</p><button class="copy-button">複製 ' + (state.caption==="fb"?'Facebook':'Instagram') + ' 文案</button></div>' +
        '</div>' +
      '</div>' +
    '</article>';

  detailEl.querySelector(".prev").addEventListener("click", () => selectCard((state.card+4)%5));
  detailEl.querySelector(".next").addEventListener("click", () => selectCard((state.card+1)%5));
  detailEl.querySelectorAll("[data-card]").forEach(el => el.addEventListener("click", () => selectCard(Number(el.dataset.card))));
  detailEl.querySelectorAll("[data-caption]").forEach(el => el.addEventListener("click", () => { state.caption=el.dataset.caption; renderDetail(); }));
  detailEl.querySelector(".copy-button").addEventListener("click", () => copyText(caption));
  document.title = post.id + "｜" + post.title + "｜佳赫稅務";
}

function selectPost(index){
  state.post=index; state.card=0; state.caption="fb";
  history.replaceState(null,"","#post-"+posts[index].id);
  renderList(searchInput.value); renderDetail(); closeMenu();
  window.scrollTo({top:0,behavior:"smooth"});
}
function selectCard(index){ state.card=index; renderDetail(); }
async function copyText(text){
  try{ await navigator.clipboard.writeText(text); }
  catch{ const area=document.createElement("textarea");area.value=text;document.body.append(area);area.select();document.execCommand("copy");area.remove(); }
  const toast=document.querySelector("#toast");toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1600);
}
function openMenu(){sidebar.classList.add("open");backdrop.hidden=false}
function closeMenu(){sidebar.classList.remove("open");backdrop.hidden=true}

searchInput.addEventListener("input", e => renderList(e.target.value));
document.querySelector("#menuButton").addEventListener("click",openMenu);
backdrop.addEventListener("click",closeMenu);
document.addEventListener("keydown",e=>{
  if(e.key==="ArrowLeft") selectCard((state.card+4)%5);
  if(e.key==="ArrowRight") selectCard((state.card+1)%5);
  if(e.key==="Escape") closeMenu();
});

const requested = location.hash.match(/post-(\d{2})/);
if(requested){
  const found=posts.findIndex(post=>post.id===requested[1]);
  if(found>=0) state.post=found;
}
renderList();
renderDetail();

