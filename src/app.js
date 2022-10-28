const express = require('express');
// const { validateToken } = require('./middlewares/auth.middleware');
require('express-async-errors');
const errorMiddleware = require('./middlewares/error');
const routes = require('./routers/router');

// ...

const app = express();

app.use(express.json());

app.use(routes);
app.use(errorMiddleware);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
// simbora pra mais uma...
module.exports = app;
