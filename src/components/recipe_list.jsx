import React from 'react';

import RecipeListItem from './recipe_list_item';

const RecipeList = ({ recipes, onRecipeSelect, selectedRecipe }) => (
  <table className="table table-bordered table-hover recipeList">
    <thead>
      <tr>
        <th className="hidden">Id</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
      { recipes.map((recipe) => 
        <RecipeListItem
            key={ recipe.id }
            recipe={ recipe }
            onRecipeClick={ onRecipeSelect }
            isSelected={ selectedRecipe == recipe }
        />
        )
      }
    </tbody>
  </table>
);

export default RecipeList;
