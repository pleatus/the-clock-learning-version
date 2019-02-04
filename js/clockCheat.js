function timeCheat() {
    var x = document.getElementById('testCheck');
    if (x.style.display === 'none') {
        x.style.display = 'block';
		document.getElementById("timeShow").innerHTML = "Hide your secrets!";
    } else {
        x.style.display = 'none';
		document.getElementById("timeShow").innerHTML = "Show me your secrets!";
    }
}