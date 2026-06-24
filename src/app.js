// ============= DATA =============
const CATEGORIES = [
  { id: "all", label: "全部", icon: "🍽️" },
  { id: "chinese", label: "中餐", icon: "🥟" },
  { id: "japanese", label: "日料", icon: "🍣" },
  { id: "western", label: "西餐", icon: "🥩" },
  { id: "korean", label: "韩餐", icon: "🥘" },
  { id: "southeast", label: "东南亚", icon: "🍜" },
  { id: "random", label: "随便", icon: "🎲" },
];

const PRICE_LEVELS = [
  { id: 1, label: "$", desc: "实惠" },
  { id: 2, label: "$$", desc: "适中" },
  { id: 3, label: "$$$", desc: "精致" },
];

const DISTANCE_OPTIONS = [
  { id: 0.5, label: "500m" },
  { id: 1, label: "1km" },
  { id: 2, label: "2km" },
  { id: 5, label: "5km" },
];

let ITEMS = [
  { id: 1, name: "黄但记陈村粉", category: "chinese", priceLevel: 2, distance: "8.5km", tags: ["顺德", "陈村粉", "老字号"], description: "百年老店，陈村粉薄如蝉翼，牛腩捞粉和排骨蒸粉是招牌", rating: 4.5 },
  { id: 2, name: "大良毋米粥", category: "chinese", priceLevel: 3, distance: "6km", tags: ["顺德", "粥底火锅", "毋米粥"], description: "顺德特色粥底火锅，米粥做锅底涮海鲜和肉类，鲜滑无比", rating: 4.7 },
  { id: 3, name: "仁信老铺（顺德）", category: "chinese", priceLevel: 1, distance: "5km", tags: ["顺德", "甜品", "双皮奶"], description: "顺德双皮奶鼻祖，奶香浓郁入口即化，姜撞奶和椰子冻也一流", rating: 4.6 },
  { id: 4, name: "民信老铺", category: "chinese", priceLevel: 1, distance: "5.5km", tags: ["顺德", "甜品", "双皮奶"], description: "与仁信齐名的双皮奶老店，炸牛奶外酥里嫩", rating: 4.5 },
  { id: 5, name: "了能私房菜", category: "chinese", priceLevel: 3, distance: "7km", tags: ["顺德", "私房菜", "高端"], description: "顺德私房菜代表，烧鹅皮脆肉嫩，煎酿鲮鱼工艺复杂", rating: 4.6 },
  { id: 6, name: "猪肉婆私房菜", category: "chinese", priceLevel: 3, distance: "12km", tags: ["顺德", "私房菜", "网红"], description: "顺德最火爆的私房菜之一，烧鹅和盐水鸡是必点，排队至少1小时", rating: 4.7 },
  { id: 7, name: "聚福山庄", category: "chinese", priceLevel: 3, distance: "6km", tags: ["顺德", "早茶", "粤菜"], description: "顺德老牌早茶，虾饺烧卖凤爪样样正宗，大厅热闹有烟火气", rating: 4.4 },
  { id: 8, name: "顺峰山庄", category: "chinese", priceLevel: 3, distance: "10km", tags: ["顺德", "海鲜", "宴请"], description: "顺德高端粤菜，海鲜池现捞现做，适合商务宴请", rating: 4.5 },
  { id: 9, name: "红星光发煲仔饭", category: "chinese", priceLevel: 1, distance: "9km", tags: ["顺德", "煲仔饭", "老字号"], description: "容桂最出名的煲仔饭，腊味煲仔饭饭焦金黄香脆", rating: 4.4 },
  { id: 10, name: "阿多私房菜", category: "chinese", priceLevel: 3, distance: "11km", tags: ["顺德", "私房菜", "桑拿鸡"], description: "招牌桑拿鸡，蒸锅上层鸡肉下层鸡汤，一菜两吃", rating: 4.6 },
  { id: 11, name: "松记餐厅", category: "chinese", priceLevel: 3, distance: "7.5km", tags: ["顺德", "清水火锅", "打边炉"], description: "清水打边炉，清水锅底涮新鲜食材，蘸姜葱酱油吃原味", rating: 4.5 },
  { id: 12, name: "牛展煲仔饭", category: "chinese", priceLevel: 1, distance: "6.5km", tags: ["顺德", "煲仔饭", "网红"], description: "老板个性十足，但煲仔饭确实好吃，窝蛋牛肉饭必点", rating: 4.3 },
  { id: 13, name: "肥光鱼生", category: "chinese", priceLevel: 2, distance: "8km", tags: ["顺德", "鱼生", "地道"], description: "顺德鱼生专门店，草鱼现杀现片，配料丰富口感层次分明", rating: 4.5 },
  { id: 14, name: "杏坛公平靓正", category: "chinese", priceLevel: 1, distance: "15km", tags: ["顺德", "粥底火锅", "抵食"], description: "主打粥底火锅和生滚粥，价格实惠味道正，夜宵首选", rating: 4.3 },
  { id: 15, name: "味可道美食坊", category: "chinese", priceLevel: 2, distance: "7km", tags: ["顺德", "粤菜", "创新"], description: "创新顺德菜，黑松露炒蛋和脆皮豆腐口碑极好", rating: 4.4 },
  { id: 16, name: "禅城酒店中餐厅", category: "chinese", priceLevel: 3, distance: "2km", tags: ["禅城", "粤菜", "老字号"], description: "佛山老牌粤菜馆，干炒牛河和烧味拼盘水准稳定", rating: 4.3 },
  { id: 17, name: "应记面家", category: "chinese", priceLevel: 1, distance: "1.5km", tags: ["禅城", "面食", "云吞面"], description: "佛山老字号面店，竹升面爽滑弹牙，鲜虾云吞馅料饱满", rating: 4.2 },
  { id: 18, name: "岭南天地餐饮群", category: "chinese", priceLevel: 2, distance: "1km", tags: ["禅城", "美食街", "多元"], description: "岭南天地聚集数十家餐厅，从粤菜到异国料理应有尽有", rating: 4.1 },
  { id: 19, name: "辉记糖水", category: "chinese", priceLevel: 1, distance: "1.2km", tags: ["禅城", "糖水", "甜品"], description: "街坊糖水铺，芝麻糊杏仁糊现磨现煮，便宜大碗", rating: 4.4 },
  { id: 20, name: "北香园饺子馆", category: "chinese", priceLevel: 1, distance: "1.8km", tags: ["禅城", "饺子", "老字号"], description: "佛山老牌饺子馆，韭菜猪肉饺和紫菜卷是招牌", rating: 4.1 },
  { id: 21, name: "金城大酒店中餐厅", category: "chinese", priceLevel: 3, distance: "2.5km", tags: ["禅城", "粤菜", "宴请"], description: "老牌酒店中餐厅，环境优雅，传统粤菜做法正宗", rating: 4.2 },
  { id: 22, name: "有记餐厅", category: "chinese", priceLevel: 2, distance: "2km", tags: ["禅城", "粤菜", "街坊"], description: "街坊推荐的粤菜小馆，白切鸡和豉汁蒸排骨味道家常", rating: 4.3 },
  { id: 23, name: "天海酒家", category: "chinese", priceLevel: 2, distance: "1.5km", tags: ["禅城", "粤菜", "老字号"], description: "佛山老字号，最有名的是茶市，性价比超高", rating: 4.2 },
  { id: 24, name: "大可以粥粉店", category: "chinese", priceLevel: 1, distance: "1km", tags: ["禅城", "粥粉", "快餐"], description: "佛山老牌粥粉店，招牌状元及第粥和肠粉", rating: 4 },
  { id: 25, name: "陶都鱼生", category: "chinese", priceLevel: 2, distance: "3km", tags: ["禅城", "鱼生", "顺德风味"], description: "禅城吃鱼生的好去处，价格比顺德实惠，口味正宗", rating: 4.2 },
  { id: 26, name: "九江酒家", category: "chinese", priceLevel: 2, distance: "18km", tags: ["南海", "粤菜", "九江"], description: "九江老字号，九江煎堆和九江蒸粽是传统招牌", rating: 4.2 },
  { id: 27, name: "西樵山素菜馆", category: "chinese", priceLevel: 2, distance: "15km", tags: ["南海", "素菜", "斋菜"], description: "西樵山脚下老牌素菜馆，素烧鹅和罗汉斋口感逼真", rating: 4.1 },
  { id: 28, name: "桂城潮庭", category: "chinese", priceLevel: 3, distance: "3km", tags: ["南海", "潮州菜", "海鲜"], description: "南海桂城高水准潮州菜，冻蟹和卤水拼盘是招牌", rating: 4.4 },
  { id: 29, name: "大沥鸿福山庄", category: "chinese", priceLevel: 2, distance: "12km", tags: ["南海", "粤菜", "宴席"], description: "大沥大型粤菜酒楼，适合家族聚餐和宴席", rating: 4 },
  { id: 30, name: "里水御苑", category: "chinese", priceLevel: 3, distance: "16km", tags: ["南海", "粤菜", "景观"], description: "里水河畔景观餐厅，环境优美适合约会", rating: 4.2 },
  { id: 31, name: "黄岐嘉洲广场美食城", category: "chinese", priceLevel: 2, distance: "10km", tags: ["南海", "美食城", "多元"], description: "嘉洲广场内数十家餐厅，从茶餐厅到火锅应有尽有", rating: 4 },
  { id: 32, name: "盐步秋茄专门店", category: "chinese", priceLevel: 1, distance: "11km", tags: ["南海", "特色菜", "农家菜"], description: "盐步特产秋茄的各种做法，蒸炒炸焖各有风味", rating: 4.1 },
  { id: 33, name: "丹灶仙湖度假区餐厅", category: "chinese", priceLevel: 2, distance: "25km", tags: ["南海", "农家菜", "湖景"], description: "仙湖边上的农家菜馆，水库鱼和走地鸡是特色", rating: 4 },
  { id: 34, name: "狮山大学城美食街", category: "chinese", priceLevel: 1, distance: "10km", tags: ["南海", "小吃", "平价"], description: "大学城周边平价美食，种类丰富价格亲民", rating: 3.9 },
  { id: 35, name: "平洲玉器街茶餐厅", category: "chinese", priceLevel: 1, distance: "8km", tags: ["南海", "茶餐厅", "快餐"], description: "平洲玉器街口的港式茶餐厅，焗猪扒饭和奶茶水准不错", rating: 3.9 },
  { id: 36, name: "三水河鲜舫", category: "chinese", priceLevel: 2, distance: "30km", tags: ["三水", "河鲜", "江景"], description: "北江边的河鲜餐厅，即捞即做，清蒸河鱼鲜甜无比", rating: 4.3 },
  { id: 37, name: "三水温泉度假村餐厅", category: "chinese", priceLevel: 3, distance: "35km", tags: ["三水", "度假", "粤菜"], description: "温泉度假村内中餐厅，环境好适合周末出游", rating: 4 },
  { id: 38, name: "西南街道老字号", category: "chinese", priceLevel: 1, distance: "28km", tags: ["三水", "老字号", "街坊"], description: "三水西南的老牌小馆，主打家常粤菜和炖汤", rating: 4.1 },
  { id: 39, name: "三水荷花世界餐厅", category: "chinese", priceLevel: 2, distance: "32km", tags: ["三水", "景区", "粤菜"], description: "荷花世界景区内餐厅，莲子宴和荷叶蒸菜是特色", rating: 3.9 },
  { id: 40, name: "芦苞祖庙斋菜馆", category: "chinese", priceLevel: 1, distance: "40km", tags: ["三水", "斋菜", "寺庙"], description: "芦苞祖庙旁的斋菜馆，素菜做得精致美味", rating: 4 },
  { id: 41, name: "高明盈香生态园餐厅", category: "chinese", priceLevel: 2, distance: "45km", tags: ["高明", "生态", "农家菜"], description: "盈香生态园内的农家餐厅，食材自产自销", rating: 4.1 },
  { id: 42, name: "高明濑粉专门店", category: "chinese", priceLevel: 1, distance: "40km", tags: ["高明", "濑粉", "特产"], description: "正宗高明濑粉，米香味浓郁，配上猪骨汤底", rating: 4.2 },
  { id: 43, name: "杨和镇农家菜", category: "chinese", priceLevel: 1, distance: "42km", tags: ["高明", "农家菜", "土鸡"], description: "杨和镇地道农家菜，走地鸡和自种蔬菜是招牌", rating: 4 },
  { id: 44, name: "皂幕山泉山庄", category: "chinese", priceLevel: 2, distance: "50km", tags: ["高明", "山景", "泉水宴"], description: "皂幕山脚下，用山泉水做的菜别有风味", rating: 4.2 },
  { id: 45, name: "更合镇牛杂煲", category: "chinese", priceLevel: 1, distance: "55km", tags: ["高明", "牛杂", "大排档"], description: "更合镇最有名的牛杂煲，酱汁浓郁配白米饭绝了", rating: 4 },
  { id: 46, name: "小山日料（岭南天地）", category: "japanese", priceLevel: 3, distance: "1km", tags: ["禅城", "日料", "精致"], description: "佛山顶级日料，刺身新鲜，环境雅致", rating: 4.3 },
  { id: 47, name: "筑地食堂", category: "japanese", priceLevel: 2, distance: "1.5km", tags: ["禅城", "日料", "定食"], description: "日式定食专门店，鳗鱼饭和炸猪排定食性价比高", rating: 4.1 },
  { id: 48, name: "炭之家烤肉", category: "japanese", priceLevel: 3, distance: "2km", tags: ["禅城", "烤肉", "日式"], description: "日式和牛烤肉专门店，肉质上乘适合犒劳自己", rating: 4.3 },
  { id: 49, name: "万岁寿司", category: "japanese", priceLevel: 2, distance: "1.5km", tags: ["禅城", "寿司", "回转"], description: "回转寿司连锁，三文鱼和鳗鱼手握品质稳定", rating: 3.9 },
  { id: 50, name: "必胜客（佛山）", category: "western", priceLevel: 2, distance: "1.5km", tags: ["禅城", "披萨", "连锁"], description: "经典披萨连锁，超级至尊披萨和烤鸡翅", rating: 3.7 },
  { id: 51, name: "萨莉亚（佛山）", category: "western", priceLevel: 1, distance: "1.5km", tags: ["禅城", "意餐", "平价"], description: "平价意餐之王，奶油蘑菇汤和肉酱意面", rating: 3.6 },
  { id: 52, name: "姜虎东烤肉（佛山）", category: "korean", priceLevel: 3, distance: "2.5km", tags: ["禅城", "韩式", "烤肉"], description: "韩国直营烤肉店，五花肉和牛肋条包生菜吃", rating: 4.2 },
  { id: 53, name: "炭韩国烤肉", category: "korean", priceLevel: 2, distance: "2km", tags: ["禅城", "韩式", "烤肉"], description: "禅城热门韩式烤肉，小菜无限续", rating: 4 },
  { id: 54, name: "金越轩越南粉", category: "southeast", priceLevel: 1, distance: "1.5km", tags: ["禅城", "越南", "河粉"], description: "越南牛肉河粉汤头清澈鲜甜，春卷也不错", rating: 4 },
  { id: 55, name: "泰爱里泰国菜", category: "southeast", priceLevel: 2, distance: "2km", tags: ["禅城", "泰式", "咖喱"], description: "泰国菜专门店，冬阴功汤和咖喱蟹很正宗", rating: 4.1 }
];

function getFilteredItems(filters) {
  let items = [...ITEMS];
  if (filters.category && filters.category !== "all" && filters.category !== "random") {
    items = items.filter((item) => item.category === filters.category);
  }
  if (filters.maxPrice) {
    items = items.filter((item) => item.priceLevel <= filters.maxPrice);
  }
  if (filters.maxDistance) {
    items = items.filter((item) => {
      const num = parseFloat(item.distance);
      return !isNaN(num) && num <= filters.maxDistance;
    });
  }
  return items;
}

function getRandomItem(arr) {
  if (arr.length === 0) return null;
  return arr[Math.floor(Math.random() * arr.length)];
}

// ============= STATE =============
const state = {
  currentTab: "home",
  filters: { category: "all", maxPrice: null, maxDistance: null },
  favorites: JSON.parse(localStorage.getItem("shimeal_favs") || "[]"),
  history: JSON.parse(localStorage.getItem("shimeal_hist") || "[]"),
  currentResult: null,
  spinning: false,
};

function saveFavs() { localStorage.setItem("shimeal_favs", JSON.stringify(state.favorites)); }
function saveHist() { localStorage.setItem("shimeal_hist", JSON.stringify(state.history)); }

// ============= TOAST =============
let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2000);
}

// ============= CONFETTI =============
function fireConfetti() {
  const colors = ["#E85D3A", "#F4A261", "#2A9D8F", "#E9C46A", "#E74C3C"];
  for (let i = 0; i < 30; i++) {
    const el = document.createElement("div");
    el.className = "confetti";
    el.style.left = Math.random() * 100 + "%";
    el.style.top = Math.random() * 40 + 30 + "%";
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.width = 4 + Math.random() * 6 + "px";
    el.style.height = 4 + Math.random() * 6 + "px";
    el.style.animationDuration = 0.8 + Math.random() * 0.8 + "s";
    el.style.animationDelay = Math.random() * 0.3 + "s";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2000);
  }
}

// ============= RENDER FILTERS =============
function renderFilters() {
  const catBar = document.getElementById("category-bar");
  catBar.innerHTML = CATEGORIES.map((c) =>
    `<button class="filter-chip ${c.id === state.filters.category ? "active" : ""}" data-category="${c.id}">${c.icon} ${c.label}</button>`
  ).join("");

  const priceBar = document.getElementById("price-bar");
  priceBar.innerHTML = `<button class="filter-opt price-opt ${!state.filters.maxPrice ? "active" : ""}" data-price="0">不限</button>` +
    PRICE_LEVELS.map((p) =>
      `<button class="filter-opt price-opt ${state.filters.maxPrice === p.id ? "active" : ""}" data-price="${p.id}">${p.label} ${p.desc}</button>`
    ).join("");

  const distBar = document.getElementById("dist-bar");
  distBar.innerHTML = `<button class="filter-opt dist-opt ${!state.filters.maxDistance ? "active" : ""}" data-dist="0">不限距离</button>` +
    DISTANCE_OPTIONS.map((d) =>
      `<button class="filter-opt dist-opt ${state.filters.maxDistance === d.id ? "active" : ""}" data-dist="${d.id}">${d.label}</button>`
    ).join("");

  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      state.filters.category = chip.dataset.category;
      renderFilters();
      if (state.currentTab === "explore") renderExplore();
    });
  });

  document.querySelectorAll(".price-opt").forEach((opt) => {
    opt.addEventListener("click", () => {
      state.filters.maxPrice = opt.dataset.price === "0" ? null : parseInt(opt.dataset.price);
      renderFilters();
      if (state.currentTab === "explore") renderExplore();
    });
  });

  document.querySelectorAll(".dist-opt").forEach((opt) => {
    opt.addEventListener("click", () => {
      state.filters.maxDistance = opt.dataset.dist === "0" ? null : parseFloat(opt.dataset.dist);
      renderFilters();
      if (state.currentTab === "explore") renderExplore();
    });
  });
}

// ============= TAB SYSTEM =============
function switchTab(tab) {
  state.currentTab = tab;
  const views = { home: document.getElementById("view-home"), explore: document.getElementById("view-explore"), favs: document.getElementById("view-favorites"), hist: document.getElementById("view-history") };
  Object.keys(views).forEach((k) => views[k].classList.toggle("active", k === tab));
  document.querySelectorAll(".nav-item").forEach((el) => el.classList.toggle("active", el.dataset.tab === tab));
  if (tab === "explore") renderExplore();
  if (tab === "favs") renderFavs();
  if (tab === "hist") renderHist();
}

document.querySelectorAll(".nav-item").forEach((el) => el.addEventListener("click", () => switchTab(el.dataset.tab)));

// ============= HOME / SPIN =============
function renderSlotCycle(duration) {
  if (!duration) duration = 1800;
  const items = getFilteredItems(state.filters);
  const slotText = document.getElementById("slot-text");
  const resultCard = document.getElementById("result-card");
  const spinBtn = document.getElementById("spin-btn");
  const spinRings = document.querySelectorAll(".spin-ring");

  if (items.length === 0) {
    showToast("当前筛选条件下没有可选项目");
    return;
  }

  state.spinning = true;
  spinBtn.disabled = true;
  spinBtn.innerHTML = "🎰<span class=\"sub\">选择中...</span>";
  spinRings.forEach((r) => r.classList.add("spinning"));
  slotText.classList.remove("result-appear");
  resultCard.classList.remove("show");

  const names = items.map((i) => i.name);
  const totalFrames = Math.floor(duration / 60);
  let frame = 0;
  let lastIdx = 0;

  function tick() {
    if (frame >= totalFrames) {
      const winner = getRandomItem(items);
      state.currentResult = winner;
      slotText.textContent = winner.name;
      slotText.classList.add("result-appear");

      state.history = state.history.filter((h) => h.id !== winner.id);
      state.history.unshift(winner);
      if (state.history.length > 100) state.history.pop();
      saveHist();

      state.spinning = false;
      spinBtn.disabled = false;
      spinBtn.innerHTML = "再来一次<span class=\"sub\">摇一摇</span>";
      spinRings.forEach((r) => r.classList.remove("spinning"));
      fireConfetti();
      showResultCard(winner);
      return;
    }

    const progress = frame / totalFrames;
    const speed = Math.sin(progress * Math.PI) * 0.5 + 0.15;
    if (Math.random() < speed) {
      let idx;
      do { idx = Math.floor(Math.random() * names.length); } while (idx === lastIdx && names.length > 1);
      lastIdx = idx;
      slotText.textContent = names[idx];
    }
    frame++;
    requestAnimationFrame(tick);
  }

  tick();
}

function showResultCard(item) {
  const cat = CATEGORIES.find((c) => c.id === item.category);
  const priceLabel = PRICE_LEVELS.find((p) => p.id === item.priceLevel);

  document.getElementById("r-name").textContent = item.name;
  document.getElementById("r-badges").innerHTML =
    '<span class="badge p' + item.priceLevel + '">' + (priceLabel ? priceLabel.label + " " + priceLabel.desc : "") + '</span>' +
    '<span class="badge cat">' + (cat ? cat.icon + " " + cat.label : "") + '</span>' +
    '<span class="badge">📍 ' + item.distance + "</span>" +
    item.tags.slice(0, 2).map((t) => '<span class="badge">#' + t + "</span>").join("");

  document.getElementById("r-desc").textContent = item.description;

  const fullStars = Math.floor(item.rating);
  const halfStar = item.rating % 1 >= 0.5;
  const stars = "★".repeat(fullStars) + (halfStar ? "½" : "");
  document.getElementById("r-stars").textContent = stars;
  document.getElementById("r-rating-num").textContent = item.rating;

  const favBtn = document.getElementById("r-fav-btn");
  const isFav = state.favorites.some((f) => f.id === item.id);
  favBtn.classList.toggle("favorited", isFav);
  favBtn.textContent = isFav ? "♥ 已收藏" : "♡ 收藏";

  document.getElementById("result-card").classList.add("show");
}

// ============= RESULT CARD EVENTS =============
document.getElementById("r-fav-btn").addEventListener("click", function () {
  if (!state.currentResult) return;
  const item = state.currentResult;
  const idx = state.favorites.findIndex((f) => f.id === item.id);
  if (idx >= 0) {
    state.favorites.splice(idx, 1);
    showToast("已取消收藏");
  } else {
    state.favorites.unshift(item);
    showToast("已收藏 ❤️");
  }
  saveFavs();
  const btn = document.getElementById("r-fav-btn");
  const isFav = state.favorites.some((f) => f.id === item.id);
  btn.classList.toggle("favorited", isFav);
  btn.textContent = isFav ? "♥ 已收藏" : "♡ 收藏";
});

document.getElementById("r-retry-btn").addEventListener("click", function () {
  renderSlotCycle();
});

document.getElementById("spin-btn").addEventListener("click", function () {
  if (state.spinning) return;
  renderSlotCycle();
});

// ============= RESET =============
document.getElementById("reset-btn").addEventListener("click", function () {
  state.filters = { category: "all", maxPrice: null, maxDistance: null };
  state.currentResult = null;
  renderFilters();
  document.getElementById("slot-text").textContent = "👆 点击开始";
  document.getElementById("result-card").classList.remove("show");
  if (state.currentTab === "explore") renderExplore();
  showToast("筛选已重置");
});

// ============= EXPLORE =============
function renderExplore() {
  const items = getFilteredItems(state.filters);
  const exploreGrid = document.getElementById("explore-grid");
  document.getElementById("explore-count").textContent = "共 " + items.length + " 个选项";

  if (items.length === 0) {
    exploreGrid.innerHTML = '<div class="list-empty"><div class="icon">🔍</div><p>没有匹配的选项，试试调整筛选条件</p></div>';
    return;
  }

  exploreGrid.innerHTML = items.map(function (item) {
    const isFav = state.favorites.some((f) => f.id === item.id);
    const pLabel = PRICE_LEVELS.find((p) => p.id === item.priceLevel);
    return '<div class="item-card" data-id="' + item.id + '">' +
      '<div class="item-card-info">' +
      '<div class="item-card-name">' + item.name + '</div>' +
      '<div class="item-card-meta">' +
      '<span>' + (pLabel ? pLabel.label : "") + '</span>' +
      '<span>📍 ' + item.distance + '</span>' +
      '<span>★ ' + item.rating + '</span>' +
      "</div></div>" +
      '<div class="item-card-action">' +
      '<button class="fav-btn ' + (isFav ? "active" : "") + '" data-id="' + item.id + '">' + (isFav ? "♥" : "♡") + "</button>" +
      "</div></div>";
  }).join("");

  exploreGrid.querySelectorAll(".fav-btn").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      const item = ITEMS.find((i) => i.id === id);
      if (!item) return;
      const idx = state.favorites.findIndex((f) => f.id === id);
      if (idx >= 0) {
        state.favorites.splice(idx, 1);
        showToast("已取消收藏");
      } else {
        state.favorites.unshift(item);
        showToast("已收藏 ❤️");
      }
      saveFavs();
      renderExplore();
    });
  });

  exploreGrid.querySelectorAll(".item-card").forEach(function (card) {
    card.addEventListener("click", function () {
      const id = parseInt(card.dataset.id);
      const item = ITEMS.find((i) => i.id === id);
      if (item) {
        state.currentResult = item;
        document.getElementById("slot-text").textContent = item.name;
        document.getElementById("slot-text").classList.add("result-appear");
        document.getElementById("result-card").classList.remove("show");
        showResultCard(item);
        fireConfetti();
        switchTab("home");
      }
    });
  });
}

// ============= FAVORITES =============
function renderFavs() {
  const container = document.getElementById("favs-list");
  if (state.favorites.length === 0) {
    container.innerHTML = '<div class="list-empty"><div class="icon">💝</div><p>还没有收藏，去摇一摇收藏喜欢的店吧</p></div>';
    return;
  }
  container.innerHTML = state.favorites.map(function (item) {
    const pLabel = PRICE_LEVELS.find((p) => p.id === item.priceLevel);
    return '<div class="item-card" data-id="' + item.id + '">' +
      '<div class="item-card-info">' +
      '<div class="item-card-name">' + item.name + '</div>' +
      '<div class="item-card-meta">' +
      '<span>' + (pLabel ? pLabel.label : "") + '</span>' +
      '<span>📍 ' + item.distance + '</span>' +
      '<span>★ ' + item.rating + '</span>' +
      "</div></div>" +
      '<div class="item-card-action">' +
      '<button class="fav-btn active" data-id="' + item.id + '">♥</button>' +
      "</div></div>";
  }).join("");

  container.querySelectorAll(".fav-btn").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      state.favorites = state.favorites.filter((f) => f.id !== id);
      saveFavs();
      renderFavs();
      showToast("已取消收藏");
    });
  });

  container.querySelectorAll(".item-card").forEach(function (card) {
    card.addEventListener("click", function () {
      const id = parseInt(card.dataset.id);
      const item = ITEMS.find((i) => i.id === id);
      if (item) {
        state.currentResult = item;
        document.getElementById("slot-text").textContent = item.name;
        document.getElementById("slot-text").classList.add("result-appear");
        document.getElementById("result-card").classList.remove("show");
        showResultCard(item);
        fireConfetti();
        switchTab("home");
      }
    });
  });
}

// ============= HISTORY =============
function renderHist() {
  const container = document.getElementById("hist-list");
  if (state.history.length === 0) {
    container.innerHTML = '<div class="list-empty"><div class="icon">🕐</div><p>还没有摇过，试试摇一摇吧</p></div>';
    return;
  }
  container.innerHTML = state.history.map(function (item, idx) {
    const pLabel = PRICE_LEVELS.find((p) => p.id === item.priceLevel);
    return '<div class="item-card" data-id="' + item.id + '">' +
      '<div class="item-card-info">' +
      '<div class="item-card-name">' + (idx === 0 ? "🆕 " : "") + item.name + '</div>' +
      '<div class="item-card-meta">' +
      '<span>' + (pLabel ? pLabel.label : "") + '</span>' +
      '<span>📍 ' + item.distance + '</span>' +
      '<span>★ ' + item.rating + '</span>' +
      "</div></div></div>";
  }).join("");

  container.querySelectorAll(".item-card").forEach(function (card) {
    card.addEventListener("click", function () {
      const id = parseInt(card.dataset.id);
      const item = ITEMS.find((i) => i.id === id);
      if (item) {
        state.currentResult = item;
        document.getElementById("slot-text").textContent = item.name;
        document.getElementById("slot-text").classList.add("result-appear");
        document.getElementById("result-card").classList.remove("show");
        showResultCard(item);
        fireConfetti();
        switchTab("home");
      }
    });
  });
}

// ============= INIT =============
async function initApp() {
  try {
    const res = await fetch("/api/items");
    const data = await res.json();
    if (data.items && data.items.length > 0) {
      ITEMS.length = 0;
      ITEMS.push(...data.items);
    }
  } catch (e) {
    console.log("API not available, using local data");
  }
  renderFilters();
  renderExplore();
  renderFavs();
  renderHist();
}
initApp();
