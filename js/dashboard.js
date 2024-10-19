const products = document.querySelector(".products")
const click = document.querySelector(".click")
const LINK = "https://fakestoreapi.com"

async function getData(endpoint) {
    const response = await fetch(`${LINK}/${endpoint}`)
    response
        .json()
        .then(res => createProduct(res))
        .catch(err => console.log(err))
}

getData("products")

function createProduct(data) {
    console.log(data[0]);
    data.forEach(prod => {
        const card = document.createElement("div")
        card.className = "pro_card"
        card.innerHTML = `
        <strong>${prod.price} $</strong>
        <img src=${prod.image} alt="img">
        <div class="id_content">
          <p>${prod.id}</p>
          <h4>${prod.category}</h4>
        </div>
        <div class="rating_cont">
          <p><span class="tare_item">Rating:</span> ${prod.rating.rate}</p>
          <p><span class="tare_item">Count: </span>${prod.rating.count}</p>
        </div>
        <h3>${prod.title}</h3>
        `
        products.appendChild(card)
    });
}
