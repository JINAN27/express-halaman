const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/products.html'));

});

router.get('/data', (req, res) => {
    res.json([
        {id: 1, name: 'Toyota Carolia', price: 20000},
        {id: 2, name: 'Honda Civic', price: 22000},
        {id: 3, name: 'Ford Focus', price: 21000}
    ]);
});

module.exports = router;