const express = require('express');
const router = express.Router();

// import users from users-controllers
const {
    getAllUsers,
    getById,
    createUser,
    updateUser,
    destroyUser

} =require('./../controllers/users-controllers')

router.get('/', getAllUsers);
router.get('/:id',getById)
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', destroyUser)

module.exports = router