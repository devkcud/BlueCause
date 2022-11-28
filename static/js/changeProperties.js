const prices = {
  adesivo: 5,
  camisa: 59.99,
  garrafa: 25.99,
  almofada: 24.69,
  mascara: 5,
  sacola: 15.99,
};

const discounts = {
  adesivo: 0,
  camisa: 20,
  garrafa: 0,
  almofada: 20,
  mascara: 0,
  sacola: 0,
};

const itemName = document
  .getElementById('item-name')
  .textContent.normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');

document.getElementById('image').src = `../img/products/${itemName.toLocaleLowerCase()}.png`;

const currentPrice = prices[itemName.toLocaleLowerCase()].toFixed(2);
const currentDiscount = discounts[itemName.toLocaleLowerCase()];

document.getElementById('subtotal').textContent = `R$${currentPrice}`;
document.getElementById('discount').textContent = `${currentDiscount}%`;
document.getElementById('total').textContent = `R$${(
  currentPrice -
  (currentDiscount / 100) * currentPrice
).toFixed(2)}`;
