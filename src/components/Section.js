export class Section {
  constructor({renderer}, containerSelector){
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  renderItems(arr) {
    [].concat(arr).forEach(item => this._renderer(item));
  }
  setItem(element) {
    this._container.append(element);
  }
  reverseSetItem(element) {
    this._container.prepend(element);
  }
}