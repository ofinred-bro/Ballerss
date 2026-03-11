// Sample product data
const products = [
    { id: 1, name: "Gold Ingot A", price: 100, category: "Gold" },
    { id: 2, name: "Gold Ingot B", price: 150, category: "Gold" },
    { id: 3, name: "Silver Ingot", price: 70, category: "Silver" },
    // Add more products as needed
];

// Shopping cart
let cart = [];

// Function to add product to cart
function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (product) {
        cart.push(product);
        console.log(`${product.name} added to cart.`);
    }
}

// Function to remove product from cart
function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId);
    console.log(`Product with ID ${productId} removed from cart.`);
}

// Function to filter products by category
function filterProducts(category) {
    return products.filter((product) => product.category === category);
}

// Function to calculate total price
function checkout() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    console.log(`Total amount due: $${total}`);
    // Implement payment processing here (e.g., call to payment API)
}

// Sample usage
addToCart(1);
addToCart(2);
console.log("Filtered Products:", filterProducts("Gold"));
checkout();