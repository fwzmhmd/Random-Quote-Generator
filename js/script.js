// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

// Quotes in an Array, quotes are stored using objects.
var quotes = [
    {
        quote: 'Be yourself everyone else is already taken.',
        source: 'Oscar Wilde',
        tags: ['be yourself', 'honesty', 'inspirational']
    },
    {
        quote: 'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.',
        source: 'Dr. Seuss',
        tags: ['dreams', 'love', 'reality', 'sleep']
    },
    {
        quote: 'No one can make you feel inferior without your consent.',
        source: 'Eleanor Roosevelt',
        citation: 'This is My Story',
        tags: ['confidence', 'inspirational', 'wisdom']
    },
    {
        quote: 'Never go to bed mad. Stay up and fight.',
        source: 'Phyllis Diller',
        tags: ['anger', 'funny', 'sleep']
    },
    {
        quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
        source: 'Mahatma Gandhi',
        tags: ['education', 'inspirational', 'learning']
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

    if (randomQuote.citation !== undefined) {
        empty += '<span class="citation">' + randomQuote.citation + '</span>';
    }

    if (randomQuote.year !== undefined) {
        empty += '<span class="year">' + randomQuote.year + '</span>';
    }
    
    if (randomQuote.tags !== undefined) {
        empty += ' <span class="tags">' + randomQuote.tags.join(', ') + '</span>'
    } 
    
    empty += '</p>';

    document.getElementById('quote-box').innerHTML = empty;

    document.body.style.backgroundColor = randomBg();
}

// Create a random number from zero to num parameter
function randomNum(num) {
    return Math.floor(Math.random() * num) + 1;
}

// Create and return a random rgb value
function randomBg() {
    var rgb = 'rgb(' + randomNum(256) + ',' + randomNum(256) + ',' + randomNum(256) + ')';

    return rgb;
}

// Auto refresh the quote after 10 seconds
setInterval(printQuote, 10000);

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);