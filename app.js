
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const api_Url = 'https://api.quotable.io/random';

async function getquote(url){
    const response = await fetch(api_Url);
    var data = await response.json();
    // console.log('API QUOTE DATA--',data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author
}
getquote(api_Url);

function tweet(){
    window.open('https://twitter.com/intent/tweet?text=' + quote.innerHTML + "----by"+ author.innerHTML, "tweet window", "width= 600, height=300")
}