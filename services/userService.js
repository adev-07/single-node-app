const UserRepository = require('../repositories/userRepository');

class UserService {
    async getAllUsers() {
        return await UserRepository.getAllUsers();
    }

    async getUserById(id) {
        return await UserRepository.getUserById(id);
    }
}

module.exports = new UserService();