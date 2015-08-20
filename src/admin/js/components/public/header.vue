<style lang="scss">
.header {
    position: fixed;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #fff;
    z-index: 100;
    .header-logo {
        float: left;
        width: 220px;
        h2 {
            margin: 0;
            line-height: 50px;
            color: #1D2938;
            text-align: center;
            span {
                color: #02B09A;
            }
        }
    }
    .header-nav {
        height: 50px;
        margin-left: 220px;
        border-left: 1px solid #eee;
        background-color: #fff;
    }
}
</style>

<template>
    <div class="header">
        <div class="header-logo">
            <h2><span>[ </span>QED<span> ]</span></h2>
        </div>
        <div class="header-nav">构建中</div>
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                msg: '头部'
            }
        }
    }
</script>
