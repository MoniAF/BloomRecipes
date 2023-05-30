app.component('index-page',{
    emits: ['showdetails', 'recipelike', 'recipeunlike'],//emision de eventos
    props:{
        recipes:{
            type: Array 
        }
    },
    mounted() {
        console.log(this.recipes);
    },
    computed:{
        showTrending(){
            let recipesCopy = this.recipes.slice(); //copia del array para no afectar el original
            return recipesCopy.sort((a, b) => b.likes - a.likes).slice(0, 5); //Ordena de mayor a menor segun los likes y muestra unicamente 5 elementos del array
        },
        showRecipes(){
            return this.recipes.slice(0, 5); //Muestra unicamente 5 elementos del array
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
    template:
    /*html*/
    `<!-- Principal newest -->

        <div class="container-total">

            <div class="orange-bg"></div>

            <div class="border-image">
                <img src="./img/alitas.jpg" class="nw-image img-fluid" alt="alitas">
            </div>
        </div>

        <div class="container-pp">
            <h1>The best recipes<br>
                you will find
                here.</h1>
            <section>
                <p class="description-p">Discover delicious and healthy recipes on Bloom Recipes. From breakfast to dinner, desserts, and more, we have something for every taste and occasion. Cooking with us is easy and enjoyable. Join now!</p>

                <section>
                    <button type="button" class="btn-newest p-0" data-bs-toggle="modal" data-bs-target="#newestModal"><span class="info-nw">About our latest recipes</span> here <span><svg xmlns="http://www.w3.org/2000/svg" class="icon-click" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 12l3 0"></path><path d="M12 3l0 3"></path><path d="M7.8 7.8l-2.2 -2.2"></path><path d="M16.2 7.8l2.2 -2.2"></path><path d="M7.8 16.2l-2.2 2.2"></path><path d="M12 12l9 3l-4 2l-2 4l-3 -9"></path></svg></span></button>
                </section>

                <button type="button" class="btn-show d-flex p-0" data-bs-toggle="modal" data-bs-target="#aboutUsModal">Show more <span class="material-symbols-outlined icon-more icon-show">
                    double_arrow
                    </span></button>
            </section>

        </div>
        <!-- Principal newest -->

        <!-- Principal -->
        <div class="container-principal">
            <div class="bg-w"></div>
            <section class="d-fbd justify-content-between">
                <h2>Trending recipes</h2>
                <button class="btn-more d-flex" type="button" data-bs-toggle="modal" data-bs-target="#trendingModal">See more <span class="material-symbols-outlined icon-more">
                    double_arrow
                    </span></button>
            </section>

            <div class="d-flex cards-pp">

                <div v-for="element in showTrending">
                    <button v-on:click="onClickShowDetails(element.id)" type="button" class="conf-cards">
                        <div class="card-top">


                            <button v-show="element.onLike" v-on:click.stop="onClickRecipeLike(element.id)" class="btn-heart"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart-fill like-icon" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                          </svg></button>

                          <button v-show="element.onUnlike" v-on:click.stop="onClickRecipeUnlike(element.id)" class="btn-heart"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart-fill unlike-icon" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                          </svg></button>

                            <img v-bind:src="element.image" class="img-card" alt="{{element.name}}">
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

            <p class="phrase-m text-center">Let the <span class="txt-cian"> culinary </span><br> <span class="txt-red">adventure</span> begin!</p>

            <section class="d-flex m-photos">
                <img src="./img/sopa-res.jpg" class="img-left" alt="sopa-res">
                <img src="./img/pollo-asado.jpg" class="img-right" alt="pollo-asado">
                <div class="circle-icon text-center">
                    <p class="bc-icon">BLOOM<br>
                        <span class="rc-icon">RECIPES</span></p>
                </div>
            </section>

            <section class="d-fbd justify-content-between">
                <h2>All recipes</h2>
                <a class="link-more d-flex">See more <span class="material-symbols-outlined icon-more">
                    double_arrow
                    </span></a>
            </section>

            <div class="d-flex cards-pp">
                
                <div v-for="element in showRecipes">
                    <button type="button" class="conf-cards" v-on:click="onClickShowDetails(element.id)">
                        <div class="card-pp">

                            <button v-show="element.onLike" v-on:click.stop="onClickRecipeLike(element.id)" class="btn-heart"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart-fill like-icon" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg></button>

                            <button v-show="element.onUnlike" v-on:click.stop="onClickRecipeUnlike(element.id)" class="btn-heart"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart-fill unlike-icon" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg></button>

                            <img v-bind:src="element.image" class="img-card" alt="{{element.name}}">
                            <div class="degraded"></div>
                            <div class="info-top">
                                <p class="title-card text-center">{{ element.name }}</p>
                                <p class="description-card txt-description">{{ element.description }}...</p>
                                <p class="category-card text-center categories-txt">{{ element.category }}</p>
                                <p class="category-card text-center categories-txt">{{ element.difficulty }}</p>
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            <div class="d-fbd">
                <p class="phrase-pf">The <span class="txt-cian"> kitchen </span>is<br> <span class="txt-red">where</span> love <br>
                becomes <span class="txt-cian"> food</span>.</p>
                <img src="./img/chef-cute.png" class="img-cf" alt="chef-cute">
            </div>

            <div class="d-flex register-f">
                <p class="mt-r">Register for free</p>
                <button class="btn-register">Sign Up</button>
            </div>
        </div>
        <!-- Principal -->

        <!-- Footer principal -->

        <footer class="container-total">
            <div class="f-principal">
                <section class="container-pp d-fbd conf-f">
                    
                    <section class="icons-rs">
                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-facebook icons-footer" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg></a>
    
                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter icons-footer" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg></a>
    
                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google icons-footer" viewBox="0 0 16 16">
                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                        </svg></a>
                    </section>

                    <section class="icons-rs">
                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram icons-footer" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg></a>
    
                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin icons-footer" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg></a>
    
                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github icons-footer" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg></a>
                    </section>

                    <p class="mb-0 txt-f">© 2023 Copyright: <a href="" class="link-f">Bloomrecipes.com</a></p>
                </section>
            </div>
        </footer>

        <!-- Footer principal -->`
})