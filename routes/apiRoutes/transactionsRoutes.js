const router = require('express').Router();
const transactionsControllers = require('../../controllers/transactions');

router.get('/:userId', transactionsControllers.getTransactionsByUserId);

module.exports = router;