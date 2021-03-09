const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('peticion GET => shop');
});

router.get('/house', (req, res) => {
    // console.log('FECHA: ', req.fechaActual);
    res.send('peticion GET => shop/house');
});


module.exports = router;