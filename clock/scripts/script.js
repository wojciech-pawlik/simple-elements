function changeFormat(number) {
    var time = number;
    if(time < 10) time = '0' + time;
    return time;
}

function showTime() {
    var date = new Date();
    var hours = changeFormat(date.getHours());
    var minutes = changeFormat(date.getMinutes());
    var seconds = changeFormat(date.getSeconds());
    var clockFace = (hours + ':' + minutes + ':' + seconds);
    console.log(clockFace);
    var hexBackground = '#' + hours + minutes + seconds;
    var hexColor = "#" + (99 - hours) + (99 - minutes) + (99 - seconds);
  
    document.getElementById('clock').innerHTML = clockFace; 
    document.body.style.background = hexBackground;
    document.getElementById('clock').style.color = hexColor;
  
    setTimeout(function() { showTime(); }, 1000);
}

showTime();