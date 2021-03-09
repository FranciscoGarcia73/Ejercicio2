const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('peticion GET => profile');
});

router.get('/main', (req, res) => {
    // console.log('FECHA: ', req.fechaActual);
    res.send('peticion GET => profile/main');
});

router.get('/details', (req, res) => {
    // console.log('FECHA: ', req.fechaActual);
    res.send('peticion GET => profile/details');
});

module.exports = router;