app.component('c-password',{
    template:
    /*html*/
    `<!--modal-->
    <div class="modal fade" id="messageModal" tabindex="-1" aria-labelledby="messageModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered custom-msg">
            <div class="modal-content border-msg">
                <div class="modal-body">

                    <div class="d-flex justify-content-center align-items-center mt-3 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-exclamation-circle icon-msg" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                        </svg>
                    </div>
                    <div class="d-flex justify-content-center align-items-center">
                        <p class="txt-message text-center">Your password has been <br>
                            modified successfully.</p>
                    </div>
                    
                </div>
                <div class="modal-footer mb-3">
                    <button type="button" class="btn-ok" data-bs-dismiss="modal">Ok</button>
                </div>
            </div>
        </div>
    </div>
    <!--modal-->   
    
    <section class="text-center">
            <p class="bu-icon">BLOOM<br>
            <span class="ru-icon">RECIPES</span></p>
        </section>
        
        <section class="mt-5">
            <p class="title-user justify-content-center mt-5">Change your password</p>
            
            <section class="d-flex justify-content-center m-input">
                <div class="icon-log d-flex justify-content-center align-items-center">
                    <span class="material-symbols-outlined size-icon">
                        lock
                    </span>
                </div>
                <input class="form-control input-log txt-input" type="text" placeholder="Password" aria-label="default input example">
            </section>
            
            <section class="d-flex justify-content-center m-input">
                <div class="icon-log d-flex justify-content-center align-items-center">
                    <span class="material-symbols-outlined size-icon">
                        lock
                    </span>
                </div>
                <input class="form-control input-log txt-input mb-3" type="text" placeholder="Confirm your password" aria-label="default input example">
            </section>

            <section class="d-flex justify-content-center m-input mb-5">
                <button type="button" class="btn-next" data-bs-toggle="modal" data-bs-target="#messageModal">Next</button>
            </section>

            <div class="d-flex justify-content-center">
                <a class="txt-question text-decoration-underline" href="">Log In</a>
            </div>
            
        </section>
    </div>`
})