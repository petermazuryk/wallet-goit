const router = require('express').Router();
const ordersControllers = require('../../controllers/orders');

router.post('/', ordersControllers.createOrder); 
router.get('/:orderId', ordersControllers.getOrderById);

module.exports = router;