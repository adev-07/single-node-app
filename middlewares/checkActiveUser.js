const authService = require('../services/authService');
const UserRepository = require('../repositories/userRepository');
const { jsonResponse } = require('../utils/jsonReponse');

module.exports = async function checkActiveUser(req, res, next) {
    try {
        const authHeader = req.headers.authorization || req.headers.Authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return jsonResponse(res, 401, 'Unauthorized');
        }

        const token = authHeader.split(' ')[1];
        const decoded = await authService.validateToken(token);
        if (!decoded || !decoded.user) return jsonResponse(res, 401, 'Invalid token');

        const userFromToken = decoded.user;
        const currentUser = await UserRepository.getUserByEmail(userFromToken.email);

        if (!currentUser) return jsonResponse(res, 404, 'User not found');
        if (!currentUser.isActive) return jsonResponse(res, 403, 'User not active');

        req.user = currentUser;
        return next();
    } catch (err) {
        return jsonResponse(res, 400, err);
    }
};

