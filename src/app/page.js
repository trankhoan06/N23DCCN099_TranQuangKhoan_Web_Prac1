async function getProducts() {
const res = await fetch('https://fakestoreapi.com/products');
return res.json();
}
export default async function HomePage() {
const products = await getProducts();
// ... render ...
}