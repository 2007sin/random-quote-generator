const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBN = document.querySelector("button"),
soundBN = document.querySelector(".sound"),
copyBN = document.querySelector(".copy"),
twitterBN = document.querySelector(".twitter");


function randomQuote(){
    quoteBN.classList.add("loading")
    quoteBN.innerText = "Loading quote ...";
    fetch("http://api.quotable.io/random").then( res=> res.json()).then(result =>{
    console.log(result)
    quoteText.innerText = result.content;
    authorName.innerText = result.author;
    quoteBN.innerText = "New Quote";
    quoteBN.classList.remove("loading");
    });
}

soundBN.addEventListener("click",()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});
copyBN.addEventListener("click",()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});
twitterBN.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
    
});
quoteBN.addEventListener("click",randomQuote);