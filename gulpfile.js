const gulp= require('gulp');
const sass= require('gulp-sass')(require("sass"));
const uglify= require('gulp-uglify');
const imagemin= require('gulp-imagemin');
const obfuscate= require('gulp-obfuscate');
const sourceMaps= require('gulp-sourcemaps');


function imagecompiler(){
    return gulp.src('./src/images/*')
    .pipe(imagemin()).pipe(gulp.dest('./build/images'))

}

function sasscompiler(){
    return gulp.src('./src/styles/main.scss')
    .pipe(sourceMaps.init())
    .pipe(sass({
                outputStyle:'compressed'
        }))
    .pipe(sourceMaps.write('./map'))
    .pipe(gulp.dest('./build/styles'))
}



function compilerJS(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

exports.sass=sasscompiler;

exports.default=function(){
    gulp.watch('./src/styles/*.scss',{ignoreInitial:false},gulp.series(sasscompiler))
    gulp.watch('./src/images/*',{ignoreInitial:false},gulp.series(imagecompiler))
    gulp.watch('./src/scripts/*.js',{ignoreInitial:false},gulp.series(compilerJS))

};


