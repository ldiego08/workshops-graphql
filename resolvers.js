const UserRepository = require('./user-repository');
const RoleRepository = require('./role-repository');

const userRepository = new UserRepository();
const roleRepository = new RoleRepository();

module.exports = {
    users: () => {
        return userRepository.findAll();
    },
    user: (root, args) => {
        return userRepository.getOne(args.id);
    },
    userRoles: (root) => {
        return roleRepository.findByIds(root.rolesIds)
    },
    createUser: (root, args) => {
        return userRepository.create(args);
    }
}