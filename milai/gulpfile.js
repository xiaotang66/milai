var gulp = require("gulp");
//sass编译
var bSass = require("gulp-sass-china");
gulp.task("bSass",function(){
	gulp.src("src/sass/**/*").pipe(
	bSass({outputStyle:"expanded"}))
	.pipe(gulp.dest("src/css"))//先将编译以后的放在css中再传到dist
})
gulp.task("addEvent",function(){
	gulp.watch("src/sass/**/*",["bSass"])//当改变sass  basaa就改变
})
//开启服务器
var oserve = require("gulp-connect");
gulp.task("oserve",function(){
	oserve.server({
		root:"src",
		port:5566,
		livereload:true
	})
})
gulp.task("serve-watch",function(){
	   gulp.watch(["src/html/**/*","src/css/**/*","src/images/**/*","src/js/**/*"],function(){
		gulp.src("src/html/**/*").pipe(oserve.reload())
	})
})
gulp.task("connect",["oserve","serve-watch","addEvent"])//可以在watch和src中放数组，监听改变多个文件