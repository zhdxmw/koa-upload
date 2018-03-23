<template>
    <div class="login-page">
        <div class="login-wrap">
            <input type="text" class="email" v-model="form.email" placeholder="邮箱">
            <input type="password" class="pwd" v-model="form.password" placeholder="密码">
            <button class="login-btn" @click="login">登录</button>
            <div>
                <router-link :to="{name:'HelloWorld'}">HelloWorld</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login () {
            this.$http.get('/account/login', {
                params: this.form
            }).then(res => {
                if (res.success) {
                    console.log(res)
                }
            })
        }
    },
    mounted () {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
