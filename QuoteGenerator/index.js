const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const tweetBtn = document.getElementById("tweetBtn");

const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  quote.innerText = data?.content;
  author.innerText = data?.author;
  console.log(data);
}

newQuoteBtn.addEventListener("click", () => {
  getQuote(api_url);
});

tweetBtn.addEventListener("click", () => {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerText +
      " ----by" +
      author.innerText,
    "width=600, heigth=300"
  );
});
