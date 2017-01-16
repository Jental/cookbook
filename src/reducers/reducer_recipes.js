export default function(state = [], action) {
  switch (action.type) {
    case "SET_RECIPES":
      return action.recipes
    default:
      return state;
  }
}
