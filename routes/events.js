const express = require("express");
const router = express.Router();

let events = [
  { id: 1, name: "Concert Rock", date: "2025-10-01", location: "București", price: 100 },
  { id: 2, name: "Workshop IT", date: "2025-10-05", location: "Cluj", price: 50 },
  { id: 3, name: "Festival Film", date: "2025-10-10", location: "Iași", price: 80 },
];

// ✅ GET - toate evenimentele
router.get("/list", (req, res) => {
  res.json(events);
});

// ✅ GET - detalii după ID
router.get("/details/:id", (req, res) => {
  const event = events.find(e => e.id === parseInt(req.params.id));
  if (!event) return res.status(404).json({ message: "Evenimentul nu a fost găsit" });
  res.json(event);
});

// ✅ POST - adaugă un eveniment nou
router.post("/add", (req, res) => {
  const { id, name, date, location, price } = req.body;
  if (!id || !name || !date || !location)
    return res.status(400).json({ message: "Date incomplete" });

  const exists = events.some(e => e.id === id);
  if (exists) return res.status(409).json({ message: "ID-ul există deja" });

  const newEvent = { id, name, date, location, price: price || 0 };
  events.push(newEvent);
  res.status(201).json({ message: "Eveniment adăugat", event: newEvent });
});

// ✅ PUT - actualizează un eveniment
router.put("/edit/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const event = events.find(e => e.id === id);
  if (!event) return res.status(404).json({ message: "Evenimentul nu a fost găsit" });

  Object.assign(event, req.body);
  res.json({ message: "Eveniment actualizat", event });
});

// ✅ DELETE - șterge un eveniment
router.delete("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = events.findIndex(e => e.id === id);
  if (index === -1) return res.status(404).json({ message: "Evenimentul nu a fost găsit" });

  const deleted = events.splice(index, 1);
  res.json({ message: "Eveniment șters", deleted });
});

module.exports = router;
