const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const operationsRoutes = require('./operationsRoutes.js');
const transactionsRoutes = require('./transactionsRoutes.js');

router.use('/user', userRoutes);
router.use('/operations', operationsRoutes);
router.use('/transactions', transactionsRoutes);

module.exports = router;