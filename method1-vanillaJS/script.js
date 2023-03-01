let masbahas = [
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
];

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

    masbahas.push(newCounter);
    renderMasbahas();
    saveData();
};


let renderMasbaha = (data) =>{
    return `
        <div class="col">
            <div class="card card1 border border-2 border-secondary">
                <div class="cancel border border-secondary" onclick="remove('${data.id}')"><i class="fa-solid fa-x"></i></div>
                <div class="card-header header"><h2 id="header">${data.tittle}</h2></div>
                <div class="counter" onclick="increase('${data.id}')">
                    <div class="count" id="${data.id}">${data.count}</div>
                </div>
                <div class="home-reset" onclick="reset('${data.id}')">
                    <button type="button" class="reset" id="reset">
                        <span>
                            <i class="fa-solid fa-rotate-left" id="cancel-reset"></i> 
                        </span>
                    </button>
                </div> 
            </div>
        </div>
    `
};

let renderMasbahas = () =>{
    let value = '';
    masbahas.forEach((data)=>{
        value += renderMasbaha(data);
    });
    // console.log(value);

    document.querySelector("#addHere").innerHTML = value;
};

renderMasbahas(masbahas);

let saveData = ()=>{
    localStorage.setItem('counter', JSON.stringify(masbahas));
};

let loadData = () =>{
    let data = localStorage.getItem('counter');
    if(data){
        masbahas = JSON.parse(data);
    };
};

let increase = (id) => {
    // console.log(dataValues)
    masbahas.find((data) => {
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
    masbahas.find((data) =>{     
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

    masbahas = masbahas.filter((data) =>data.id !== id)

    console.log(masbahas);
    
    renderMasbahas();
    saveData();
};

function openWhatsApp() {  
    openWhatsAppText('https://masbaha2.web.app/');

};

function openWhatsAppText(text) {  
    window.open(`https://wa.me/?text=${text}`);  
};