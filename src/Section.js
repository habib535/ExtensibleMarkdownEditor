define(['./DocumentItem'], function (DocumentItem) {
  return class Section extends DocumentItem {
    constructor(text) {
      super()
      this.DocumentItems = []
      this.Level = this.calculateLevel(text)
      let re = new RegExp("^[#]+|[#]+$", "g");
      this.Title = text.replace(re, "");
    }
    calculateLevel(text) {
      // sounds a bit silly, there should a more elegant way
      if (text.startsWith('###### ')) {
        return 6
      } else if (text.startsWith('##### ')) {
        return 5
      } else if (text.startsWith('#### ')) {
        return 4
      } else if (text.startsWith('### ')) {
        return 3
      } else if (text.startsWith('## ')) {
        return 2
      } else if (text.startsWith('# ')) {
        return 1
      }
    }
    export (type) {
      let retVal = ''
      if (type === 'html') {
        let heading = `h${this.Level}`
        retVal = `<${heading}>${this.Title}</${heading}>`
      }
      for (var DocumentItem of this.DocumentItems) {
        retVal += DocumentItem.export(type)
        if (type === 'html') {
          retVal += '</br>'
        }
      }
      return retVal
    }
  }
})