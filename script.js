let password = document.querySelector(".pwOne");
let pwConfirm = document.querySelector(".pwConfirmation");
let error = document.querySelector(".error");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    if(password.value !== pwConfirm.value){
        error.textContent = "*passwords do not match."
        e.preventDefault();
        password.className = ":invalid"
    } 
});


