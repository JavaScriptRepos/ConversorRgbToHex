window.onload = function() {
    var color = changeHex();
    document.getElementById("label-hex").innerHTML = color;
}

function changeHex() {
    var r = parseInt(document.getElementById("red").value);
    var g = parseInt(document.getElementById("green").value);
    var b = parseInt(document.getElementById("blue").value);
    document.getElementById("label-red").innerHTML = r;
    document.getElementById("label-green").innerHTML = g;
    document.getElementById("label-blue").innerHTML = b;
    hexColor = "#" + converter(r) + converter(g) + converter(b);
    document.getElementById("label-hex").innerHTML = hexColor;
    document.getElementById("square").style.background = hexColor;
    return hexColor;
};

function converter(value) {
    var hexValue = value.toString(16)
    if (value < 16) {
        hexValue = 0 + hexValue;
    }
    return hexValue;
}