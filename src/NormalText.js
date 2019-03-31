define(['./TextItem'], function (TextItem) {
  return class NormalText extends TextItem {
    constructor(val) {
      super(val);
    }
    export(type) {
      return this.value
    }
  }
})