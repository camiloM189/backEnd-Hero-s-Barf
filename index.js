const express = require('express');
require('dotenv').config();
const cors = require('cors');



const app = express();

app.use(cors());

app.use(express.static('public'));

app.use(express.json());

app.use('/api/correo', require('./routes/correo'));




// console.log(process.env);


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en ${process.env.PORT}`);
})


