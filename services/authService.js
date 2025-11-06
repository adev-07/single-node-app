const jsonWebToken = require('jsonwebtoken');
const UserRepository = require('../repositories/userRepository');

class AuthService {
    async login(email, password) {
        const user = await UserRepository.getUserByEmail(email);
        if (!user) return null;
        if (user.password !== password) return null;
        const token = await this.generateToken(user);
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            access_token: token
        };
    }

    async signup(email, password) {
        // TODO: Implement Signup
    }

    async refreshToken(refreshToken) {
        // TODO: Implement Refresh Token
    }

    async signout(accessToken) {
        // TODO: Implement Signout
    }

    async generateToken(user) {
        try {
            const token = jsonWebToken.sign({ user }, "secret");
            return token;
        } catch (err) {
            return null;
        }
    }

    async validateToken(token) {
        try {
            const decoded = jsonWebToken.verify(token, "secret", (err, decoded) => {
                if (err) console.log(err);
                return decoded;
            });
            return decoded;
        } catch (err) {
            return null;
        }
    }
}

module.exports = new AuthService();