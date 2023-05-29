const app = Vue.createApp({
    data() {
        return {
            message: "All Recipes",
            searchTerm: "",
            idRecipe: "",
            principal: true,
            allRecipes: false,
            footer: false,
            detailsView: false,
            prepValue: 0,
            cookValue: 0,
            recipes:[
                /*{
                    category: "Breakfast", cookTime: 10, description: "This recipe is a delightful combination of flavors and textures that will leave you wanting more. With fresh ingredients and a careful selection of spices, this recipe offers a unique culinary experience. Start by mixing the main ingredients in a bowl and seasoning them with a pinch of salt and pepper to enhance the flavors. Then, heat a skillet over medium heat and add a drizzle of oil to brown the ingredients. As they cook, the irresistible aroma fills the kitchen, creating an anticipation that is hard to resist.", difficulty: "Intermediate", id: "52965", image: "https://www.themealdb.com/images/media/meals/1550441882.jpg", likes: 77, name: "Breakfast Potatoes", occasion: "Canadian", prepTime : 10,servings: 5, totalTime: 20
                },
                {category: "Breakfast", cookTime: 10, description: "This recipe is a delightful combination of flavors and textures that will leave you wanting more. With fresh ingredients and a careful selection of spices, this recipe offers a unique culinary experience. Start by mixing the main ingredients in a bowl and seasoning them with a pinch of salt and pepper to enhance the flavors. Then, heat a skillet over medium heat and add a drizzle of oil to brown the ingredients. As they cook, the irresistible aroma fills the kitchen, creating an anticipation that is hard to resist.", difficulty: "Intermediate", id: "52895",image: "https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg", likes: 397, name: "English Breakfast", occasion: "British", prepTime: 10, servings: 5, totalTime: 20}*/
            ],
            searchData:[],
            recipeDetails:[]
        }
    },
    computed:{
        showTrending(){
            return this.recipes.slice(0, 5);
        },
        showTop(){
            return this.recipes.slice(0, 10);
        },
        showRelated(){
            return this.recipes.slice(0, 3);
        },
        showFav(){
            return this.recipes.slice(0, 7);
        }
    },
    mounted(){
        //agregar Dessert
        axios({
            method: 'get',
            url:'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert'
           })
        .then(
            (response) => {
                let items = response.data.meals;
                //console.log(items);

                items.forEach(element => {
                    this.recipes.push({ 
                            id: element.idMeal,
                            image: element.strMealThumb,
                            name: element.strMeal,
                        })
                });

                for (let index = 0; index < this.recipes.length; index++) {
                    axios({
                        method: 'get',
                        url:'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+this.recipes[index].id+''
                       })
                    .then(
                        (response) => {
                            let item = response.data.meals;
                            //console.log(item);
                            let likesGenerate = Math.floor(Math.random() * 900);
                            
                            item.forEach(element => { 
                                this.recipes[index].likes = likesGenerate;
                                this.recipes[index].category = element.strCategory;
                                this.recipes[index].description = "This recipe is a delightful combination of flavors and textures that will leave you wanting more. With fresh ingredients and a careful selection of spices, this recipe offers a unique culinary experience. Start by mixing the main ingredients in a bowl and seasoning them with a pinch of salt and pepper to enhance the flavors. Then, heat a skillet over medium heat and add a drizzle of oil to brown the ingredients. As they cook, the irresistible aroma fills the kitchen, creating an anticipation that is hard to resist.";
                                this.recipes[index].difficulty = "Intermediate";
                                this.recipes[index].prepTime = 10;
                                this.recipes[index].cookTime = 10;
                                this.recipes[index].totalTime = 20;
                                this.recipes[index].servings = 5;
                                this.recipes[index].occasion = element.strArea;
                            });
                        }
                    )
                    .catch(
                        error => console.log(error)
                    );
                }
            }
        )
        .catch(
            error => console.log(error)
        );


        //agregar breakfast
        axios({
            method: 'get',
            url:'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast'
           })
        .then(
            (response) => {
                let items = response.data.meals;
                //console.log(items);

                items.forEach(element => {
                    this.recipes.push({ 
                            id: element.idMeal,
                            image: element.strMealThumb,
                            name: element.strMeal,
                        })
                });

                for (let index = 0; index < this.recipes.length; index++) {
                    axios({
                        method: 'get',
                        url:'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+this.recipes[index].id+''
                       })
                    .then(
                        (response) => {
                            let item = response.data.meals;
                            //console.log(item);
                            let likesGenerate = Math.floor(Math.random() * 900);
                            
                            item.forEach(element => { 
                                this.recipes[index].likes = likesGenerate;
                                this.recipes[index].category = element.strCategory;
                                this.recipes[index].description = "This recipe is a delightful combination of flavors and textures that will leave you wanting more. With fresh ingredients and a careful selection of spices, this recipe offers a unique culinary experience. Start by mixing the main ingredients in a bowl and seasoning them with a pinch of salt and pepper to enhance the flavors. Then, heat a skillet over medium heat and add a drizzle of oil to brown the ingredients. As they cook, the irresistible aroma fills the kitchen, creating an anticipation that is hard to resist.";
                                this.recipes[index].difficulty = "Intermediate";
                                this.recipes[index].prepTime = 10;
                                this.recipes[index].cookTime = 10;
                                this.recipes[index].totalTime = 20;
                                this.recipes[index].servings = 5;
                                this.recipes[index].occasion = element.strArea;
                            });
                        }
                    )
                    .catch(
                        error => console.log(error)
                    );
                }
            }
        )
        .catch(
            error => console.log(error)
        );

        //agregar entradas
        axios({
            method: 'get',
            url:'https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter'
           })
        .then(
            (response) => {
                let items = response.data.meals;
                //console.log(items);

                items.forEach(element => {
                    this.recipes.push({ 
                            id: element.idMeal,
                            image: element.strMealThumb,
                            name: element.strMeal,
                        })
                });

                for (let index = 0; index < this.recipes.length; index++) {
                    axios({
                        method: 'get',
                        url:'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+this.recipes[index].id+''
                       })
                    .then(
                        (response) => {
                            let item = response.data.meals;
                            //console.log(item);
                            let likesGenerate = Math.floor(Math.random() * 900);
                            
                            item.forEach(element => { 
                                this.recipes[index].likes = likesGenerate;
                                this.recipes[index].category = element.strCategory;
                                this.recipes[index].description = "This recipe is a delightful combination of flavors and textures that will leave you wanting more. With fresh ingredients and a careful selection of spices, this recipe offers a unique culinary experience. Start by mixing the main ingredients in a bowl and seasoning them with a pinch of salt and pepper to enhance the flavors. Then, heat a skillet over medium heat and add a drizzle of oil to brown the ingredients. As they cook, the irresistible aroma fills the kitchen, creating an anticipation that is hard to resist.";
                                this.recipes[index].difficulty = "Intermediate";
                                this.recipes[index].prepTime = 10;
                                this.recipes[index].cookTime = 10;
                                this.recipes[index].totalTime = 20;
                                this.recipes[index].servings = 5;
                                this.recipes[index].occasion = element.strArea;
                            });
                        }
                    )
                    .catch(
                        error => console.log(error)
                    );
                }
            }
        )
        .catch(
            error => console.log(error)
        );
        
    },
    methods: {
        searchRecipes(){
            axios({
                method: 'get',
                url:'https://www.themealdb.com/api/json/v1/1/search.php?s='+this.searchTerm
               })
            .then(
                (response) => {
                    let items = response.data.meals;
                    this.searchData = [];

                    if(this.searchTerm != ""){
                        this.$root.principal = false;
                        this.$root.allRecipes = true;
                    }

                    console.log("palabra " +this.searchTerm);

                    items.forEach(element => {
                        this.searchData.push({ 
                                id: element.idMeal,
                                image: element.strMealThumb,
                                name: element.strMeal,
                                category: element.strCategory,
                                description: "This recipe is a delightful combination of flavors and textures that will leave you wanting more. With fresh ingredients and a careful selection of spices, this recipe offers a unique culinary experience. Start by mixing the main ingredients in a bowl and seasoning them with a pinch of salt and pepper to enhance the flavors. Then, heat a skillet over medium heat and add a drizzle of oil to brown the ingredients. As they cook, the irresistible aroma fills the kitchen, creating an anticipation that is hard to resist.",
                                difficulty: "Intermediate"
                            })
                    });

                    if(this.searchData != null){
                        this.message= "Search results for "+this.searchTerm;
                    }
                }
            )
            .catch(
                error => console.log(error)
            );
        },

        onClickSearchRecipe(searchTerm){
            this.searchTerm=searchTerm;
            console.log(searchTerm);
            this.searchRecipes();
        },

        prepIncrease(){
            this.prepValue++;
        },

        prepDecrease(){
            if (this.prepValue > 0) {
                this.prepValue--;
            }
        },

        cookIncrease(){
            this.cookValue++;
        },

        cookDecrease(){
            if (this.cookValue > 0) {
                this.cookValue--;
            }
        },

        showRecipes(){
            this.$root.principal = false;
            this.$root.allRecipes = true;
            this.$root.footer = true;
            this.cleanResults();
            console.log("princ reee "+this.principal);
            console.log("recip reee "+this.allRecipes);
        },

        showHome(){
            this.$root.principal = true;
            this.$root.allRecipes = false;
            this.$root.footer = false;
            console.log("princ hhhhhhhh "+this.principal);
            console.log("recip hhhhhhhh "+this.allRecipes);
        },

        cleanResults(){
            this.searchData= [];
            this.message= "All recipes";
        },

        onClickShowDetails(id){
            //mostrar una receta
            axios({
                method: 'get',
                url:'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id
                })
            .then(
                (response) => {
                    let item = response.data.meals;
                    console.log(item);
                    console.log(id);
                    this.recipeDetails = [];
                        this.$root.principal = false;
                        this.$root.allRecipes = false;
                        this.$root.detailsView = true;
                        this.$root.footer = true;

                    let ingredientsList = "";
                    let ingredientsA = [];
                    let likesGenerate = Math.floor(Math.random() * 900);
                    for (let vars in item[0]) {
                        if (vars.startsWith("strIngredient") && item[0][vars]) {
                        let measureVars = vars.replace("strIngredient", "strMeasure");
                        let measure = item[0][measureVars];
                        let ingredient = item[0][vars];
                    
                        ingredientsA.push(`${measure} ${ingredient}`);
                        }
                    }
                    ingredientsList = ingredientsA.join('*');

                    item.forEach(element => {
                        this.recipeDetails.push({ 
                                id: element.idMeal,
                                image: element.strMealThumb,
                                name: element.strMeal,
                                likes: likesGenerate,
                                category: element.strCategory,
                                description: "This recipe is a delightful combination of flavors and textures that will leave you wanting more. With fresh ingredients and a careful selection of spices, this recipe offers a unique culinary experience. Start by mixing the main ingredients in a bowl and seasoning them with a pinch of salt and pepper to enhance the flavors. Then, heat a skillet over medium heat and add a drizzle of oil to brown the ingredients. As they cook, the irresistible aroma fills the kitchen, creating an anticipation that is hard to resist.",
                                difficulty: "Intermediate",
                                totalTime: 35,
                                cookTime: 20,
                                prepTime: 15,
                                servings: 5,
                                occasion: "Summer",
                                ingredients: ingredientsList,
                                instructions:"Preheat the oven to 350°F (175°C). Grease an 8-inch (20 cm) square baking pan and line it with parchment paper. *In a medium saucepan over medium heat, melt the butter. Add the sugar and mix until well combined. Remove from heat and let cool for a few minutes.*Add the eggs and vanilla to the butter-sugar mixture and beat until well combined.*In a separate bowl, sift together the flour, cocoa powder, salt, and baking soda. Add the dry ingredients to the egg mixture and mix until well combined.*Add the chopped walnuts and mix gently.*Pour the mixture into the prepared baking pan and bake for 25-30 minutes or until a toothpick inserted into the center comes out clean.*Let cool in the pan for 10 minutes before cutting into squares and serving."
                            })
                    });
                    console.log(this.recipeDetails);
                }
            )
            .catch(
                error => console.log(error)
            );
        }
    }
})