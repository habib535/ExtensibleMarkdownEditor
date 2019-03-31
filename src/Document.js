define(['./DocumentItem'], function (DocumentItem) {
  return class Document {
    constructor() {
      // if (Array.isArray(DocItems)) {
      this.DocumentItems = []
      // }
    }
    export (type) {
      let retVal = ''
      for (var value of this.DocumentItems) {
        retVal += value.export(type)
        if (type === 'html') {
          retVal += '</br>'
        }
      }
      return retVal
    }
  }
})