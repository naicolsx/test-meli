const express = require('express');
const { getAll, getById } = require('../controllers/itemController');

const router = express.Router();

router.get('/items', getAll);
router.get('/items/:id', getById);

module.exports = router;