import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { createStore } from 'redux';
import App from './components/app';

import reducers from './reducers';

const store = createStore(reducers);
window._store_ = store;

store.subscribe(() => {
  console.log(store.getState());
});

const search = (terms) => {
  var url
  if (!terms || terms.length == 0)
    url = 'http://api.cookbook.jental.name/recipes/';
  else if (terms.length == 1)
    url = 'http://api.cookbook.jental.name/recipes?where={"title": {"$regex": "' + terms[0] + '", "$options": "i"}}';
  else
    url = 'http://api.cookbook.jental.name/recipes?where={"$and": [' + terms.map((t) => '{"title": {"$regex": "' + t + '", "$options": "i"}}') + ']}';

  console.log(terms);

  $.ajax({
    type: 'GET',
    url: url,
    success: (data) => {
      store.dispatch({
        type: "SET_SELECTED_RECIPE",
        recipe: null
      });
      store.dispatch({
        type: "SET_RECIPES",
        recipes: data._items
      });
      
    },
    error: (err) => {
      console.log('error', err);
    }
  });
}
search(null);

ReactDOM.render(
  <App
      store={ store }
      searchFn={ search }
  />,
  document.querySelector('.container')
);
