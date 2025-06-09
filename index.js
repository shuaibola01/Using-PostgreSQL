require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
