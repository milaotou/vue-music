<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll"  class="recommend-content" :data="discList">
      <div>
        <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
          <slider>
            <div v-for="item in recommends">
              <a :href="item.linkUrl">
                <img @load="loadImage" class="needsclick" :src="item.picUrl" alt="">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="item in disList" class="item">
              <div class="icon">
                <img width="60" height="60" v-lazy="item.imgurl" alt="">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="discList.length">
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
   import Loading from 'base/loading/loading'
   import Scroll from 'base/scroll/scroll'
   import Slider from 'base/slider/slider'
   import {getRecommend,getDiscList} from 'api/recommend'
   import {ERR_OK} from 'api/config'
   
   export default{
     data(){
       return{
         recommends:[],
         discList:[]
       }
     },
     created(){
       this._getRecommend()

       this._getdiscList()

       //this._getdiscList();

       
     },
     methods:{
      _getRecommend(){
        getRecommend().then((res)=>{
          if(res.code===ERR_OK){
             this.recommends=res.data.slider
          }
        })
      },
      _getdiscList(){
         // getDiscList().then((res)=>{
         //   if(res.code===ERR_OK){
            const json=[
            {
                "dissid": "2385670269",
                "createtime": "2017-10-16",
                "commit_time": "2017-10-16",
                "dissname": "「德语女声」坐在出租车内看窗外霓虹",
                "imgurl": "http://p.qpic.cn/music_cover/sJbJ3JziapCLY3eOKXAqADTSoDBG61SRV62DtLObwUbjypiaiaRn5qw4w/600?n=1",
                "introduction": "",
                "listennum": 45199,
                "score": 0.0,
                "version": 0,
                "creator": {
                    "type": 0,
                    "qq": 3050275225,
                    "encrypt_uin": "oinkoe-l7K-A7v**",
                    "name": "温酒伴月落",
                    "isVip": 0,
                    "avatarUrl": "",
                    "followflag": 0
                }
            },
            {
                "dissid": "2079116957",
                "createtime": "2017-10-15",
                "commit_time": "2017-10-15",
                "dissname": "ACG/意境电音：飘渺星空下孤独祈愿的灵魂",
                "imgurl": "http://p.qpic.cn/music_cover/zvTEv4nf24OhibNkHicltqWGOaRrSpsFJC9u34AdfTicYusxQmeETzFuw/600?n=1",
                "introduction": "",
                "listennum": 37008,
                "score": 0.0,
                "version": 0,
                "creator": {
                    "type": 0,
                    "qq": 1134746874,
                    "encrypt_uin": "oK6i7eSP7wcl7n**",
                    "name": "鹿泺",
                    "isVip": 0,
                    "avatarUrl": "",
                    "followflag": 0
                }
            },
            {
                "dissid": "2981913712",
                "createtime": "2017-10-13",
                "commit_time": "2017-10-13",
                "dissname": "解忧杂货店，日系柔嗓的窝心瞬间",
                "imgurl": "http://p.qpic.cn/music_cover/eSGRkswjhr2Via8SDsYxDGlwnz4KGql0LBQ5tvHE6lcuAmO8O3HlPRA/600?n=1",
                "introduction": "",
                "listennum": 28210,
                "score": 0.0,
                "version": 0,
                "creator": {
                    "type": 0,
                    "qq": 2043898887,
                    "encrypt_uin": "ownPoicqNecF7z**",
                    "name": "叮铃铃",
                    "isVip": 0,
                    "avatarUrl": "",
                    "followflag": 0
                }
            },
            {
                "dissid": "1782860321",
                "createtime": "2017-10-11",
                "commit_time": "2017-10-11",
                "dissname": "恋情戒断指南: 爱惜自己，放下不可能的人",
                "imgurl": "http://p.qpic.cn/music_cover/trLoLK8fbplpSuhNLKWibc3nGeuvTxTrrzVhOqqbKtibibxtSfUz7qjww/600?n=1",
                "introduction": "",
                "listennum": 91157,
                "score": 0.0,
                "version": 0,
                "creator": {
                    "type": 0,
                    "qq": 244860443,
                    "encrypt_uin": "owvPNeCz7evi",
                    "name": "Kiss Me",
                    "isVip": 0,
                    "avatarUrl": "",
                    "followflag": 0
                }
            },
            {
                "dissid": "869050270",
                "createtime": "2017-10-15",
                "commit_time": "2017-10-15",
                "dissname": "『古风』千年霜雪终消融，万年伊人仍倾城",
                "imgurl": "http://p.qpic.cn/music_cover/OpKcpp1iadbF8zfxgHPWbJNibKkiawLoibicBfRoFITJrfAYDKW637rT2WQ/600?n=1",
                "introduction": "",
                "listennum": 57356,
                "score": 0.0,
                "version": 0,
                "creator": {
                    "type": 0,
                    "qq": 2609063220,
                    "encrypt_uin": "owCzNKnsoi-Aon**",
                    "name": "╲血樱゛顾湫乄灭世",
                    "isVip": 0,
                    "avatarUrl": "",
                    "followflag": 0
                }
            },
            {
                "dissid": "2052512713",
                "createtime": "2017-03-20",
                "commit_time": "2017-03-20",
                "dissname": "当代R&B | 深情撩人 旋律迷人",
                "imgurl": "http://p.qpic.cn/music_cover/Qk3PYmlSWgFQHSg1qP71Dw7r8Jofn0PXwhpTvs5SpNy1Qf6KNmfbibQ/600?n=1",
                "introduction": "",
                "listennum": 45216,
                "score": 0.0,
                "version": 0,
                "creator": {
                    "type": 0,
                    "qq": 3424525064,
                    "encrypt_uin": "oivA7e4A7Kns7n**",
                    "name": "好想去流浪",
                    "isVip": 0,
                    "avatarUrl": "",
                    "followflag": 0
                }
            },
            {
                "dissid": "2678080849",
                "createtime": "2017-10-18",
                "commit_time": "2017-10-18",
                "dissname": "心痛瞬间：情路漫漫，彼岸还有多远？",
                "imgurl": "http://p.qpic.cn/music_cover/etRVVF7aQu1fex4ZQECBHaY74Dc4CnicplasqQrXocvpXrz6v5EhPxQ/600?n=1",
                "introduction": "",
                "listennum": 27715,
                "score": 0.0,
                "version": 0,
                "creator": {
                    "type": 0,
                    "qq": 928619736,
                    "encrypt_uin": "NK-F7w6q7ios",
                    "name": "二七",
                    "isVip": 0,
                    "avatarUrl": "",
                    "followflag": 0
                }
            },
            {
                "dissid": "2981243969",
                "createtime": "2017-10-13",
                "commit_time": "2017-10-13",
                "dissname": "收工啦！Q音编辑审单后听的爵士魅音",
                "imgurl": "http://p.qpic.cn/music_cover/llTQ9l2AeicK2OLIORnsUdtq4v9kxvhSVvyp6j8qNwvy0CcibGaRia9OQ/600?n=1",
                "introduction": "",
                "listennum": 16282,
                "score": 0.0,
                "version": 0,
                "creator": {
                    "type": 0,
                    "qq": 348361207,
                    "encrypt_uin": "oivFoiC5ownl",
                    "name": "风少",
                    "isVip": 0,
                    "avatarUrl": "",
                    "followflag": 0
                }
            },
            {
                "dissid": "2980510710",
                "createtime": "2017-10-16",
                "commit_time": "2017-10-16",
                "dissname": "【原唱VS翻唱】V家歌曲大比拼",
                "imgurl": "http://p.qpic.cn/music_cover/1eOLzib9JkibvX0exAjozr43pSlOa3zNwKIg6vQNUnkbByK24BUXuJEA/600?n=1",
                "introduction": "",
                "listennum": 36867,
                "score": 0.0,
                "version": 0,
                "creator": {
                    "type": 0,
                    "qq": 799912497,
                    "encrypt_uin": "7iEqNK6A7eEl",
                    "name": "格格",
                    "isVip": 0,
                    "avatarUrl": "",
                    "followflag": 0
                }
            }]

               this.disList=json;

            
             //this.disList=res.data.list;
         //   }
         // })
      },
      loadImage() {
        if (!this.checkloaded) {
          this.checkloaded = true
          this.$refs.scroll.refresh()
        }
      },
      
     },
     components: {
      Slider,
      Scroll,
      Loading
    }
   }
  // export default {
  //   mixins: [playlistMixin],
  //   data() {
  //     return {
  //       recommends: [],
  //       discList: []
  //     }
  //   },
  //   created() {
  //     this._getRecommend()

  //     this._getDiscList()
  //   },
  //   methods: {
  //     handlePlaylist(playlist) {
  //       const bottom = playlist.length > 0 ? '60px' : ''

  //       this.$refs.recommend.style.bottom = bottom
  //       this.$refs.scroll.refresh()
  //     },
  //     loadImage() {
  //       if (!this.checkloaded) {
  //         this.checkloaded = true
  //         this.$refs.scroll.refresh()
  //       }
  //     },
  //     selectItem(item) {
  //       this.$router.push({
  //         path: `/recommend/${item.dissid}`
  //       })
  //       this.setDisc(item)
  //     },
  //     _getRecommend() {
  //       getRecommend().then((res) => {
  //         if (res.code === ERR_OK) {
  //           this.recommends = res.data.slider
  //         }
  //       })
  //     },
  //     _getDiscList() {
  //       getDiscList().then((res) => {
  //         if (res.code === ERR_OK) {
  //           this.discList = res.data.list
  //         }
  //       })
  //     },
  //     ...mapMutations({
  //       setDisc: 'SET_DISC'
  //     })
  //   },
  //   components: {
  //     Slider,
  //     Loading,
  //     Scroll
  //   }
  // }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>