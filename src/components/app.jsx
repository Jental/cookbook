import React from 'react';
import { connect } from 'react-redux';

import SearchBar from './search_bar';
import RecipeList from './recipe_list';
import RecipeDetails from './recipe_details';

class App extends React.Component {
  render() {
    console.log("selectedRecipe: ", this.props.selectedRecipe);
    return (
      <div className="container2">
        <SearchBar
            onSearchTermChanged={ this.props.searchFn.bind(this) }
        />
        <div className={ "recipeDetailsContainer" + (!this.props.selectedRecipe ? " hidden " : "")}>
          <RecipeDetails
              recipe={ this.props.selectedRecipe }
              onClose={ () => this.props.store.dispatch({type: "SET_SELECTED_RECIPE", recipe: null}) }
          />
        </div>
        <div className="recipeListContainer">
          <RecipeList
              store={ this.props.store }
          />
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  console.log("app.mapStateToProps: selectedRecipe: ", state.global.selectedRecipe);
  return {
    selectedRecipe: state.global.selectedRecipe
  };
}

export default connect(mapStateToProps)(App);
