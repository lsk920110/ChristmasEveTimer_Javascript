const clockTitle = document.querySelector(".js-clock");

var a = 1;
setInterval(function () {
  var today = new Date();
  var nowYear = today.getFullYear();
  var theDate = new Date(nowYear, 12, 25);
  var date = new Date();
  var nowTime = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  );
  var diffDate = theDate.getTime() - nowTime.getTime();
  //일수
  var day = Math.ceil(diffDate / (60 * 1000 * 60 * 24));
  //시간
  var hours = Math.ceil((diffDate % (60 * 1000 * 60 * 24)) / (60 * 1000 * 60));
  //분
  var minutes = Math.ceil((diffDate % (60 * 1000 * 60)) / (60 * 1000));
  //초
  var seconds = Math.ceil((diffDate % (60 * 1000)) / 1000);
  //console.log(day, hours, minutes, seconds);
  clockTitle.innerHTML =
    day + "d " + hours + "h " + minutes + "m " + seconds + "s";
}, 1000);
