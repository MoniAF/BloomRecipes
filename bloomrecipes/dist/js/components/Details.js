app.component('recipe-details',{
    props:{
        id:{
            type: Number
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
        totaltime:{
            type: Number,
            default: 0
        },
        cooktime:{
            type: Number,
            default: 0
        },
        preptime:{
            type: Number,
            default: 0
        },
        servings:{
            type: Number,
            default: 0
        },
        occasion:{
            type: Number,
            default: 0
        },
        description:{
            type: String,
            default: "default description"
        }/*,
        ingredients:{
            type: String,
            default: "default ingredients"
        }*/
    },
    mounted() {
            //this.$emit('recipedetails', this);
            console.log("hola mundooooo"+id)
    },
    template:
    /*html*/
    `
    <!-- Navbar -->

    <nav class="navbar navbar-h">
        <div class="container-navbar">

            <section class="text-center pos-icon">
                <a class="b-icon" href="#">BLOOM<br>
                <span class="r-icon">RECIPES</span></a>
            </section>

            <div class="section-se ms-auto me-auto"></div>
            
            <section class="m-options">
                <button class="btn-nav">Home</button>
                <div class="dropdown-center">
                    <button class="btn-menu" type="button" data-bs-toggle="dropdown" aria-expanded="false">Menu</button>
                    <ul class="dropdown-menu custom-menu">
                        <section class="menu-options d-fbd menu-gap">
                            <section class="menu-options d-fb menu-gap">
                                <div class="d-block">
                                    <p class="title-categories">Difficulty</p>
                                    <li><a class="btn-do text-center" href="#">Easy</a></li>
                                    <li><a class="btn-do text-center" href="#">Intermediate</a></li>
                                    <li><a class="btn-do text-center" href="#">Difficult</a></li>
                                </div>

                                <div class="d-block">
                                    <p class="title-categories">Category</p>
                                    <li><a class="btn-category text-center" href="#">Breakfast</a></li>
                                    <li><a class="btn-category text-center" href="#">Desserts</a></li>
                                    <li><a class="btn-category text-center" href="#">Drinks</a></li>
                                </div>

                                <div class="d-block">
                                    <p class="title-categories h-transparent"></p>
                                    <li><a class="btn-category text-center" href="#">Appetizers</a></li>
                                    <li><a class="btn-category text-center" href="#">Lunch</a></li>
                                    <li><a class="btn-category text-center" href="#">Soups</a></li>
                                </div>
                            </section>
                            <section class="menu-options d-fb menu-gap">
                                <div class="d-block">
                                    <p class="title-categories">Occasion</p>
                                    <li><a class="btn-do text-center" href="./recipes.html">All</a></li>
                                    <li><a class="btn-do text-center" href="#">Birthday</a></li>
                                    <li><a class="btn-do text-center" href="#">Easter</a></li>
                                </div>

                                <div class="d-block">
                                    <p class="title-categories h-transparent"></p>
                                    <li><a class="btn-do text-center" href="#">Father's Day</a></li>
                                    <li><a class="btn-do text-center" href="#">Children's Day</a></li>
                                    <li><a class="btn-do text-center" href="#">Summer</a></li>
                                </div>

                                <div class="d-block">
                                    <p class="title-categories h-transparent"></p>
                                    <li><a class="btn-do text-center" href="#">Mother's Day</a></li>
                                    <li><a class="btn-do text-center" href="#">Christmas</a></li>
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

                <input class="search-input mt-auto pt-0 pb-0" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success btn-search mt-auto pt-0 pb-0" type="submit">Search</button>

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

    <div class="container-details">
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
                    <p class="details-text">Total time: <span class="txt-black"> {{ totaltime }} min</span></p>
                    <p class="details-text">Servings: <span class="txt-black">{{ servings }}</span></p>
                </section>
                <section class="d-fbd justify-content-center dt-gap">
                    <p class="details-text">Prep time: <span class="txt-black">{{ preptime }} min</span></p>
                    <p class="details-text">Cook time: <span class="txt-black">{{ cooktime }} min</span></p>
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
                <section class="mb-ins">
                    <!--<p v-for="(ingredient) in element.ingredients" class="txt-recipes">•{{ ingredient }}</p>-->
                </section>
                <h4>Instructions</h4>
                <section class="mb-ins">
                    <!--<p v-for="(instruction, index) in element.instructions" class="txt-recipes">{{index + 1}}. {{ instruction }}</p>-->
                </section>
                <p class="txt-recipes"></p>

                    <h4>Related recipes</h4>
            </section>

    <!--<div class="d-flex cards-recipes mb-5">
        <div v-for="(element, index) in showRelated">
            <a href="#">
                <div class="card-top">
                    <img v-bind:src="element.image" class="img-card" alt="chocolate">
                    <div class="degraded"></div>
                    <div class="info-related">
                        <p class="title-card text-center">{{ name }}</p>
                        <p class="category-card text-center categories-txt">{{ category }}</p>
                        <p class="category-card text-center categories-txt">{{ difficulty }}</p>
                        <p class="txt-likes text-center"><span><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart-fill card-heart" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg></span> {{ likes }}</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    </div>-->
    <!-- Footer all -->

    <footer class="container-total">
        <div class="f-principal mt-5">
            <section class="container-pp">
                <section class="d-fb justify-content-center m-footer">
                    <section class="icons-rs footer-icons jc-tl">
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
                </section>

                <p class="mb-0 txt-footer text-center">© 2023 Copyright: <a href="" class="link-f">Bloomrecipes.com</a></p>
            </section>
        </div>
    </footer>

    <!-- Footer all -->`
})