const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`);
})



module.exports =app;

