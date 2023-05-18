app.component('weather-card',{
    props:{
        name:{
            name: String,
            default: "default name"
        },
        condition:{
            type: String,
            default: "default category"
        },
        icon:{
            type: String,
        },
        temp:{
            type: Number,
            default: 0
        },
        humidity:{
            type: Number,
            default: 0
        },
        wind:{
            type: Number,
            default: 0
        },
        feelslike:{
            type: Number,
            default: 0
        },
        uv:{
            type: String,
            default: "default uv"
        }
    },
    template:
    /*html*/
    ``
})