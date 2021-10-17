import 'regenerator-runtime/runtime';
import 'core-js/stable';
class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this.clearInput();
    return query;
  }

  clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }
  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export const searchView = new SearchView();