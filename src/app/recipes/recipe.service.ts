import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('Gur Biscuits',
        'Gur - maida biscuits garnished with cashew',
        'https://upload.wikimedia.org/wikipedia/commons/1/14/Eggless-jaggery-shortbread-recipe.jpg',
        [
          new Ingredient('Maida (Kg)', 1),
          new Ingredient('Gur (gm)', 250),
          new Ingredient('Ghee (gm)', 500),
          new Ingredient('Cashew (gm)', 100),
        ]),
        new Recipe('Grilled Chicken',
        'You just cant miss it!',
        'http://maxpixel.freegreatpicture.com/static/photo/1x/Food-Chicken-Menu-Recipe-Bacon-Dinner-Meat-Dish-2428926.jpg',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
        ]),
        new Recipe('Pizza',
        'Italian',
        'http://maxpixel.freegreatpicture.com/static/photo/1x/Pizza-Gourmet-Creative-Beef-Pizza-2446699.jpg',
        [
          new Ingredient('Pizza Base', 1),
          new Ingredient('Cheese (gm)', 100),
          new Ingredient('Toppings Items', 3)
        ])
    ];

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
