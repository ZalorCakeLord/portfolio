function time() {
  var currentdate = new Date();
  var datetime = (currentdate.getMonth()+1) + "/"
      + currentdate.getDate() + "/"
      + currentdate.getFullYear() + " @ "
      + currentdate.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ":"
      + currentdate.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ":"
      + currentdate.getSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  document.getElementById('datetime').innerHTML=datetime;}

setInterval(time, 1000);
