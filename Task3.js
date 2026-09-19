const inventory = [
{ id: 1, name: "Wireless Mouse", category: "Electronics", price: 29.99, stock: 15 },
{ id: 2, name: "Mechanical Keyboard", category: "Electronics", price: 89.99, stock: 0 },
{ id: 3, name: "Yoga Mat", category: "Fitness", price: 45.00, stock: 22 },
{ id: 4, name: "Protein Shaker", category: "Fitness", price: 15.00, stock: 10 },
{ id: 5, name: "Desk Lamp", category: "Home Office", price: 34.99, stock: 8 },
{ id: 6, name: "Ergonomic Chair", category: "Home Office", price: 249.99, stock: 3 },
{ id: 7, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 0 }
];

const isAvailable = (product) => product.stock > 0;
const getPrice = (product) => product.price;
const applyDiscount = (product, discount) => ({...product, price: product.price - (product.price * (discount / 100))});
const getInStockItems = (inventory) => inventory.filter(isAvailable);
const getItemsByCategory = (inventory, category) => inventory.filter((product) => product.category == category);
const getOnSaleItems = (inventory, discount) => inventory.map((product) => applyDiscount(product, discount));
const getTotalInventoryValue = (inventory) => inventory.reduce((total, product) => total + (product.price * product.stock), 0);
const getCategoryTotalValue = (inventory, category) => getTotalInventoryValue(getItemsByCategory(inventory, category));
const getInventoryReport = (inventory) => ({
    totalItems: inventory.length,
    outOfStock: inventory.filter((product) => product.stock == 0).length,
    averagePrice: inventory.reduce((total, product) => total + product.price, 0) / inventory.length
});
