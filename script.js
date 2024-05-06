const api_url="https://api.quotable.io/random"

const qoute=document.getElementById("qoute");
const author=document.getElementById("author");

async function getqoute(url){
    const response=await fetch(url);
    var data=await response.json();
    console.log(data);
    qoute.innerHTML=data.content;
    author.innerHTML=data.author;

}

getqoute(api_url);

function facebook(){
    window.open("https://www.facebook.com/dialog/feed? text=" +qoute.innerHTML,"Post story","width=600,height=300");
}