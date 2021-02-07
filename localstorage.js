<script>
function init() {
	localStorage.setItem("A", "A입니다."); 
	localStorage.setItem("B", "B입니다."); 
	localStorage.setItem("C", "C입니다."); 
	localStorage.setItem("D", "D입니다."); 
	localStorage.setItem("E", "E입니다."); 

	var val = localStorage.getItem("A") + " " +
	localStorage.getItem("B") + " " +
	localStorage.getItem("C") + " " +
	localStorage.getItem("D") + " " +
	localStorage.getItem("E");

	document.querySelector("#result").innerHTML = val;
}


function init() {

	localStorage.clear();

	var val = localStorage.getItem("A") + " " +
	localStorage.getItem("B") + " " +
	localStorage.getItem("C") + " " +
	localStorage.getItem("D") + " " +
	localStorage.getItem("E");

	document.querySelector("#result").innerHTML = val;
}
</script>
