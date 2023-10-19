
var hourheading = document.getElementById('hour');
var minheading = document.getElementById('min');
var secheading = document.getElementById('sec');
var msecheading = document.getElementById('msec');
var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var interval;



function timer(){
    msec++;
    msecheading.innerHTML = msec;
    
    if (msec>=100){
        sec++;
        secheading.innerHTML = sec;
        msec = 0;
    }else if(sec>=60){
        min++;
        minheading.innerHTML = min;
        sec = 0;
    }else if(min>=60){
        hour++
        hourheading.innerHTML = hour;
        min = 0;
    }
}


function start(){
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('pauseBtn').style.display = 'inline-block';
    interval = setInterval(timer,10);
}

function pause(){
    document.getElementById('pauseBtn').style.display = 'none';
    document.getElementById('startBtn').style.display = 'inline-block';
    clearInterval(interval);
}

function reset(){
    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;       
    hourheading.innerHTML = 0;
    minheading.innerHTML = 0;
    secheading.innerHTML = 0;
    msecheading.innerHTML = 0;
    pause();
}

// analog clock
// =============================

let ahr = document.getElementById('ahour');
let amin = document.getElementById('amin');
let asec = document.getElementById('asec');

function displayTime(){
    let date = new Date();

    // Getting hour, mins, secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    ahr.style.transform = `rotate(${hRotation}deg)`;
    amin.style.transform = `rotate(${mRotation}deg)`;
    asec.style.transform = `rotate(${sRotation}deg)`;

}

setInterval(displayTime, 1000);