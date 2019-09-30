const passport = require('../auth');
const config = require('../config');
const router = require("express").Router();
const authMiddleware = require('../middleware/authorization');

const UserController = require('../controllers/user');
const AuthController = require('../controllers/auth/authController');
const TransactionController = require('../controllers/transaction');

router.post('/login', async (req, res) => {
  const tokens = await AuthController.login(req.body);
  if (!tokens) {
    res.status(404).json({code: 'USER_NOT_FOUND', message: 'User not found'});
  }
  res.json(tokens);
});

router.post('/refresh', async (req, res) => {
  const tokens = await AuthController.exchangeRefreshToken(req.headers['authorization']);

  res.json(tokens);
});

router.post('/users', async (req, res) => {
  const user = await UserController.createUser(req.body);
  res.json(user.render());
});

router.get('/auth/google', (req, res) => res.json({message: 'stub for google auth'}));
router.get('/auth/google/callback', (req, res) => res.json({message: 'stub for google auth callback'}));

router.get('/auth/facebook', (req, res) => res.json({message: 'stub for facebook auth'}));
router.get('/auth/facebook/callback', (req, res) => res.json({message: 'stub for facebook auth callback'}));

router.get('/users', async (req, res) => {
  const users = (await UserController.searchUsers(req.query)).map(user => user.render());
  
  res.json(users);
});

router.get('/users/:id', async (req, res) => {
  const user = await UserController.getUserById(req.params.id);

  if (!user) {
    return res.status(404).json({code: 'NOT_FOUND', message: 'User not Found'})
  }

  res.json(user.render());
});

router.get('/transactions', authMiddleware, async (req, res) => {
  const transactions = await TransactionController.getUserTransactions(req.user, req.query);

  res.json(transactions);
});

router.patch('/change-password', (req, res) => {
  res.sendStatus(200);
});

router.get('/balance', (req, res) => {
  res.sendStatus(200);
});

router.post("/costs", authMiddleware, (req, res) => {
  res.json({transaction: 'costs'});
});

router.post("/income", authMiddleware, (req, res) => {
  res.json({transaction: 'income'});
});

module.exports = router;