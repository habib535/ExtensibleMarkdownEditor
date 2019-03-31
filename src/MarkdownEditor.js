define(['./Document', './Section', './Paragraph'], function (Document, Section, Paragraph) {
  return class MarkdownEditor {
    constructor(text) {
      this.Text = text
      this.Document = new Document()
      this.process()
    }
    process() { //looks complicated, probably need to re-think the implementation strategy
      let lines = this.Text.split('\n')
      let document = this.Document.DocumentItems
      let parentStack = [];
      let level = 0
      for (var line of lines) {
        if (line.startsWith('#')) {
          let newSec = new Section(line)
          if (newSec.Level > level) {
            level = newSec.Level
            parentStack.push(newSec)
          } else {
            if (parentStack.length === 0) {
              document = this.Document.DocumentItems
              level = 1
            } else {
              while (parentStack.length) {
                let section = parentStack.pop()
                if (section.Level < newSec.Level) {
                  document = section.DocumentItems
                  level = section.Level
                  break;
                } else if (parentStack.length === 0) {
                  document = this.Document.DocumentItems
                  level = 1
                }
              }
            }
          }
          document.push(newSec)
          document = newSec.DocumentItems
        } else {
          document.push(new Paragraph(line))
        }
      }
    }
    export (type) {
      return this.Document.export(type)
    }
  }
})