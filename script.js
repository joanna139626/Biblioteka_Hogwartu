const search = document.querySelector('.search');
const li = document.querySelectorAll('li');

const searchEngine = i => {
    const text = i.target.value.toLowerCase();

    li.forEach(element => {
        if (element.textContent.toLowerCase().indexOf(text) !== -1) {
            element.style.display = 'block'
        } else {
            element.style.display = 'none'
        }
    })
};

search.addEventListener('keyup', searchEngine);






