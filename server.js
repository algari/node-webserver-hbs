const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;
 
app.use(express.static(__dirname+'/public'))

 //express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    /*let salida = {
        nombre:'Alx',
        edad:33,
        url:req.url
    }
    res.send(salida);*/

    res.render('home',{
        nombre:'AlX'
    })
});

app.get('/about', function (req, res) {
    
    res.render('about');
});
 
app.listen(port,()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
})