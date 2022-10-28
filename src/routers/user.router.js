const express = require('express');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', authMiddleware.validateToken, userController.newUser);
router.get('/', authMiddleware.validateToken, userController.getUsers);

module.exports = router;