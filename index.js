const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

// Routes
// app.use(todoRoutes);
// app.use(userRoutes);


const PORT = process.env.PORT || 8000;
mongoose
  .connect(
    `mongodb+srv://hrhasib:hrhasib11@cluster0.ow4dmpf.mongodb.net/hk-task`)
  .then(() => {
    console.log('Database Connected.')
    app.listen(PORT, () => {
      console.log(`Server is connected at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });