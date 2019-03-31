define(function () {
  return class TextItem {
    constructor(val) {
      this.value = val
    }
    export(type) {
      return this.value
    }
  }
})