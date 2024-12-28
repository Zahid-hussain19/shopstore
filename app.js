
let cart = JSON.parse(localStorage.getItem('cart')) || [];


function addToCart(id, name, price) {
    cart.push({ id, name, price });
    localStorage.setItem('cart', JSON.stringify(cart)); 
    alert(name + " has been added to your cart!");
}


function showCart() {
    const cartModal = document.getElementById("cartModal");
    const cartItems = document.getElementById("cartItems");


    cartItems.innerHTML = '';

    if (cart.length === 0) {
        const li = document.createElement("li");
        li.textContent = "Your cart is empty.";
        cartItems.appendChild(li);
    } else {
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(li);
        });
    }

    cartModal.style.display = "flex";
}

function closeCart() {
    const cartModal = document.getElementById("cartModal");
    cartModal.style.display = "none";
}


function clearCart() {
    cart = [];
    localStorage.removeItem('cart'); 
    showCart();
}

function checkout() {
    alert("Proceeding to checkout...");
 
}

function searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(input)) {
            product.style.display = ''; 
        } else {
            product.style.display = 'none'; 
        }
    });
}