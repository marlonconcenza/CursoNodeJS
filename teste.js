var http = require('http');

var server = http.createServer(function(req, res) {

    var categoria = req.url;

    if (categoria == "/moda") {
        res.end("<html><body>Teste curso NodeJS - Categoria Moda</body></html>");
    } else {
        res.end("<html><body>Teste curso NodeJS - Categoria diferente</body></html>");
    }

});

server.listen(3000);