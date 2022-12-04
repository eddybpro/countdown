const days = document.getElementById('day')
const hours = document.getElementById('hour')
const mins = document.getElementById('min')
const secs = document.getElementById('sec')
const daysStr = document.querySelector('.day')
const hoursStr = document.querySelector('.hour')
const minsStr = document.querySelector('.min')
const secsStr = document.querySelector('.sec')


const targetYear = new Date().getFullYear() + 1;
const targetTime = new Date(`Jan 01, ${targetYear} 00:00:00`).getTime()


const interval = setInterval(()=>{
    const currentTime = new Date().getTime();
    let difTime = (targetTime - currentTime) /1000;
    
    let sec = Math.floor(difTime % 3600 % 60)  ;
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
    

},1000)








































