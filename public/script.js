let count = 0;

function increase() {
    setValue(count += 1);
};

function reset() {
    setValue(count = 0);
};

// helper functions

function save() {
    localStorage.setItem("count", count);
};

function updateView(){
    document.querySelector("#count").innerHTML = count;
};

let setValue = (value) =>{
    count = value;
    save();
    updateView(); 
};

// main function

let main = () =>{
    let counter = localStorage.getItem("count");
    if (counter == null){
        setValue(counter = 0);
    }else{
        setValue(counter = parseInt(counter));
    };
};

main();

function getSelectValue(){
    let selectedValue = document.querySelector("#selector").value;
    reset(); 
}
