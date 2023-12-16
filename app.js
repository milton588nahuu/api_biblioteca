const express = require('express');
const app = express()
const PORT = 3000; 

app.use(express.json());

const librosRouter = require('./routes/libros');

const errorHandler = require('./middleware/errorHandler');


app.use('/libros',librosRouter);

app.use(errorHandler);

app.listen(PORT,() => {
    console.log(`puerto escuchando http://localhost:${PORT}/`);
})

















