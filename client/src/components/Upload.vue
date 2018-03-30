<template>
    <div class="upload-wrap">
        <div class="upload-content">
            <el-upload ref="upload" :http-request="upload" action="" multiple list-type="picture-card" accept='image/jpeg,image/jpg,image/png' :on-remove="handleRemove"></el-upload>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            fileList: []
        }
    },
    methods: {
        login () {
            this.$http.get('/account/login', {
                params: this.form
            }).then(res => {
                if (res.success) {
                    window.localStorage.setItem('token', res.data.token)
                    localStorage.setItem('user', JSON.stringify(res.data))
                }
            })
        },
        upload (info) {
            var fd = new FormData()
            fd.append('file', info.file)
            console.log(fd)
            this.$http.post('/upload/img', fd).then(res => {
                console.log(res)
            })
        },
        /*
        upload (info) {
            let that = this
            var render = new FileReader()
            render.readAsDataURL(info.file)
            render.onloadend = function () {
                let result = this.result
                var image = new Image()
                image.onload = () => {
                    let canvas = document.createElement('canvas')
                    let ctx = canvas.getContext('2d')
                    canvas.width = image.width
                    canvas.height = image.height
                    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
                    document.body.appendChild(canvas)
                    let ndata = canvas.toDataURL('image/jpeg', 0.6)
                    that.$http.post('/upload/img', {
                        imgBlob: ndata
                    }).then(res => {
                        console.log(res)
                    })
                }
                image.src = result
            }
        },
        */
        handleRemove () {
            console.log(11)
        }
    },
    mounted () {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
