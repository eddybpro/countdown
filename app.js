const days = document.getElementById('day')
const hours = document.getElementById('hour')
const mins = document.getElementById('min')
const secs = document.getElementById('sec')
const daysStr = document.querySelector('.day')
const hoursStr = document.querySelector('.hour')
const minsStr = document.querySelector('.min')
const secsStr = document.querySelector('.sec')
const congra = document.querySelector('.happy')


const targetYear = new Date().getFullYear();
let targetTime = new Date(`Jan 01, 2024 00:00:00`).getTime()


const interval = setInterval(newYear,1000)

function newYear(){
    const currentTime = new Date().getTime();
    let difTime = (targetTime - currentTime) /1000;
    
    let sec = Math.floor(difTime % 3600 % 60);
    let min = Math.floor(difTime % 3600 / 60);
    let hour = Math.floor(difTime / 3600 % 24);
    let day = Math.floor(difTime / (3600 * 24));

    days.innerText = day < 10? '0' + day : day;
    hours.innerText = hour < 10? '0' + hour : hour;
    mins.innerText = min < 10? '0' + min : min;
    secs.innerText = sec < 10? '0' + sec : sec;

    daysStr.innerText = day === 1 ? 'day' : 'days';
    hoursStr.innerText = hour === 1 ? 'hour' : 'hours';
    minsStr.innerText = min === 1 ? 'min' : 'mins';
    secsStr.innerText= sec === 1? 'sec' : 'secs';
    
    if(difTime <= 0){
        clearInterval(interval);
        days.innerText = '00';
        hours.innerText ='00';
        mins.innerText = '00';
        secs.innerText = '00';
        console.log(targetYear)
        congra.textContent='happy new year! ' + targetYear;
    }
    
}
