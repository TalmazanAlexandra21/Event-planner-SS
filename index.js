const express = require("express");
const app = express();
const port = 4000;

// Importăm rutele
const usersRouter = require("./routes/users");
const adminRouter = require("./routes/admin");

app.use("/users", usersRouter);
app.use("/admin", adminRouter);

app.listen(port, () => {
  console.log(`Server pornit pe http://localhost:${port}`);
});
