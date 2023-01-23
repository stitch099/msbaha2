var count = 0;

function increase() {
    setValue(count += 1);
}

function reset() {
    setValue(count = 0);
};

function save() {
    localStorage.setItem("count", count);
};

function updateView(){
    document.querySelector("#count").innerHTML = count;
}
// function load() {
//     localStorage.getItem("count", count);
    
// };

// function clear() {
//     localStorage.clear();
// };

let setValue = (value) =>{
    count = value;
    save();
    document.getElementById("count").innerHTML = count; 
};

let main = () =>{
    let counter = localStorage.getItem("count");
    if (counter == null){
        setValue(counter = 0);
    }else{
        setValue(counter = parseInt(counter));
    };
};

main();