//tasks relacionadas às dependências
//elas irão processar as depências para que funcionem na build final
const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('deps', ['deps.css', 'deps.fonts'])

gulp.task('deps.css', () => {
    //run sequence só funciona se retornarmos!!!
    return gulp.src(['node_modules/font-awesome/css/font-awesome.min.css'])
        //nesse caso não é necessário minificar
        //pois o arquivo selecionado já está minificado 
        //e se tentarmos minificar novamente pode até ocorrer bugs
        // .pipe(uglifycss({ 'uglyComments': true }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
})

gulp.task('deps.fonts', () => {
    //copia todos os arquivos dentro da pasta font do FA
    //para pasta fonts dentro de build
    return gulp.src('node_modules/font-awesome/fonts/*.*')
        .pipe(gulp.dest('build/assets/fonts'))
})