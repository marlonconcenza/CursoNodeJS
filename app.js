var app = require('./config/server');
var rotaHome = require('./app/routes/home');
var rotaFormularioNoticia = require('./app/routes/formulario_inclusao_noticia');
var rotaNoticias = require('./app/routes/noticias');

rotaHome(app);
rotaFormularioNoticia(app);
rotaNoticias(app);


app.listen(3000, function() {
    console.log('Servidor ON');
});