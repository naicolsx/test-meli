const express = require('express');
const axios = require('axios');
const cors = require('cors');
const router = require('./routes/itemRoute');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/', router)


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
