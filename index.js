const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

const usersRouter = require("./routes/organizers"); 
const adminRouter = require("./routes/eventAdmin");
const eventsRouter = require("./routes/events"); 

app.use("/users", usersRouter);
app.use("/admin", adminRouter);
app.use("/events", eventsRouter);

app.listen(port, () => {
  console.log(`Server pornit pe http://localhost:${port}`);
});
