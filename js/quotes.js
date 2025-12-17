// 명언

const quotes = [
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "Do not be afraid to give up the good to go for the great",
        author: "John D. Rockefeller"
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    },
    {
        quote: "Despite the forecast, live like it’s spring.",
        author: "Lilly Pulitzer"
    },
    {
        quote: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson"
    },
    {
        quote: "Don’t be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
    },
    {
        quote: "All progress takes place outside the comfort zone.",
        author: "Michael John Bobak"
    },
    {
        quote: "I never dreamed about success, I worked for it.",
        author: "Estee Lauder"
    },
    {
        quote: "Do not try to be original, just try to be good.",
        author: "Paul Rand"
    }
];

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")
// console.log(quote.textContent = quotes[0].quote);
// console.log(author.textContent = quotes[0].author);
// console.log(Math.floor((Math.random()*10)+1));

const random = Math.floor((Math.random()*quotes.length));
quote.textContent = quotes[random].quote
author.textContent = quotes[random].author