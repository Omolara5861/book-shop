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
                <a href="index.html">Bag</a>
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
    const main = document.createElement('main');
    const smallContainer = document.createElement('div');
    const title = document.createElement('div');

    // Style Element
    smallContainer.classList.add('small-container', 'cart-page' );
    title.className = 'title';

    title.innerHTML = `
    <h1 class="heading1"> <span>ordered books</span> </h1>
    <h3 id="title"></h3>
    `;

    let bag = JSON.parse(localStorage.getItem('bookData')) || [];

    if(bag.length > 0) {
        smallContainer.innerHTML = `
        <div class="books-in-bag">
                <table id="cart-page">
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <!-- <th>Subtotal</th> -->
                    </tr>
                </table>
                <div class="total-price">
                    <table>
                        <tr>
                            <td><b>Total Price</b></td>
                            <td id="total-price">$0</td>
                        </tr>
                    </table>
                </div>
    
                <div class="btns-container">
                    <a class="bag-btn bag-btn first-btn" href="../book_catalog/index.html" title="Continue Shopping">Continue Shopping</a>
                    <div>
                        <a onclick="clearBag()" class="bag-btn bag-btn middle-btn" href="#" title="Clear Cart">Clear Cart</a>
                        <a class="bag-btn bag-btn last-btn" href="../order/index.html" title="Confirm Order">Confirm Order</a>
                    </div>
                </div>
            </div>
        `;
    }
    else {
        smallContainer.innerHTML = `
        <div class="empty-bag">
        <img src="../../images/Empty-pana-uai-516x387.png" alt="empty bag">
        <h1>Oops ... your bag is empty</h1>
        <a href="../book_catalog/index.html">
            Go back to the Catalog
        </a>
        </div>
        `;
    }

    main.appendChild(title);
    main.appendChild(smallContainer);

    let fragment = new DocumentFragment();
    fragment.appendChild(main);
    document.body.appendChild(fragment);
}


function renderBagPage() {
    createHeader();
    createBottomNav();
    createMainSection();

}

renderBagPage();