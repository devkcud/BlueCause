import { discounts, prices } from './productsInfo.js';

const itemName = document
  .getElementById('item-name')
  .textContent.normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');

document.getElementById('image').src = `/img/products/${itemName.toLocaleLowerCase()}.png`;

const currentPrice = prices[itemName.toLocaleLowerCase()].toFixed(2);
const currentDiscount = discounts[itemName.toLocaleLowerCase()];

document.getElementById('subtotal').textContent = `R$${currentPrice}`;
document.getElementById('discount').textContent = `${currentDiscount}%`;
document.getElementById('total').textContent = `R$${(
  currentPrice -
  (currentDiscount / 100) * currentPrice
).toFixed(2)}`;
