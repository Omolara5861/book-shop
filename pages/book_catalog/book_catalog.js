// header section starts
function createHeader() {
    // Create Element of Header 1
    const header = document.createElement('header');
    const header1 = document.createElement('div');
    const logo = document.createElement('a');
    const searchForm = document.createElement('form');
    const shoppingBag = document.createElement('div');

    header.className = 'header';

    // Style Element of Header1
    header1.className = 'header-1';
    //Logo
    logo.className = 'logo';
    logo.href = '../../index.html';
    logo.innerHTML = '<i class="fas fa-book"></i> Book arena';
    //Search Form
    searchForm.className = 'search-form';
    searchForm.innerHTML = `
    <input type="search" name="" placeholder="search for book..." id="search-box">
    <label for="search-box" class="fas fa-search"></label>
    `;
    //Shopping Bag
    shoppingBag.classList.add('shopping-cart1', 'shopping-bag');
    shoppingBag.innerHTML = '<span class="cart-icon"><i class="fa-solid fa-bags-shopping"></i></span>';

    header1.appendChild(logo);
    header1.appendChild(searchForm);
    header1.appendChild(shoppingBag);

    const header2 = document.createElement('div');
    header2.className = 'header-2';
    header2.innerHTML = `
    <nav class="navbar">
                <a href="../../index.html">Catalog</a>
                <a href="pages/bag/index.html">Bag</a>
            </nav>
    `;

    header.appendChild(header1);
    header.appendChild(header2);

    let fragment = new DocumentFragment();
    fragment.appendChild(header);
    document.body.appendChild(fragment);
}

// header section ends

function createBottomNav() {
    const bottomNav = document.createElement('nav');
    bottomNav.className = 'bottom-navbar';
    bottomNav.innerHTML = `
    <a href="#home" class="fas fa-home"></a>
        <a href="#featured" class="fas fa-list"></a>
        <a href="pages/book_catalog/index.html" class="fas fa-tags"></a>
        <a href="pages/bag/index.html" class="fa-solid fa-bags-shopping"></a>
    `;

    let fragment = new DocumentFragment();
    fragment.appendChild(bottomNav);
    document.body.appendChild(fragment);
}

function createMainSection() {
    // Create Elements
    const slider = document.createElement('section');
    const container = document.createElement('div');
    const popup = document.createElement('div');
    const title = document.createElement('div');

    // Style Element
    container.className = 'container';
    container.id = 'blur';
    slider.className = 'slider';
    slider.id = 'slider';
    title.className = 'title';

    title.innerHTML = `
        <h1 class="heading1"> <span>Available Books</span> </h1>
        <h3>Level up your programming skills with the top rated books in tech</h3>
    `;

    popup.className = 'pop-up';
    popup.id = 'popup';

    container.appendChild(title);
    container.appendChild(slider);

    container.innerHTML += `
    <span class="arrow left">&#129120;</span>
        <span class="arrow right">&#129122;</span>
        <div class="shopping-bag shopping-cart" data-book-count="0">
            <span class="cart-icon"><i class="fa-solid fa-bags-shopping"></i></span>
        </div>
    `;


    let fragment = new DocumentFragment();
    fragment.appendChild(container);
    fragment.appendChild(popup);
    document.body.appendChild(fragment);
}


function renderCatalog() {
    createHeader();
    createBottomNav();
    createMainSection();

}

renderCatalog();