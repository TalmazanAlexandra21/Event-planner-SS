const express = require("express");
const router = express.Router();
const checkRole = require("../middleware/eventAuth"); // Actualizat la noul nume al middleware-ului

const events = [
  { id: 1, name: "Concert Rock", date: "2025-10-01", location: "București", price: 100 },
  { id: 2, name: "Workshop IT", date: "2025-10-05", location: "Cluj", price: 50 },
  { id: 3, name: "Festival Film", date: "2025-10-10", location: "Iași", price: 80 },
  { id: 4, name: "Conferință Business", date: "2025-10-15", location: "Timișoara", price: 120 },
  { id: 5, name: "Expoziție Artă", date: "2025-10-20", location: "Brașov", price: 30 },
  { id: 6, name: "Maraton Sportiv", date: "2025-10-25", location: "Constanța", price: 40 },
  { id: 7, name: "Seminar Educațional", date: "2025-11-01", location: "Sibiu", price: 60 },
  { id: 8, name: "Petrecere Tematică", date: "2025-11-05", location: "Ploiești", price: 70 },
  { id: 9, name: "Târg de Carte", date: "2025-10-10", location: "Oradea", price: 20 },
  { id: 10, name: "Eveniment Caritabil", date: "2025-11-15", location: "Arad", price: 0 },
];

router.put("/edit/:id", checkRole("admin"), (req, res) => {
  const id = parseInt(req.params.id);
  const event = events.find(e => e.id === id);

  if (!event) return res.status(404).json({ message: "Evenimentul nu a fost găsit" });

  res.json({ message: `Admin poate edita evenimentul cu id ${id}` });
});

router.get("/reports", checkRole("admin"), (req, res) => {
  res.json({ message: "Rapoarte disponibile doar pentru admin (ex: statistici evenimente)" });
});

module.exports = router;