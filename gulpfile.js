const gulp = require('gulp')
//conjunto de utilidades para ser usadas com o gulp
const util = require('gulp-util')
//plugin para rodar tasks em sequencia uma após a outra
//por padrão o gulp roda as tasks em paralelo não esperando a anterior acabar
const sequence = require('run-sequence')

//Importando outras tasks do gulp que estão em arquivos diferentes
//Não precisamos armazenar em uma variável, pois só importando (require)
//já vai ser lido o arquivo e poderá ser acessado
require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/server')

//task incial padrão do gulp
gulp.task('default', () => {
    //util.env = objeto com as flags passadas no comando gulp
    //se for passada uma flag production (gulp --production)...
    if (util.env.production) {
        //vai executar as tasks por sequencia passada por parametro
        //primeiro deps e depois app
        sequence('deps', 'app')
        // gulp.start('deps', 'app')
    }
    else {
        //roda as 3 tasks em ordem
        sequence('deps', 'app', 'servidor')
        // gulp.start('deps', 'app', 'servidor')
    }
})