const months=[
 'January',
 'February',
 'March',
 'April',
 'May',
 'June',
 'July',
 'August',
 'September',
 'October',
 'November',
 'December'
]
const weekDays=[
 'Monday',
 'Tuesday',
 'Wednesday',
 'Thursday',
 'Friday',
 'Saturday',
 'Sunday'
]

const deadline=document.querySelector('.giveaway')
const expiry=document.querySelector('.deadline')
const timers=document.querySelectorAll('.days')

 //current year month date literally today
let tempDate=new Date() //the year,date time seconds
let tempYear=tempDate.getFullYear()
let tempMonth=tempDate.getMonth()
let tempDay=tempDate.getDate()
//when is our offer ending,12days 10hrs 49mns
//Arrays are zero indexed
//our offer ends from today+12days...
const futureDate=new Date(tempYear,tempMonth,tempDay + 12,10,30,0)
const year=futureDate.getFullYear()
const hours=futureDate.getHours()
const minutes=futureDate.getMinutes()

const date=futureDate.getDate()

let month=months[futureDate.getMonth()]
let weekday=weekDays[futureDate.getDay()]
deadline.textContent=`giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}:am`

//coundown getting remaining time

const futureTime=futureDate.getTime()
const getRemainingTime=()=>{
 const today = new Date().getTime();
 const time=futureTime-today 
 const oneDay=24*60*60*1000;
 const oneHour=60*60*1000;
 const oneMinute=60*1000;

 let days=time/oneDay 
 days=Math.floor(days)
 let hours=Math.floor((time%oneDay)/oneHour)
 let minutes=Math.floor((time%oneHour)/oneMinute)
 let seconds=Math.floor((time%oneMinute)/ 1000)

 //values
 const values=[days,hours,minutes,seconds]
 function format(timer){
  if(timer<10){
   return (timer=`0${timer}`)
  }
  return timer
 }
 timers.forEach((timer,index)=>{
  timer.innerHTML=format(values[index])
 })
 if (time < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}
let countdown = setInterval(getRemainingTime, 1000);
//set initial values
getRemainingTime();