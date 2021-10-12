const express= require('express');
const router= express.Router();

router.get('/',(req, res)=>{
    //res.send('Estas en la ruta Raíz');
    //res.sendFile('C:\Users\tramos\Desktop\NodeJS\src\views\index.html');
    //console.log(__dirname+'/views/index.html');
    //console.log(path.join(__dirname,'views/index.html'));
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('index.html', {titulo: 'Desarrollo Sft'});
});

router.get('/contact',(req, res)=>{
    res.render('contact.html', {titulo: 'Dame La Pata'});
});

router.get('/users',(req, res)=>{
    res.render('users.html', {titulo: 'Usuarios'});
});

router.get('/products',(req, res)=>{
    res.render('products.html', {titulo: 'Productos'});
});



module.exports = router;