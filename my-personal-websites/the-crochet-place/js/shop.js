/* ==========================================
   PRODUCT RENDERING
========================================== */


/* ==========================================
   Shop Application
========================================== */

const Shop = {

    /* ==========================================
       Cached Elements
    ========================================== */

    elements: {

        grid: document.getElementById("productsGrid"),

        searchInput: document.getElementById("productSearch"),

        filterButtons: document.querySelectorAll(".filter-btn"),

        counter: document.getElementById("productCount"),

        emptyState: document.getElementById("emptyProducts"),

        showAllButton: document.getElementById("showAllProducts"),

        actionPill: document.getElementById("actionPill"),

        cartOverlay: document.getElementById("cartOverlay"),

        cartDrawer: document.getElementById("cartDrawer"),

        cartItems: document.getElementById("cartItems"),

        cartEmpty: document.getElementById("cartEmpty"),

        cartSubtotal: document.getElementById("cartSubtotal"),

        closeCart: document.getElementById("closeCart"),

        continueShopping: document.getElementById("continueShopping")

    },

    /* ==========================================
   Modal Elements
========================================== */

modal: {

    overlay: document.getElementById("productModal"),

    backdrop: document.querySelector(".modal-backdrop"),

    closeButton: document.getElementById("closeProductModal"),

    image: document.getElementById("modalProductImage"),

    badge: document.getElementById("modalBadge"),

    title: document.getElementById("modalTitle"),

    price: document.getElementById("modalPrice"),

    description: document.getElementById("modalDescription"),

    sizes: document.getElementById("modalSizes"),

    sizeGroup: document.getElementById("modalSizeGroup"),

    colorGroup: document.getElementById("modalColorGroup"),

    colors: document.getElementById("modalColors"),

    quantity: document.getElementById("quantityValue"),

    decrease: document.getElementById("decreaseQty"),

    increase: document.getElementById("increaseQty"),

    addToCart: document.querySelector(".add-cart-modal"),

    wishlist: document.querySelector(".wishlist-modal")

},

    /* ==========================================
       Application State
    ========================================== */

        state: {

        currentCategory: "all",

        currentSearch: "",

        currentProduct: null,

        selectedSize: null,

        selectedColor: null,

        quantity: 1,

        wishlist: [],

        cart: []

    },

    get products(){

    return PRODUCTS;

    },

    /* ==========================================
   Badge Component
========================================== */

createBadge(product){

    if(!product.badge) return "";

    return `

        <span class="product-badge">

            ${product.badge}

        </span>

    `;

},

/* ==========================================
   Wishlist Button
========================================== */

createWishlistButton(product){

    const wished =

        this.state.wishlist.includes(product.id);

    return `

        <button

            class="wishlist-btn ${wished ? "active" : ""}"

            data-id="${product.id}"

            aria-label="Wishlist">

            ${wished ? "♥" : "♡"}

        </button>

    `;

},

/* ==========================================
   Toggle Wishlist
========================================== */

toggleWishlist(productId){

    productId = Number(productId);

    const index = this.state.wishlist.indexOf(productId);

    const button = this.elements.grid.querySelector(
        `.wishlist-btn[data-id="${productId}"]`
    );

    if(index > -1){

        this.state.wishlist.splice(index,1);

        button.classList.remove("active");

        button.textContent = "♡";

    }else{

        this.state.wishlist.push(productId);

        button.classList.add("active");

        button.textContent = "♥";

        button.classList.add("heart-pop");

        setTimeout(()=>{

            button.classList.remove("heart-pop");

        },350);

    }

    this.saveWishlist();

},

saveWishlist(){

    localStorage.setItem(

        "crochetWishlist",

        JSON.stringify(this.state.wishlist)

    );

},

loadWishlist(){

    this.state.wishlist =

        JSON.parse(

            localStorage.getItem("crochetWishlist")

        ) || [];

},

/* ==========================================
   Product Image
========================================== */

createProductImage(product){

    return `

        <div class="product-image">

            <div class="product-image-bg"></div>

            <img

                src="${product.image}"

                alt="${product.name}"

                loading="lazy">

        </div>

    `;

},

/* ==========================================
   Product Button
========================================== */

createProductButton(product){

    const text = product.hasOptions

        ? "Choose Options →"

        : "💖 Make it Mine";

    return `

        <button

            class="product-btn"

            data-id="${product.id}">

            ${text}

        </button>

    `;

},

/* ==========================================
   Product Content
========================================== */

createProductContent(product){

    return `

        <div class="product-content">

            <h3>

                ${product.name}

            </h3>

            <span class="product-price">

                Rs. ${product.price.toLocaleString()}

            </span>

            ${this.createProductButton(product)}

        </div>

    `;

},

/* ==========================================
   Product Card
========================================== */

createProductCard(product, index){

    return `

        <article

            class="product-card reveal-scale delay-${(index % 6)+1}"

            data-id="${product.id}"

            data-category="${product.category}"

            data-name="${product.name}">

            ${this.createBadge(product)}

            ${this.createWishlistButton(product)}

            ${this.createProductImage(product)}

            ${this.createProductContent(product)}

        </article>

    `;

},

/* ==========================================
   Render Products
========================================== */

renderProducts(products){

    console.log("Rendering", products.length);

    this.elements.grid.innerHTML = products

        .map((product, index) => this.createProductCard(product, index))

        .join("");

        observeRevealElements(this.elements.grid);

},

/* ==========================================
   Product Counter
========================================== */

updateCounter(products){

    this.elements.counter.textContent = products.length;

},

/* ==========================================
   Empty State
========================================== */

toggleEmptyState(products){

    this.elements.emptyState.classList.toggle(

        "show",

        products.length === 0

    );

},

/* ==========================================
   Get Filtered Products
========================================== */

getFilteredProducts(){

    return this.products.filter(product => {

        const categoryMatch =

            this.state.currentCategory === "all"

            ||

            product.category === this.state.currentCategory;

        const searchMatch =

            product.name

            .toLowerCase()

            .includes(this.state.currentSearch);

        return categoryMatch && searchMatch;

    });

},

/* ==========================================
   Refresh Shop
========================================== */

refresh(){

    console.log("Refreshing");

    const filtered = this.getFilteredProducts();

    this.renderProducts(filtered);

    this.updateCounter(filtered);

    this.toggleEmptyState(filtered);

    // this.updateCartCount();

    this.updateActionPill();

},

/* ==========================================
   Open Product Modal
========================================== */

openModal(productId){

    const product = this.products.find(

        product => product.id == productId

    );

    if(!product) return;

    this.state.currentProduct = product;

    this.populateModal(product);

    this.modal.overlay.classList.add("active");

    this.modal.overlay.setAttribute(

        "aria-hidden",

        "false"

    );

    document.body.style.overflow = "hidden";

},

/* ==========================================
   Close Product Modal
========================================== */

closeModal(){

    this.modal.overlay.classList.remove("active");

    this.modal.overlay.setAttribute(

        "aria-hidden",

        "true"

    );

    document.body.style.overflow = "";

},

/* ==========================================
   Populate Modal
========================================== */

populateModal(product){

    this.modal.image.src = product.image;

    this.modal.image.alt = product.name;

    this.modal.title.textContent = product.name;

    this.modal.price.textContent =

        `Rs. ${product.price.toLocaleString()}`;

    this.modal.description.textContent =

        product.description;

    this.modal.badge.textContent =

        product.badge || "";

        this.modal.sizes.innerHTML = "";

        this.modal.colors.innerHTML = "";

        this.state.selectedSize = null;

        this.state.selectedColor = null;

        this.state.quantity = 1;

        this.modal.quantity.textContent = 1;

/* =========================
   Product Options
========================= */

if(product.hasOptions){

    /* ---------- Sizes ---------- */

    if(product.sizes?.length){

        this.modal.sizeGroup.style.display = "block";

        product.sizes.forEach(size => {

            const button = document.createElement("button");

            button.textContent = size;

            button.addEventListener("click", () => {

                this.modal.sizes

                    .querySelectorAll("button")

                    .forEach(btn =>

                        btn.classList.remove("active")

                    );

                button.classList.add("active");

                this.state.selectedSize = size;

                this.modal.sizeGroup.classList.remove("error");

            });

            this.modal.sizes.appendChild(button);

        });

    }else{

        this.modal.sizeGroup.style.display = "none";

    }

    /* ---------- Colours ---------- */

    if(product.colors?.length){

        this.modal.colorGroup.style.display = "block";

        product.colors.forEach(color => {

            const button = document.createElement("button");

            button.textContent = color;

            button.addEventListener("click", () => {

                this.modal.colors

                    .querySelectorAll("button")

                    .forEach(btn =>

                        btn.classList.remove("active")

                    );

                button.classList.add("active");

                this.state.selectedColor = color;

                this.modal.colorGroup.classList.remove("error");

            });

            this.modal.colors.appendChild(button);

        });

    }else{

        this.modal.colorGroup.style.display = "none";

    }

}else{

    this.modal.sizeGroup.style.display = "none";

    this.modal.colorGroup.style.display = "none";

}

},

/* ==========================================
   Increase Quantity
========================================== */

increaseQuantity(){

    this.state.quantity++;

    this.modal.quantity.textContent =

        this.state.quantity;

},

/* ==========================================
   Decrease Quantity
========================================== */

decreaseQuantity(){

    if(this.state.quantity <= 1) return;

    this.state.quantity--;

    this.modal.quantity.textContent =

        this.state.quantity;

},

/* ==========================================
   Validate Product Options
========================================== */

validateOptions(){

    let valid = true;

    this.modal.sizeGroup.classList.remove("error");

    this.modal.colorGroup.classList.remove("error");

    if(

        this.state.currentProduct.hasOptions &&

        this.state.currentProduct.sizes?.length &&

        !this.state.selectedSize

    ){

        this.modal.sizeGroup.classList.add("error");

        valid = false;

    }

    if(

        this.state.currentProduct.hasOptions &&

        this.state.currentProduct.colors?.length &&

        !this.state.selectedColor

    ){

        this.modal.colorGroup.classList.add("error");

        valid = false;

    }

    return valid;

},

/* ==========================================
   Add To Cart
========================================== */

addToCart(){

    if(!this.validateOptions()) return;

    const product = this.state.currentProduct;

    const existing = this.findCartItem(product);

    if(existing){

        existing.quantity += this.state.quantity;

    }else{

                this.state.cart.push({

            id: product.id,

            quantity: this.state.quantity,

            size: this.state.selectedSize,

            color: this.state.selectedColor

        });

    }

    this.refresh();

    this.refreshCart();

    this.saveCart();

    this.closeModal();

    this.openCart();

},

/* ==========================================
   Find Cart Item
========================================== */

findCartItem(product){

    return this.state.cart.find(item =>

        item.id === product.id &&

        item.size === this.state.selectedSize &&

        item.color === this.state.selectedColor

    );

},

/* ==========================================
   Open Cart
========================================== */

openCart(){

    this.elements.cartOverlay.classList.add("active");

    this.elements.cartOverlay.setAttribute(

        "aria-hidden",

        "false"

    );

    document.body.style.overflow = "hidden";

},

/* ==========================================
   Close Cart
========================================== */

closeCart(){

    this.elements.cartOverlay.classList.remove("active");

    this.elements.cartOverlay.setAttribute(

        "aria-hidden",

        "true"

    );

    document.body.style.overflow = "";

},

/* ==========================================
   Refresh Cart
========================================== */

refreshCart(){

    this.renderCart();

    this.updateEmptyCart();

    this.updateSubtotal();

    this.updateActionPill();

},

/* ==========================================
   Render Cart
========================================== */

renderCart(){

    if(this.state.cart.length === 0){

        this.elements.cartItems.innerHTML = "";

        this.elements.cartEmpty.classList.add("show");

        return;

    }

    this.elements.cartEmpty.classList.remove("show");

    this.elements.cartItems.innerHTML =

        this.state.cart

            .map(item => this.createCartItem(item))

            .join("");

},

/* ==========================================
   Update Subtotal
========================================== */

updateSubtotal(){

},

updateEmptyCart(){

    this.elements.cartEmpty.classList.toggle(

        "show",

        this.state.cart.length === 0

    );

},

/* ==========================================
   Cart Item Component
========================================== */

createCartItem(item){

    const product = this.products.find(

        product => product.id === item.id

    );

    if(!product) return "";

    return `

        <article

            class="cart-item"

            data-id="${item.id}"

            data-size="${item.size ?? ""}"

            data-color="${item.color ?? ""}">

            <img

                src="${product.image}"

                alt="${product.name}"

                class="cart-item-image">

            <div class="cart-item-content">

                <h3>

                    ${product.name}

                </h3>

                <p class="cart-item-options">

                    ${item.size ? `Size: ${item.size}` : ""}

                    ${item.color ? ` • ${item.color}` : ""}

                </p>

                <span class="cart-item-price">

                    Rs. ${product.price.toLocaleString()}

                </span>

            </div>

            <button

                class="cart-remove"

                data-id="${item.id}">

                ✕

            </button>

        </article>

    `;

},

/* ==========================================
   Update Action Pill
========================================== */

updateActionPill(){

    const pill = this.elements.actionPill;

    const icon = pill.querySelector(".pill-icon");

    const text = pill.querySelector(".pill-text");

    const badge = pill.querySelector(".pill-badge");

    const uniqueItems = this.state.cart.length;

    if(uniqueItems === 0){

        pill.classList.remove("has-cart");

        text.textContent = "Shop Now";

        badge.textContent = "";

        return;

    }

    pill.classList.add("has-cart");

    text.textContent = "Cart";

    badge.textContent = uniqueItems;

},

/* ==========================================
   Save Cart
========================================== */

saveCart(){

    if(this.state.cart.length === 0){

        localStorage.removeItem("crochetCart");

        return;

    }

    localStorage.setItem(

        "crochetCart",

        JSON.stringify(this.state.cart)

    );

},

/* ==========================================
   Load Cart
========================================== */

loadCart(){

    const savedCart = localStorage.getItem(

        "crochetCart"

    );

    if(!savedCart) return;

    this.state.cart = JSON.parse(savedCart);

},

/* ==========================================
   Render Cart
========================================== */

renderCart(){

    const container = this.elements.cartItems;

    container.innerHTML = "";

    if(this.state.cart.length === 0){

        container.innerHTML = `

            <div class="cart-empty">

                <div class="cart-empty-icon">🧶</div>

                <h3>Your basket is empty</h3>

                <p>
                    Time to adopt your first crochet friend.
                </p>

            </div>

        `;

        this.updateSubtotal();

        return;

    }

    this.state.cart.forEach(item => {

        container.insertAdjacentHTML(

            "beforeend",

            this.createCartItem(item)

        );

    });

    this.updateSubtotal();

},

/* ==========================================
   Cart Item
========================================== */

createCartItem(item){

    const product = this.products.find(

        product => product.id === item.id

    );

    if(!product) return "";

    return `

        <article

            class="cart-item"

            data-id="${item.id}"

            data-size="${item.size || ""}"

            data-color="${item.color || ""}">

            <img

                src="${product.image}"

                alt="${product.name}"

                class="cart-item-image">

            <div class="cart-item-details">

                <h3>

                    ${product.name}

                </h3>

                ${item.size ? `

                    <p>

                        Size: ${item.size}

                    </p>

                ` : ""}

                ${item.color ? `

                    <p>

                        Color: ${item.color}

                    </p>

                ` : ""}

                <div class="cart-item-footer">

                    <div

                        class="cart-quantity"

                        data-id="${item.id}"

                        data-size="${item.size || ""}"

                        data-color="${item.color || ""}">

                        <button class="qty-minus">

                            −

                        </button>

                        <span>

                            ${item.quantity}

                        </span>

                        <button class="qty-plus">

                            +

                        </button>

                    </div>

                    <span class="cart-price">

                        Rs. ${(product.price * item.quantity).toLocaleString()}

                    </span>

                </div>

            </div>

            <button

                class="remove-cart-item"

                data-id="${item.id}"

                data-size="${item.size || ""}"

                data-color="${item.color || ""}">

                ✕

            </button>

        </article>

    `;

},

/* ==========================================
   Increase Cart Quantity
========================================== */

increaseCartQuantity(item){

    item.quantity++;

    this.saveCart();

    this.refreshCart();

},

/* ==========================================
   Decrease Cart Quantity
========================================== */

decreaseCartQuantity(item){

    item.quantity--;

    if(item.quantity <= 0){

        this.removeCartItem(item);

        return;

    }

    this.saveCart();

    this.refreshCart();

},

/* ==========================================
   Remove Cart Item
========================================== */

removeCartItem(item){

    this.state.cart = this.state.cart.filter(cartItem =>

        !(

            cartItem.id === item.id &&

            cartItem.size === item.size &&

            cartItem.color === item.color

        )

    );

    this.refreshCart();

    this.saveCart();

},

/* ==========================================
   Animate Add To Cart
========================================== */

animateAddToCart(){

    const image = this.modal.image;

    const pill = this.elements.actionPill;

    if(!image || !pill) return;

    const flyingImage = document.createElement("img");

    flyingImage.src = image.src;
    flyingImage.alt = "";
    flyingImage.className = "flying-cart-image";
    document.body.appendChild(flyingImage);

    const start = image.getBoundingClientRect();

    const end = pill.getBoundingClientRect();

    console.log("Animation started");

    const endX =
        end.left +
        end.width / 2 -
        start.width / 2;

    const endY =
        end.top +
        end.height / 2 -
        start.height / 2;

    Object.assign(flyingImage.style, {

    position:"fixed",

    left:`${start.left}px`,

    top:`${start.top}px`,

    width:`${start.width}px`,

    height:`${start.height}px`,

    borderRadius:"18px",

    pointerEvents:"none",

    zIndex:999999,

    transform:"scale(1)",

    opacity:"1",

    boxShadow:"0 20px 50px rgba(0,0,0,.18)",

    transition:"none"

});

    flyingImage.offsetWidth;

    flyingImage.style.transition = `

    transform .75s cubic-bezier(.22,1,.36,1),

    opacity .75s ease;

    `;

    const dx = endX - start.left;

    const dy = endY - start.top;

    this.closeModal();

    requestAnimationFrame(() => {

    flyingImage.style.transform =
    `translate(${dx}px, ${dy}px) scale(.18) rotate(12deg)`;

    flyingImage.style.opacity = ".25";

});

    flyingImage.addEventListener("transitionend", () => {

        console.log("Animation finished");

        flyingImage.remove();

    });



},

/* ==========================================
   Update Subtotal
========================================== */

updateSubtotal(){

    const subtotal = this.state.cart.reduce((total, item) => {

        const product = this.products.find(

            product => product.id === item.id

        );

        if(!product) return total;

        return total + product.price * item.quantity;

    }, 0);

    this.elements.cartSubtotal.textContent =

        `Rs. ${subtotal.toLocaleString()}`;

},

/* ==========================================
   Event Listeners
========================================== */

bindEvents(){

    this.elements.searchInput.addEventListener("input", () => {

        this.state.currentSearch =

            this.elements.searchInput.value

                .trim()

                .toLowerCase();

        this.refresh();

    });

    this.elements.filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            this.elements.filterButtons.forEach(btn =>

                btn.classList.remove("active")

            );

            button.classList.add("active");

            this.state.currentCategory = button.dataset.filter;

            this.refresh();

        });

    });

        this.elements.showAllButton.addEventListener("click", () => {

        this.state.currentSearch = "";

        this.state.currentCategory = "all";

        this.elements.searchInput.value = "";

        this.elements.filterButtons.forEach(btn =>

            btn.classList.remove("active")

        );

        const allButton = [...this.elements.filterButtons].find(

    button => button.dataset.filter === "all"

);

allButton?.classList.add("active");

    });



    this.modal.closeButton.addEventListener("click", () => {

    this.closeModal();

});

this.modal.backdrop.addEventListener("click", () => {

    this.closeModal();

});

/* ==========================================
   Quantity Buttons
========================================== */

this.modal.increase.addEventListener("click", () => {

    this.increaseQuantity();

});

this.modal.decrease.addEventListener("click", () => {

    this.decreaseQuantity();

});

/* ==========================================
   Escape Key
========================================== */

document.addEventListener("keydown", (event) => {

    if(

        event.key === "Escape"

        &&

        this.modal.overlay.classList.contains("active")

    ){

        this.closeModal();

    }

});

/* ==========================================
   Add To Cart Button
========================================== */

this.modal.addToCart.addEventListener("click", () => {

    this.addToCart();

});

/* ==========================================
   Product Grid Clicks
========================================== */

this.elements.grid.addEventListener("click", (event) => {

    const wishlistButton = event.target.closest(".wishlist-btn");

    if(wishlistButton){

        event.stopPropagation();

        this.toggleWishlist(wishlistButton.dataset.id);

        return;

    }

    const productButton = event.target.closest(".product-btn");

    if(productButton){

        this.openModal(productButton.dataset.id);

    }

});

/* ==========================================
   Cart
========================================== */

this.elements.actionPill.addEventListener("click", (event) => {

    if(this.state.cart.length === 0){

        return;

    }

    event.preventDefault();

    this.openCart();

});

this.elements.closeCart.addEventListener("click", () => {

    this.closeCart();

});

this.elements.cartOverlay
    .querySelector(".cart-backdrop")
    .addEventListener("click", () => {

        this.closeCart();

    });

/* ==========================================
   Cart Buttons
========================================== */

this.elements.cartItems.addEventListener("click", (event) => {

    const cartItemElement = event.target.closest(".cart-item");

    if(!cartItemElement) return;

    const item = this.state.cart.find(cartItem =>

        cartItem.id == cartItemElement.dataset.id &&

        (cartItem.size || "") === cartItemElement.dataset.size &&

        (cartItem.color || "") === cartItemElement.dataset.color

    );

    if(!item) return;

    if(event.target.closest(".qty-plus")){

        this.increaseCartQuantity(item);

        return;

    }

    if(event.target.closest(".qty-minus")){

        this.decreaseCartQuantity(item);

        return;

    }

    if(event.target.closest(".remove-cart-item")){

        this.removeCartItem(item);

    }

});

this.elements.continueShopping.addEventListener("click",()=>{

    this.closeCart();

    document

        .getElementById("products")

        ?.scrollIntoView({

            behavior:"smooth"

        });

});

},

/* ==========================================
   Initialize Shop
========================================== */

init(){

    console.log("Shop Initialized");

    this.loadWishlist();

    this.loadCart();

    this.bindEvents();

    this.refresh();

    this.refreshCart();

}

};

Shop.init();