const express = require('express');
const router =express.Router();

router.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, '../public/index.html'));
})

module.exports = router;