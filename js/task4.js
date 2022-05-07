const counter = document.querySelector("#value")
const increaseButton = document.querySelector("[data-action = 'increment']")
const decreaseButton = document.querySelector("[data-action = 'decrement']")

let counterValue = 0

increaseButton.addEventListener("click",() => {
    counterValue += 1
    counter.textContent = counterValue
})

decreaseButton.addEventListener("click", () => {
    counterValue -= 1
    counter.textContent = counterValue
})

