const express = require('express');
const authController = require('../controllers/auth.controller');
const authMiddles = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', authMiddles.emptyFields, authController.login);
// este se chama o router de autorização pois, é no login que autorização acontece para entrar na plataforma. 
// Depois que o usuário entra, ele pode fazer o restante das requisições, quanto aos posts do blog.
module.exports = router;