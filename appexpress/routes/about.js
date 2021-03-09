const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('peticion GET => about');
});



module.exports = router;