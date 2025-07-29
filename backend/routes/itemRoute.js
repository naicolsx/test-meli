const express = require('express');
const { getAll, getById, searchItems } = require('../controllers/itemController');

const router = express.Router();

router.get('/items/', getAll);
router.get('/items/search/', searchItems);
router.get('/items/:id/', getById);

module.exports = router;