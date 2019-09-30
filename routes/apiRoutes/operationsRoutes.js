const router = require('express').Router();
const operationsControllers = require('../../controllers/operations');

router.post('/costs', operationsControllers.costsOperations);
router.post('/income', operationsControllers.incomeOperations);

module.exports = router;