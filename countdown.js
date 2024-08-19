var time = prompt("How long do you need😍😍");20
timeInSeconds = time * 60;
    
let count = setInterval(countdown, 1000);

function countdown() {

    var mins = Math.floor(timeInSeconds/60);
    var sec = timeInSeconds % 60;
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (mins < 10) {
        mins = "0" + mins 
    }
    if (mins == 0 && sec == 0) {
        clearInterval(count);
    }
    timeInSeconds--;
    document.querySelector("#time").innerHTML =mins +":" +sec;
}


countdown();