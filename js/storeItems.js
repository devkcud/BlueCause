const productList = document.getElementById('items');

function createItem({ name, price, discountPercent, imageCover }) {
  const listItem = document.createElement('li');

  price = price !== undefined ? price : 10;
  price = price.toFixed(2);

  if (discountPercent > 100) {
    discountPercent = 100;
  }

  let discountPrice = price;
  if (discountPercent !== undefined) {
    discountPrice = (price - (discountPercent / 100) * price).toFixed(2) || 0;
  }

  listItem.innerHTML = `
    <img src="${imageCover}" alt="${name}" />
    <h2>${name}</h2>
    <p>
      ${
        price != discountPrice
          ? `<span class="min">de:</span> <span class="strike">R$${price}</span>
      <br />`
          : ''
      }
      <span class="min">por:</span> R$${discountPrice}
    </p>
    ${price != discountPrice ? `<span class="discount">${discountPercent}% Off</span>` : ''}

    <div class="btns">
      <a href="/store/product/${name
        .replaceAll(' ', '-')
        .toLowerCase()}" class="btn btn-dark">Mais</a>
      <a href="" class="btn btn-success">Comprar</a>
    </div>
  `;

  productList.appendChild(listItem);
}

// Como criar um item:
/*
  name            = nome do produto
  imageCover      = cover do card
  price           = preço
  discountPercent = porcentagem de desconto (opcional)

  Código:

  createItem({
    name: 'Nome do Item',
    imageCover: '/img/image.png',
    price: 2000,
    discountPercent: 100,
  });

  createItem({
    name: 'Nome do Item',
    imageCover: '/img/image.png',
    price: 2000,
  });
*/

createItem({
  name: 'Exemplo sem desconto',
  imageCover: '/img/bg.jpeg',
  price: 100,
});

createItem({
  name: 'Exemplo com desconto',
  imageCover: '/img/bg.jpeg',
  price: 100,
  discountPercent: 85,
});

// Para criar uma página para o produto é só criar um arquivo com o nome do produto em store/product
//      Exemplo com desconto
//      exemplo-com-desconto.html
