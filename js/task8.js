const ref = {
    loginFormEl: document.querySelector(".login-form"),
    buttonEl: document.querySelector("button")
}

ref.loginFormEl.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const {
        elements: { email, password }
    } = event.currentTarget

    if (email.value === "" || password.value === "") {
        return console.log("Please fill in all the fields!");
    }
    const els = {
        email: email.value,
        password: password.value
    }

    console.log(els)
    event.currentTarget.reset();
    
}

