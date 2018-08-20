// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

// Quotes in an Array, quotes are stored using objects.
var quotes = [
    {
        quote: 'Be yourself everyone else is already taken.',
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
// Function returns a random quote from the quotes array
// By generating a random number from zero to the quotes array length and storing in random number variable.
function getRandomQuote() {
    var randomNum = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomNum];

    return randomQuote;
}

// Create the printQuote funtion and name it printQuote
// printQuote function
// Stores getRandomQuote function in a variable
// Create empty string
// HTML String using empty string
// Get quote and source from variable that is used to call getRandomQuote function
// Use conditional statement to check weather citation and year is included in quote objects
function printQuote() {
    var randomQuote = getRandomQuote();

    var empty = '';

    empty += '<p class="quote">' + randomQuote.quote + '</p>';
    empty += '<p class="source">' +  randomQuote.source;
    if (randomQuote.citation === undefined) {
        empty += '</p>';
    } else {
        empty += '<span class="citation">' + randomQuote.citation + '</span>';
        if (randomQuote.year === undefined) {
            empty += '</p>';
        } else {
            empty += '<span class="year">' + randomQuote.year + '</span>';
            empty += '</p>';
        }
    }
    document.getElementById('quote-box').innerHTML = empty;
}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);