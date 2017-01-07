import React from 'react';

const RecipeListItem = ({ recipe, onRecipeClick, isSelected }) => {
  const rowClass = "recipeListItem " + ((isSelected) ? "selected" : "");
  return (
    <tr onClick={ () => onRecipeClick(recipe) } className={ rowClass } >
      <td className="hidden">{ recipe.id }</td>
      <td>{ recipe.title }</td>
    </tr>
  );
}

export default RecipeListItem;
