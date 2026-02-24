const hourE1 =document.getElementById("hour")
const  minutesEl =document.getElementById("minutes")
const  secondsEl =document.getElementById("seconds")
const  ampmEl  =document.getElementById("ampm")
const DateEl =document.getElementById("Date")
const  monthEl =document.getElementById("month")
const  FullyearEl =document.getElementById('Fullyear')

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
     let f = new Date().getFullYear();
     let mcm = new Date().getMonth() + 1;
     let d  = new Date().getDate();
     let ampm = "AM"
    if(h > 12){
        h = h - 12
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s  < 10 ?  "0" + s : s
    f = f < 1000 ? "0" + f : f
    mcm = mcm < 10 ? "0" + mcm : mcm
    d = d < 10 ? "0" + d : d
    

    hourE1.innerText = h
    minutesEl.innerText = m
    secondsEl.innerText = s
    ampmEl.innerText = ampm
    FullyearEl.innerText = f
    monthEl.innerText = mcm
    DateEl.innerText = d

    setTimeout(() =>{
        updateClock()
    } , 1000);
}

updateClock()
        