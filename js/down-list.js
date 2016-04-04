function hf() {
	downname = document.getElementById("down-list").className;
	if(downname == "down-list") {
		document.getElementById("down-list").className = "down-list-open";
	}
	else{
		document.getElementById("down-list").className = "down-list";
	}
}
