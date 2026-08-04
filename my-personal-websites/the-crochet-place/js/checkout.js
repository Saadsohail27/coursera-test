const Checkout = {

    cart: JSON.parse(

        localStorage.getItem("crochetCart")

    ) || [],

    products: PRODUCTS,

    /* ==========================================
       Cached Elements
    ========================================== */

    elements: {

        items: document.getElementById("checkoutItems"),

        subtotal: document.getElementById("checkoutSubtotal"),

        total: document.getElementById("checkoutTotal"),

        placeOrder: document.getElementById("placeOrder"),

        successScreen: document.getElementById("orderSuccess"),

        continueShopping: document.getElementById("continueShopping")

    },

    /* ==========================================
       Find Product
    ========================================== */

    findProduct(id){

        return this.products.find(

            product => product.id === id

        );

    },

    /* ==========================================
   Checkout Card
========================================== */

    createCheckoutItem(item){

        const product = this.findProduct(item.id);

        if(!product) return "";

        return `

            <article class="checkout-item">

                <img

                    src="${product.image}"

                    alt="${product.name}">

                <div class="checkout-item-info">

                    <h4>

                        ${product.name}

                    </h4>

                    ${item.size ? `<p>Size: ${item.size}</p>` : ""}

                    ${item.color ? `<p>Colour: ${item.color}</p>` : ""}

                    <p>

                        Qty × ${item.quantity}

                    </p>

                </div>

                <strong>

                    Rs. ${(product.price * item.quantity).toLocaleString()}

                </strong>

            </article>

        `;

    },

    /* ==========================================
   Render Checkout
========================================== */

        render(){

            this.elements.items.innerHTML =

                this.cart

                    .map(item =>

                        this.createCheckoutItem(item)

                    )

                    .join("");

            const subtotal = this.cart.reduce(

                (total, item) => {

                    const product =

                        this.findProduct(item.id);

                    return total +

                    product.price * item.quantity;

                },

                0

            );

            this.elements.subtotal.textContent =

                `Rs. ${subtotal.toLocaleString()}`;

            this.elements.total.textContent =

                `Rs. ${subtotal.toLocaleString()}`;

        },

        /* ==========================================
   Validate Form
========================================== */

validateForm(){

    let valid = true;

    const fields = [

        {

            input:

            document.getElementById("customerName"),

            group:

            document.getElementById("nameGroup")

        },

        {

            input:

            document.getElementById("customerPhone"),

            group:

            document.getElementById("phoneGroup")

        },

        {

            input:

            document.getElementById("customerAddress"),

            group:

            document.getElementById("addressGroup")

        }

    ];

    fields.forEach(field=>{

        field.group.classList.remove("error");

        if(!field.input.value.trim()){

            field.group.classList.add("error");

            valid = false;

        }

    });

    return valid;

},

/* ==========================================
   Create WhatsApp Message
========================================== */

createWhatsAppMessage(){

    const name =

        document.getElementById("customerName").value.trim();

    const phone =

        document.getElementById("customerPhone").value.trim();

    const email =

        document.getElementById("customerEmail").value.trim();

    const address =

        document.getElementById("customerAddress").value.trim();

    const notes =

        document.getElementById("customerNotes").value.trim();

    let subtotal = 0;

    let message =

`🧶 *New Order - The Crochet Place*

👤 *Customer*
Name: ${name}
Phone: ${phone}
Email: ${email || "-"}

📍 *Delivery Address*
${address}

🛍️ *Order*

`;

    this.cart.forEach(item=>{

        const product = this.findProduct(item.id);

        const lineTotal =

            product.price * item.quantity;

        subtotal += lineTotal;

        message +=

`• ${product.name}
Qty: ${item.quantity}
${item.size ? `Size: ${item.size}\n` : ""}${item.color ? `Colour: ${item.color}\n` : ""}Price: Rs. ${lineTotal.toLocaleString()}

`;

    });

    message +=

`💰 *Subtotal*
Rs. ${subtotal.toLocaleString()}

📝 *Notes*
${notes || "-"}`;

    return encodeURIComponent(message);

},

/* ==========================================
   Place Order
========================================== */

placeOrder(){

    if(!this.validateForm()) return;

    const button = this.elements.placeOrder;

    button.classList.add("loading");

    button.disabled = true;

    const message =

        this.createWhatsAppMessage();

    const phoneNumber =

        "923300764924";

    setTimeout(()=>{

        window.open(

            `https://wa.me/${phoneNumber}?text=${message}`,

            "_blank"

        );

        button.classList.remove("loading");

        button.disabled = false;

        this.completeOrder();

    },900);

},

/* ==========================================
   Complete Order
========================================== */

completeOrder(){

    localStorage.removeItem("crochetCart");

    this.cart = [];

    this.render();

    this.elements.successScreen.classList.add("show");

},

/* ==========================================
   Initialize
========================================== */

init(){

    this.render();

        [
        "customerName",

        "customerPhone",

        "customerAddress"

    ].forEach(id=>{

        const input = document.getElementById(id);

        input.addEventListener("input",()=>{

            input

                .closest(".form-group")

                .classList.remove("error");

        });

    });

    this.elements.placeOrder.addEventListener(

        "click",

        ()=>{

            this.placeOrder();

        }

    );

    this.elements.continueShopping.addEventListener("click",()=>{

    window.location.href = "shop.html#productSearch";

});

}

};



Checkout.init();