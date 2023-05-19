app.component('recipes-section',{
    props:{
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
        description:{
            type: String,
            default: "default description"
        }
    },
    template:
    /*html*/
    `<a href="#"> <!--  v-for="(element, index) in recipes" -->
        <div class="card-pp">
            <img v-bind:src="image" class="img-card" alt="name">
            <div class="degraded"></div>
            <div class="info-top">
                <p class="title-card text-center">{{ name }}</p>
                <p class="description-card txt-description">{{ description }}</p>
                <p class="category-card text-center categories-txt">{{ category }}</p>
                <p class="category-card text-center categories-txt">{{ difficulty }}</p>
            </div>
        </div>
    </a>`
})