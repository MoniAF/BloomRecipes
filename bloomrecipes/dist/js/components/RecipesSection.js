app.component('recipes-section',{
    emits: ['showdetails', 'recipelike', 'recipeunlike'], //emision de eventos
    props:{
        recipes:{
            type: Array
        },
        results:{
            type: Array
        },
        message:{
            type: String,
            default: "Results"
        }
    },
    methods: {
        onClickShowDetails(id){
            this.$emit('showdetails', id); //Emite el evento y envia el id para mostrar los detalles de la receta
        },
        onClickRecipeLike(id){
            this.$emit('recipelike', id); //Emite el evento y envia el id para aumentar los likes
        },
        onClickRecipeUnlike(id){
            this.$emit('recipeunlike', id); //Emite el evento y envia el id para disminuir los likes
        }
    },
    computed:{
        showResults(){ //define si se hará la muestra de todas las recetas o de unicamente los resultados de busqueda
            if (this.results.length > 0) {
                return this.results;
            } else {
                return this.recipes;
            }
        }
    },
    template:
    /*html*/
    `<div class="container-principal">
        <section class="d-flex justify-content-center">
            <p class="txt-menu">{{ message }}</p>
        </section>

        <div class="d-flex cards-recipes">
            <div v-for="element in showResults">
                <button v-on:click="onClickShowDetails(element.id)" type="button" class="conf-cards mb-4">
                    <div class="card-pp">

                        <button v-show="element.onLike" v-on:click.stop="onClickRecipeLike(element.id)" class="btn-heart"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart-fill like-icon" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg></button>

                        <button v-show="element.onUnlike" v-on:click.stop="onClickRecipeUnlike(element.id)" class="btn-heart"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart-fill unlike-icon" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg></button>

                        <img v-bind:src="element.image" class="img-card" alt="element.name">
                        <div class="degraded"></div>
                        <div class="info-top">
                            <p class="title-card text-center">{{ element.name }}</p>
                            <p class="description-card txt-description">{{ element.description }}</p>
                            <p class="category-card text-center categories-txt">{{ element.category }}</p>
                            <p class="category-card text-center categories-txt">{{ element.difficulty }}</p>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </div>`
})