let slider = document.getElementById('slider');
let popup = document.getElementById('popup');

let bag = JSON.parse(localStorage.getItem('bookData')) || [];

let generateShop = () => {
    return (slider.innerHTML = booksData
        .map((x) => {
            let {
                imageLink,
                title,
                rating,
                price
            } = x;
            return `
            <div class="card searched-content">
            <div class="card-content" draggable="true" ondragstart="dragstartHandler(event)" ondrag="ondragHandler(event)" ondragend="ondragendHandler(event)" ondragenter="ondragenterHandler(event)" ondragleave="ondragleaveHandler(event)">
                <img src=${imageLink} alt=${title}
                    class="card-img">
                <h1 class="card-title">${title}</h1>
                <div class="card-body">
                    <div class="card-star">
                        <span class="rating-value">${rating}</span>
                        <span class="star">&#9733;</span>
                    </div>
                    <p class="card-price">$${price}</p>
                </div>
                <div class="card-footer">
                    <button class="btn1 btn-success show-more">Show More</button>
                    <button class="btn1 btn-border add-to-cart">Add To Bag</button>
                </div>
            </div>
        </div>
      `;
        })
        .join(""));
};

generateShop();

const cards = document.querySelectorAll('.card');
const right_arrow = document.querySelector('.arrow.right');
const left_arrow = document.querySelector('.arrow.left');

const shopping_cart = document.querySelector('.shopping-cart');
const shopping_cart1 = document.querySelector('.shopping-cart1');
const shopping_bags = document.querySelectorAll('.shopping-bag');
const cart_btns = document.querySelectorAll('.add-to-cart');
const show_more_btns = document.querySelectorAll('.show-more');

let left = 0;
let card_size = 25.4;
let total_card_size = cards.length * card_size - card_size * 4;

if (window.matchMedia('(max-width: 768px)').matches) {
    card_size = 52;
    total_card_size = cards.length * card_size - card_size * 2;
}

left_arrow.onclick = () => {
    left -= card_size;

    if (left <= 0) left = 0;
    moveCards(left);
    checkArrowVisibility(left);
}

left_arrow.style.opacity = '0';

right_arrow.onclick = () => {
    left += card_size;

    if (left >= total_card_size) left = total_card_size;
    moveCards(left);
    checkArrowVisibility(left);
}

function moveCards(left) {
    for (card of cards) {
        card.style.left = -left + "%";
    }
}

function checkArrowVisibility(pos) {
    if (pos == 0) {
        left_arrow.style.opacity = '0';
    } else {
        left_arrow.style.opacity = '1';
    }
    if (pos >= total_card_size) {
        right_arrow.style.opacity = '0';
    } else {
        right_arrow.style.opacity = '1';
    }
}

// Fly To Shopping Cart Effect

for (cart_btn of cart_btns) {
    cart_btn.onclick = (e) => {

        let selectedBookContainer = e.target.parentNode.parentNode;
        let selectedBook = selectedBookContainer.children[1].textContent;
        let selectedBookPrice = parseFloat(selectedBookContainer.children[2].children[1].textContent.replace('$', ''));
        let selectedBookImgSrc = selectedBookContainer.children[0].src;
        let search = bag.find(b => b.title === selectedBook);

        if (search === undefined) {
            bag.push({
                title: selectedBook,
                price: selectedBookPrice,
                imgSrc: selectedBookImgSrc

            })
        } else {
            alert(`The book ${selectedBook} has already been added to your shopping bag`);
            return;
        }
        localStorage.setItem('bookData', JSON.stringify(bag));

        shopping_cart.classList.add('active');

        shopping_cart.setAttribute('data-book-count', bag.length);
        shopping_cart1.setAttribute('data-book-count', bag.length);

        // finding first grand parent of target button 
        let target_parent = e.target.parentNode.parentNode.parentNode;
        target_parent.style.zIndex = "100";
        // Creating separate Image
        let img = target_parent.querySelector('img');
        let flying_img = img.cloneNode();
        flying_img.classList.add('flying-img');

        target_parent.appendChild(flying_img);

        // Finding position of flying image

        const flying_img_pos = flying_img.getBoundingClientRect();
        const shopping_cart_pos = shopping_cart.getBoundingClientRect();

        let data = {
            left: shopping_cart_pos.left - (shopping_cart_pos.width / 2 + flying_img_pos.left + flying_img_pos.width / 2),
            top: shopping_cart_pos.bottom - flying_img_pos.bottom + 30
        }

        flying_img.style.cssText = `
                                --left : ${data.left.toFixed(2)}px;
                                --top : ${data.top.toFixed(2)}px;
                                `;


        setTimeout(() => {
            target_parent.style.zIndex = "";
            target_parent.removeChild(flying_img);
            shopping_cart.classList.remove('active');
        }, 1000);
    }
}
for (show_more_btn of show_more_btns) {
    show_more_btn.onclick = (e) => {

        let selectedBookContainer = e.target.parentNode.parentNode;
        let selectedBook = selectedBookContainer.children[1].textContent;
        let search = booksData.find(book => book.title === selectedBook) || [];
        let {
            imageLink,
            price,
            author,
            description
        } = search;

        popup.innerHTML = `
            <div onclick="toggle()" class="close-container">
            <i class="fa-solid fa-xmark"></i>
        </div>
        <div class="content" draggable="true">
            <div class="content1" draggable="true" ondragstart="dragstartHandler(event)" ondrag="ondragHandler(event)" ondragend="ondragendHandler(event)" ondragenter="ondragenterHandler(event)" ondragleave="ondragleaveHandler(event)">
                <h3 class="title1">${selectedBook}</h3>
                <h5>${author}</h5>
                <p>${description}</p>
            </div>
            <div class="content2">
                <img src=${imageLink}
                    alt=${selectedBook} class="img">
                <div class="content2-footer">
                    <b class="price">Price: $${price}</b>
                    <div>
                        <button onclick="bagClicked()" class="bag_btn">
                            <span class="add-to-bag">Add to Bag</span>
                            <span class="added">Added</span>
                            <i class="fa-solid fa-bags-shopping"></i>
                            <i class="fa-solid fa-book"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;
        toggle()
    }
}

function calcBookInBag() {
    shopping_cart.setAttribute('data-book-count', bag.length);
    shopping_cart1.setAttribute('data-book-count', bag.length);
}

calcBookInBag();


for (shopping_bag of shopping_bags) {
    shopping_bag.onclick = () => {
        document.location.href = '../bag/index.html';
    }
}

function bagClicked() {
    let bagBtn = document.querySelector('.bag_btn');
    bagBtn.classList.add('clicked');

    let selectedBook = document.querySelector('.title1').textContent;
    let selectedBookPrice = parseFloat(document.querySelector('.price').textContent.replace(`Price: $`, ''));
    let selectedBookImgSrc = document.querySelector('img').src;
    let search = bag.find(b => b.title === selectedBook);

    if (search === undefined) {
        bag.push({
            title: selectedBook,
            price: selectedBookPrice,
            imgSrc: selectedBookImgSrc
        })
    } else {
        alert(`The book ${selectedBook} has already been added to your shopping bag`);
        return;
    }
    localStorage.setItem('bookData', JSON.stringify(bag));
    calcBookInBag();
}


function toggle() {
    let blur = document.getElementById('blur');
    blur.classList.toggle('active');
    let popup = document.getElementById('popup');
    popup.classList.toggle('active');
}

// Drag Events
function dragstartHandler(ev) {
    console.log('----------------ondragstart - drag started');


    ev.dataTransfer.effectAllowed = "copy";
    ev.dataTransfer.dropEffect = "copy";

    ev.target.parentNode.style.backgroundColor = "#0e1523";
    ev.target.parentNode.style.color = "#f5f5f5";
    ev.target.children[3].children[1].style.color = "#f5f5f5";
    ev.dataTransfer.setData('text/html', ev.target.price);

}
function popupDragstartHandler(ev) {
    console.log('----------------ondragstart - drag started');


    ev.dataTransfer.effectAllowed = "copy";
    ev.dataTransfer.dropEffect = "copy";

    ev.target.parentNode.parentNode.style.backgroundColor = "#0e1523";
    ev.target.parentNode.parentNode.style.color = "#f5f5f5";

    ev.dataTransfer.setData('text/html', ev.target.price);

}

function ondragHandler(ev) {
    console.log("----------------ondrag");
}

function ondragenterHandler(ev) {
    ev.preventDefault();
    console.log("----------------ondragenter");
}

function ondragOverHandler(ev) {
    ev.preventDefault();
    console.log("-----------------------ondragover");

    ev.dataTransfer.dropEffect = "copy";
}

function ondragleaveHandler(ev) {
    console.log("----------------ondragleave");
}

function ondropHandler(ev) {
    ev.preventDefault();
    console.log("-----------------------ondrop");
}


function ondragendHandler(ev) {
    console.log("----------------ondragend - drag finished");

    ev.target.parentNode.style.backgroundColor = "#fff";
    ev.target.parentNode.style.color = "#000";
    ev.target.children[3].children[1].style.color = "#000";



    let selectedBookContainer = ev.target.parentNode;
    let selectedBook = selectedBookContainer.children[1].textContent;
    let selectedBookPrice = parseFloat(selectedBookContainer.children[2].children[1].textContent.replace('$', ''));
    let selectedBookImgSrc = selectedBookContainer.children[0].src;
    let search = bag.find(b => b.title === selectedBook);

    if (search === undefined) {
        bag.push({
            title: selectedBook,
            price: selectedBookPrice,
            imgSrc: selectedBookImgSrc

        })
    } else {
        alert(`The book ${selectedBook} has already been added to your shopping bag`);
        return;
    }
    localStorage.setItem('bookData', JSON.stringify(bag));


    calcBookInBag();
}
function popupOndragendHandler(ev) {
    console.log("----------------ondragend - drag finished");

    ev.target.parentNode.style.backgroundColor = "#fff";
    ev.target.parentNode.style.color = "#000";


    let selectedBook = document.querySelector('.title1').textContent;
    let selectedBookPrice = parseFloat(document.querySelector('.price').textContent.replace(`Price: $`, ''));
    let selectedBookImgSrc = document.querySelector('img').src;
    let search = bag.find(b => b.title === selectedBook);

    if (search === undefined) {
        bag.push({
            title: selectedBook,
            price: selectedBookPrice,
            imgSrc: selectedBookImgSrc
        })
    } else {
        alert(`The book ${selectedBook} has already been added to your shopping bag`);
        return;
    }
    localStorage.setItem('bookData', JSON.stringify(bag));
    calcBookInBag();
}