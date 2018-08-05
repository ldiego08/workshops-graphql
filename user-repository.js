const users = [{
    id: 1,
    login: 'bruce@waynecorp.com',
    firstName: 'Bruce',
    lastName: 'Wayne',
    rolesIds: [1, 2]
}, {
    id: 2,
    login: 'clark.kent@dailyplanet.com',
    firstName: 'Clark',
    lastName: 'Kent',
    rolesIds: [1]
}];

module.exports = class UserRepository {
    findAll() {
        return users.map(user => ({
            ...user,
            roles: this._getUserRoles(user.rolesIds)
        }));
    }

    getOne(id) {
        const matches = users.filter(user => user.id === id);
        
        if (matches && matches.length > 0) {
            return matches[0];
        }
    }

    create(args) {
        const id = users[users.length - 1].id + 1;
        const user = {
            ...args,
            id
        };

        users.push(user);

        return user;
    }
}
