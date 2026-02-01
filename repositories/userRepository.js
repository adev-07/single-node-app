class UserRepository {

    users = [
        {
            id: 1,
            name: 'Arthur',
            email: 'arthur@gmail.com',
            password: '123456',
            isActive: true
        },
        {
            id: 2,
            name: 'John',
            email: 'john@gmail.com',
            password: '123456',
            isActive: true
        },
        {
            id: 3,
            name: 'Peter',
            email: 'peter@gmail.com',
            password: '123456',
            isActive: true
        },
    ];

    async getAllUsers() {
        return this.users;
    }

    async getUserByEmail(email) {
        return this.users.find(user => user.email === email);
    }
}

module.exports = new UserRepository();