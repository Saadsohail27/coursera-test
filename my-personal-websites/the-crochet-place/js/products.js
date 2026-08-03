/* ==========================================
   PRODUCT DATABASE
========================================== */

const PRODUCTS = [

    {
    id: 1,

    name: "Spiderman Tee",

    price: 5500,

    image: "images/products/spiderman-tee.jpeg",

    category: "wearable",

    badge: "Trending",

    description:
        "Ready to throw webs ?",

    hasOptions: true,

    sizes: [
        "Small",
        "Medium",
        "Large"
    ],

    colors: [
        "Red",
        "Black",
        "Brown"
    ]
},

        {
        id: 2,

        name: "Strawberry Bucket Hat",

        price: 1500,

        image: "images/products/strawberry-bucket-hat.jpeg",

        category: "wearable",

        featured: true,

        badge: "New",

        description:
            "A cute little strawberry bucket hat to keep you warm",

        hasOptions: false
    },

    {
        id:3,

        name:"Spiderman Charm",

        category:"accessories",

        featured: true,

        badge:"New",

        price:1500,

        image:"images/products/spiderman-charm.jpeg",

        description:
        "An adorable pocket-sized sunflower keychain.",

        hasOptions: false

    },

    {
        id:4,

        name:"Sunflower Keychain",

        category:"keychain",

        badge:"Popular",

        price:500,

        image:"images/products/sunflower-keychain.jpeg",

        description:
        "An adorable pocket-sized sunflower keychain.",

        hasOptions: false

    },

    {
        id:5,

        name:"Ruffle Bag",

        category:"wearable",

        badge:"Popular",

        price:4000,

        image:"images/products/ruffle-bag.jpeg",

        description:
        "The cutest ruffle bag to carry beside you !",

        hasOptions: false

    },

    {
        id:6,

        name:"Ocean Bag",

        category:"wearable",

        badge: null,

        price:3000,

        image:"images/products/ocean-bag.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:7,

        name:"Phone Holder",

        category:"miscellaneous",

        badge: null,

        price:1500,

        image:"images/products/phone-holder.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:8,

        name:"Curtain Holders (Single)",

        category:"decor",

        featured: true,

        badge: null,

        price:2500,

        image:"images/products/curtain-holders.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:9,

        name:"Lilly of the Valley Charm",

        category:"flower",

        badge: null,

        price:500,

        image:"images/products/lilly-of-the-valley-charm.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:10,

        name:"Octopus Keychain",

        category:"keychain",

        badge: null,

        price:500,

        image:"images/products/octopus-keychain.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:11,

        name:"Strawberry Plushie",

        category:"plushie",

        badge: null,

        price:1500,

        image:"images/products/strawberry-plushie.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:12,

        name:"Heart Plushie",

        category:"plushie",

        featured: true,

        badge: null,

        price:1500,

        image:"images/products/heart-plushie.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:13,

        name:"Blue Purse",

        category:"wearable",

        badge: null,

        price:3000,

        image:"images/products/blue-purse.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:14,

        name:"Bandana",

        category:"wearbles",

        badge: null,

        price:1500,

        image:"images/products/bandana.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:15,

        name:"👓 Glasses Holder",

        category:"accessories",

        badge: null,

        price:1000,

        image:"images/products/glasses-holder.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:16,

        name:"Mittens",

        category:"baby",

        badge: null,

        price:1000,

        image:"images/products/mittens.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:17,

        name:"Bouquet & Table Mat",

        category:"decor",

        badge: null,

        price:3000,

        image:"images/products/bouquet-and-table-mat.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:18,

        name:"Book Bag",

        category:"wearable",

        badge: null,

        price:2500,

        image:"images/products/book-bag.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:19,

        name:"Baby Boots",

        category:"baby",

        badge: null,

        price:1500,

        image:"images/products/baby-boots.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:20,

        name:"Heart Trinket",

        category:"plushie",

        badge: null,

        price:500,

        image:"images/products/heart-trinket.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:21,

        name:"Flower Pouch",

        category:"accessories",

        badge: null,

        price:700,

        image:"images/products/flower-pouch.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:22,

        name:"Cherry Charm",

        category:"accessories",

        badge: null,

        price:500,

        image:"images/products/cherry-charm.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:23,

        name:"Parandah",

        category:"decor",

        badge: null,

        price:1500,

        image:"images/products/parandah.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:24,

        name:"Carrot Plushie",

        category:"plushie",

        badge: null,

        price:700,

        image:"images/products/carrot-plushie.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:25,

        name:"Baby Romper",

        category:"baby",

        badge: null,

        price:5000,

        image:"images/products/baby-romper.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:26,

        name:"Coasters (Each)",

        category:"decor",

        badge: null,

        price:500,

        image:"images/products/coasters.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:27,

        name:"Baby Beanie",

        category:"baby",

        badge: null,

        price:1000,

        image:"images/products/baby-beanie.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:28,

        name:"Baby Slippers",

        category:"baby",

        badge: null,

        price:1000,

        image:"images/products/baby-slippers.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:29,

        name:"Bookmark",

        category:"accessories",

        badge: null,

        price:700,

        image:"images/products/bookmark.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:30,

        name:"Baby Blanket",

        category:"baby",

        badge: null,

        price:15000,

        image:"images/products/baby-blanket.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:31,

        name:"Ghost Charm (Each)",

        category:"accessories",

        badge: null,

        price:500,

        image:"images/products/ghost-charm.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:32,

        name:"Lipgloss Holder",

        category:"accessories",

        badge: null,

        price:1000,

        image:"images/products/lipgloss-holder.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:33,

        name:"Froggie",

        category:"toy",

        badge: null,

        price:1000,

        image:"images/products/froggie.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },

    {
        id:34,

        name:"Ribbon Keychain",

        category:"keychain",

        badge: null,

        price:700,

        image:"images/products/ribbon-keychain.jpeg",

        description:
        "Idk the description for this",

        hasOptions: false

    },


];