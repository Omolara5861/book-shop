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
    logo.href = '/';
    logo.innerHTML = '<i class="fas fa-book"></i> book arena';
    //Search Form
    searchForm.className = 'search-form';
    searchForm.innerHTML = `
    <input type="search" name="" placeholder="search for book..." id="search-box">
    <label for="search-box" class="fas fa-search"></label>
    `;
    //Shopping Bag
    shoppingBag.classList.add('shopping-cart1', 'icons');
    shoppingBag.dataset.bookCount = 0;
    shoppingBag.innerHTML = '<span class="cart-icon"><i class="fa-solid fa-bags-shopping"></i></span>';

    header1.appendChild(logo);
    header1.appendChild(searchForm);
    header1.appendChild(shoppingBag);

    const header2 = document.createElement('div');
    header2.className = 'header-2';
    header2.innerHTML = `
    <nav class="navbar">
                <a href="#home">home</a>
                <a href="#featured">featured</a>
                <a href="pages/book_catalog/index.html">catalog</a>
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

function bottomNav() {
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

//home section starts
function homeSection() {
    const section = document.createElement('section');
    const row = document.createElement('div');

    section.className = 'home';
    section.id = 'home';

    row.className = 'row';

    row.innerHTML = `
    <div class="content">
        <h3>upto 75% off</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt nostrum accusamus. Nam alias
            sit necessitatibus, aliquid ex minima at!</p>
        <a href="pages/book_catalog/index.html" class="btn">shop now</a>
    </div>

    <div class="swiper books-display">
        <div class="display-wrapper">
            <a ><img src="images/you_d_know_js_yet.jpg" alt="JS Book"></a>
            <a class="node" ><img src="images/node_js_in_action.jpg" alt="Node Book"></a>
            <a ><img src="images/programming_ts.jpg" alt="React Book"></a>
        </div>
        <img src="images/stand.png" class="stand" alt="">
    </div>
`;

    section.appendChild(row);
    let fragment = new DocumentFragment();
    fragment.appendChild(section);
    document.body.appendChild(fragment);
}
//home section endss
function detailSection() {
    const section = document.createElement('section');
    const container = document.createElement('div');
    const row = document.createElement('div');

    section.classList.add('detail_section', 'searched-content');
    container.className = 'container-fluid';
    row.className = 'row';

    row.innerHTML = `
    <div class="detail1">
                    <div class="detail_img-box">
                        <img src="images/detail.png" alt="" class="w-100" />
                    </div>
                </div>
                <div class="detail2">
<div class="detail_container">
    <div class="detail-box d-box-1">
        <a href="">
            <div class="detail-content">
                <img src="images/learning.png" alt="open book" />
                <h5>
                    learning
                </h5>
            </div>
        </a>
    </div>
    <div class="detail-box d-box-2">
        <a href="">
            <div class="detail-content">
                <img src="images/code.png" alt="learning" />
                <h5>
                    erudition
                </h5>
            </div>
        </a>
    </div>
    <div class="detail-box d-box-3">
        <a href="">
            <div class="detail-content">
                <img src="images/idea.png" alt="bulb" />
                <h5>
                    enlightenment
                </h5>
            </div>
        </a>
    </div>
    <div class="detail-box d-box-4">
        <a href="">
            <div class="detail-content">
                <img src="images/developer.png" alt="knowledge-sharing" />
                <h5>
                    knowledge
                </h5>
            </div>
        </a>
    </div>
</div>
</div>
</div>
`;

    container.appendChild(row);

    section.appendChild(container);
    let fragment = new DocumentFragment();
    fragment.appendChild(section);
    document.body.appendChild(fragment);
}

function featured() {
    const section = document.createElement('section');
    const h1 = document.createElement('h1');
    const featuredContainer = document.createElement('div');

    section.className = 'featured';
    section.id = 'featured';

    h1.className = 'heading';
    featuredContainer.className = 'featured-container';

    h1.innerHTML = '<span>featured books</span>';

    featuredContainer.innerHTML = `
    <div class="swiper featured-slider">

                <div class="swiper-wrapper row">
    
                    <a class="swiper-slide box">
                        <div class="image">
                            <img src="image/effective_js.jpg" alt="">
                        </div>
                        <div class="content">
                            <h3>new featured</h3>
                                                        <p >Book Title</p>

                            <div class="price">$15.99 <span>$20.99</span></div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </a>
    
                    <a class="swiper-slide box">
                        <div class="image">
                            <img src="image/programming_ts.jpg" alt="">
                        </div>
                        <div class="content searched-content">
                            <h3>new featured</h3>
                                                        <p >Book Title</p>

                            <div class="price">$15.99 <span>$20.99</span></div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </a>
    
                    <a class="swiper-slide box">
                        <div class="image">
                            <img src="image/secret_of_the_js_ninja.png" alt="">
                        </div>
                        <div class="content searched-content">
                            <h3>new featured</h3>
                                                        <p >Book Title</p>

                            <div class="price">$15.99 <span>$20.99</span></div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </a>
    
                </div>
    
            </div>
    
            <div class="swiper featured-slider">
    
                <div class="swiper-wrapper row">
    
                    <a class="swiper-slide box">
                        <div class="image">
                            <img src="image/js_good_part.jpg" alt="">
                        </div>
                        <div class="content searched-content">
                            <h3>new featured</h3>
                                                        <p >Book Title</p>

                            <div class="price">$15.99 <span>$20.99</span></div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </a>
    
                    <a class="swiper-slide box">
                        <div class="image">
                            <img src="image/node_js_in_action.jpg" alt="">
                        </div>
                        <div class="content searched-content">
                            <h3>new featured</h3>
                                                        <p >Book Title</p>

                            <div class="price">$15.99 <span>$20.99</span></div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </a>
    
                    <a class="swiper-slide box">
                        <div class="image">
                            <img src="image/learning_react.jpg" alt="">
                        </div>
                        <div class="content searched-content">
                            <h3>new featured</h3>
                                                        <p >Book Title</p>

                            <div class="price">$15.99 <span>$20.99</span></div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </a>
                </div>
    
            </div>

            <div class="btn-container">
                <a href="pages/book_catalog/index.html" class="btn">shop now</a>
            </div>
`;

    section.appendChild(h1);
    section.appendChild(featuredContainer);
    let fragment = new DocumentFragment();
    fragment.appendChild(section);
    document.body.appendChild(fragment);
}

function newsLetter() {
    const section = document.createElement('section');
    const newsletter = document.createElement('form');
    section.className = 'newsletter';

    newsletter.innerHTML = `
    <h3>subscribe for latest updates</h3>
            <input type="email" name="" placeholder="enter your email" id="" class="box">
            <input type="submit" value="subscribe" class="btn">
    `;
    section.appendChild(newsletter);
    let fragment = new DocumentFragment();
    fragment.appendChild(section);
    document.body.appendChild(fragment);
}

function iconsContainer() {

}

function footer() {

}

function renderHomePage() {
    createHeader();
    bottomNav();
    homeSection();
    detailSection();
    featured();
    newsLetter();
    iconsContainer();
    footer();
}

renderHomePage();

// let searchForm = document.querySelector('.search-form');



// window.onscroll = () => {

//     if (window.scrollY > 80) {
//         document.querySelector('.header .header-2').classList.add('active');
//     } else {
//         document.querySelector('.header .header-2').classList.remove('active');
//     }

// }

// window.onload = () => {

//     if (window.scrollY > 80) {
//         document.querySelector('.header .header-2').classList.add('active');
//     } else {
//         document.querySelector('.header .header-2').classList.remove('active');
//     }
// }

// function liveSearch() {
//     // Locate the card elements
//     let content = document.querySelectorAll('.searched-content')
//     // Locate the search input
//     let search_query = document.getElementById("search-box").value;
//     // Loop through the content
//     for (var i = 0; i < content.length; i++) {
//         // If the text is within the card...
//         if (content[i].textContent.toLowerCase()
//             // ...and the text matches the search query...
//             .includes(search_query.toLowerCase())) {
//             // ...remove the `.is-hidden` class.
//             content[i].classList.remove("is-hidden");
//         } else {
//             // Otherwise, add the class.
//             content[i].classList.add("is-hidden");
//         }
//     }
// }

// // A little delay
// let typingTimer;
// let typeInterval = 500; // Half a second
// let searchInput = document.getElementById('search-box');

// searchInput.addEventListener('keyup', () => {
//     clearTimeout(typingTimer);
//     typingTimer = setTimeout(liveSearch, typeInterval);
// });