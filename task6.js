const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', onChangeBorderColor)
function onChangeBorderColor(event) {
    const inputData = event.currentTarget.dataset.length;
    const inputLength = String(event.currentTarget.value.length);
    
    if (inputData === inputLength) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
    } else {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
    }
    }