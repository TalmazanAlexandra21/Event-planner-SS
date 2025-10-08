const express = require("express");
const router = express.Router();
const uppercaseName = require("../middleware/uppercaseName");

let organizers = [
  { id: 1, name: "Adrian Matei", role: "Organizer", description: "Organizator de evenimente tehnice" },
  { id: 2, name: "Larisa Popa", role: "Attendee", description: "Participanta la evenimente" },
];

// ✅ GET - listă
router.get("/list", (req, res) => {
  res.json(organizers);
});

// ✅ GET - detalii după ID
router.get("/details/:id", (req, res) => {
  const organizer = organizers.find(o => o.id === parseInt(req.params.id));
  if (!organizer) return res.status(404).json({ message: "Organizatorul nu a fost găsit" });
  res.json(organizer);
});

// ✅ POST - adăugare (cu middleware pentru majuscule)
router.post("/add", uppercaseName, (req, res) => {
  const { id, name, role, description } = req.body;
  if (!id || !name || !role)
    return res.status(400).json({ message: "Date incomplete" });

  const exists = organizers.some(o => o.id === id);
  if (exists) return res.status(409).json({ message: "ID-ul există deja" });

  const newOrganizer = { id, name, role, description };
  organizers.push(newOrganizer);
  res.status(201).json({ message: "Organizator adăugat", organizer: newOrganizer });
});

// ✅ PUT - actualizare organizator
router.put("/edit/:id", (req, res) => {
  const organizer = organizers.find(o => o.id === parseInt(req.params.id));
  if (!organizer) return res.status(404).json({ message: "Organizatorul nu a fost găsit" });

  Object.assign(organizer, req.body);
  res.json({ message: "Organizator actualizat", organizer });
});

// ✅ DELETE - ștergere organizator
router.delete("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = organizers.findIndex(o => o.id === id);
  if (index === -1) return res.status(404).json({ message: "Organizatorul nu a fost găsit" });

  const deleted = organizers.splice(index, 1);
  res.json({ message: "Organizator șters", deleted });
});

module.exports = router;
