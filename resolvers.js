const UserRepository = require('./user-repository');
const userRepository = new UserRepository();

module.exports = {
    users: () => {
        return userRepository.findAll();
    }
}