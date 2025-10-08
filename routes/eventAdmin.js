const express = require("express");
const router = express.Router();
const checkRole = require("../middleware/eventAuth");

let events = [
  { id: 1, name: "Concert Rock", price: 100 },
  { id: 2, name: "Workshop IT", price: 50 },
];

// ✅ PUT - editare eveniment (numai pentru admin)
router.put("/edit/:id", checkRole("admin"), (req, res) => {
  const id = parseInt(req.params.id);
  const event = events.find(e => e.id === id);
  if (!event) return res.status(404).json({ message: "Evenimentul nu a fost găsit" });

  Object.assign(event, req.body);
  res.json({ message: "Eveniment editat de admin", event });
});

// ✅ DELETE - ștergere eveniment (numai pentru admin)
router.delete("/delete/:id", checkRole("admin"), (req, res) => {
  const id = parseInt(req.params.id);
  const index = events.findIndex(e => e.id === id);
  if (index === -1) return res.status(404).json({ message: "Evenimentul nu a fost găsit" });

  const deleted = events.splice(index, 1);
  res.json({ message: "Eveniment șters de admin", deleted });
});

// ✅ GET - rapoarte pentru admin
router.get("/reports", checkRole("admin"), (req, res) => {
  res.json({ message: "Rapoarte doar pentru admini: statistici, participare etc." });
});

module.exports = router;
