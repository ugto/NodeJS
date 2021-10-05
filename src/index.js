const express = require ('express');
const app = express();
const path = require('path');

//Settings
app.set('port',5000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//Funciones


//Rutas
app.get('/',(req, res)=>{
    //res.send('Estas en la ruta Raíz');
    //res.sendFile('C:\Users\tramos\Desktop\NodeJS\src\views\index.html');
    //console.log(__dirname+'/views/index.html')
    //console.log(path.join(__dirname,'views/index.html'));
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('index', {titulo: 'Aqui va el Titulo'});
});

//Archivos Estaticos


//Servidor
app.listen(app.get('port'),()=>{
    console.log('Servidor en Puerto',app.get('port'))
});
