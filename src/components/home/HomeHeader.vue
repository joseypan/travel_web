<template>
    <div class="home-header">
        <div class="header-left"><div class="iconfont back-icon">&#xe624;</div></div>
        <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
        <div class="header-right">城市<span class="iconfont arrow-icon">&#xe6aa;</span></div>
    </div>
</template>
<script>
export default {
    name:'HomeHeader',
    data(){
        return{

        }
    }
}
</script>
<style lang="less" scoped>
@import '~styles/common.less';
    .home-header{
        display: flex;
        line-height: .86rem;
        color: #fff;
        background-color:@bgColor;
        .header-left{
            width: .64rem;
            float: left;
            .back-icon{
                text-align: center;
                font-size: .4rem;
                .arrow-icon{
                    margin-left: -.04rem;
                    font-size: .24rem;
                }
            }
        }
        .header-right{
            width: 1.24rem;
            float:right;
            text-align: center;
        }
        .header-input{
            flex: 1;
            margin-top: .12rem;
            margin-left: .2rem;
            padding-left: .2rem;
            height: .64rem;
            line-height: .64rem;
            color: #ccc;
            border-radius: .1rem;
            background-color: #fff;
        }
    }
</style>