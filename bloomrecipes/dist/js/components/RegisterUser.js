app.component('register-user',{
    template:
    /*html*/
    `<section class="text-center">
        <p class="bu-icon">BLOOM<br>
        <span class="ru-icon">RECIPES</span></p>
    </section>

    <section class="mt-5">
        
        <p class="title-user justify-content-center">Sign Up</p>

        <section class="d-flex justify-content-center m-input">
            <div class="icon-log icon-log d-flex justify-content-center align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person-fill size-icon" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                    </svg>
            </div>
            <input class="form-control input-log txt-input" type="text" placeholder="Full name" aria-label="default input example">
        </section>

        <section class="d-flex justify-content-center m-input">
            <div class="icon-log icon-log d-flex justify-content-center align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-envelope-at size-icon" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                    <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                    </svg>
            </div>
            <input class="form-control input-log txt-input" type="text" placeholder="E-mail" aria-label="default input example">
        </section>

        <section class="d-flex justify-content-center m-input">
            <div class="icon-log icon-log d-flex justify-content-center align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-at size-icon" viewBox="0 0 16 16">
                    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"/>
                    </svg>
            </div>
            <input class="form-control input-log txt-input" type="text" placeholder="Username" aria-label="default input example">
        </section>

        <section class="d-flex justify-content-center m-input">
            <div class="icon-log d-flex justify-content-center align-items-center">
                <span class="material-symbols-outlined size-icon">
                    lock
                </span>
            </div>
            <input class="form-control input-log txt-input mb-3" type="text" placeholder="Password" aria-label="default input example">
        </section>

        <section class="d-flex justify-content-center m-input">
            <button type="button" class="btn-next">Create</button>
        </section>

        <div class="d-flex justify-content-center mb-2">
            <p class="txt-question">Do you have account?</p>
            <button class="btn-sign">Log In</button>
        </div>  
        
    </section>`
})