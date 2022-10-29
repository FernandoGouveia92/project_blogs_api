const express = require('express');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
// const authService = require('../services/auth.service');

const express = require('express');

router.post('/', authMiddleware.emailCheck, userController.newUser);
router.get('/', authMiddleware.validateToken, userController.getUsers);
router.get('/:id', authMiddleware.validateToken, userController.getByIdCon);

module.exports = router;