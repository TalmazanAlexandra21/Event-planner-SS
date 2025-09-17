const express = require("express");
const router = express.Router();

const studenti = [
  { id: 1, nume: "Adrian Matei", descriere: "Student la Informatică, pasionat de AI și robotică" },
  { id: 2, nume: "Larisa Popa", descriere: "Studentă la Marketing, interesată de branding și publicitate" },
  { id: 3, nume: "Radu Mocanu", descriere: "Student la Automatică, programator Python și C++" },
  { id: 4, nume: "Irina Varga", descriere: "Studentă la Arte Vizuale, specializată în design digital" },
  { id: 5, nume: "Marius Sandu", descriere: "Student la Economie, pasionat de investiții și startup-uri" },
  { id: 6, nume: "Andreea Chiriac", descriere: "Studentă la Psihologie, axată pe psihologia organizațională" },
  { id: 7, nume: "Florin Barbu", descriere: "Student la Inginerie Electrică, interesat de rețele inteligente" },
  { id: 8, nume: "Teodora Lupu", descriere: "Studentă la Jurnalism, redactoare și podcaster" },
  { id: 9, nume: "Stefan Costache", descriere: "Student la Matematică-Informatică, dezvoltator de aplicații mobile" },
  { id: 10, nume: "Bianca Voicu", descriere: "Studentă la Comunicare, organizatoare de evenimente culturale" },
];

router.get("/list", (req, res) => {
  res.json(studenti);
});

router.get("/details/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = studenti.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Elementul nu a fost găsit" });
  }

  res.json(student);
});

router.get("/search", (req, res) => {
  let { name, minId, maxId } = req.query;

  let results = studenti;

  if (name) {
    const nameLower = name.toLowerCase();
    results = results.filter(s => s.nume.toLowerCase().includes(nameLower));
  }

  if (minId) {
    const min = parseInt(minId);
    results = results.filter(s => s.id >= min);
  }

  if (maxId) {
    const max = parseInt(maxId);
    results = results.filter(s => s.id <= max);
  }

  res.json(results);
});

module.exports = router;