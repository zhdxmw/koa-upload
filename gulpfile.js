const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const pngquant = require('imagemin-pngquant')
const fs = require('fs')

var min = function (info) {
     gulp.src('server/upload/*.{png,jpg,,jpeg,gif,ico}')
        // .pipe(imagemin())
        // .pipe(imagemin({
        //     optimizationLevel: 2, //类型：Number  默认：3  取值范围：0-7（优化等级）
        //     progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
        //     interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
        //     multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        // }))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        }))
        .pipe(gulp.dest('server/images'))
        .on('end', () => {    //压缩完成后 删除原文件   暂未考虑并发

            // 只删除本次改变的图片
            var path = 'server/upload'
            var image = info.path.split('/server/upload/')[1]

            fs.unlinkSync('../upload/' + path + '/' + image);
            // if(fs.existsSync(path)){
            //     var files = []
            //     files = fs.readdirSync(path);
            //     files.forEach(function(file, index) {
            //         var curPath = path + "/" + file;
            //         fs.unlinkSync(curPath);
            //     });
            // }
            // if(path == true){
            //     var files = []
            //     files = fs.readdirSync(path);
            //     files.forEach(function(file, index) {
            //         var curPath = path + "/" + file;
            //         fs.unlinkSync(curPath);
            //     });
            // }
        })
}

gulp.task('run', ()=> {
    console.log('gulp start')
    gulp.watch('server/upload/*').on('change',min)
})
