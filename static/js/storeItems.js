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

const productList = document.getElementById('items');

function createItem(name) {
  let unormalizedName = name;
  name = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const listItem = document.createElement('li');

  let price = prices[name.toLowerCase()].toFixed(2);
  let discountPercent = discounts[name.toLowerCase()];

  let discountPrice = (price - (discountPercent / 100) * price).toFixed(2);

  listItem.innerHTML = `
    <img src="../img/products/${name.toLowerCase()}.png" alt="${name}" style="max-height: 250px" />
    <h2>${unormalizedName}</h2>
    <p>
      ${
        price != discountPrice
          ? `<span class="min">de:</span> <span class="strike">R$${price}</span><br />`
          : ''
      }
      <span class="min">por:</span> R$${discountPrice}
    </p>
    ${price != discountPrice ? `<span class="discount">${discountPercent}% Off</span>` : ''}

    <div class="btns">
      <a href="../store/mais/${name}" class="btn btn-dark">Mais</a>
      <a href="../static/store/${name
        .replaceAll(' ', '-')
        .toLowerCase()}.html" class="btn btn-success">Comprar</a>
    </div>
  `;

  productList.appendChild(listItem);
}

['Adesivo', 'Camisa', 'Garrafa', 'Almofada', 'Máscara', 'Sacola'].forEach((f) => createItem(f));
