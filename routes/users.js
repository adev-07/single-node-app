const router = require('express').Router();
const { jsonResponse } = require('../utils/jsonReponse');

const userService = require('../services/userService');

router.get('/', async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        if (!users || users.length === 0) res.json(jsonResponse(res, 404, 'No users found'));
        res.json(jsonResponse(res, 200, users));
    } catch (error) {
        res.json(jsonResponse(res, 400, error));
    }
});

module.exports = router;