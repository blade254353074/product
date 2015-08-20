<style lang="scss">
@keyframes open {
    0% {
        opacity: 0;
        transform: scaleY(0);
    }
    100% {
        opacity: 1;
        transform: scaleY(1);
    }
}

.nav {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 220px;
    height: 100%;
    padding-top: 50px;
    background-color: #424F64;
    color: #fff;
    overflow: auto;
    a {
        color: #fff;
        cursor: pointer;
    }
    .nav-item {
        &.open {
            background-color: #343F50;
            &>a {
                color: #65CEA7;
            }
            .sub-nav {
                display: block;
            }
        }
        &>a {
            position: relative;
            display: block;
            height: 44px;
            padding: 12px 20px;
            transition: all .3s ease;
            .icon {
                margin-right: 5px;
            }
            .expand {
                position: absolute;
                right: 20px;
            }
            &:hover {
                color: #65CEA7;
                background-color: #343F50;
            }
        }
    }
    .sub-nav {
        transform-origin: top;
        animation: open .3s ease;
        &>li {
            &.active {
                .sub-item {
                    background-color: #2A323F;
                    color: #65CEA7;
                }
            }
        }
        .sub-item {
            display: block;
            height: 40px;
            padding: 10px 5px 10px 50px;
            transition: all .3s ease;
            &:hover {
                background-color: #2A323F;
            }
        }
    }
}
</style>
<template>
    <li v-on="click: menuToggle($event, $el)"
        v-class="open: open,
                 active: active,
                 nav-item: isFolder">
        <a  v-class="sub-item: !isFolder"
            v-attr="href: hash">
            <span   v-if="isFolder"
                    v-class="icon"
                    class="icon"></span>
            <span v-text="title"></span>
            <span v-if="isFolder" class="expand">{{open ? '-' : '+'}}</span>
        </a>
        <ul v-show="open" v-if="isFolder" class="sub-nav">
            <navigation v-repeat="children"></navigation>
        </ul>
    </li>
</template>
<script>
module.exports = {
    data: function() {
        return {
            open: false
        }
    },
    computed: {
        isFolder: function() {
            return this.children && this.children.length;
        }
    },
    methods: {
        menuToggle: function(e, el) {
            e.stopPropagation();
            if (this.isFolder) {
                var menu = this.$parent.menu;
                var open = this.open;
                for (var idx in menu) {
                    if (menu[idx].open === true) {
                        menu[idx].open = false;
                    }
                }
                if (open) {
                    this.open = false;
                } else {
                    this.open = !this.open;
                }
            } else {
                if (!this.active) {
                    console.log(this.$parent.$children);
                    var children = this.$parent.$children;
                    for (var idx in children) {
                        children[idx].active = false;
                    }
                    this.active = !this.active;
                }
            }
        }
    }
}
</script>
