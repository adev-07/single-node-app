const router = require('express').Router();
const authService = require('../services/authService');
const { jsonResponse } = require('../utils/jsonReponse');

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    const authToken = await authService.login(email, password);
    if (!authToken) jsonResponse(res, 400, 'Invalid Credentials');
    jsonResponse(res, 200, [authToken]);
});

module.exports = router;