const router = require('express').Router();
const { jsonResponse } = require('../utils/jsonReponse');

const userService = require('../services/userService');

router.get('/', async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        if (!users || users.length === 0) return jsonResponse(res, 404, 'No users found');
        return jsonResponse(res, 200, users);
    } catch (error) {
        return jsonResponse(res, 400, error);
    }
});

module.exports = router;