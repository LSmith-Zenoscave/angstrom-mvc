import { htmlToNodes, valuate } from './utils'

export default class View {
  constructor (element, template, update) {
    this.element = element
    this.template = template
    this._update = update
  }

  update (state) {
    let self = this

    while (this.element.hasChildNodes()) {
      this.element.removeChild(this.element.firstChild)
    }

    htmlToNodes(valuate(this.template, state)).forEach(node => {
      self.element.appendChild(node)
    })

    this._update(...arguments)
  }
}
