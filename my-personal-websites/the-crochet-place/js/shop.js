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

        actionPill: document.getElementById("actionPill")

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

    if(index > -1){

        this.state.wishlist.splice(index, 1);

    }else{

        this.state.wishlist.push(productId);

    }

    this.refresh();

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

    this.updateCartCount();

    this.updateActionPill();

},

/* ==========================================
   Open Product Modal
========================================== */

openModal(productId){

    const product = PRODUCTS.find(

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

            name: product.name,

            image: product.image,

            price: product.price,

            badge: product.badge,

            quantity: this.state.quantity,

            size: this.state.selectedSize,

            color: this.state.selectedColor

        });

    }

    console.table(this.state.cart);

    this.closeModal();

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
   Wishlist Buttons
========================================== */

this.elements.grid.addEventListener("click", (event) => {

    const button = event.target.closest(".wishlist-btn");

    if(!button) return;

    event.stopPropagation();

    this.toggleWishlist(button.dataset.id);

});

},

/* ==========================================
   Initialize Shop
========================================== */

init(){

    console.log("Shop Initialized");

    this.bindEvents();

    this.refresh();

}

};

Shop.init();