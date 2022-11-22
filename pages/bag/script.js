const shopping_cart1 = document.querySelector('.shopping-cart1');
const title = document.getElementById('title');
const cartPage = document.getElementById('cart-page');



let bag = JSON.parse(localStorage.getItem('bookData')) || [];

function calcBookInBag() {
    shopping_cart1.setAttribute('data-book-count', bag.length);
}

calcBookInBag();

function generateBagItems() {
    if (bag.length > 0) {
        title.innerHTML = `Horray! You have <span>${bag.length}</span> ${bag.length > 1 ? 'books' : 'book'} in your bag`;
        return (cartPage.innerHTML += bag.map(book => {
            let {
                title
            } = book;
            let search = booksData.find(book => book.title === title) || [];
            let {
                imageLink,
                price,
                author
            } = search;
            return `
            <tr class="product-row">
                    <td>
                        <div class="cart-info">
                            <img src=${imageLink}
                                alt=${title}>
                            <div>
                                <p>${title}</p>
                                <b style="font-size: 13px" class="book-author">${author}</b> <br>
                                <small class="book-price">Price: $${price}</small> <br>
                                <button id="remove-btn" onclick="removeBook(${price})">Remove</button>
                            </div>
                        </div>
                    </td>
                    <td><input type="number" value="1" class="cart-quantity-input" name=""></td>
                    <!--  <td>$${price }</td>-->
                </tr>
            `;
        }).join(''));
    } else {
        title.innerHTML = `OH NO! You have <span>0</span> book in your bag`;

    }
}
generateBagItems();

// update quantity input
const quantityInputs = document.querySelectorAll('.cart-quantity-input');

for (input of quantityInputs) {
    input.onclick = (e) => {
        selectedInput = e.target;
        if (isNaN(selectedInput.value) || selectedInput.value <= 0) {
            selectedInput.value = 1
        }
        updateTotalPrice();
    }
}
// end of update quantity input

const productRows = document.querySelectorAll('.product-row');

// update total price
function updateTotalPrice() {
    let total = 0;
    for (let productRow of productRows ) {
        bagRow = productRow;
        let priceElement = bagRow.getElementsByClassName('book-price')[0]
        let quantityElement = bagRow.getElementsByClassName('cart-quantity-input')[0]
        let price = parseFloat(priceElement.innerText.replace(`Price: $`, ''))
        let quantity = quantityElement.value
        total = total + (price * quantity);
    }
    document.getElementById('total-price').innerText = '$' + total
}
updateTotalPrice();
// end of update total price

let removeBook = (price) => {
    let selectedBook = price;
    bag = bag.filter(book => book.price !== selectedBook);
    localStorage.setItem('bookData', JSON.stringify(bag));
    document.location.reload();
}
let clearBag = () => {
    if(confirm("Are you sure you want to clear your bag?")) {
        bag = [];
        localStorage.setItem('bookData', JSON.stringify(bag));
        document.location.reload();
    }
    return false;
}