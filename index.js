
const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
//const Port = 8080;

const app = express();
dbConnection();


app.use(express.static('public'));
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));

/* app.get('/', (req, res) => {
    res.json({
        message: 'Bienvenido a nuestra API del Calendario',    
    })
});

app.post('/new', (req, res) => {
    res.json({
        message: 'Creación del Usario para la API del Calendario',    
    })
});

app.post('/renew', (req, res) => {
    res.json({
        message: 'Te renovamos tu Token para la API del Calendario',    
    })
}); */

app.listen(process.env.PORT, () => {
    console.log(`Server is running on Port ${process.env.PORT}`);
});