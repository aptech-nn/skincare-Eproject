const productData = [
  { name: "Rose Toner", price: 12.99, category: "toner", image: "image/rose2.png.png", description: "Hydrates and refreshes your skin with natural rose extract." },
  { name: "Peach Cleanser", price: 15.99, category: "cleanser", image: "image/gudpeach.png.png" },
  { name: "Lavender Moisturizer", price: 18.99, category: "moisturizer", image: "image/lave2.png.png", category: "best" },
  { name: "Mint Cleanser", price: 14.99, category: "cleanser", image: "image/mint1.png.png" },
  { name: "Chamomile Toner", price: 11.99, category: "toner", image: "image/CToner2.png.png", category: "best" },
  { name: "Vanilla Moisturizer", price: 19.99, category: "moisturizer", image: "image/vanilla2.png.png" },
  { name: "Aloe Vera Gel", price: 10.99, category: "moisturizer", image: "image/aloe.png.png", sale: true },
  { name: "Coconut Cleanser", price: 13.49, category: "cleanser", image: "image/coconut.png.png", sale: false },
  { name: "Berry Blast Scrub", price: 16.99, category: "cleanser", image: "image/berryscrub.png.png", sale: true, category: "best" },
  { name: "Sunflower Day Cream", price: 21.99, category: "moisturizer", image: "image/sunflower.png.png", sale: false },
  // add moreeeeeee
  { name: "Daily Glow Sunscreen", price: 16.99, category: "best", image: "image/sunscreen1.png.png", description: "Lightweight SPF 50+ protection that leaves your skin glowing." },
  { name: "Tea Tree Foam Cleanser", price: 15.49, category: "cleanser", image: "image/tea_tree_cleanser.png", sale: false },
  { name: "HydraBoost Gel Cream", price: 20.99, category: "moisturizer", image: "image/hydraboost.png", sale: true },
  { name: "Pink Clay Face Mask", price: 17.99, category: "best", image: "image/pinkclay.png", sale: false },
  // more added :>, see if it works
  { name: "Witch Hazel Toner", price: 13.99, category: "toner", image: "image/witchhazel.png", description: "Clarifying toner with natural astringents." },
  { name: "Green Tea Toner", price: 14.49, category: "toner", image: "image/greentea.png", description: "Soothing toner rich in antioxidants." },
  { name: "Lavender Mist Toner", price: 15.29, category: "toner", image: "image/lavendermist.png", description: "A calming lavender-infused hydrating mist." },
  // copied same above for Best Sellers, works!
  { name: "Witch Hazel Toner", price: 13.99, category: "best", image: "image/witchhazel.png", description: "Clarifying toner with natural astringents." },
  { name: "Green Tea Toner", price: 14.49, category: "best", image: "image/greentea.png", description: "Soothing toner rich in antioxidants." },
  { name: "Lavender Mist Toner", price: 15.29, category: "best", image: "image/lavendermist.png", description: "A calming lavender-infused hydrating mist." },

];


const productGrid = document.getElementById("productGrid");

function renderProducts(filter = "all") {
  productGrid.innerHTML = "";
  const filtered = filter === "all" ? productData : productData.filter(p => p.category === filter);
  filtered.forEach(product => {
    const col = document.createElement("div");
    col.className = "col-md-4 product-card";
    col.setAttribute("data-category", product.category);

    // Check if the item is already in the cart
    const isInCart = cart[product.name];
    const quantity = isInCart ? cart[product.name].qty : 0;

    col.innerHTML = `
    <div class="card position-relative">
        ${product.sale ? '<span class="badge bg-danger position-absolute top-0 start-0 m-2">SALE</span>' : ''}
        <span class="badge bg-secondary position-absolute top-0 end-0 m-2 text-capitalize">${product.category}</span>
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text text-muted">
                ${product.sale
        ? `<del>$${(product.price * 1.2).toFixed(2)}</del> <strong class="text-danger">$${product.price.toFixed(2)}</strong>`
        : `$${product.price.toFixed(2)}`}
            </p>
            <button class="btn btn-pastel mt-2 w-100 add-btn" ${isInCart ? 'style="display:none;"' : ''} onclick="addToBag('${product.name}', ${product.price}, this)">Add to Bag</button>
            <div class="quantity-controls mt-2" ${isInCart ? '' : 'style="display:none;"'}>
                <button onclick="decrement(this)">-</button>
                <span>${quantity}</span>
                <button onclick="increment(this)">+</button>
            </div>
        </div>
    </div>
`;

    productGrid.appendChild(col);
    observer.observe(col);
  });
}


function filterCategory(category) {
  renderProducts(category);
}

function scrollToProducts() {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function increment(btn) {
  const span = btn.previousElementSibling;
  const card = btn.closest('.card');
  const title = card.querySelector('.card-title').textContent;
  const price = parseFloat(card.querySelector('.text-muted').textContent.replace(/[^0-9.]/g, ''));

  let quantity = parseInt(span.textContent) + 1;
  span.textContent = quantity;
  updateCart(title, price, quantity);
}

function decrement(btn) {
  const span = btn.nextElementSibling;
  const card = btn.closest('.card');
  const title = card.querySelector('.card-title').textContent;
  const price = parseFloat(card.querySelector('.text-muted').textContent.replace(/[^0-9.]/g, ''));

  let quantity = parseInt(span.textContent);
  if (quantity > 0) quantity--;
  span.textContent = quantity;
  updateCart(title, price, quantity);
}

const cart = {};

function updateCart(name, price, qty) {
  if (qty === 0) {
    delete cart[name];
  } else {
    cart[name] = { price, qty };
  }

  renderCart();
  updateCartCount();
}
function updateCartCount() {
  const cartCountEl = document.getElementById("cart-count");
  let totalItems = 0;
  for (const item in cart) {
    totalItems += cart[item].qty;
  }
  cartCountEl.textContent = totalItems;
  cartCountEl.style.display = totalItems > 0 ? "inline-block" : "none";
}


function addToBag(name, price, button) {
  cart[name] = { price, qty: 1 };
  renderCart();
  alert(`${name} added to your bag!`);

  const card = button.closest('.card-body');
  button.style.display = 'none';
  const quantityControls = card.querySelector('.quantity-controls');
  quantityControls.style.display = 'flex';
  quantityControls.querySelector('span').textContent = '1';
}

function renderCart() {
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';
  let total = 0;
  for (const item in cart) {
    const { price, qty } = cart[item];
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `${item} <span>${qty} x $${price.toFixed(2)}</span>`;
    cartItems.appendChild(li);
    total += price * qty;
  }
  document.getElementById('totalPrice').textContent = total.toFixed(2);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

renderProducts();

// finally TvT

// loader
function showLoader() {
  document.getElementById("loader-wrapper").style.display = "flex";
}

window.addEventListener("load", () => {
  const loader = document.getElementById("loader-wrapper");
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 700);
});

