var turtlecross = [];

function submitTurtle() {

    var turtle1 = document.getElementById("typeababyturtle1").value;
    var turtle2 = document.getElementById("typeababyturtle2").value;
    var turtle3 = document.getElementById("typeababyturtle3").value;
    var turtle4 = document.getElementById("typeababyturtle4").value;

    turtlecross.push(turtle1);
    turtlecross.push(turtle2);
    turtlecross.push(turtle3);
    turtlecross.push(turtle4);
    console.log(turtlecross);

    document.getElementById("emptyturtle").innerHTML = turtlecross;
    document.getElementById("submitbabyturtle").style.display = "none";
    document.getElementById("sortlostturtle").style.display = "inline-block";
}

function sortTurtle() {
    turtlecross.sort();
    console.log(turtlecross);
    document.getElementById("emptyturtle").innerHTML = turtlecross;
}