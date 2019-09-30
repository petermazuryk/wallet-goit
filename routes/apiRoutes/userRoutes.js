const router = require('express').Router();
const userControllers = require('../../controllers/users');

router.get('/:userId', userControllers.getUserById);
router.put('/:userId', userControllers.updateUser);
router.post('/', userControllers.createUser);

module.exports = router;