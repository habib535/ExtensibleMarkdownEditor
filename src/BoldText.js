define(['./TextItem'], function (TextItem) {
  return class BoldText extends TextItem {
    constructor(val) {
      super(val);
    }
    export (type) {
      if (type === 'html')
        return `<b>${this.value}</b>`
    }
  }
})