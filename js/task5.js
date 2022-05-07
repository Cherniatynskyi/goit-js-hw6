const inputEl = document.querySelector("#name-input")
const nameOutputEl = document.querySelector("#name-output")

inputEl.addEventListener("change", (event) => {
    if (event.currentTarget.value === "") {
        nameOutputEl.textContent = "Anonymous"
    }
    nameOutputEl.textContent = event.currentTarget.value;
})

