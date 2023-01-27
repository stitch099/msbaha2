// counter number one

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

// counter number two


let count2 = 0;

function increaseTwo(){
    setValueTwo(count2 += 1);
};

function resetTwo(){
    setValueTwo(count2 = 0);
};

// helper functions for card 2

function saveTwo(){
    localStorage.setItem("count2" , count2);
};

function updateViewTwo(){
    document.querySelector("#countTwo").innerHTML = count2;
};

let setValueTwo = (valueTwo) =>{
    count2 = valueTwo;
    saveTwo();
    updateViewTwo();
};

// main function for card Two

let mainTwo = () =>{
    let counter2 = localStorage.getItem("count2");
    if(counter2 == null){
        setValueTwo(counter2 = 0);
    }else {
        setValueTwo(counter2 = parseInt(counter2));
    };
};

mainTwo();


// counter number three

let count3 = 0;

function increaseThree(){
    setValueThree(count3 += 1);
};

function resetThree(){
    setValueThree(count3 = 0);
};

// helper functions for card 3

function saveThree(){
    localStorage.setItem("count3" , count3);
};

function updateViewThree(){
    document.querySelector("#countThree").innerHTML = count3;
};

let setValueThree = (valueThree) =>{
    count3 = valueThree;
    saveThree();
    updateViewThree();
};

// main function for card Three

let mainThree = () =>{
    let counter3 = localStorage.getItem("count3");
    if(counter3 == null){
        setValueThree(counter3 = 0);
    }else {
        setValueThree(counter3 = parseInt(counter3));
    };
};

mainThree();


// counter number four


let count4 = 0;

function increaseFour(){
    setValueFour(count4 += 1);
};

function resetFour(){
    setValueFour(count4 = 0);
};

// helper functions for card 4

function saveFour(){
    localStorage.setItem("count4" , count4);
};

function updateViewFour(){
    document.querySelector("#countFour").innerHTML = count4;
};

let setValueFour = (valueFour) =>{
    count4 = valueFour;
    saveFour();
    updateViewFour();
};

// main function for card Four

let mainFour = () =>{
    let counter4 = localStorage.getItem("count4");
    if(counter4 == null){
        setValueFour(counter4 = 0);
    }else {
        setValueFour(counter4 = parseInt(counter4));
    };
};

mainFour();
