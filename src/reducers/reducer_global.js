export default function(state, action) {
  const stateNew = (!state) ? { selectedRecipe: null } : state;

  switch (action.type) {
    case "SET_SELECTED_RECIPE":
      return Object.assign({}, stateNew, { selectedRecipe: action.recipe });
    default:
      return stateNew;
  }
}
