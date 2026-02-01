const UserRepository = require('../repositories/userRepository');
const { jsonResponse } = require('../utils/jsonReponse');

module.exports = async function checkActiveUserForLogin(req, res, next) {
    try {
        const { email } = req.body || {};
        // If no email in body, skip (not a login attempt or middleware not applicable)
        if (!email) return next();

        const user = await UserRepository.getUserByEmail(email);
        if (!user) return jsonResponse(res, 404, 'User not found');
        if (!user.isActive) return jsonResponse(res, 403, 'User not active');

        req.user = user;
        return next();
    } catch (err) {
        return jsonResponse(res, 400, err);
    }
};

