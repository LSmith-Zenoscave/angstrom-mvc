export default class Model {
  constructor (state) {
    this.$state = state

    this._observers = {}
  }

  notifyAll (bindValue) {
    if (bindValue in this._observers) {
      this._observers[bindValue].forEach((obs) => obs.update(this.$state))
    }
  }

  registerObserver (bindValue, observer) {
    this._observers[bindValue] = this._observers[bindValue] || []
    this._observers[bindValue].push(observer)
  }
}
