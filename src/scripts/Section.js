export default class Section {
  constructor({ items, renderer }, templateSelector) {
    this._items = items;
    this._renderer = renderer;
    this._templateSelector = templateSelector;
  }
  renderer() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
  addItem(element) {
    this._templateSelector.append(element);
  }
}
