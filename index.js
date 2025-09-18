const express = require("express");
const app = express();
const port = 4000;

// Importăm rutele
const usersRouter = require("./routes/organizers"); // Rute pentru gestionarea utilizatorilor
const adminRouter = require("./routes/eventAdmin"); // Rute protejate pentru administratori
const eventsRouter = require("./routes/events"); // Rute pentru gestionarea evenimentelor

app.use("/users", usersRouter);
app.use("/admin", adminRouter);
app.use("/events", eventsRouter);

app.listen(port, () => {
  console.log(`Server pornit pe http://localhost:${port}`);
});