const detail = document.querySelector(".detail")
const LINK = "https://fakestoreapi.com"

async function getData() {
  let query = new URLSearchParams(window.location.search)
  let id = query.get("q")
  const response = await fetch(`${LINK}/product/${id}`)
  response
    .json()
    .then(res => createDetail(res))
    .catch(err => console.log(err))
}

getData()

function createDetail(data) {
  console.log("ok");

  console.log(data);

}


// divEl.innerHTML = `
//     <div>
//           <img src=${prod.image[0]} alt="">
//     </div>
//     <div>
//           <p>${prod.title}</p>
//           <p>${prod.description}</p>
//           <p>${prod.price}</p>
//     </div>
//   `
// detail.appendChild(divEl)