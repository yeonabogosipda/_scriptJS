<!DOCTYPE html>
<html>
<style>
#myProgress {
  width: 100%;
  height: 30px;
  position: relative;
  background-color: #ddd;
}

#myBar {
  background-color: #4CAF50;
  width: 10px;
  height: 30px;
  position: absolute;
}
</style>
<body>

<h1>JavaScript Progress Bar</h1>

<div id="myProgress">
  <div id="myBar"></div>
</div>

<br>
<button onclick="move()">Click Me</button> 

<script>
function move() {
  var elem = document.getElementById("myBar");   
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width == 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
</script>

</body>
</html>

<!DOCTYPE html>
<html>
<body>

<p>In this example, the setInterval() method executes the setColor() function once every 300 milliseconds, which will toggle between two background colors.</p>

<button onclick="stopColor()">Stop Toggling</button>

<script>
var myVar = setInterval(setColor, 300);
 
function setColor() {
  var x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
}
 
function stopColor() {
  clearInterval(myVar);
}
</script>

</body>
</html>
