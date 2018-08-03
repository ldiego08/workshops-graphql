const UserRepository = require('./user-repository');
const userRepository = new UserRepository();

module.exports = {
    users: () => {
        return userRepository.findAll();
    },
    user: (root, args) => {
        return userRepository.getOne(args.id);
    }
}