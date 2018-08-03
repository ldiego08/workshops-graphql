const users = [{
    id: 1,
    login: 'bruce@waynecorp.com',
    firstName: 'Bruce',
    lastName: 'Wayne'
}, {
    id: 2,
    login: 'clark.kent@dailyplanet.com',
    firstName: 'Clark',
    lastName: 'Kent'
}];

module.exports = class UserRepository {
    findAll() {
        return users;
    }

    getOne(id) {
        const matches = users.filter(user => user.id === id);

        if (matches && matches.length > 0) {
            return matches[0];
        }
    }
}
