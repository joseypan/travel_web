<template>
    <div class="home-recommend">
        <div class="recommend-title">热销推荐</div>
        <ul class="recommend-list">
            <li class="list-item border-bottom" v-for="(item) in recommendList" :key="item.id">
                <div class="item-img-wrap">
                    <img :src="item.imgSrc" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-commit">{{item.commit}}条评论</p>
                    <div class="item-desc">
                        <p class="item-price">￥{{item.price}}起</p>
                        <p class="item-district">{{item.district}}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeRecommend',
    data(){
        return{
            recommendList:[
                {
                    id:1,
                    imgSrc:'https://imgs.qunarzz.com/sight/p0/1603/b5/b55923ced74910b990.water.jpg_200x200_adde2b9e.jpg',
                    title:'三亚凤凰岛',
                    commit:'701',
                    price:'787',
                    district:'三亚湾'
                },
                {
                    id:2,
                    imgSrc:'https://imgs.qunarzz.com/sight/p0/1603/b5/b55923ced74910b990.water.jpg_200x200_adde2b9e.jpg',
                    title:'三亚凤凰岛',
                    commit:'701',
                    price:'787',
                    district:'三亚湾'
                },
                {
                    id:3,
                    imgSrc:'https://imgs.qunarzz.com/sight/p0/1603/b5/b55923ced74910b990.water.jpg_200x200_adde2b9e.jpg',
                    title:'三亚凤凰岛',
                    commit:'701',
                    price:'787',
                    district:'三亚湾'
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
@import '~@/assets/styles/mixins.less';
    .recommend-title{
        line-height: .8rem;
        text-indent: .2rem;
        background-color: #eee;
    }
    .recommend-list{
        padding-left: .2rem;
    }
    .list-item{
        height: 2.4rem;
        display: flex;
        align-items: center;
        // border-bottom: 1px solid #eee;
        .item-img-wrap{
            width: 2rem;
            img{
                width: 100%;
                height: auto;
            }
        }
        .item-info{
            flex: 1;
            height: 100%;
            padding:0 .3rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .item-title{
                width: 100%;
                font-size: .4rem;
            }
            .item-commit{
                color: #bbb;
            }
            .item-desc{
                width: 100%;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>