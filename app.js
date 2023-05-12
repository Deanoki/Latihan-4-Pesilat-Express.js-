const express = require("express");
// require(".env").config();

const app = express();

// Parsing body dari request
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Menggunakan routes
app.use("/", require("./routes"));

// Jalankan server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});
