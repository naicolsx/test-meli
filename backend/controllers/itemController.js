const axios = require('axios');

const getAll = async (req, res) => {
    try {
        const { data } = await axios.get('https://fakestoreapi.com/products');
        res.json({ items: data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error al obtener productos', error });
    }
}

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
        res.json({ item: data });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
}

module.exports = {
    getAll, getById
}