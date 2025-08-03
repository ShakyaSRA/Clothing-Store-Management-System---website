const products = [
    {
        name: "Flowy Gown",
        price: 6000,
        oldPrice: 6500,
        discount: "-10%",
        image: "pics/pic1.jpg",
        type: "dress"
    },
    {
        name: "Minimalist Midi Dress",
        price: 3500,
        oldPrice: 4000,
        discount: "-15%",
        image: "pics/pic2.jpg",
        type: "dress",
        link: "product_detail.html?id=1",
        newArrival: true
    },
    {
        name: "White Dress with frills",
        price: 7500,
        oldPrice: 7000,
        discount: "-5%",
        image: "pics/pic3.jpg",
        type: "dress",
        newArrival: true
    },
    {
        name: "Blue blouse",
        price: 2500,
        oldPrice: 3000,
        discount: "-15%",
        image: "pics/pic4.jpg",
        type: "blouse"
    },
    {
        name: "Long-Sleeved blouse",
        price: 3500,
        oldPrice: 3700,
        discount: "-10%",
        image: "pics/pic5.jpg",
        type: "blouse",
        newArrival: true
    },
    {
        name: "Black jumpsuit",
        price: 6000,
        oldPrice: 6200,
        discount: "-20%",
        image: "pics/pic6.jpg",
        type: "jumpsuit"
    },
    {
        name: "Brown blouse",
        price: 4300,
        oldPrice: 4800,
        discount: "-10%",
        image: "pics/pic7.jpg",
        type: "blouse"
    },
    {
        name: "Floral blouse",
        price: 3200,
        oldPrice: 3900,
        discount: "-10%",
        image: "pics/pic8.jpg",
        type: "blouse"
    },
    {
        name: "Black long sleeved shirt",
        price: 3500,
        oldPrice: 4000,
        discount: "-10%",
        image: "pics/pic9.jpg",
        type: "shirt",
        newArrival: true
    },
    {
        name: "Skirt",
        price: 3400,
        oldPrice: 3900,
        discount: "-10%",
        image: "pics/pic14.jpg",
        type: "skirt"
    },
    {
        name: "Yellow blouse",
        price: 2200,
        oldPrice: 3800,
        discount: "-10%",
        image: "pics/pic12.jpg",
        type: "blouse"
    },
    {
        name: "Elegent blouse",
        price: 2900,
        oldPrice: 3000,
        discount: "-10%",
        image: "pics/pic13.jpg",
        type: "blouse"
    },
    {
        name: "Black suit",
        price: 3000,
        image: "pics/active1.jpg",
        type: "activeWear"
    },
    {
        name: "Brown jacket",
        price: 3500,
        originalPrice: 4000,
        discount: 15,
        image: "pics/active2.jpg",
        type: "activeWear",
        newArrival: true
    },
    {
        name: "Long-sleeved jacket",
        price: 3300,
        image: "pics/active3.jpg",
        type: "activeWear"
    },
    {
        name: "Sweater",
        price: 4300,
        image: "pics/active4.jpg",
        type: "activeWear"
    },
    {
        name: "Sweater",
        price: 2400,
        image: "pics/active5.jpeg",
        type: "activeWear",
        newArrival: true
    },
    {
        name: "Black shorts",
        price: 2500,
        image: "pics/active6.jpeg",
        type: "activeWear"
    },
    {
        name: "Hoodie",
        price: 3500,
        originalPrice: 4500,
        discount: 10,
        image: "pics/active7.jpeg",
        type: "activeWear"
    },
    {
        name: "Nike t-shirt",
        price: 3200,
        image: "pics/active8.jpeg",
        type: "activeWear",
        newArrival: true
    },
    {
        name: "Sweater",
        price: 7000,
        originalPrice: 7500,
        discount: 10,
        image: "pics/active9.jpeg",
        type: "activeWear"
    },
    {
        name: "Outfit",
        price: 7000,
        originalPrice: 7500,
        discount: 10,
        image: "pics/active10.jpeg",
        type: "activeWear",
        newArrival: true
    },
    {
        name: "Top",
        price: 7000,
        originalPrice: 7500,
        discount: 10,
        image: "pics/active11.jpeg",
        type: "activeWear"
    },
    {
        name: "Nike top",
        price: 7000,
        image: "pics/active12.jpeg",
        type: "activeWear",
        newArrival: true
    },
    {
        name: "Flowy Gown",
        image: "pics/pic1.jpg",
        price: 7000,
        originalPrice: 7500,
        discount: "10%"
    },
    {
        name: "Flowy Gown",
        image: "pics/pic2.jpg",
        price: 69000,
        newArrival: true
    },
    {
        name: "Long sleeved dress",
        image: "pics/pic3.jpg",
        price: 3500
    },
    {
        name: "A line dress",
        image: "pics/pic23.jpg",
        price: 5000,
        originalPrice: 5500,
        discount: "10%",
        type: "dress",
    },
    {
        name: "Elegent dress",
        image: "pics/pic15.jpg",
        price: 6600,
        type: "dress",
        newArrival: true
    },
    {
        name: "Evening gown",
        image: "pics/pic16.jpg",
        price: 3500,
        originalPrice: 4870,
        discount: "10%",
        type: "dress",
        newArrival: true
    },
    {
        name: "Red dress",
        image: "pics/pic17.jpg",
        price: 8700,
        type: "dress",
    },
    {
        name: "Elegent dress",
        image: "pics/pic18.jpg",
        price: 3000,
        originalPrice: 4400,
        discount: "10%",
        type: "dress",
        newArrival: true
    },
    {
        name: "Black dress",
        image: "pics/pic19.jpg",
        price: 4000,
        type: "dress"
    },
    {
        name: "Flowy Gown",
        image: "pics/pic20.jpg",
        price: 5400,
        type: "dress",
        newArrival: true
    },
    {
        name: "Flowy Gown",
        image: "pics/pic21.jpg",
        price: 2400,
        originalPrice: 3300,
        discount: "10%",
        type: "dress",
        newArrival: true
    },
    {
        name: "Flowy Gown",
        image: "pics/pic22.jpg",
        price: 5600,
        type: "dress"
    }
];

window.products = products;