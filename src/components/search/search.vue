<template>
  <div class="search">
    <div class="search-box-wrapper">
      456
    </div>
   
  </div>
</template>

<script type="text/ecmascript-6">
  

  // export default {
  //   mixins: [playlistMixin, searchMixin],
  //   data() {
  //     return {
  //       hotKey: []
  //     }
  //   },
  //   computed: {
  //     shortcut() {
  //       return this.hotKey.concat(this.searchHistory)
  //     }
  //   },
  //   created() {
  //     this._getHotKey()
  //   },
  //   methods: {
  //     handlePlaylist(playlist) {
  //       const bottom = playlist.length > 0 ? '60px' : ''

  //       this.$refs.searchResult.style.bottom = bottom
  //       this.$refs.suggest.refresh()

  //       this.$refs.shortcutWrapper.style.bottom = bottom
  //       this.$refs.shortcut.refresh()
  //     },
  //     showConfirm() {
  //       this.$refs.confirm.show()
  //     },
  //     _getHotKey() {
  //       getHotKey().then((res) => {
  //         if (res.code === ERR_OK) {
  //           this.hotKey = res.data.hotkey.slice(0, 10)
  //         }
  //       })
  //     },
  //     ...mapActions([
  //       'clearSearchHistory'
  //     ])
  //   },
  //   watch: {
  //     query(newQuery) {
  //       if (!newQuery) {
  //         setTimeout(() => {
  //           this.$refs.shortcut.refresh()
  //         }, 20)
  //       }
  //     }
  //   },
  //   components: {
  //     SearchBox,
  //     SearchList,
  //     Scroll,
  //     Confirm,
  //     Suggest
  //   }
  // }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .search
    .search-box-wrapper
      margin: 20px
    .shortcut-wrapper
      position: fixed
      top: 178px
      bottom: 0
      width: 100%
      .shortcut
        height: 100%
        overflow: hidden
        .hot-key
          margin: 0 20px 20px 20px
          .title
            margin-bottom: 20px
            font-size: $font-size-medium
            color: $color-text-l
          .item
            display: inline-block
            padding: 5px 10px
            margin: 0 20px 10px 0
            border-radius: 6px
            background: $color-highlight-background
            font-size: $font-size-medium
            color: $color-text-d
        .search-history
          position: relative
          margin: 0 20px
          .title
            display: flex
            align-items: center
            height: 40px
            font-size: $font-size-medium
            color: $color-text-l
            .text
              flex: 1
            .clear
              extend-click()
              .icon-clear
                font-size: $font-size-medium
                color: $color-text-d
    .search-result
      position: fixed
      width: 100%
      top: 178px
      bottom: 0
</style>