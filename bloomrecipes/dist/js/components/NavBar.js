app.component('nav-bar',{
    emits: ['openrecipes', 'openhome', 'searchrecipes', 'showdetails', 'recipelike', 'recipeunlike'],
    props:{
        recipes:{
            type: Array
        }
    },
    data() {
        return {
            searchTerm:""
        }
    },
    methods: {
        showRecipes(){
            this.$emit('openrecipes', this);
        },
        showHome(){
            this.$emit('openhome', this);
        },
        onClickSearchRecipe(){
            this.$emit('searchrecipes', this.searchTerm);
            this.searchTerm="";
        },
        onClickShowDetails(id){
            this.$emit('showdetails', id);
        },
        onClickRecipeLike(id){
            this.$emit('recipelike', id);
        },
        onClickRecipeUnlike(id){
            this.$emit('recipeunlike', id);
        }
    },
    computed:{
        showTop(){
            let recipesCopy = this.recipes.slice();
            return recipesCopy.sort((a, b) => b.likes - a.likes).slice(0, 10);
        },
        showTrending(){
            let recipesCopy = this.recipes.slice();
            return recipesCopy.sort((a, b) => b.likes - a.likes).slice(0, 5);
        },
        showFav(){
            return this.recipes.slice();
        }
    },
    template:
    /*html*/
    `<!-- Modales -->
        <div class="modal fade" id="favoritesModal" tabindex="-1" role="dialog" aria-labelledby="favoritesModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered custom-modal modal-dialog-scrollable">
              <div class="modal-content modal-design">
                <div class="modal-header header-mc">
                  <h5 class="modal-title" id="favoritesModalLabel">Favorites</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                <div class="d-flex justify-content-center flex-wrap">
                <div v-for="element in showFav">
                    <section v-if="element.onUnlike" class="d-flex cards-modal justify-content-center mm-modal">
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
                    </section>
                </div>
                </div>

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn-cmodal" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          <div class="modal fade" id="trendingModal" tabindex="-1" role="dialog" aria-labelledby="trendingModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered custom-modal modal-dialog-scrollable">
              <div class="modal-content modal-design">
                <div class="modal-header header-mc">
                  <h5 class="modal-title" id="trendingModalLabel">Trending recipes</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="d-fb cards-modal">
                        <div v-for="element in showTop" class="col">
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
          </div>

          <div class="modal fade" id="newestModal" tabindex="-1" role="dialog" aria-labelledby="newestModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered custom-modal modal-dialog-scrollable">
              <div class="modal-content modal-design">
                <div class="modal-header header-mc">
                  <h5 class="modal-title" id="newestModalLabel">Our newest recipes</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="d-fb cards-modal">
                        <div v-for="element in showTrending" class="col">
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
          </div>

          <div class="modal fade" id="aboutUsModal" tabindex="-1" role="dialog" aria-labelledby="aboutUsModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
              <div class="modal-content modal-design">
                <div class="modal-header header-mc">
                  <h5 class="modal-title" id="aboutUsModalLabel">About Us</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <section class="text-center">
                        <p class="bm-icon" href="#">BLOOM<br>
                        <span class="rm-icon">RECIPES</span></p>
                    </section>
                    <section class="txt-about">
                        <p>Welcome to Bloom Recipes, a website dedicated to creative and healthy cooking. Our team is made up of passionate cooks who believe in the importance of balanced and nutritious eating. At Bloom Recipes, we strive to create tasty and healthy recipes that cater to the needs of each individual, whether they are looking for vegetarian, vegan or gluten-free options. We love experimenting with different ingredients and flavors to bring a unique and delicious gastronomic experience to your home. We draw inspiration from the beauty of nature and use fresh, high-quality ingredients for our recipes. We work with local farmers and suppliers whenever possible, supporting our communities and ensuring that we offer the highest quality ingredients.<br>
                        At Bloom Recipes, we believe that food should not only be delicious but also nutritious. That's why we strive to create recipes that are rich in vitamins, minerals, and other essential nutrients. We are always learning and exploring new ways to improve our cooking and offer the best possible experience to our users. We appreciate your trust in us and hope you enjoy our recipes as much as we enjoy creating them. Welcome to the Bloom Recipes community!<br>
                        By registering on Bloom Recipes, you can unlock a whole new world of culinary possibilities. Not only will you be able to save your favorite recipes, but you'll also be able to vote for your favorite ones. Your votes help us determine which recipes our community loves the most, and we use this information to curate our recipe selection to best suit your needs and preferences. When you register, you'll also gain access to your liked recipe list. This list is a great way to keep track of the recipes you've enjoyed and would like to try again. It's an easy way to access your favorite recipes quickly, so you can whip up a delicious meal in no time.</p>
                    </section>

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn-cmodal mb-cabout" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          <div class="modal fade" id="messageModal" tabindex="-1" aria-labelledby="messageModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered custom-msg">
              <div class="modal-content border-msg">
                <div class="modal-body">

                    <div class="d-flex justify-content-center align-items-center mt-3 mb-0">
                        <p class="txt-message text-center">This section is exclusive to<br>
                            registered members.</p>
                    </div>
                    <div class="d-flex justify-content-center align-items-center mb-0">
                          <p class="txt-msgxs text-center">Make your votes count. <span class="txt-cian text-decoration-underline">Sign up</span> or <span class="txt-red text-decoration-underline">log in</span> to vote for the best recipes and improve your cooking experience.</p>
                    </div>
                    
                </div>
                <div class="modal-footer mb-3">
                    <button type="button" class="btn-cmodal mb-cabout" data-bs-dismiss="modal">Ok</button>
                </div>
              </div>
            </div>
          </div>
        <!-- Modales -->

        <!-- Navbar -->

        <nav class="navbar navbar-h">
            <div class="container-navbar">
    
                <section class="text-center pos-icon">
                    <a class="b-icon" href="#">BLOOM<br>
                    <span class="r-icon">RECIPES</span></a>
                </section>
    
                <div class="section-se ms-auto me-auto"></div>
                
                <section class="m-options">
                    <button class="btn-nav" v-on:click="showHome">Home</button>
                    <div class="dropdown-center">
                        <button class="btn-menu" type="button" data-bs-toggle="dropdown" aria-expanded="false">Menu</button>
                        <ul class="dropdown-menu custom-menu">
                            <section class="menu-options d-fbd menu-gap">
                                <section class="menu-options d-fb menu-gap">
                                    <div class="d-block">
                                        <p class="title-categories">Difficulty</p>
                                        <li><a class="btn-do text-center" v-on:click="showRecipes">Easy</a></li>
                                        <li><a class="btn-do text-center" v-on:click="showRecipes">Intermediate</a></li>
                                        <li><a class="btn-do text-center" v-on:click="showRecipes">Difficult</a></li>
                                    </div>
        
                                    <div class="d-block">
                                        <p class="title-categories">Category</p>
                                        <li><a class="btn-category text-center" v-on:click="showRecipes">Breakfast</a></li>
                                        <li><a class="btn-category text-center" v-on:click="showRecipes">Desserts</a></li>
                                        <li><a class="btn-category text-center" v-on:click="showRecipes">Drinks</a></li>
                                    </div>
        
                                    <div class="d-block">
                                        <p class="title-categories h-transparent"></p>
                                        <li><a class="btn-category text-center" v-on:click="showRecipes">Appetizers</a></li>
                                        <li><a class="btn-category text-center" v-on:click="showRecipes">Lunch</a></li>
                                        <li><a class="btn-category text-center" v-on:click="showRecipes">Soups</a></li>
                                    </div>
                                </section>
                                <section class="menu-options d-fb menu-gap">
                                    <div class="d-block">
                                        <p class="title-categories">Occasion</p>
                                        <li><a class="btn-do text-center" v-on:click="showRecipes">All</a></li>
                                        <li><a class="btn-do text-center" v-on:click="showRecipes">Birthday</a></li>
                                        <li><a class="btn-do text-center" v-on:click="showRecipes">Easter</a></li>
                                    </div>
        
                                    <div class="d-block">
                                        <p class="title-categories h-transparent"></p>
                                        <li><a class="btn-do text-center" v-on:click="showRecipes">Father's Day</a></li>
                                        <li><a class="btn-do text-center" v-on:click="showRecipes">Children's Day</a></li>
                                        <li><a class="btn-do text-center" v-on:click="showRecipes">Summer</a></li>
                                    </div>
        
                                    <div class="d-block">
                                        <p class="title-categories h-transparent"></p>
                                        <li><a class="btn-do text-center" v-on:click="showRecipes">Mother's Day</a></li>
                                        <li><a class="btn-do text-center" v-on:click="showRecipes">Christmas</a></li>
                                    </div>
                                </section>
    
                            </section>
                        </ul>
                    </div>
                    <button class="btn-nav" data-bs-toggle="modal" data-bs-target="#messageModal">Gallery</button>
                    <button type="button" class="btn-nav" data-bs-toggle="modal" data-bs-target="#favoritesModal">Favorites</button>
                    <button type="button" class="btn-nav" data-bs-toggle="modal" data-bs-target="#aboutUsModal">About Us</button>
                </section>
    
                <div class="section-se ms-auto me-auto"></div>
                
                <form class="d-flex m-form" role="search">
    
                    <input class="search-input mt-auto pt-0 pb-0" type="text" placeholder="Search" aria-label="Search" v-model="searchTerm">
                    <button class="btn btn-outline-success btn-search mt-auto pt-0 pb-0" type="button" v-on:click="onClickSearchRecipe">Search</button>
    
                </form>
    
                <section class="user-r d-flex">
                    <div class="dropdown-center">
                        <button class="btn-user" type="button" data-bs-toggle="dropdown" aria-expanded="false">Sign Up</button>
                        <ul class="dropdown-menu custom-user">
                            <p class="title-iuser">E-mail:</p>
                            <p class="txt-iuser">artaviafloresmonica@gmail.com</p>
                            <p class="title-iuser">Full name:</p>
                            <p class="txt-iuser">Mónica Artavia Flores</p>
                            <section class="d-flex btn-sout">
                                <button class="btn-out d-flex">Log out <span class="material-symbols-outlined">
                                    logout
                                    </span></button>
                            </section>
                        </ul>
                    </div>
                    <img src="./img/icon-admin.jpg" class="user-icon" alt="icon-admin">
                </section>
            </div>
        </nav>

        <!-- Navbar -->`
})