let dataValues = [
    {
        id: 'count',
        tittle: 'سبحان الله',
        count: 0,
    },
    {
        id: 'count2',
        tittle: 'الحمدلله',
        count: 0,
    },
]

onsubmit1 = (e) =>{
    e.preventDefault();


    let newId = Math.floor(Math.random()*1000000) + '';

    let newTittle = document.querySelector("#masbaha-name").value;

    if(newTittle == ''){
        alert('الرجاء إدخال النص');
        // return;
    };

    let newCounter = {
        id: newId,
        tittle: newTittle,
        count: 0,
    }

    document.querySelector('#masbaha-name').value = '';

    dataValues.push(newCounter);
    renderMasbahas();
    saveData();
};


let renderMasbaha = (data) =>{
    return `
        <div class="col">
            <div class="card card1 border border-2 border-secondary">
                <div class="remove border border-secondary" onclick="remove('${data.id}')"><i class="fa-solid fa-x"></i></div>
                <div class="card-header"><h2 id="header">${data.tittle}</h2></div>
                <div class="counter" onclick="increase('${data.id}')">
                    <div class="counter-value" id="${data.id}">${data.count}</div>
                </div>
                <div class="counter-controls" onclick="reset('${data.id}')">
                    <button type="button" id="reset">
                        <span>
                            <i class="fa-solid fa-rotate-left"></i> 
                        </span>
                    </button>
                </div> 
            </div>
        </div>
    `
};

let renderMasbahas = () =>{
    let value = '';
    dataValues.forEach((data)=>{
        value += renderMasbaha(data);
    });
    // console.log(value);

    document.querySelector("#addHere").innerHTML = value;
};
renderMasbahas(dataValues);


let saveData = ()=>{
    localStorage.setItem('counter', JSON.stringify(dataValues));
};

let loadData = () =>{
    let data = localStorage.getItem('counter');
    if(data){
        dataValues = JSON.parse(data);
    };
};

let increase = (id) => {
    // console.log(dataValues)
    dataValues.find((data) => {
        // console.log('id is ' + id);
        // console.log('data.id is ' + data.id);
        if (data.id === id) {
            data.count++ ;
            // console.log(data.count);
        }
    })
    saveData();
    renderMasbahas();
};

let reset = (id) =>{
    dataValues.find((data) =>{     
        if(data.id === id){
            data.count = 0;
        }
    })
    saveData();
    renderMasbahas();
};

let main = () =>{
        loadData();
        renderMasbahas();
};

main();

let remove = (id) => {

    dataValues = dataValues.filter((data) =>data.id !== id)
    
    console.log(dataValues);
    
    renderMasbahas();
    saveData();
}
