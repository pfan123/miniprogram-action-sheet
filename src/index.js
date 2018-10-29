Component({
  properties: {
    title: String,
    listData: {
      type: Array,
      value: []
    },
    showActionSheetFlag: {
      type: Boolean,
      value: false,
      observer: 'observeFlagChange'
    },
    isShowLayer: Boolean,
    showAnim: Boolean,
  },
  lifetimes: {
    attached() {
      wx.getSystemInfo({
        success(res) {
          // eslint-disable-next-line no-console
          console.log(res)
        }
      })
    }
  },
  methods: {
    closeLayer() {
      this.triggerEvent('closeActionSheet')
    },
    handleItemClick(e) {
      const {idx} = e.currentTarget.dataset
      this.triggerEvent('handleItemClick', idx)
    },
    observeFlagChange(newVal) {
      if (newVal) {
        this.setData({
          isShowLayer: true
        })
        setTimeout(() => {
          this.setData({
            showAnim: true
          })
        }, 100)
      } else {
        this.setData({
          showAnim: false
        })
        setTimeout(() => {
          this.setData({
            isShowLayer: false
          })
        }, 100)
      }
    },
    noscroll() { /* 返回空方法 */ }
  }
})
