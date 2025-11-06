const router = require('express').Router();

router.post('/', (req, res) => {
    res.json({
        success: true,
        message: 'Refresh Token Successful',
    });
});

module.exports = router;