const roles = [{
    id: 1,
    name: 'Role 1'
}, {
    id: 2,
    name: 'Role 2'
}];

module.exports = class RoleRepository {
    findByIds(ids) {
        return roles.filter(role => ids.some(id => role.id === id));
    }
}
