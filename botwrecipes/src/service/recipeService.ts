import axios from 'axios';
import {Recipe} from '../recipes/Recipe';

class RecipeService {
    private URI: string;
    constructor() {
        //api? check other projects for this
        this.URI = ""
    }

    getRecipes(): Promise<Recipe[]>{
        return axios.get(this.URI).then(response => response.data);
    }
}

export default new RecipeService;