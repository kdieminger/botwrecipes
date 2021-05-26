import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Recipe } from '../recipes/Recipe';
import recipeService from '../service/recipeService';

function HomeComponent() {
    const history = useHistory();
    let recipes: Recipe[] = [];

    useEffect(() => {
        recipeService.getRecipes().then((results) => {
            recipes = results;
        })
    })

    return (
        <div>
            <button onClick={() => {history.push('/recipes')}}>Find by Recipe</button>
            <button onClick={() => {history.push('/ingredients')}}>Find by Ingredients</button>
            <button onClick={() => {history.push('/statuseffects')}}>Find by Status Effect</button>
        </div>
    )
}

export default HomeComponent;