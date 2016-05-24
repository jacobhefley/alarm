var Alarm = require('./alarm.js').Alarm;
$(document).ready(function(){
    var myAlarm = new Alarm();
    $('#myAlarm').hide();
    $('#time').show();
    $(document).ready(function update(){

        $('#time').text(myAlarm.getTime());
        $('#date').text(myAlarm.getDate());
        setInterval(update, 1000);
        if(myAlarm.ring()===true){
          alert("GET UP!!!");
        }
        else;
    });
    $('#timebtn').click(function(){
      $('#myAlarm').hide();
      $('#time').show();
    });
    $('#alarmbtn').click(function(){
        $('#time').toggle();
        myAlarm.log();
        $('#myAlarm').toggle();
    });
    $('#setbtn').click(function(){
        $('#time').toggle();
        var temp  = $('#myAlarm').val();
        console.log(temp);
        myAlarm.setAlarm(parseAlarm(temp));
        console.log(myAlarm.alarm)
        $('#myAlarm').hide();
    });
});
function parseAlarm (input){
  var output = "";
  var militaryHour = parseInt(input.substring(0,2));
  if (militaryHour>12){
    militaryHour = militaryHour- 12;
    output = input.substring(2,input.length);
    output = militaryHour+input.substring(2,input.length)+":00 PM";
  }
  else if(militaryHour<13){
    output = input + ":00 AM";
  }
  else{
    output= "00:00:00 AM";
  }
  return output;
}
