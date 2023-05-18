const app = Vue.createApp({
    data() {
        return {
            selectedIndex:0,
            recipes:[
                {id: 1, name:"Chocolate and Walnut Brownies", image:"./img/chocolate.jpg", prepTime:15, cookTime:25, totalTime:40, servings: 12, difficulty:"Intermediate", category:"Desserts", occasion:"All", description:"These chocolate and walnut brownies are the perfect dessert for any occasion. They're rich and decadent, with an intense chocolate flavor and crunchy chopped walnuts. They're easy to make and can be enjoyed on their own or with a scoop of vanilla ice cream. You can make them ahead of time and store them in an airtight container in the fridge to enjoy for several days. These brownies will definitely satisfy any chocolate craving!", ingredients:"1/2 cup (1 stick) unsalted butter,*1 cup granulated sugar,*2 large eggs,*1 teaspoon vanilla extract,*1/2 cup all-purpose flour,*1/3 cup unsweetened cocoa powder,*1/4 teaspoon salt,*1/4 teaspoon baking soda,*1/2 cup chopped walnuts.", instructions:"Preheat the oven to 350°F (175°C). Grease an 8-inch (20 cm) square baking pan and line it with parchment paper. *In a medium saucepan over medium heat, melt the butter. Add the sugar and mix until well combined. Remove from heat and let cool for a few minutes.*Add the eggs and vanilla to the butter-sugar mixture and beat until well combined.*In a separate bowl, sift together the flour, cocoa powder, salt, and baking soda. Add the dry ingredients to the egg mixture and mix until well combined.*Add the chopped walnuts and mix gently.*Pour the mixture into the prepared baking pan and bake for 25-30 minutes or until a toothpick inserted into the center comes out clean.*Let cool in the pan for 10 minutes before cutting into squares and serving.", likes:220},
                {id: 2, name:"Creamy Tomato Soup", image:"./img/chocolate.jpg", prepTime:15, cookTime:25, totalTime:40, servings: 12, difficulty:"Intermediate", category:"Desserts", occasion:"All", description:"These chocolate and walnut brownies are the perfect dessert for any occasion. They're rich and decadent, with an intense chocolate flavor and crunchy chopped walnuts. They're easy to make and can be enjoyed on their own or with a scoop of vanilla ice cream. You can make them ahead of time and store them in an airtight container in the fridge to enjoy for several days. These brownies will definitely satisfy any chocolate craving!", ingredients:"1/2 cup (1 stick) unsalted butter.*1 cup granulated sugar.*2 large eggs.*1 teaspoon vanilla extract.*1/2 cup all-purpose flour.*1/3 cup unsweetened cocoa powder.*1/4 teaspoon salt.*1/4 teaspoon baking soda.*1/2 cup chopped walnuts", instructions:"Preheat the oven to 350°F (175°C). Grease an 8-inch (20 cm) square baking pan and line it with parchment paper. *In a medium saucepan over medium heat, melt the butter. Add the sugar and mix until well combined. Remove from heat and let cool for a few minutes.*Add the eggs and vanilla to the butter-sugar mixture and beat until well combined.*In a separate bowl, sift together the flour, cocoa powder, salt, and baking soda. Add the dry ingredients to the egg mixture and mix until well combined.*Add the chopped walnuts and mix gently.*Pour the mixture into the prepared baking pan and bake for 25-30 minutes or until a toothpick inserted into the center comes out clean.*Let cool in the pan for 10 minutes before cutting into squares and serving.", likes:135},
                {id: 3, name:"Chocolate and Walnut Brownies", image:"./img/chocolate.jpg", prepTime:15, cookTime:25, totalTime:40, servings: 12, difficulty:"Intermediate", category:"Desserts", occasion:"All", description:"These chocolate and walnut brownies are the perfect dessert for any occasion. They're rich and decadent, with an intense chocolate flavor and crunchy chopped walnuts. They're easy to make and can be enjoyed on their own or with a scoop of vanilla ice cream. You can make them ahead of time and store them in an airtight container in the fridge to enjoy for several days. These brownies will definitely satisfy any chocolate craving!", ingredients:"1/2 cup (1 stick) unsalted butter.*1 cup granulated sugar.*2 large eggs.*1 teaspoon vanilla extract.*1/2 cup all-purpose flour.*1/3 cup unsweetened cocoa powder.*1/4 teaspoon salt.*1/4 teaspoon baking soda.*1/2 cup chopped walnuts", instructions:"Preheat the oven to 350°F (175°C). Grease an 8-inch (20 cm) square baking pan and line it with parchment paper. *In a medium saucepan over medium heat, melt the butter. Add the sugar and mix until well combined. Remove from heat and let cool for a few minutes.*Add the eggs and vanilla to the butter-sugar mixture and beat until well combined.*In a separate bowl, sift together the flour, cocoa powder, salt, and baking soda. Add the dry ingredients to the egg mixture and mix until well combined.*Add the chopped walnuts and mix gently.*Pour the mixture into the prepared baking pan and bake for 25-30 minutes or until a toothpick inserted into the center comes out clean.*Let cool in the pan for 10 minutes before cutting into squares and serving.", likes:122},
                {id: 4, name:"Creamy Tomato Soup", image:"./img/chocolate.jpg", prepTime:15, cookTime:25, totalTime:40, servings: 12, difficulty:"Intermediate", category:"Desserts", occasion:"All", description:"These chocolate and walnut brownies are the perfect dessert for any occasion. They're rich and decadent, with an intense chocolate flavor and crunchy chopped walnuts. They're easy to make and can be enjoyed on their own or with a scoop of vanilla ice cream. You can make them ahead of time and store them in an airtight container in the fridge to enjoy for several days. These brownies will definitely satisfy any chocolate craving!", ingredients:"1/2 cup (1 stick) unsalted butter.*1 cup granulated sugar.*2 large eggs.*1 teaspoon vanilla extract.*1/2 cup all-purpose flour.*1/3 cup unsweetened cocoa powder.*1/4 teaspoon salt.*1/4 teaspoon baking soda.*1/2 cup chopped walnuts", instructions:"Preheat the oven to 350°F (175°C). Grease an 8-inch (20 cm) square baking pan and line it with parchment paper. *In a medium saucepan over medium heat, melt the butter. Add the sugar and mix until well combined. Remove from heat and let cool for a few minutes.*Add the eggs and vanilla to the butter-sugar mixture and beat until well combined.*In a separate bowl, sift together the flour, cocoa powder, salt, and baking soda. Add the dry ingredients to the egg mixture and mix until well combined.*Add the chopped walnuts and mix gently.*Pour the mixture into the prepared baking pan and bake for 25-30 minutes or until a toothpick inserted into the center comes out clean.*Let cool in the pan for 10 minutes before cutting into squares and serving.", likes:10},
                {id: 6, name:"Version de prueba receta", image:"./img/chocolate.jpg", prepTime:15, cookTime:25, totalTime:40, servings: 12, difficulty:"Intermediate", category:"Desserts", occasion:"All", description:"These chocolate and walnut brownies are the perfect dessert for any occasion. They're rich and decadent, with an intense chocolate flavor and crunchy chopped walnuts. They're easy to make and can be enjoyed on their own or with a scoop of vanilla ice cream. You can make them ahead of time and store them in an airtight container in the fridge to enjoy for several days. These brownies will definitely satisfy any chocolate craving!", ingredients:"1/2 cup (1 stick) unsalted butter.*1 cup granulated sugar.*2 large eggs.*1 teaspoon vanilla extract.*1/2 cup all-purpose flour.*1/3 cup unsweetened cocoa powder.*1/4 teaspoon salt.*1/4 teaspoon baking soda.*1/2 cup chopped walnuts", instructions:"Preheat the oven to 350°F (175°C). Grease an 8-inch (20 cm) square baking pan and line it with parchment paper. *In a medium saucepan over medium heat, melt the butter. Add the sugar and mix until well combined. Remove from heat and let cool for a few minutes.*Add the eggs and vanilla to the butter-sugar mixture and beat until well combined.*In a separate bowl, sift together the flour, cocoa powder, salt, and baking soda. Add the dry ingredients to the egg mixture and mix until well combined.*Add the chopped walnuts and mix gently.*Pour the mixture into the prepared baking pan and bake for 25-30 minutes or until a toothpick inserted into the center comes out clean.*Let cool in the pan for 10 minutes before cutting into squares and serving.", likes:325},
                {id: 7, name:"Version de prueba receta", image:"./img/chocolate.jpg", prepTime:15, cookTime:25, totalTime:40, servings: 12, difficulty:"Intermediate", category:"Desserts", occasion:"All", description:"These chocolate and walnut brownies are the perfect dessert for any occasion. They're rich and decadent, with an intense chocolate flavor and crunchy chopped walnuts. They're easy to make and can be enjoyed on their own or with a scoop of vanilla ice cream. You can make them ahead of time and store them in an airtight container in the fridge to enjoy for several days. These brownies will definitely satisfy any chocolate craving!", ingredients:"1/2 cup (1 stick) unsalted butter.*1 cup granulated sugar.*2 large eggs.*1 teaspoon vanilla extract.*1/2 cup all-purpose flour.*1/3 cup unsweetened cocoa powder.*1/4 teaspoon salt.*1/4 teaspoon baking soda.*1/2 cup chopped walnuts", instructions:"Preheat the oven to 350°F (175°C). Grease an 8-inch (20 cm) square baking pan and line it with parchment paper. *In a medium saucepan over medium heat, melt the butter. Add the sugar and mix until well combined. Remove from heat and let cool for a few minutes.*Add the eggs and vanilla to the butter-sugar mixture and beat until well combined.*In a separate bowl, sift together the flour, cocoa powder, salt, and baking soda. Add the dry ingredients to the egg mixture and mix until well combined.*Add the chopped walnuts and mix gently.*Pour the mixture into the prepared baking pan and bake for 25-30 minutes or until a toothpick inserted into the center comes out clean.*Let cool in the pan for 10 minutes before cutting into squares and serving.", likes:100},
                {id: 8, name:"Version de prueba receta", image:"./img/chocolate.jpg", prepTime:15, cookTime:25, totalTime:40, servings: 12, difficulty:"Intermediate", category:"Desserts", occasion:"All", description:"These chocolate and walnut brownies are the perfect dessert for any occasion. They're rich and decadent, with an intense chocolate flavor and crunchy chopped walnuts. They're easy to make and can be enjoyed on their own or with a scoop of vanilla ice cream. You can make them ahead of time and store them in an airtight container in the fridge to enjoy for several days. These brownies will definitely satisfy any chocolate craving!", ingredients:"1/2 cup (1 stick) unsalted butter.*1 cup granulated sugar.*2 large eggs.*1 teaspoon vanilla extract.*1/2 cup all-purpose flour.*1/3 cup unsweetened cocoa powder.*1/4 teaspoon salt.*1/4 teaspoon baking soda.*1/2 cup chopped walnuts", instructions:"Preheat the oven to 350°F (175°C). Grease an 8-inch (20 cm) square baking pan and line it with parchment paper. *In a medium saucepan over medium heat, melt the butter. Add the sugar and mix until well combined. Remove from heat and let cool for a few minutes.*Add the eggs and vanilla to the butter-sugar mixture and beat until well combined.*In a separate bowl, sift together the flour, cocoa powder, salt, and baking soda. Add the dry ingredients to the egg mixture and mix until well combined.*Add the chopped walnuts and mix gently.*Pour the mixture into the prepared baking pan and bake for 25-30 minutes or until a toothpick inserted into the center comes out clean.*Let cool in the pan for 10 minutes before cutting into squares and serving.", likes:12},
                {id: 9, name:"Version de prueba receta", image:"./img/chocolate.jpg", prepTime:15, cookTime:25, totalTime:40, servings: 12, difficulty:"Intermediate", category:"Desserts", occasion:"All", description:"These chocolate and walnut brownies are the perfect dessert for any occasion. They're rich and decadent, with an intense chocolate flavor and crunchy chopped walnuts. They're easy to make and can be enjoyed on their own or with a scoop of vanilla ice cream. You can make them ahead of time and store them in an airtight container in the fridge to enjoy for several days. These brownies will definitely satisfy any chocolate craving!", ingredients:"1/2 cup (1 stick) unsalted butter.*1 cup granulated sugar.*2 large eggs.*1 teaspoon vanilla extract.*1/2 cup all-purpose flour.*1/3 cup unsweetened cocoa powder.*1/4 teaspoon salt.*1/4 teaspoon baking soda.*1/2 cup chopped walnuts", instructions:"Preheat the oven to 350°F (175°C). Grease an 8-inch (20 cm) square baking pan and line it with parchment paper. *In a medium saucepan over medium heat, melt the butter. Add the sugar and mix until well combined. Remove from heat and let cool for a few minutes.*Add the eggs and vanilla to the butter-sugar mixture and beat until well combined.*In a separate bowl, sift together the flour, cocoa powder, salt, and baking soda. Add the dry ingredients to the egg mixture and mix until well combined.*Add the chopped walnuts and mix gently.*Pour the mixture into the prepared baking pan and bake for 25-30 minutes or until a toothpick inserted into the center comes out clean.*Let cool in the pan for 10 minutes before cutting into squares and serving.", likes:15},
                {id: 10, name:"Version de prueba receta bloom", image:"./img/chocolate.jpg", prepTime:15, cookTime:25, totalTime:40, servings: 12, difficulty:"Intermediate", category:"Desserts", occasion:"All", description:"These chocolate and walnut brownies are the perfect dessert for any occasion. They're rich and decadent, with an intense chocolate flavor and crunchy chopped walnuts. They're easy to make and can be enjoyed on their own or with a scoop of vanilla ice cream. You can make them ahead of time and store them in an airtight container in the fridge to enjoy for several days. These brownies will definitely satisfy any chocolate craving!", ingredients:"1/2 cup (1 stick) unsalted butter.*1 cup granulated sugar.*2 large eggs.*1 teaspoon vanilla extract.*1/2 cup all-purpose flour.*1/3 cup unsweetened cocoa powder.*1/4 teaspoon salt.*1/4 teaspoon baking soda.*1/2 cup chopped walnuts", instructions:"Preheat the oven to 350°F (175°C). Grease an 8-inch (20 cm) square baking pan and line it with parchment paper. *In a medium saucepan over medium heat, melt the butter. Add the sugar and mix until well combined. Remove from heat and let cool for a few minutes.*Add the eggs and vanilla to the butter-sugar mixture and beat until well combined.*In a separate bowl, sift together the flour, cocoa powder, salt, and baking soda. Add the dry ingredients to the egg mixture and mix until well combined.*Add the chopped walnuts and mix gently.*Pour the mixture into the prepared baking pan and bake for 25-30 minutes or until a toothpick inserted into the center comes out clean.*Let cool in the pan for 10 minutes before cutting into squares and serving.", likes:33},
                {id: 11, name:"Version de prueba receta", image:"./img/chocolate.jpg", prepTime:15, cookTime:25, totalTime:40, servings: 12, difficulty:"Intermediate", category:"Desserts", occasion:"All", description:"These chocolate and walnut brownies are the perfect dessert for any occasion. They're rich and decadent, with an intense chocolate flavor and crunchy chopped walnuts. They're easy to make and can be enjoyed on their own or with a scoop of vanilla ice cream. You can make them ahead of time and store them in an airtight container in the fridge to enjoy for several days. These brownies will definitely satisfy any chocolate craving!", ingredients:"1/2 cup (1 stick) unsalted butter.*1 cup granulated sugar.*2 large eggs.*1 teaspoon vanilla extract.*1/2 cup all-purpose flour.*1/3 cup unsweetened cocoa powder.*1/4 teaspoon salt.*1/4 teaspoon baking soda.*1/2 cup chopped walnuts", instructions:"Preheat the oven to 350°F (175°C). Grease an 8-inch (20 cm) square baking pan and line it with parchment paper. *In a medium saucepan over medium heat, melt the butter. Add the sugar and mix until well combined. Remove from heat and let cool for a few minutes.*Add the eggs and vanilla to the butter-sugar mixture and beat until well combined.*In a separate bowl, sift together the flour, cocoa powder, salt, and baking soda. Add the dry ingredients to the egg mixture and mix until well combined.*Add the chopped walnuts and mix gently.*Pour the mixture into the prepared baking pan and bake for 25-30 minutes or until a toothpick inserted into the center comes out clean.*Let cool in the pan for 10 minutes before cutting into squares and serving.", likes:30},
                {id: 12, name:"Version de prueba receta", image:"./img/chocolate.jpg", prepTime:15, cookTime:25, totalTime:40, servings: 12, difficulty:"Intermediate", category:"Desserts", occasion:"All", description:"These chocolate and walnut brownies are the perfect dessert for any occasion. They're rich and decadent, with an intense chocolate flavor and crunchy chopped walnuts. They're easy to make and can be enjoyed on their own or with a scoop of vanilla ice cream. You can make them ahead of time and store them in an airtight container in the fridge to enjoy for several days. These brownies will definitely satisfy any chocolate craving!", ingredients:"1/2 cup (1 stick) unsalted butter.*1 cup granulated sugar.*2 large eggs.*1 teaspoon vanilla extract.*1/2 cup all-purpose flour.*1/3 cup unsweetened cocoa powder.*1/4 teaspoon salt.*1/4 teaspoon baking soda.*1/2 cup chopped walnuts", instructions:"Preheat the oven to 350°F (175°C). Grease an 8-inch (20 cm) square baking pan and line it with parchment paper. *In a medium saucepan over medium heat, melt the butter. Add the sugar and mix until well combined. Remove from heat and let cool for a few minutes.*Add the eggs and vanilla to the butter-sugar mixture and beat until well combined.*In a separate bowl, sift together the flour, cocoa powder, salt, and baking soda. Add the dry ingredients to the egg mixture and mix until well combined.*Add the chopped walnuts and mix gently.*Pour the mixture into the prepared baking pan and bake for 25-30 minutes or until a toothpick inserted into the center comes out clean.*Let cool in the pan for 10 minutes before cutting into squares and serving.", likes:0}
            ]
        }
    },
    computed:{
        showTrending(){
            return this.recipes.slice(0, 5);
        },
        showTop(){
            return this.recipes.slice(0, 10);
        },
        showOne(){
            return this.recipes.slice(0, 1);
        },
        showRelated(){
            return this.recipes.slice(0, 3);
        },
        showFav(){
            return this.recipes.slice(0, 7);
        }
    },
    mounted() {
        axios({
            method: 'get',
            url:'https://api.spoonacular.com/recipes/complexSearch?type=main course&apiKey=9a67991652774430ae6e421b6b15815f'
           })
        .then(
            (response) => {
                let items = response.data.results;
                //console.log(items);
                this.recipes = [];

                items.forEach(element => {
                    this.recipes.push({ 
                            id: element.id,
                            image: element.image,
                            name: element.title,
                            //category: "main course",
                            //time: "20 mins",
                            //level: "Easy",
                            //likes: 18,
                            //ingredients: "NA",
                            //instructions: "NA" 
                        })
                });
                console.log(this.recipes)
                for (let index = 0; index < this.recipes.length; index++) {
                    axios({
                        method: 'get',
                        url:'https://api.spoonacular.com/recipes/'+this.recipes[index].id+'/information?type=main%20course&apiKey=9a67991652774430ae6e421b6b15815f'
                       })
                    .then(
                        (response) => {
                            let item = response.data;
                            
                                this.recipes[index].likes = item.aggregateLikes;
                                this.recipes[index].category = item.dishTypes[0];
                                this.recipes[index].description = item.summary;

                                

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

        /*axios({
            method: 'get',
            url:'https://api.spoonacular.com/recipes/782601/information?type=main%20course&apiKey=9a67991652774430ae6e421b6b15815f'
           })
        .then(
            (response) => {
                let items = response.data;
                console.log(items);
                this.recipes = [];

                items.forEach(element => {
                    this.recipes.push({ 
                            id: element.id,
                            image: element.image,
                            name: element.title,
                            //category: "main course",
                            //time: "20 mins",
                            //level: "Easy",
                            //likes: 18,
                            //ingredients: "NA",
                            //instructions: "NA" 
                        })
                });
            }
        )
        .catch(
            error => console.log(error)
        );*/



        //recipe details
        this.recipes.forEach((recipe) => {
            recipe.ingredients = recipe.ingredients.split('*');
        });
        this.recipes.forEach((recipe) => {
            recipe.instructions = recipe.instructions.split('*');
        });
    },
    methods: {
        
    }
})