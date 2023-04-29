import app from "./app.js";

import db from './Model/userModel.js'; // Importar los modelos Sequelize

db.sequelize.sync() // Sincronizar los modelos con la base de datos
  .then(() => {
    console.log('Modelos sincronizados correctamente con la base de datos');
  })
  .catch((error) => {
    console.error('Error al sincronizar los modelos con la base de datos:', error);
  });


app.listen(5000, () => {
    console.log("Servidor iniciado en el puerto 5000");
});

