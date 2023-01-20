let count = 0

function increase(){
    count++;
   ("increase").innerHTML = count;
};
function reset(){
    count = 0;
    document.getElementsByClassName("reset").innerHTML = count;
};
