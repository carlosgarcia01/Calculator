const mongoose = require('mongoose');
require('dotenv').config();
const { MONGO_USER,MONGO_PASSWORD,MONGO_OPTIONS } = process.env;
const db =`mongodb://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_OPTIONS}`;

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true

})
  .then(db => console.log('Conexión a la base de datos establecida...'))
  .catch(err => console.log(`Error al conectar a la base de datos: ${err}`))
