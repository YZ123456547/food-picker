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
  { id: 1, name: "外婆家", category: "chinese", priceLevel: 2, distance: "1.2km", tags: ["杭帮菜", "家常", "排队王"], description: "经典杭帮菜，性价比高，招牌红烧肉和茶香鸡必点", rating: 4.3 },
  { id: 2, name: "鼎泰丰", category: "chinese", priceLevel: 3, distance: "3.5km", tags: ["小笼包", "米其林", "精致"], description: "米其林星级小笼包，蟹粉小笼和排骨蛋炒饭是招牌", rating: 4.6 },
  { id: 3, name: "海底捞", category: "chinese", priceLevel: 3, distance: "800m", tags: ["火锅", "服务好", "热闹"], description: "以极致服务著称的火锅店，番茄锅底和捞面必体验", rating: 4.5 },
  { id: 4, name: "沙县小吃", category: "chinese", priceLevel: 1, distance: "200m", tags: ["快餐", "便宜", "经典"], description: "国民快餐，蒸饺拌面炖罐三件套，快速解决一餐", rating: 3.8 },
  { id: 5, name: "兰州拉面", category: "chinese", priceLevel: 1, distance: "350m", tags: ["面食", "清真", "实惠"], description: "正宗兰州牛肉面，一清二白三红四绿五黄", rating: 3.9 },
  { id: 6, name: "粤式茶餐厅", category: "chinese", priceLevel: 2, distance: "1.8km", tags: ["茶餐厅", "港式", "简餐"], description: "黯然销魂饭、冰火菠萝油、丝袜奶茶，港味十足", rating: 4.2 },
  { id: 7, name: "眉州东坡", category: "chinese", priceLevel: 2, distance: "2.1km", tags: ["川菜", "东坡肘子", "聚餐"], description: "地道川菜，东坡肘子软糯入味，麻婆豆腐下饭神器", rating: 4.1 },
  { id: 8, name: "大董烤鸭", category: "chinese", priceLevel: 3, distance: "5km", tags: ["烤鸭", "北京菜", "宴请"], description: "北京烤鸭代表之一，皮脆肉嫩，配上白糖和甜面酱", rating: 4.4 },
  { id: 9, name: "一兰拉面", category: "japanese", priceLevel: 2, distance: "1.5km", tags: ["拉面", "豚骨", "一人食"], description: "经典豚骨拉面，浓汤醇厚，可以定制口味浓度", rating: 4.4 },
  { id: 10, name: "元气寿司", category: "japanese", priceLevel: 2, distance: "600m", tags: ["寿司", "回转", "新鲜"], description: "回转寿司，三文鱼和鳗鱼手握品质稳定", rating: 4.0 },
  { id: 11, name: "牛井家", category: "japanese", priceLevel: 1, distance: "400m", tags: ["牛丼", "快餐", "日式简餐"], description: "日式牛肉饭，温泉蛋牛丼套餐只要三十多", rating: 3.9 },
  { id: 12, name: "和民居酒屋", category: "japanese", priceLevel: 3, distance: "2.8km", tags: ["居酒屋", "烤串", "清酒"], description: "日式居酒屋氛围，串烧拼盘配上一壶清酒，适合下班小聚", rating: 4.3 },
  { id: 13, name: "萨莉亚", category: "western", priceLevel: 1, distance: "500m", tags: ["意餐", "平价", "学生"], description: "平价意餐之王，奶油蘑菇汤和肉酱意面不到20元", rating: 3.7 },
  { id: 14, name: "蓝蛙", category: "western", priceLevel: 3, distance: "2.3km", tags: ["汉堡", "牛排", "酒吧"], description: "美式西餐，招牌牛肉汉堡汁水丰富，适合肉食爱好者", rating: 4.2 },
  { id: 15, name: "Wagas", category: "western", priceLevel: 2, distance: "1km", tags: ["轻食", "沙拉", "健康"], description: "健康轻食品牌，招牌煎牛肉能量碗和果汁很受欢迎", rating: 4.1 },
  { id: 16, name: "必胜客", category: "western", priceLevel: 2, distance: "700m", tags: ["披萨", "意面", "连锁"], description: "经典披萨连锁，超级至尊披萨和烤鸡翅是必点", rating: 3.8 },
  { id: 17, name: "姜虎东烤肉", category: "korean", priceLevel: 3, distance: "1.8km", tags: ["烤肉", "韩式", "热闹"], description: "韩式烤肉专门店，五花肉和牛肋条烤到微焦包生菜吃", rating: 4.4 },
  { id: 18, name: "韩式拌饭店", category: "korean", priceLevel: 1, distance: "300m", tags: ["拌饭", "简餐", "韩式"], description: "韩式石锅拌饭，底部锅巴焦脆，拌上辣酱一口满足", rating: 3.9 },
  { id: 19, name: "安东鸡", category: "korean", priceLevel: 2, distance: "2.5km", tags: ["炖鸡", "韩式", "芝士"], description: "韩式安东炖鸡，酱汁浓郁配上拉丝芝士和粉条", rating: 4.0 },
  { id: 20, name: "越南河粉", category: "southeast", priceLevel: 1, distance: "450m", tags: ["河粉", "越南", "清爽"], description: "越南牛肉河粉，汤头清澈鲜甜，挤上柠檬放上薄荷", rating: 4.0 },
  { id: 21, name: "芒果糯米饭", category: "southeast", priceLevel: 2, distance: "1.1km", tags: ["甜品", "泰式", "芒果"], description: "泰式芒果糯米饭，椰奶香甜配新鲜芒果，治愈系甜品", rating: 4.2 },
  { id: 22, name: "咖喱之家", category: "southeast", priceLevel: 2, distance: "1.6km", tags: ["咖喱", "泰式", "浓郁"], description: "泰式咖喱专门店，黄咖喱蟹和绿咖喱鸡各有风味", rating: 4.1 },
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

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
