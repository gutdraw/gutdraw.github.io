var panels = new Array("","panel1","panel2","panel3","panel4","panel5","panel6","panel7");
function panel(tab) {
    for (i=1; i<panels.length; i++) {
        if (i == tab) {
            document.getElementById("tab"+i).className = "tabs tabs1";
            document.getElementById("panel"+i).style.display = "inline-block"; 
        } else {
            document.getElementById("tab"+i).className = "tabs tabs0";
            document.getElementById("panel"+i).style.display = "none";
        }
    }
}