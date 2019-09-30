const router = require('express').Router();
const productsControllers = require('../../controllers/products');

router.get('/:productId', productsControllers.getProductById);
router.post('/', productsControllers.createProduct); 
router.put('/:productId', productsControllers.updateProduct); 

module.exports = router;