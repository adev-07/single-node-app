const router = require('express').Router();

router.post('/', (req, res) => {
    res.json({
        success: true,
        message: 'Signout Successful',
    });
});

module.exports = router;