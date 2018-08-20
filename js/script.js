// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
    {
        quote: 'Be yourself; everyone else is already taken.',
        source: 'Oscar Wilde'
    },
    {
        quote: 'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.',
        source: 'Dr. Seuss'
    },
    {
        quote: 'No one can make you feel inferior without your consent.',
        source: 'Eleanor Roosevelt',
        citation: 'This is My Story'
    },
    {
        quote: 'Never go to bed mad. Stay up and fight.',
        source: 'Phyllis Diller'
    },
    {
        quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
        source: 'Mahatma Gandhi'
    }
]



// Create the getRandomQuuote function and name it getRandomQuote

function getRandomQuote(array) {
    var randomNum = Math.floor(Math.random() * 4);
    var randomQuote = quotes[randomNum];

    return randomQuote;
}

// Create the printQuote funtion and name it printQuote



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);