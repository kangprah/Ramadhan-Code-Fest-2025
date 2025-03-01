const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/generate-message', async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) {
      return res.status(400).json({ error: 'Nama harus diisi!' });
    }

    const apiUrl = `https://api.mistra.top/ai/llm/claude-3-haiku?prompt=${encodeURIComponent(`buatkan ucapan ramadhan untuk ${name} yang memotivasi agar puasanya lancar dan berkah selalu. intinya buatkan kalimat positive yang memotivasi dalam bahasa indonesia! penggunaan emoticon diperbolehkan.`)}`;
    const response = await axios.get(apiUrl);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan saat menghubungi API.' });
  }
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});