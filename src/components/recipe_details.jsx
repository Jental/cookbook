import React from 'react';

const RecipeDetails = ({ recipe, onClose }) => {
  return (recipe == null)
       ? <div className="recipeDetails" />
       : (
         <div className="recipeDetails">
           <input type="button" onClick={ onClose } className="close" value="&times;" />
           <div className="generalDetails">
             <img src={ recipe.image.src } />
             <h5>{ recipe.title }</h5>
             <table className="table">
               <tbody>
                 <tr className="detail" data-key="id">
                   <td className="title">Id:</td>
                   <td className="value">{ recipe.id }</td>
                 </tr>
                 <tr className="detail" data-key="category">
                   <td className="title">Category:</td>
                   <td className="value">{ recipe.category }</td>
                 </tr>
                 <tr className="detail" data-key="tags">
                   <td className="title">Tags:</td>
                   <td className="value">{ recipe.tags.join(',') }</td>
                 </tr>
                 <tr className="detail" data-key="time">
                   <td className="title">Time:</td>
                   <td className="value">{ recipe.time }</td>
                 </tr>
               </tbody>
             </table>
           </div>
           <table className="table detail ingredients" data-key="ingredients">
             <thead>
               <tr>
                 <th colSpan="2">Ingredients</th>
               </tr>
             </thead>
             <tbody>
               { recipe.ingredients.map((ingr) => (
                   <tr className="ingredient" key={ ingr.id }>
                     <td className="title">{ ingr.name }</td>
                     <td className="value">{ ingr.amount }</td>
                   </tr>
                 ))
               }
             </tbody>
           </table>
           <table className="table detail instructions" data-key="instructions">
             <thead>
               <tr><th>Instructions</th></tr>
             </thead>
             <tbody>
               { recipe.instructions.map((inst, idx) => (
                 <tr className="instruction" key={ idx }>
                   <td>{ inst }</td>
                 </tr>
               ))
               }
             </tbody>
           </table>
         </div>
       );
}

export default RecipeDetails;
