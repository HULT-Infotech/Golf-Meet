const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(' <h2> GOLFMEET backend Working ✅ </h2>');
});

module.exports = router;