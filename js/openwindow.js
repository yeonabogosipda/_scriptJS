<!DOCTYPE html>
<html>
<body>

<button onclick="openWin()">Open "myWindow"</button>
<button onclick="closeWin()">Close "myWindow"</button>

<script>
var myWindow;

function openWin() {
  myWindow = window.open("", "myWindow", "width=500,height=500");
  myWindow.document.write("<p>This is 'myWindow'</p>");
}

function closeWin() {
  myWindow.close();
}
</script>

</body>
</html>
