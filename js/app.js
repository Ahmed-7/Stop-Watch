var msec = 0, sec  = 0, min  = 0;
var msecHeading = document.getElementById('msec');
var secHeading = document.getElementById('sec');
var minHeading = document.getElementById('min');
var startButton = document.getElementById('startButton');
var lap = document.getElementById('record');
var laps = document.getElementById('records');
var interval;

function timer(){
  msec++
   msecHeading.innerHTML =  msec  + " : " ;
   if(msec >= 100)
   {
     sec++;
     secHeading.innerHTML = sec  + " : ";
     msec = 0;
   }
   else if(sec >= 60)
   {
     min++;
     minHeading.innerHTML =": " +  min;
     sec = 0;
   }
}


function start(){
  interval = setInterval(timer,10);
  startButton.disabled = true;
}

function pause(){
  clearInterval(interval);
  startButton.disabled = false;
}

function reset(){
  msecHeading.innerHTML =  "00" + " : ";
  secHeading.innerHTML = "00" + " : ";
  minHeading.innerHTML = "00" ;


  count = 0;
  laps.innerHTML=" ";
  clearInterval(interval);
  startButton.disabled = false;
}

var count = 0;
 function record(){
   count += 1;
   laps.innerHTML +=  "<li>" +"LAP " + count + "  " +"&nbsp &nbsp" +  min + " : " + sec + " : "
    + msec + "<br/>" +   "<br/>" +"</li>" ;
}
