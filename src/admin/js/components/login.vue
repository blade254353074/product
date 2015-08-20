// login.vue
<style lang="scss">
.v-transition {
    display: block;
    height: 20px;
    opacity: 1;
    transition: all .3s ease;
}
.v-enter, .v-leave {
    height: 0;
    margin: 0;
    opacity: 0;
}
.login-form {
    width: 300px;
    padding: 30px 20px;
    margin: 180px auto 0;
    border: 1px solid #ddd;
    border-radius: 4px;
}
</style>
<template>
    <div class="login-form">
        <div class="form-group">
            <label for="un">用户名</label>
            <input  v-model="upload.un"
                    v-on="keyup: login | key 13"
                name="un" id="un" class="form-control" type="text">
        </div>
        <div class="form-group">
            <label for="pwd">密码</label>
            <input  v-model="upload.pwd"
                    v-on="keyup: login | key 13"
                name="pwd" id="pwd" class="form-control" type="text">
        </div>
        <p v-show="blank" v-transition class="text-danger">用户名或密码不能为空</p>
        <p v-show="!state" v-text="failText" v-transition class="text-danger"></p>
        <button v-on="click: login" class="btn btn-primary btn-block {{sending ? 'sending disabled' : ''}}">登录</button>
    </div>
</template>

<script>
    var cookie = require('../cookie');
    module.exports = {
        data: function() {
            return {
                upload: {
                    un: '',
                    pwd: ''
                },
                blank: false,
                state: true,
                failText: '',
                sending: false
            }
        },
        methods: {
            login: function(e) {
                e.preventDefault();
                if (this.sending) {
                    return;
                }
                if (this.upload.un.trim() === '' || this.upload.pwd.trim() === '') {
                    this.blank = true;
                    return;
                }
                this.state = true;
                this.blank = false;
                this.sending = true;
                this.$http.get(
                    '/api/log/memberAction!memLog.action',
                    this.upload,
                    function(data, status, request) {
                        this.sending = false;
                        if (data.state === true) {
                            console.log('登录成功');
                            cookie.setCookie('un', data.un);
                            window.location.hash = '#/page';
                        } else {
                            this.$set('state', false);
                            this.failText = '用户名或密码错误';
                        }
                    }
                ).error(function(data, status, request) {
                    this.failText = '请求失败';
                    this.sending = false;
                    this.state = false;
                });
            }
        }
    }
</script>
