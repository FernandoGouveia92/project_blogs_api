// todos os routers estão agrupados aqui e exportados sob a constante ROUTERS
const express = require('express');
const authRouter = require('./auth.router');
const userRouter = require('./user.router');
const categoryRouter = require('./category.router');
const postRouter = require('./post.router');

const routers = express.Router();
routers.use('/login', authRouter);
// Abaixo da ação de fazer o login, que será feita validação de se o usuário existe ou não, para então acessar os endpoints dos posts do blog
// routers.use(authMiddleware.validateToken); -> teste quebra com esse método de middleware
// este middleware faz validações de login do usuário, bloqueando acesso caso as informações estejam incorretas/ usuário não exista/ token seja inválido

routers.use('/user', userRouter);
routers.use('/categories', categoryRouter);
routers.use('/post', postRouter);

module.exports = routers;