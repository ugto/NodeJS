const express = require ('express');
const app = express();
const path = require('path');

//Settings
app.set('port',5000);
app.set('views',path.join(__dirname,'views'));
// configurar para que las views sean tipo html
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');

//Funciones


//Rutas
        //NOTA: La ruta se cambio a la seccion de routes/index.js, esa seccion será para agrgar todas las rutas.
 app.use(require('./routes/index'));     


//Archivos Estáticos
app.use(express.static(path.join(__dirname,'public')));

//Servidor
app.listen(app.get('port'),()=>{
    console.log('Servidor en Puerto',app.get('port'))
});
