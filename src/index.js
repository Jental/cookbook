import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import SearchBar from './components/search_bar';
import RecipeList from './components/recipe_list';
import RecipeDetails from './components/recipe_details';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      selectedRecipe: null
    };

    this.search(null);
  }

  search(terms) {
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
        this.setState({
          recipes: data._items,
          selectedRecipe:  null
        });
      },
      error: (err) => {
        console.log('error', err);
      }
    });
  }

  render() {
    return (
      <div className="container2">
        <SearchBar
            onSearchTermChanged={ this.search.bind(this) }
        />
        <div className={ (!this.state.selectedRecipe) ? "recipeDetailsContainer hidden" : "recipeDetailsContainer"}>
          <RecipeDetails
              recipe={ this.state.selectedRecipe }
              onClose={ () => this.setState({ selectedRecipe: null })}
          />
        </div>
        <div className="recipeListContainer">
          <RecipeList
              recipes={ this.state.recipes }
              onRecipeSelect={ (recipe) => this.setState({ selectedRecipe: recipe }) }
              selectedRecipe={ this.state.selectedRecipe }
          />
        </div>
      </div>
    );
  }
};
ReactDOM.render(<App />, document.querySelector('.container'));
