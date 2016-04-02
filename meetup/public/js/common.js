function switchTab(ProTag, ProBox) {
	for (i = 1; i < 3; i++) {
		if ("tab" + i == ProTag) {
			document.getElementById(ProTag).getElementsByTagName("a")[0].className = "on";
		} else {
			document.getElementById("tab" + i).getElementsByTagName("a")[0].className = "";
		}
		if ("con" + i == ProBox) {
			document.getElementById(ProBox).style.display = "";
		} else {
			document.getElementById("con" + i).style.display = "none";
		}
	}
	if(document.getElementById("tab1").getElementsByTagName("a")[0].className.match("on")){		
		setTimeout(function(){document.getElementById("hr_flow").style="left:65px;width:64px;";},200);		
		setTimeout(function(){document.getElementById("hr_flow").style="left:60px;width:64px;";},240);
		setTimeout(function(){document.getElementById("hr_flow").style="left:55px;width:64px;";},270);
	}
	else{
		setTimeout(function(){document.getElementById("hr_flow").style="left:99px;width:64px;";},200);
		setTimeout(function(){document.getElementById("hr_flow").style="left:105px;width:64px;";},220);
		setTimeout(function(){document.getElementById("hr_flow").style="left:128px;width:96px;";},250);
		setTimeout(function(){document.getElementById("hr_flow").style="left:181px;width:96px;";},290);
		setTimeout(function(){document.getElementById("hr_flow").style="left:181px;width:96px;";},340);
	}
}
function focus_do(input_1,input_2){
	document.getElementById(input_1).className=(input_2);

}
function unfocus_do(input_1,input_2){
	
		document.getElementById(input_1).className=(input_2);
}
function keysdown(input_1){
	document.getElementById(input_1).style="display:none;";
}
function keysup(input_1){
	document.getElementById(input_1).style="display:block;";
}