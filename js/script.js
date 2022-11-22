const shopping_cart1 = document.querySelector('.shopping-cart1');
let bag = JSON.parse(localStorage.getItem('bookData')) || [];

function calcBookInBag() {
    shopping_cart1.setAttribute('data-book-count', bag.length);
}
calcBookInBag();

let searchForm = document.querySelector('.search-form');



window.onscroll = () => {

    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }

}

window.onload = () => {

    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

function liveSearch() {
    // Locate the card elements
    let content = document.querySelectorAll('.searched-content')
    // Locate the search input
    let search_query = document.getElementById("search-box").value;
    // Loop through the content
    for (var i = 0; i < content.length; i++) {
        // If the text is within the card...
        if (content[i].textContent.toLowerCase()
            // ...and the text matches the search query...
            .includes(search_query.toLowerCase())) {
            // ...remove the `.is-hidden` class.
            content[i].classList.remove("is-hidden");
        } else {
            // Otherwise, add the class.
            content[i].classList.add("is-hidden");
        }
    }
}

// A little delay
let typingTimer;
let typeInterval = 500; // Half a second
let searchInput = document.getElementById('search-box');

searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
});