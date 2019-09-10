const { check, validationResult } = require('express-validator');

module.exports = function(application) {

    application.get("/formulario_inclusao_noticia", function(req, res) {
        application.app.controllers.admin.formulario_add_noticia(application, req, res);
    });

    application.post('/noticias/salvar', [

        check('titulo', 'Título é obrigatório').not().isEmpty(),
        check('resumo', 'Resumo é obrigatório').not().isEmpty(),
        check('resumo', 'Resumo deve conter entre 10 e 100 caracteres').isLength(10, 100),
        check('autor', 'Autor é obrigatório').not().isEmpty(),
        check('data_noticia', 'Data é obrigatório').not().isEmpty().toDate({ format: 'YYYY-MM-DD' }),
        check('noticia', 'Noticia é obrigatório').not().isEmpty()

    ], (req, res) => {
        application.app.controllers.admin.noticias_salvar(application, validationResult, req, res);
    });
};