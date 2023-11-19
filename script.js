const api_url = "https://api.quotable.io/random";
const quote_tag = document.getElementById("quote");
const author = document.getElementById("author");
async function fetch_quote(url) {
  var res = await fetch(url);
  var data = await res.json();
  quote_tag.innerHTML = data.content;
  author.innerHTML = "-" + data.author;
}

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote_tag.innerHTML +
      "--" +
      author.innerHTML,
    "Tweet Window",
    "width=600px,height=600px"
  );
}
fetch_quote(api_url);
