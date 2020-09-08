var objToday = new Date();
weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');

var presentDay = weekday[objToday.getDay()];
var presentMonth = months[objToday.getMonth()];
document.getElementById('day').innerHTML = presentDay + ",";
document.getElementById('month').innerText = presentMonth +" "+ objToday.getDate();