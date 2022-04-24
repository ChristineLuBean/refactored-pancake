// const getStock = function () {
  fetch(
    "https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=a90901c0235bacb77346225fa7314ebc")
    .then((res) => res.json())
    .then((data) => {
 
      //array of stocks
      const stocks = [];
      let tickerText = '';

    for(let i = 0; i < data.length; i++){
      tickerText += '<strong>' + data[i].symbol + '</strong>' + ' ' + data[i].price + ' ' + data[i].change + ' ' + data[i].changesPercentage + ' '
    }

    document.querySelector("#scroll").innerHTML = tickerText;

    
  });

// }  
// getStock();


