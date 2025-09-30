function giveAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then(res=>res.json())
    .then(data=>{
        document.getElementById("text").textContent=data.slip.advice
    })
}