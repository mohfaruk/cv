var btn = document.getElementsByClassName("btn");

var quotes = [
    'Cooking with you is one of my tastiest escapisms 😋',
    'I miss snuggling with you to a good movie 😌',
    'Your confidence makes me weak in the knees 😍'
]

//Create a function that takes a random number and connects that with array strings 
//math.random could be used to perform this
function newQuote(){
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}

btn[0].addEventListener('click', newQuote);