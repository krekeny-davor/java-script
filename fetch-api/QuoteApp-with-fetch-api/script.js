const quoteButton = document.querySelector(".js-get-quote-button");
const quote = document.querySelector(".js-fetched-quote");
const author = document.querySelector(".js-quote-author");


document.addEventListener("DOMContentLoaded", fetchQuote);  

quoteButton.addEventListener("click", fetchQuote);

function fetchQuote () {
    console.log("Quote button clicked")
    fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((data) => {
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
  });
}