const clock = document.getElementById("clock")

function format(date){
    return String(date).padStart(2,"0");
}

function getClock(){
    const date = new Date();
    const hours = format(date.getHours());
    const hinutes = format(date.getMinutes());
    const seconds = format(date.getSeconds());
    console.log(typeof seconds);
    
    clock.innerText = `${hours}:${hinutes}:${seconds}`;
}

getClock();
setInterval(getClock,1000);