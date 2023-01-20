let count = 0;

function increase() {
    count += 1;
    document.getElementById("count").innerHTML = count;
}

function reset() {
    count = 0;
    document.getElementById("count").innerHTML = count;
};