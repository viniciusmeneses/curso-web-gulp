//tasks relacionadas ao servidor que será inicializado
//para servir os arquivos finais da build
const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('monitorarMudancas', () => {
    //vai monitar os arquivos e quando houver uma mudança vai executar a função de callback
    //primeiro parametro é os arquivos e o segundo é a funcão callback
    watch('src/**/*.html', () => gulp.start('app.html'))
    watch('src/**/*.scss', () => gulp.start('app.css'))
    watch('src/**/*.js', () => gulp.start('app.js'))
    watch('src/assets/imgs/**/*.*', () => gulp.start('app.imgs'))
})

gulp.task('servidor', ['monitorarMudancas'], () => {
    return gulp.src('build')
        //inicia o webserver servindo os arquivos dentro da pasta build
        //passando as configuraçoes:
        .pipe(webserver({
            //atualiza automaticamente ao ocorrer mudanças nos arquivos dentro da pasta build
            livereload: true,
            //porta
            port: 8080,
            //abre o browser automaticamente
            open: true
        }))
})