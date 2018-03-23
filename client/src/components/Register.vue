<template>
    <div class="login-page">
        <div class="login-wrap">
            <input type="text" class="account" v-model="form.name" placeholder="用户名">
            <input type="text" class="email" v-model="form.email" placeholder="邮箱">
            <input type="password" class="pwd" v-model="form.password" placeholder="密码">
            <input type="password" class="pwd" v-model="repwd" placeholder="确认密码">
            <button class="login-btn" @click="login">注册</button>
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
            repwd: '',
            form: {
                email: '',
                name: '',
                password: ''
            }
        }
    },
    methods: {
        login () {
            this.$http.post('/account/register', this.form).then(res => {
                if (res.success) {
                    console.info(res)
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
