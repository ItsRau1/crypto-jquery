jQuery.get("https://api.binance.com/api/v3/ticker/24hr", function(res){
    const cots = res.filter(function (cot){
        return cot.symbol.includes("USDT")
    })
    const filtered = [cots[0], cots[1], cots[5], cots[7]]
    
    var cardCoin = ''

    $.each(filtered, function (key, item){
        cardCoin = cardCoin + '<div class="card-coin">'
        cardCoin = cardCoin +   '<div class="header-coin">'
        cardCoin = cardCoin +       '<img src="./assets/icon-' + item.symbol +'.svg">'
        cardCoin = cardCoin +       '<div class="header-side down">'
        cardCoin = cardCoin +           '<img src="./assets/icon-arrow-dowm.svg" alt="">'
        cardCoin = cardCoin +           '<p>' + item.priceChangePercent + '</p>'
        cardCoin = cardCoin +       '</div>'
        cardCoin = cardCoin +   '</div>'
        cardCoin = cardCoin +   '<div class="footer-coin">'
        cardCoin = cardCoin +       '<p class="price-coin">' + '$ '+ new Intl.NumberFormat().format(Number(item.lastPrice)) + '</p>'
        cardCoin = cardCoin +       '<p class="name-coin">' + item.symbol.replace("USDT", "").replace("BTC", "Bitcoin").replace("LTC", "Litecoin").replace("ADA", "Cardano").replace("ETH", "Ethereum") + '</p>'
        cardCoin = cardCoin +   '</div>'
        cardCoin = cardCoin + '</div>'
        console.log(item)
    })

    $("#main-resume-coins").html(cardCoin)

    var itemLiveMarket = ''

    $.each(filtered, function (key, item){
        itemLiveMarket = itemLiveMarket + '<div class="item-live-market">'
        itemLiveMarket = itemLiveMarket +   '<div class="item-live-head">'
        itemLiveMarket = itemLiveMarket +       '<img src="./assets/icon-' + item.symbol +'.svg">'
        itemLiveMarket = itemLiveMarket +       '<div class="item-live-market-title-box">'
        itemLiveMarket = itemLiveMarket +           '<p class="item-live-market-name-coin">' + item.symbol.replace("USDT", "").replace("BTC", "Bitcoin").replace("LTC", "Litecoin").replace("ADA", "Cardano").replace("ETH", "Ethereum") + '</p>'
        itemLiveMarket = itemLiveMarket +           '<p>' + item.symbol.replace("USDT", "") + '/ USDT </p>'
        itemLiveMarket = itemLiveMarket +       '</div>'
        itemLiveMarket = itemLiveMarket +   '</div>'
        itemLiveMarket = itemLiveMarket +   '<div class="item-live-market-change-box">'
        itemLiveMarket = itemLiveMarket +       '<p class="item-live-market-subtitle">Change</p>'
        itemLiveMarket = itemLiveMarket +       '<p>' + item.priceChangePercent + '</p>'
        itemLiveMarket = itemLiveMarket +   '</div>'
        itemLiveMarket = itemLiveMarket +   '<div class="item-live-market-price-box">'        
        itemLiveMarket = itemLiveMarket +       '<p class="item-live-market-subtitle">Price</p>'
        itemLiveMarket = itemLiveMarket +       '<p>' + new Intl.NumberFormat().format(Number(item.lastPrice)) + ' USD</p>'
        itemLiveMarket = itemLiveMarket +   '</div>'
        itemLiveMarket = itemLiveMarket + '</div>'
    })

    $("#main-live-market").html(itemLiveMarket)
})

// .match(/^-?\d+(?:\.\d{0,2})?/)[0]