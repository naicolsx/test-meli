const axios = require('axios');

const getProducts = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    return data;
}

const getAll = async (req, res) => {
    try {
        const products = await getProducts();
        res.json({ items: products });
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

const searchItems = async (req, res) => {
    const { q = '' } = req.query;

    try {
        const products = await getProducts();

        const filtered = products && products.filter(item =>
            item.title.toLowerCase().includes(q.toLowerCase())
        );

        res.json({ items: filtered });

    } catch (error) {
        res.status(500).json({ msg: 'Error al buscar productos', error });
    }
};

module.exports = {
    getAll, getById, searchItems
}