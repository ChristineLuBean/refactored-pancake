let getStock = function () {
  fetch(
    "https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=a90901c0235bacb77346225fa7314ebc"
  )
    .then((res) => res.json())
    .then((data) => {
      let stockList = document.querySelector("#ticker01");
      let i = 0;

      data
        .forEach((stockItem) => {
          i++;

          let stock = document.createElement("li");
          stock.setAttribute("id", `stock${i}`);
          stock.innerText = data[i].symbol;

          stockList.appendChild(stock);
        })

        .catch((err) => console.log(`error ${err}`));
    });
};
getStock();
