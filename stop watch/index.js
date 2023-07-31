//---------Current Date in JavaScript
var today = new Date();
console.log('know time', today);
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
document.getElementsByClassName("displayDate")[0].innerHTML = `${date} hello`;


function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}
  
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
// add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementsByClassName('displayTime')[0].innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function() {
        startTime()
    }, 1000);
}
  startTime();







