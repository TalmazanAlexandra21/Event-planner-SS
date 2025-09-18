const express = require("express");
const router = express.Router();

const organizers = [
  { id: 1, name: "Adrian Matei", role: "Organizer", description: "Organizator de evenimente tehnice" },
  { id: 2, name: "Larisa Popa", role: "Attendee", description: "Participanta la evenimente de marketing" },
  { id: 3, name: "Radu Mocanu", role: "Organizer", description: "Organizator de workshop-uri tehnice" },
  { id: 4, name: "Irina Varga", role: "Attendee", description: "Participanta la expoziții de artă" },
  { id: 5, name: "Marius Sandu", role: "Attendee", description: "Participă la conferințe economice" },
  { id: 6, name: "Andreea Chiriac", role: "Organizer", description: "Organizatoare de seminarii educaționale" },
  { id: 7, name: "Florin Barbu", role: "Attendee", description: "Participă la evenimente de inginerie" },
  { id: 8, name: "Teodora Lupu", role: "Organizer", description: "Organizatoare de evenimente media" },
  { id: 9, name: "Stefan Costache", role: "Attendee", description: "Participă la târguri de tehnologie" },
  { id: 10, name: "Bianca Voicu", role: "Organizer", description: "Organizatoare de evenimente culturale" },
];

router.get("/list", (req, res) => {
  res.json(organizers);
});

router.get("/details/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const organizer = organizers.find(o => o.id === id);

  if (!organizer) {
    return res.status(404).json({ message: "Organizatorul nu a fost găsit" });
  }

  res.json(organizer);
});

router.get("/search", (req, res) => {
  let { name, minId, maxId } = req.query;

  let results = organizers;

  if (name) {
    const nameLower = name.toLowerCase();
    results = results.filter(o => o.name.toLowerCase().includes(nameLower));
  }

  if (minId) {
    const min = parseInt(minId);
    results = results.filter(o => o.id >= min);
  }

  if (maxId) {
    const max = parseInt(maxId);
    results = results.filter(o => o.id <= max);
  }

  res.json(results);
});

module.exports = router;