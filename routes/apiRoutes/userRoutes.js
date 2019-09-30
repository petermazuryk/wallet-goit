const router = require('express').Router();
const userControllers = require('../../controllers/users');

router.post('/', userControllers.createUser);
router.get('/', userControllers.getAllUsers); 
router.get('/:userId', userControllers.getUserById);
router.put('/:userId', userControllers.updateUser);
router.patch('/:userId', userControllers.updateUser);
router.delete('/:userId', userControllers.deleteUser);

module.exports = router;