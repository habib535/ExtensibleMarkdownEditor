define(['./DocumentItem', './BoldText', './NormalText'], function (DocumentItem, BoldText, NormalText) {
  return class Paragraph extends DocumentItem {
    constructor(text) {
      super()
      this.TextItems = []
      this.process(text)
    }
    process(text) {
      let splittedText = text.split('**')
      let isOddIndexBold = text.startsWith('**')
      for (let i = 1; i <= splittedText.length; i++) {
        if ((isOddIndexBold === true && i % 2 == 1) || (isOddIndexBold === false && i % 2 == 0)) {
          this.TextItems.push(new BoldText(splittedText[i - 1]))
        } else {
          this.TextItems.push(new NormalText(splittedText[i - 1]))
        }
      }
    }
    export (type) {
      let retVal = ''
      for (var TextItem of this.TextItems) {
        retVal += TextItem.export(type)
      }
      return retVal
    }
  }
})