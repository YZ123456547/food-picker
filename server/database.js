const path = require("path");
const fs = require("fs");

const DB_PATH = path.join(__dirname, "data.db");

let db = null;
let SQL = null;

const SEED_DATA = [
  { name: "外婆家", category: "chinese", priceLevel: 2, distance: "1.2km", tags: "杭帮菜,家常,排队王", description: "经典杭帮菜，性价比高，招牌红烧肉和茶香鸡必点", rating: 4.3 },
  { name: "鼎泰丰", category: "chinese", priceLevel: 3, distance: "3.5km", tags: "小笼包,米其林,精致", description: "米其林星级小笼包，蟹粉小笼和排骨蛋炒饭是招牌", rating: 4.6 },
  { name: "海底捞", category: "chinese", priceLevel: 3, distance: "800m", tags: "火锅,服务好,热闹", description: "以极致服务著称的火锅店，番茄锅底和捞面必体验", rating: 4.5 },
  { name: "沙县小吃", category: "chinese", priceLevel: 1, distance: "200m", tags: "快餐,便宜,经典", description: "国民快餐，蒸饺拌面炖罐三件套，快速解决一餐", rating: 3.8 },
  { name: "兰州拉面", category: "chinese", priceLevel: 1, distance: "350m", tags: "面食,清真,实惠", description: "正宗兰州牛肉面，一清二白三红四绿五黄", rating: 3.9 },
  { name: "粤式茶餐厅", category: "chinese", priceLevel: 2, distance: "1.8km", tags: "茶餐厅,港式,简餐", description: "黯然销魂饭、冰火菠萝油、丝袜奶茶，港味十足", rating: 4.2 },
  { name: "眉州东坡", category: "chinese", priceLevel: 2, distance: "2.1km", tags: "川菜,东坡肘子,聚餐", description: "地道川菜，东坡肘子软糯入味，麻婆豆腐下饭神器", rating: 4.1 },
  { name: "大董烤鸭", category: "chinese", priceLevel: 3, distance: "5km", tags: "烤鸭,北京菜,宴请", description: "北京烤鸭代表之一，皮脆肉嫩，配上白糖和甜面酱", rating: 4.4 },
  { name: "一兰拉面", category: "japanese", priceLevel: 2, distance: "1.5km", tags: "拉面,豚骨,一人食", description: "经典豚骨拉面，浓汤醇厚，可以定制口味浓度", rating: 4.4 },
  { name: "元气寿司", category: "japanese", priceLevel: 2, distance: "600m", tags: "寿司,回转,新鲜", description: "回转寿司，三文鱼和鳗鱼手握品质稳定", rating: 4.0 },
  { name: "牛井家", category: "japanese", priceLevel: 1, distance: "400m", tags: "牛丼,快餐,日式简餐", description: "日式牛肉饭，温泉蛋牛丼套餐只要三十多", rating: 3.9 },
  { name: "和民居酒屋", category: "japanese", priceLevel: 3, distance: "2.8km", tags: "居酒屋,烤串,清酒", description: "日式居酒屋氛围，串烧拼盘配上一壶清酒，适合下班小聚", rating: 4.3 },
  { name: "萨莉亚", category: "western", priceLevel: 1, distance: "500m", tags: "意餐,平价,学生", description: "平价意餐之王，奶油蘑菇汤和肉酱意面不到20元", rating: 3.7 },
  { name: "蓝蛙", category: "western", priceLevel: 3, distance: "2.3km", tags: "汉堡,牛排,酒吧", description: "美式西餐，招牌牛肉汉堡汁水丰富，适合肉食爱好者", rating: 4.2 },
  { name: "Wagas", category: "western", priceLevel: 2, distance: "1km", tags: "轻食,沙拉,健康", description: "健康轻食品牌，招牌煎牛肉能量碗和果汁很受欢迎", rating: 4.1 },
  { name: "必胜客", category: "western", priceLevel: 2, distance: "700m", tags: "披萨,意面,连锁", description: "经典披萨连锁，超级至尊披萨和烤鸡翅是必点", rating: 3.8 },
  { name: "姜虎东烤肉", category: "korean", priceLevel: 3, distance: "1.8km", tags: "烤肉,韩式,热闹", description: "韩式烤肉专门店，五花肉和牛肋条烤到微焦包生菜吃", rating: 4.4 },
  { name: "韩式拌饭店", category: "korean", priceLevel: 1, distance: "300m", tags: "拌饭,简餐,韩式", description: "韩式石锅拌饭，底部锅巴焦脆，拌上辣酱一口满足", rating: 3.9 },
  { name: "安东鸡", category: "korean", priceLevel: 2, distance: "2.5km", tags: "炖鸡,韩式,芝士", description: "韩式安东炖鸡，酱汁浓郁配上拉丝芝士和粉条", rating: 4.0 },
  { name: "越南河粉", category: "southeast", priceLevel: 1, distance: "450m", tags: "河粉,越南,清爽", description: "越南牛肉河粉，汤头清澈鲜甜，挤上柠檬放上薄荷", rating: 4.0 },
  { name: "芒果糯米饭", category: "southeast", priceLevel: 2, distance: "1.1km", tags: "甜品,泰式,芒果", description: "泰式芒果糯米饭，椰奶香甜配新鲜芒果，治愈系甜品", rating: 4.2 },
  { name: "咖喱之家", category: "southeast", priceLevel: 2, distance: "1.6km", tags: "咖喱,泰式,浓郁", description: "泰式咖喱专门店，黄咖喱蟹和绿咖喱鸡各有风味", rating: 4.1 },
];

async function getDb() {
  if (db) return db;
  const initSqlJs = require("sql.js");
  SQL = await initSqlJs();

  if (fs.existsSync(DB_PATH)) {
    const buffer = fs.readFileSync(DB_PATH);
    db = new SQL.Database(buffer);
  } else {
    db = new SQL.Database();
    initTables();
    seedData();
    saveDb();
  }
  return db;
}

function initTables() {
  db.run(`CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    priceLevel INTEGER NOT NULL DEFAULT 2,
    distance TEXT NOT NULL DEFAULT '1km',
    tags TEXT DEFAULT '',
    description TEXT DEFAULT '',
    rating REAL DEFAULT 4.0,
    createdAt TEXT DEFAULT (datetime('now','localtime')),
    updatedAt TEXT DEFAULT (datetime('now','localtime'))
  )`);
}

function seedData() {
  const stmt = db.prepare(`INSERT INTO items (name, category, priceLevel, distance, tags, description, rating) VALUES (?, ?, ?, ?, ?, ?, ?)`);
  for (const item of SEED_DATA) {
    stmt.run([item.name, item.category, item.priceLevel, item.distance, item.tags, item.description, item.rating]);
  }
  stmt.free();
}

function saveDb() {
  const data = db.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync(DB_PATH, buffer);
}

async function query(sql, params = []) {
  const d = await getDb();
  const stmt = d.prepare(sql);
  if (params.length > 0) stmt.bind(params);
  const results = [];
  while (stmt.step()) {
    results.push(stmt.getAsObject());
  }
  stmt.free();
  return results;
}

async function run(sql, params = []) {
  const d = await getDb();
  d.run(sql, params);
  saveDb();
  return d.exec("SELECT last_insert_rowid() as id")[0]?.values[0]?.[0];
}

module.exports = { getDb, query, run, SEED_DATA };
