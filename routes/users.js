const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {id:1, name: 'johndoe'},
        {id:2,  named: 'janedoen'},
        {id:3,  named: 'jinan'}
    ]);
});

module.exports = router;

