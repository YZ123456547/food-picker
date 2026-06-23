const express = require("express");
const router = express.Router();
const db = require("../database");

// GET /api/items — list all items, optional filters
router.get("/", async (req, res) => {
  try {
    let sql = "SELECT * FROM items WHERE 1=1";
    const params = [];

    if (req.query.category && req.query.category !== "all" && req.query.category !== "random") {
      sql += " AND category = ?";
      params.push(req.query.category);
    }
    if (req.query.maxPrice) {
      sql += " AND priceLevel <= ?";
      params.push(parseInt(req.query.maxPrice));
    }
    if (req.query.maxDistance) {
      sql += " AND CAST(REPLACE(distance, 'km', '') AS REAL) <= ?";
      // Handle both "800m" and "1.2km" formats
      // We'll do filtering in JS for simplicity
    }
    sql += " ORDER BY id ASC";

    let items = await db.query(sql, params);

    // Post-filter for distance
    if (req.query.maxDistance) {
      const maxDist = parseFloat(req.query.maxDistance);
      items = items.filter((item) => {
        const num = parseFloat(item.distance);
        return !isNaN(num) && num <= maxDist;
      });
    }

    res.json({ items, total: items.length });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// GET /api/items/:id — single item
router.get("/:id", async (req, res) => {
  try {
    const items = await db.query("SELECT * FROM items WHERE id = ?", [parseInt(req.params.id)]);
    if (items.length === 0) return res.status(404).json({ error: "Not found" });
    res.json(items[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/items — create
router.post("/", async (req, res) => {
  try {
    const { name, category, priceLevel, distance, tags, description, rating } = req.body;
    if (!name || !category) return res.status(400).json({ error: "name and category required" });

    const id = await db.run(
      `INSERT INTO items (name, category, priceLevel, distance, tags, description, rating) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, category, priceLevel || 2, distance || "1km", tags || "", description || "", rating || 4.0]
    );
    res.status(201).json({ id, message: "创建成功" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/items/:id — update
router.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const existing = await db.query("SELECT * FROM items WHERE id = ?", [id]);
    if (existing.length === 0) return res.status(404).json({ error: "Not found" });

    const item = req.body;
    await db.run(
      `UPDATE items SET name=?, category=?, priceLevel=?, distance=?, tags=?, description=?, rating=?, updatedAt=datetime('now','localtime') WHERE id=?`,
      [
        item.name || existing[0].name,
        item.category || existing[0].category,
        item.priceLevel ?? existing[0].priceLevel,
        item.distance || existing[0].distance,
        item.tags ?? existing[0].tags,
        item.description ?? existing[0].description,
        item.rating ?? existing[0].rating,
        id,
      ]
    );
    res.json({ message: "更新成功" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/items/:id
router.delete("/:id", async (req, res) => {
  try {
    await db.run("DELETE FROM items WHERE id = ?", [parseInt(req.params.id)]);
    res.json({ message: "删除成功" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/items/bulk — bulk import
router.post("/bulk", async (req, res) => {
  try {
    const { items } = req.body;
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "items array required" });
    }
    let count = 0;
    for (const item of items) {
      if (!item.name || !item.category) continue;
      await db.run(
        `INSERT INTO items (name, category, priceLevel, distance, tags, description, rating) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [item.name, item.category, item.priceLevel || 2, item.distance || "1km", item.tags || "", item.description || "", item.rating || 4.0]
      );
      count++;
    }
    res.status(201).json({ message: `成功导入 ${count} 条数据` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
