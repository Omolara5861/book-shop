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