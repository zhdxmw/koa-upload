const path = require('path')
const fs = require('fs')

class UploadController {
    async upload (ctx) {
        // base64 数据流
        if (ctx.request.body.imgBlob) {
            var imgData = ctx.request.body.imgBlob
            var base64Data = imgData.replace(/^data:image\/\w+;base64,/, '')
            const tmpdir = ('../upload/server/upload/')
            const name = new Date().getTime() * Math.floor(Math.random() * 10) + '.jpeg'
            await fs.writeFile(tmpdir + name, base64Data, 'base64', (err) => {
                if (err) {
                    throw (401, err)
                }
            })
            ctx.body = name
        } else {
            // 文件流
            const tmpdir = ('../upload/server/upload')
            const filepaths = []
            const files = ctx.request.body.files || {}
            for (let key in files) {
                const file = files[key]
                const name = new Date().getTime() * Math.floor(Math.random() * 10) + file.name
                const filePath = path.join(tmpdir, name)
                const reader = fs.createReadStream(file.path)
                const writer = fs.createWriteStream(filePath)
                reader.pipe(writer)
                filepaths.push('/upload/' + name)
            }
            ctx.body = filepaths
        }
    }
    async blob (ctx) {
        const {
            blobImg
        } = ctx.request.body
        console.log(blobImg)
        ctx.body = 'dsasd'
    }
}

module.exports = new UploadController()
