const products = document.querySelector(".products")
const click = document.querySelector(".click")
const add = document.querySelector(".see_more")
const LINK = "https://fakestoreapi.com"
let countL = 4
let offset = 1

async function getData(endpoint, count) {
    const response = await fetch(`${LINK}/${endpoint}?limit=${countL * count}`)
    response
        .json()
        .then(res => createProduct(res))
        .catch(err => console.log(err))
}
getData("products", offset)

function createProduct(data) {
    while (products.firstChild) {
        products.firstChild.remove()
    }
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

add.addEventListener("click", () => {
    offset++
    getData("products", offset)
})