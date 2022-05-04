const refs = {
    ulElements: document.querySelectorAll('.item'),
    liHeaders: document.querySelector('h2')

}

console.log("Number of categories:", refs.ulElements.length)

const categoryItems = document.querySelectorAll('.item')
    .forEach((category) => {
        console.log('Category: ' + category.querySelector('h2').textContent),
            console.log('Elements: ' + category.querySelectorAll('li').length)
    });
    