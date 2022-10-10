const express = require('express');
const {getConnection} = require('./DB/DB-connection');

const app = express();
const port = 3000 ;

getConnection();

app.use(express.json());

app.use('/Estadoequipo', require('./router/Estadoequipo'));
app.use('/Inventario', require('./router/Inventario'));
app.use('/Marca', require('./router/Marca'));
app.use('/Tipoequipo', require('./router/Tipoequipo'));
app.use('/Usuario', require('./router/Usuario'));

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
