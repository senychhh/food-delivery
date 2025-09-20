const modalFunc = () =>{
const modal = document.querySelector('.cart-modal-overlay');
const cartBtn = document.querySelector('#cart-button');


const openModal = () =>{
    modal.classList.add('open');
}

const closeModal = () =>{
    modal.classList.remove('open');
}

cartBtn.addEventListener('click', () => {
    openModal();
})
 

modal.addEventListener('click',(event) => {
    if(
        event.target.classList.contains('cart-modal-overlay') || 
        event.target.closest('.cart-modal-header-close')
    ){
        closeModal();
    }
});
};

const restsFunc = () => {
  const container = document.querySelector('#rests-container');
  const restArray = [
  { 
    id: 0,
    title: 'Пицца плюс',
    time: 50,
    rating: 4.5, 
    price: 900,
    type: 'Пицца',
    image: 'пицца_плюс.jpg'
  },
  { 
    id: 1,
    title: 'Тануки',
    time: 50,
    rating: 4.5, 
    price: 900,
    type: 'Пицца',
    image: 'тануки.jpg'
  },
  { 
    id: 2,
    title: 'FoodBand',
    time: 50,
    rating: 4.5, 
    price: 900,
    type: 'Пицца',
    image: 'foodband.jpg'
  },
  { 
    id: 3,
    title: 'Суши весла',
    time: 50,
    rating: 4.5, 
    price: 900,
    type: 'Пицца',
    image: 'sushi_roll.jpg'
  },
  { 
    id: 4,
    title: 'Точка еды',
    time: 50,
    rating: 4.5, 
    price: 900,
    type: 'Пицца',
    image: 'точка_еды.jpg'
  },
  { 
    id: 5,
    title: 'PizzaBurger',
    time: 50,
    rating: 4.5, 
    price: 900,
    type: 'Пицца',
    image: 'pizza_burger.jpg'
  },
  ]
    
  const loading = () => {
    container.innerHTML = '<p style="width: 100%; text-align: center;">Loading</p>';  
  }

    const renderRests = (array) => {
        container.innerHTML = '';

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <a href="./goods.html?id=${card.id}" class="products-card">
                            <div class="products-card-image">
                                <img src="./img/restaurants/${card.image}" alt="${card.image}">
                            </div>
                            <div class="products-card-description">
                                <div class="products-card-description-row">
                                    <h4 class="products-card-description-title">${card.title}</h4>
                                    <div class="products-card-badge">${card.time} минут</div>
                                </div>
                                <div class="products-card-description-row-info">
                                    <div class="products-card-description-info">
                                        <div class="products-card-rating">
                                            <img src="./img/items/Vector.svg" alt="rating"
                                                class="products-card-rate-svg">
                                            ${card.rating}
                                        </div>
                                        <div class="products-card-price">${card.price} ₽</div>
                                        <div class="products-card-group">${card.type}</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                `)
            
        })
    }

if(container){
        loading();
    setTimeout(() => {
        renderRests(restArray)
    }, 1000)
}
    
}


const goodsFunc = () => {
    const container = document.querySelector('#goods-container');

    const restArray = [
  { 
    id: 0,
    title: 'Ролл угорь стандарт',
    description: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
    button: 4.5, 
    price: 250,
    image: 'угорь.jpg'
  },
  { 
    id: 1,
    title: 'Калифорния лосось',
    description: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
    button: 4.5, 
    price: 395,
    image: 'лосось.jpg'
  },
  { 
    id: 2,
    title: 'Окинава стандарт',
    description: ' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий.',
    button: 4.5, 
    price: 250,
    image: 'окинава.jpg'
  },
 { 
    id: 3,
    title: 'Цезарь маки XL',
    description: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь.',
    button: 4.5, 
    price: 250,
    image: 'цезарь_маки.jpg'
  },
 { 
    id: 4,
    title: 'Ясай маки стандарт',
    description: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг.',
    button: 4.5, 
    price: 250,
    image: 'ясай_маки.jpg'
  },
  { 
    id: 5,
    title: 'Ролл с креветкой стандарт',
    description: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы.',
    button: 4.5, 
    price: 250,
    image: 'роллскреветкой.jpg'
  },
  ]
    
  const loading = () => {
    container.innerHTML = '<p style="width: 100%; text-align: center;">Loading</p>';  
  }

    const renderRests = (array) => {
        container.innerHTML = '';

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <div class="products-card">
                            <div class="products-card-image">
                                <img src="./img/goods/${card.image}" alt="${card.image}">
                            </div>
                            <div class="products-card-description">
                                <div class="products-card-description-row">
                                    <h5 class="products-card-description-name">${card.title}</h5>
                                </div>
                                <div class="products-card-description-row">
                                    <p class="products-card-description-row-text">${card.description}</p>
                                </div>
                                <div class="products-card-description-row">
                                    <div class="products-card-description-controls">
                                        <button class="btn btn-primary">
                                            В корзину
                                            <img src="./img/items/shopping-cart.png" alt="cart">
                                        </button>
                                        <span class="products-card-description-controls-price">${card.price} ₽</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                `)
            
        })
    }

if(container){
        loading();
    setTimeout(() => {
        renderRests(restArray)
    }, 1000)
}
}

goodsFunc()
restsFunc();
modalFunc();