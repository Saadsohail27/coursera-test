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
        "White"
    ]
},

        {
        id: 2,

        name: "Strawberry Bucket Hat",

        price: 1500,

        image: "images/products/strawberry-bucket-hat.jpeg",

        images: [
            "images/products/crocheted-bucket-hat.jpeg"
        ],

        category: "wearable",

        featured: true,

        badge: "New",

        description:
            "A cute little strawberry bucket hat to keep you warm",

        hasOptions: false
    },

    {
        id:3,

        name:"Bucket Hat",

        category:"wearable",

        badge:"New",

        price:1500,

        image:"images/products/bucket-hat.jpeg",

        images: [
            "images/products/bucket-hat-2.jpeg"
        ],

        description:
        "The perfect hat to keep your head and ears warm.",

        hasOptions: false

    },

    {
        id:4,

        name:"Spiderman Charm",

        category:"accessories",

        featured: true,

        badge:"New",

        price:1500,

        image:"images/products/spiderman-charm.jpeg",

        description:
        "Small charm, maximum Spidey energy.",

        hasOptions: false

    },

    {
        id:5,

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
        id:6,

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
        id:7,

        name:"Ocean Bag",

        category:"wearable",

        badge: null,

        price:3000,

        image:"images/products/ocean-bag.jpeg",

        description:
        "Carry a little piece from the ocean wherever you go",

        hasOptions: false

    },

    {
        id:8,

        name:"Phone Holder",

        category:"miscellaneous",

        badge: null,

        price:1500,

        image:"images/products/phone-holder.jpeg",

        description:
        "Minimal, practical and handmade ",

        hasOptions: false

    },

    {
        id:9,

        name:"Curtain Holders (Single)",

        category:"decor",

        featured: true,

        badge: null,

        price:2500,

        image:"images/products/curtain-holders.jpeg",

        images: [
            "images/products/curtain-holders-2.jpeg",
            "images/products/curtain-holders-3.jpeg"
        ],

        description:
        "Give your curtains the cozy touch they deserve ",

        hasOptions: false

    },

    {
        id:10,

        name:"Lilly of the Valley Charm",

        category:"flower",

        badge: null,

        price:500,

        image:"images/products/lilly-of-the-valley-charm.jpeg",

        images: [
            "images/products/lilly-of-the-valley-charm-2.jpeg",
            "images/products/lilly-of-the-valley-charm-3.jpeg"
        ],

        description:
        "Tiny blooms, handmade with love",

        hasOptions: false

    },

    {
        id:11,

        name:"Octopus Keychain",

        category:"keychain",

        badge: null,

        price:500,

        image:"images/products/octopus-keychain.jpeg",

        images: [
            "images/products/octopus-keychain-2.jpeg"
        ],

        description:
        "The cutest sea creature you'll ever carry",

        hasOptions: false

    },

    {
        id:12,

        name:"Strawberry Plushie",

        category:"plushie",

        badge: null,

        price:1500,

        image:"images/products/strawberry-plushie.jpeg",

        description:
        "Soft, squishy, and berry adorable",

        hasOptions: false

    },

    {
        id:13,

        name:"Heart Plushie",

        category:"plushie",

        featured: true,

        badge: null,

        price:1500,

        image:"images/products/heart-plushie.jpeg",

        description:
        "Soft, squishy, and full of love",

        hasOptions: false

    },

    {
        id:14,

        name:"Blue Purse",

        category:"wearable",

        badge: null,

        price:3000,

        image:"images/products/blue-purse.jpeg",

        description:
        "The perfect everyday purse, stitched with love",

        hasOptions: false

    },

    {
        id:15,

        name:"Bandana",

        category:"wearbles",

        badge: null,

        price:1500,

        image:"images/products/bandana.jpeg",

        images: [
            "images/products/bandana-2.jpeg"
        ],

        description:
        "Style it your way, wear the bandana, tie the belt, repeat",

        hasOptions: false

    },

    {
        id:16,

        name:"👓 Glasses Holder",

        category:"accessories",

        badge: null,

        price:1000,

        image:"images/products/glasses-holder.jpeg",

        description:
        "Keep your glasses safe in the cutest way possible",

        hasOptions: false

    },

    {
        id:17,

        name:"Mittens",

        category:"baby",

        badge: null,

        price:1000,

        image:"images/products/mittens.jpeg",

        images: [
            "images/products/mittens-2.jpeg"
        ],

        description:
        "Tiny mittens for tiny hands",

        hasOptions: false

    },

    {
        id:18,

        name:"Bouquet & Table Mat",

        category:"decor",

        badge: null,

        price:3000,

        image:"images/products/bouquet-and-table-mat.jpeg",

        images: [
            "images/products/bouquet-and-table-mat-2.jpeg",
            "images/products/bouquet-and-table-mat-3.jpeg"
        ],

        description:
        "A bouquet for the heart, a mat for the home",

        hasOptions: false

    },

    {
        id:19,

        name:"Book Bag",

        category:"wearable",

        badge: null,

        price:2500,

        image:"images/products/book-bag.jpeg",

        description:
        "A bag every book lover deserves",

        hasOptions: false

    },

    {
        id:20,

        name:"Baby Boots",

        category:"baby",

        badge: null,

        price:1500,

        image:"images/products/baby-boots.jpeg",

        description:
        "Handmade with love for the tiniest feet",

        hasOptions: false

    },

    {
        id:21,

        name:"Heart Trinket",

        category:"plushie",

        badge: null,

        price:500,

        image:"images/products/heart-trinket.jpeg",

        images: [
            "images/products/heart-trinket-2.jpeg",
            "images/products/heart-trinket-3.jpeg",
            "images/products/heart-trinket-4.jpeg"
        ],

        description:
        "Keep your tint treasures close",

        hasOptions: false

    },

    {
        id:22,

        name:"Flower Pouch",

        category:"accessories",

        badge: null,

        price:700,

        image:"images/products/flower-pouch.jpeg",

        images: [
            "images/products/flower-pouch-2.jpeg",
            "images/products/flower-pouch-3.jpeg"
        ],

        description:
        "Floral, functional, forever",

        hasOptions: false

    },

    {
        id:23,

        name:"Cherry Charm",

        category:"accessories",

        badge: null,

        price:500,

        image:"images/products/cherry-charm.jpeg",

        images: [
            "images/products/cherry-charm-2.jpeg",
            "images/products/cherry-charm-3.jpeg"
        ],

        description:
        "The sweetest accessory you'll own",

        hasOptions: false

    },

    {
        id:24,

        name:"Parandah",

        category:"decor",

        badge: null,

        price:1500,

        image:"images/products/parandah.jpeg",

        description:
        "Tradition never goes out of style",

        hasOptions: false

    },

    {
        id:25,

        name:"Carrot Plushie",

        category:"plushie",

        badge: null,

        price:700,

        image:"images/products/carrot-plushie.jpeg",

        description:
        "Straight from the crochet garden",

        hasOptions: false

    },

    {
        id:26,

        name:"Baby Romper",

        category:"baby",

        badge: null,

        price:5000,

        image:"images/products/baby-romper.jpeg",

        description:
        "Tiny outfit, endless cuteness",

        hasOptions: false

    },

    {
        id:27,

        name:"Coasters (Each)",

        category:"decor",

        badge: null,

        price:500,

        image:"images/products/coasters.jpeg",

        description:
        "Every cup deserves a cozy place to rest",

        hasOptions: false

    },

    {
        id:28,

        name:"Baby Beanie",

        category:"baby",

        badge: null,

        price:1000,

        image:"images/products/baby-beanie.jpeg",

        description:
        "Handmade for little ones",

        hasOptions: false

    },

    {
        id:29,

        name:"Baby Slippers",

        category:"baby",

        badge: null,

        price:1000,

        image:"images/products/baby-slippers.jpeg",

        description:
        "Tiny slippers for tiny feets",

        hasOptions: false

    },

    {
        id:30,

        name:"Bookmark",

        category:"accessories",

        badge: null,

        price:700,

        image:"images/products/bookmark.jpeg",

        description:
        "A little companion for every chapter",

        hasOptions: false

    },

    {
        id:31,

        name:"Baby Blanket",

        category:"baby",

        badge: null,

        price:15000,

        image:"images/products/baby-blanket.jpeg",

        description:
        "Gentle, cozy, and perfect for precious moments",

        hasOptions: false

    },

    {
        id:32,

        name:"Ghost Charm (Each)",

        category:"accessories",

        badge: null,

        price:500,

        image:"images/products/ghost-charm.jpeg",

        description:
        "Too cute to haunt",

        hasOptions: false

    },

    {
        id:33,

        name:"Lipgloss Holder",

        category:"accessories",

        badge: null,

        price:1000,

        image:"images/products/lipgloss-holder.jpeg",

        description:
        "Keep your favourite lipgloss within reach",

        hasOptions: false

    },

    {
        id:34,

        name:"Froggie",

        category:"toy",

        badge: null,

        price:1000,

        image:"images/products/froggie.jpeg",

        description:
        "Just a froggie looking for a new home",

        hasOptions: false

    },

    {
        id:35,

        name:"Ribbon Keychain",

        category:"keychain",

        badge: null,

        price:700,

        image:"images/products/ribbon-keychain.jpeg",

        description:
        "Small detail, big charm",

        hasOptions: false

    },


];