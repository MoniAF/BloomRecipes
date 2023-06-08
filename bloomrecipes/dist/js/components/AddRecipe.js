app.component('add-recipe',{
    template:
    /*html*/
    `<div class="bg-add">

        <div class="container-admin">
            <div class="d-flex justify-content-between">
                <section class="pos-add">
                    <a href=""><span class="arrow-back material-symbols-outlined">
                        arrow_back
                        </span></a>
                </section>
                <section>
                    <p class="title-add text-center">Recipe registration</p>
                </section>
                <section>
                    <p class="arrow-back"></p>
                </section>
            </div>
            <div class="d-flex">
                <form action="#" class="w-form">
                    <div class="d-flex justify-content-between mt-form">
                        <section class="section-info">
                            <label for="name" class="label-add">Name:</label>
                            <input type="text" class="custom-info">
                        </section>

                        <section class="section-info">

                            <label for="preptime" class="label-add">Prep time:</label>

                            <section class="d-flex">
                                <input type="number" class="custom-input" v-model="prepValue">

                                <div class="bg-btns">

                                    <button type="button" v-on:click="prepIncrease" class="btn-input"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-up-fill icon-caret" viewBox="0 0 16 16">
                                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg></button>

                                    <button type="button" v-on:click="prepDecrease" class="btn-input"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-down-fill icon-caret" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                    </svg></button>

                                </div>
                            </section>
                        </section>

                        <section class="section-info">

                            <label for="preptime" class="label-add">Cook time:</label>

                            <section class="d-flex">
                                <input type="number" class="custom-input" v-model="cookValue">

                                <div class="bg-btns">

                                    <button type="button" v-on:click="cookIncrease" class="btn-input"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-up-fill icon-caret" viewBox="0 0 16 16">
                                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg></button>

                                    <button type="button" v-on:click="cookDecrease" class="btn-input"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-down-fill icon-caret" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                    </svg></button>

                                </div>
                            </section>
                        </section>
                    </div>

                    <div class="d-flex justify-content-between">

                        <section class="section-info">
                            <label for="name" class="label-add">Difficulty:</label>


                            <div class="d-flex">
                                <select class="form-select custom-drop">

                                    <option value="1">Easy</option>
                                    <option value="2">Intermediate</option>
                                    <option value="3">Difficult</option>

                                </select><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-down icon-drop" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                            </div>
                            
                        </section>

                        <section class="section-info">
                            <label for="name" class="label-add">Category:</label>


                            <div class="d-flex">
                                <select class="form-select custom-drop">

                                    <option value="1">Breakfast</option>
                                    <option value="2">Desserts</option>
                                    <option value="3">Drinks</option>
                                    <option value="4">Appetizers</option>
                                    <option value="5">Lunch</option>
                                    <option value="6">Soup</option>

                                </select><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-down icon-drop" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                            </div>
                            
                        </section>

                        <section class="section-info">
                            <label for="name" class="label-add">Occasion:</label>


                            <div class="d-flex">
                                <select class="form-select custom-drop">

                                    <option value="1">All</option>
                                    <option value="2">Birthday</option>
                                    <option value="3">Easter</option>
                                    <option value="4">Father's day</option>
                                    <option value="5">Mother's day</option>
                                    <option value="6">Children's day</option>
                                    <option value="7">Summer</option>
                                    <option value="8">Christmas</option>

                                </select><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-down icon-drop" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                            </div>
                            
                        </section>

                        <section class="section-info">

                            <label for="servings" class="label-add">Servings:</label>

                            <section class="d-flex">
                                <input type="number" class="custom-input" v-model="servingsValue">

                                <div class="bg-btns">

                                    <button type="button" v-on:click="servingsIncrease" class="btn-input"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-up-fill icon-caret" viewBox="0 0 16 16">
                                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg></button>

                                    <button type="button" v-on:click="servingsDecrease" class="btn-input"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-down-fill icon-caret" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                    </svg></button>

                                </div>
                            </section>
                        </section>

                    </div>

                    <div class="d-flex justify-content-between">

                        <section class="section-info">

                            <label for="name" class="label-add">Image:</label>
                            <div class="file-bg"></div>
                            <input class="file-input" type="file" name="hola" id="hoal">

                            <section class="custom-files">
                                <p class="file-upload text-center mb-0">Select file</p>
                                <p class="file-select text-center mb-0">No files selected</p>
                            </section>
                    
                        </section> 

                        <section class="section-info">
                            <label for="name" class="label-add">Description:</label>
                            <input type="text" class="custom-info">
                        </section>

                    </div>

                    <div class="d-flex justify-content-between">

                            <section class="d-block">
                                <section class="section-info">
                                    <label for="name" class="label-add">Ingredients:</label> 
                                </section>
                                <div class="d-block">

                                    <section class="d-flex mb-3">
                                        <input type="text" class="custom-list">
                                        <button class="btn-list"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-plus more-list" viewBox="0 0 16 16">
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                            </svg></button>
                                    </section>

                                </div>
                            </section>
                            


                            <section class="d-block">
                                <section class="section-info">
                                    <label for="name" class="label-add">Instructions:</label> 
                                </section>
                                <div class="d-block">
                                    <section class="d-flex">
                                        <input type="text" class="custom-list">
                                        <button class="btn-list"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-plus more-list" viewBox="0 0 16 16">
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                            </svg></button>
                                    </section>
                                </div>
                            </section>

                    </div>

                    <div class="d-flex justify-content-center">
                        <button class="btn-recipe">Add recipe</button>
                    </div>

                </form>
            </div>

        </div>
    </div>`
})