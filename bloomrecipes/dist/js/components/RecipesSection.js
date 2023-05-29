app.component('recipes-section',{
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
    computed:{
        showResults(){
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
        <section class="d-fb justify-content-center">
            <p class="txt-menu">{{ message }}</p>
        </section>

        <div class="d-flex cards-recipes">
            <button type="button" class="conf-cards" v-for="element in showResults">
                <div class="card-pp">
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
    </div>`
})