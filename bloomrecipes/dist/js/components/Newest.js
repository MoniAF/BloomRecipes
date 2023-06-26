app.component('newest-recipes',{
    emits: ['showdetails', 'recipelike', 'recipeunlike'],//emision de eventos
    props:{
        recipes:{
            type: Array
        }
    },
    computed:{
        showNewest(){ //muestra las ultimas 5 recetas del array
            return this.recipes.slice(-5);
        }
    },
    template:
    /*html*/
    `<!-- Modales -->
    <div class="modal fade" id="newestModal" tabindex="-1" role="dialog" aria-labelledby="newestModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered custom-modal modal-dialog-scrollable">
            <div class="modal-content modal-design">
            <div class="modal-header header-mc">
                <h5 class="modal-title" id="newestModalLabel">Our newest recipes</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

                <div class="d-fb cards-modal">
                    <div v-for="element in showNewest" class="col">
                        <button v-on:click="onClickShowDetails(element.id)" type="button" class="conf-cards">
                            <div class="card-top">
                                <img v-bind:src="element.image" class="img-card" alt="chocolate">
                                <div class="degraded"></div>
                                <div class="info-top">
                                    <p class="title-card text-center">{{ element.name }}</p>
                                    <p class="category-card text-center categories-txt">{{ element.category }}</p>
                                    <p class="category-card text-center categories-txt">{{ element.difficulty }}</p>
                                    <p class="txt-likes text-center"><span><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart-fill card-heart" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                        </svg></span> {{ element.likes }}</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

            </div>
                <div class="modal-footer">
                    <button type="button" class="btn-cmodal" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>`
})