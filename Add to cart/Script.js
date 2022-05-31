

const cart = [];

let fetchRes = fetch("https://fakestoreapi.com/products");

// fetchRes is the promise to resolve
// it by using.then() method
fetchRes
  .then((res) => res.json())
  .then((d) => {
    console.log(d);
    let html = "";
    d.forEach((ele) => {
      html += `<div class="card" style="width: 18rem;">,
        <img class="card-img-top" src="${ele.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${ele.title}</h5>
          <p class="card-text">${ele.description}</p>
          <h3>Price: ${ele.price}<h3>
          <button id="app" data-info="${ele.title}" class="btn btn-primary">  Add2Cart</button>
        </div>
      </div>`;
    });

    const app = document.getElementById("app");
    app.innerHTML = html;
    document.getElementById("app").addEventListener("click", function (event) {
      event.target.style.color = "red";
      cart.push(event.target.dataset.info);
      document.getElementById("cart").innerText = cart.length;
    });
  });
