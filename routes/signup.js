const router = require('express').Router();

router.post('/', (req, res) => {
    res.json({
        success: true,
        message: 'Signup Successful',
    });
});

module.exports = router;