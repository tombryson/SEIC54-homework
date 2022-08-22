const express = require('express');
const axios = require('axios');
const _ = require('underscore');
const ejs = require('ejs');
const quote = require('stock-quote');

const server = express();
server.set('view-engine', ejs);
const PORT = 1337;


server.get('/', (req, res) => {
    res.render('home.ejs')
})

server.get('/stocks', (req, res) => {
    res.render('stocks.ejs');
});

server.get('/stockResult', (req, res) => {
    quote.getQuote(req.query.symbol).then((data) => {
        console.log(JSON.stringify(data, null, 4))
        res.render('/stockResult', );
})
});;

// );
// }


// server.get('/answer', (req, res) => {
//     console.log(req.query.question); // req.query has form data
//     res.render('answer.ejs', {question: req.query.question, answer: 'No comment'});
// });

server.listen(PORT, () => console.log(`now serving up on http://localhost:${PORT}`));


