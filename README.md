# stock-quote-cli
Fetch world wide stock data from CLI using yahoo finance apis.

## Install

```
npm i -g stock-quote-cli
```


## HOW-TO

For stocks listed on NYSE

```
StockQuote <STOCK_ID>
```

For stocks listed elsewhere

```
StockQuote <STOCK_ID> <EXCHANGE_EXTENSION>
```

## NOTE
Scrip ID should be same as yahoo scrip ids, please use yahoo finance as reference for Scrip IDs

All the apis are provided by yahoo finance, please use the following url as a reference for exchange extensions

```
https://help.yahoo.com/kb/SLN2310.html
```
