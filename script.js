function time() {
  var currentdate = new Date();
  var datetime = currentdate.getDate() + "/"
      + (currentdate.getMonth()+1)  + "/"
      + currentdate.getFullYear() + " @ "
      + currentdate.getHours() + ":"
      + currentdate.getMinutes() + ":"
      + currentdate.getSeconds();
  document.getElementById('datetime').innerHTML=datetime;}

setInterval(time, 1000);
