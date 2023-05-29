app.component('recipe-details',{
    props:{
        id:{
            type: String
        },
        name:{
            type: String,
            default: "default name"
        },
        image:{
            type: String
        },
        category:{
            type: String,
            default: "default category"
        },
        difficulty:{
            type: String,
            default: "default difficulty"
        },
        likes:{
            type: Number,
            default: 0
        },
        totalTime:{
            type: Number,
            default: 0
        },
        cookTime:{
            type: Number,
            default: 0
        },
        prepTime:{
            type: Number,
            default: 0
        },
        servings:{
            type: Number,
            default: 0
        },
        occasion:{
            type: String,
            default: "default occasion"
        },
        description:{
            type: String,
            default: "default description"
        },
        ingredients:{
            type: String,
            default: "default ingredients"
        },
        instructions:{
            type: String,
            default: "default instructions"
        }
    },
    mounted() {
        console.log(this.ingredients);
    },
    computed: {
        showIngredients() {
            let formatted = this.ingredients.split("*");
            return formatted;
        },
        showInstructions() {
            let formatted = this.instructions.split("*");
            return formatted;
        }
    },
    template:
    /*html*/
    `<div class="container-details">
            <section>
                <section class="d-flex justify-content-center align-items-center">
                    <div class="circle-top justify-content-center align-items-center">
                        <p class="pt-3">10</p>
                    </div>
                </section>
                <div class="details-name d-flex align-items-center justify-content-center">
                    <p class="name-dt">{{ name }}</p>
                </div>
                <img v-bind:src="image" class="img-details" alt="name">
            </section>

            <div class="m-details">
                <section class="d-fbd justify-content-center dt-gap">
                    <p class="details-text">Difficulty: <span class="txt-black"> {{ difficulty }}</span></p>
                    <p class="details-text">Category: <span class="txt-black"> {{ category }}</span></p>
                    <p class="details-text">Total time: <span class="txt-black"> {{ totalTime }} min</span></p>
                    <p class="details-text">Servings: <span class="txt-black">{{ servings }}</span></p>
                </section>
                <section class="d-fbd justify-content-center dt-gap">
                    <p class="details-text">Prep time: <span class="txt-black">{{ prepTime }} min</span></p>
                    <p class="details-text">Cook time: <span class="txt-black">{{ cookTime }} min</span></p>
                    <p class="details-text">Occasion: <span class="txt-black">{{ occasion }}</span></p>
                    <p class="details-text m-dtk"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart-fill heart-dt" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg><span class="txt-black">{{ likes }}</span></p>
                </section>
            </div>

            <section>
                <h4>Description</h4>
                <p class="txt-recipes mb-5">{{ description }}</p>
                <h4>Ingredients</h4>
                <div class="mb-ins">
                <p v-for="ingredient in showIngredients" class="txt-recipes">• {{ ingredient }}</p>
                </div>
                <h4>Instructions</h4>
                <section class="mb-ins">
                <p v-for="(instruction, index) in showInstructions" class="txt-recipes">{{index + 1}}. {{ instruction }}</p>
                </section>
                <p class="txt-recipes"></p>

                    <h4>Related recipes</h4>
            </section>
        </div>`
})