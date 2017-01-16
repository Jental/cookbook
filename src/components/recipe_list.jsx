import React from 'react';
import { connect } from 'react-redux';

import RecipeListItem from './recipe_list_item';

class RecipeList extends React.Component {
  render() {
    return (
      <table className="table table-bordered table-hover recipeList">
        <thead>
          <tr>
            <th className="hidden">Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          { this.props.recipes.map((recipe) => 
            <RecipeListItem
                key={ recipe.id }
                recipe={ recipe }
                onRecipeClick={(r) => {
                    // this.props.onRecipeSelect(r);
                    this.props.store.dispatch({ type: "SET_SELECTED_RECIPE", recipe: r });
                  }}
                isSelected={ this.props.selectedRecipe == recipe }
            />
            )
          }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

export default connect(mapStateToProps)(RecipeList);
