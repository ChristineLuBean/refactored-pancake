let getStock = function(){
  fetch('https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=a90901c0235bacb77346225fa7314ebc')
  .then(res => res.json())
  .then(data => {
      console.log(data)

  })

  data.forEach(stockItem => {
    let stockList = document.querySelector('.#ticker01')

    let stock = document.createElement('li');
    stock.innerText = data.symbol;

    stockList.appendChild(stock);

})

  .catch(err =>
      console.log(`error ${err}`)
  )
}

getStock()





