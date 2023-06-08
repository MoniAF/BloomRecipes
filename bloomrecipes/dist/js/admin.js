const app = Vue.createApp({
    data() {
        return {
            prepValue: 0,
            cookValue: 0,
            servingsValue: 0,
            indexAdmin: false,
            addRecipe: true,
            footerAdmin: true
        }
    },
    methods: {
        prepIncrease(){ //incrementa el valor de prepTime (administración)
            this.prepValue++;
        },

        prepDecrease(){ //decrementa el valor de prepTime(administración)
            if (this.prepValue > 0) {
                this.prepValue--;
            }
        },

        cookIncrease(){ //incrementa el valor de cookTime (administración)
            this.cookValue++;
        },

        cookDecrease(){ //decrementa el valor de cookTime (administración)
            if (this.cookValue > 0) {
                this.cookValue--;
            }
        },

        servingsIncrease(){ //incrementa el valor de cookTime (administración)
            this.servingsValue++;
        },

        servingsDecrease(){ //decrementa el valor de cookTime (administración)
            if (this.servingsValue > 0) {
                this.servingsValue--;
            }
        },
    }

})