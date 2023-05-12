const express = require("express");
const router = express.Router();

// Halaman utama - menampilkan form biodata
router.get("/", (req, res) => {
  res.send(`
    <h1>Form Biodata</h1>
    <form method="POST" action="/submit">
      <input type="text" name="nama"  placeholder="Nama"><br>
      <input type="text" name="tempat_lahir" placeholder="tempat lahir"><br>
      <input type="text" name="tanggal_lahir" placeholder="tanggal lahir"><br>
      <input type="text" name="alamat" placeholder="alamat"><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Menangani submit form biodata
router.post("/submit", (req, res) => {
  const { nama, tempat_lahir, tanggal_lahir, alamat } = req.body;

  // Lakukan apa yang ingin Anda lakukan dengan data biodata di sini
  console.log(`Nama: ${nama}, tempat lahir: ${tempat_lahir}, tanggal_lahir: ${tanggal_lahir}, alamat: ${alamat}`);

  res.send(`
  Nama: ${nama}, tempat lahir: ${tempat_lahir}, tanggal_lahir: ${tanggal_lahir}, alamat: ${alamat}
  <br>Data biodata telah diterima
  `);
});

module.exports = router;
