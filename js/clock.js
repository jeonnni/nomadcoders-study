const clock = document.getElementById("clock")

function format(date){
    return String(date).padStart(2,"0");
}

function getClock(){
    const date = new Date();
    const hours = format(date.getHours());
    const hinutes = format(date.getMinutes());
    const seconds = format(date.getSeconds());
    clock.innerText = `${hours}:${hinutes}:${seconds}`;
}

getClock();
setInterval(getClock,1000);

// 정한 시간마다 함수를 실행하게 한다. ms단위로 설정할 수 있다 이게 매ms 초 마다 실행하기 때문에 실시간으로 바뀌게끔 보인다 