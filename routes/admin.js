const express = require("express");
const router = express.Router();
const checkRole = require("../middleware/auth"); // importăm middleware-ul

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

router.put("/edit/:id", checkRole("admin"), (req, res) => {
  const id = parseInt(req.params.id);
  const student = studenti.find(s => s.id === id);

  if (!student) return res.status(404).json({ message: "Elementul nu a fost găsit" });

  res.json({ message: `Admin poate edita studentul cu id ${id}` });
});

router.get("/reports", checkRole("admin"), (req, res) => {
  res.json({ message: "Rapoarte disponibile doar pentru admin" });
});

module.exports = router;
