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
    logo.href = 'index.html';
    logo.innerHTML = '<i class="fas fa-book"></i> book arena';
    //Search Form
    searchForm.className = 'search-form';
    searchForm.innerHTML = `
    <input type="search" name="" placeholder="search for book..." id="search-box">
    <label for="search-box" class="fas fa-search"></label>
    `;
    //Shopping Bag
    shoppingBag.classList.add('shopping-cart1');
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
                            <img src="images/effective_js.jpg" alt="">
                        </div>
                        <div class="content">
                            <h3>new featured</h3>
                                                        <p >Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</p>

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
                            <img src="images/programming_ts.jpg" alt="">
                        </div>
                        <div class="content searched-content">
                            <h3>new featured</h3>
                                                        <p >Programming TypeScript</p>

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
                            <img src="images/secret_of_the_js_ninja.png" alt="">
                        </div>
                        <div class="content searched-content">
                            <h3>new featured</h3>
                                                        <p >Secrets of the JavaScript Ninja</p>

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
                            <img src="images/js_good_part.jpg" alt="">
                        </div>
                        <div class="content searched-content">
                            <h3>new featured</h3>
                                                        <p >JavaScript: The Good Parts</p>

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
                            <img src="images/node_js_in_action.jpg" alt="">
                        </div>
                        <div class="content searched-content">
                            <h3>new featured</h3>
                                                        <p >Node.js in Action</p>

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
                            <img src="images/learning_react.jpg" alt="">
                        </div>
                        <div class="content searched-content">
                            <h3>new featured</h3>
                                                        <p >Learning React, 2nd Edition</p>

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

// icons section starts
function iconsContainer() {
    const section = document.createElement('section');
    section.className = 'icons-container';

    section.innerHTML = `
    <div class="icons">
            <i class="fas fa-shipping-fast"></i>
            <div class="content">
                <h3>free shipping</h3>
                <p>order over $100</p>
            </div>
        </div>
        <div class="icons">
            <i class="fas fa-lock"></i>
            <div class="content">
                <h3>secure payment</h3>
                <p>100 secure payment</p>
            </div>
        </div>

        <div class="icons">
            <i class="fas fa-redo-alt"></i>
            <div class="content">
                <h3>easy returns</h3>
                <p>10 days returns</p>
            </div>
        </div>

        <div class="icons">
            <i class="fas fa-headset"></i>
            <div class="content">
                <h3>24/7 support</h3>
                <p>call us anytime</p>
            </div>
        </div>
    `;
    let fragment = new DocumentFragment();
    fragment.appendChild(section);
    document.body.appendChild(fragment);
}
// icons section ends

// footer section starts 
function footer() {
    const footer = document.createElement('footer');
    const creditContainer = document.createElement('div');

    footer.className = 'footer';
    creditContainer.className = 'credit';

    creditContainer.innerHTML = `
    created by <span><a href="https://omolara5861.github.io/"
                    target="_blank">laravel</a></span> | all rights reserved!`;
    
    footer.appendChild(creditContainer);
    
    let fragment = new DocumentFragment();
    fragment.appendChild(footer);
    document.body.appendChild(fragment);
}
// footer section starts 

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
