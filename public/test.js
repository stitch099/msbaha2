let dataValue = {
    id: "counterOne",
    tittle: "counter",
    count: 0,
};




let dataValues = [
    {
        id: 'counterOne',
        tittle: 'counter1',
        count: 0,
    },
    {
        id: 'counterTwo',
        tittle: 'counter2',
        count: 0,
    },
]

function renderMasbaha(data){
    return `
    <div class="row row-cols-lg-3 row-cols-xlg-4">
        <div class="col">
            <div class="card card1 border border-2 border-secondary">
                <div class="card-header"><h2 id="header">${data.tittle}</h2></div>
                <div class="counter" onclick="increase(${data.id})">
                    <div class="counter-value" id="${data.id}">${data.count}</div>
                </div>
                <div class="counter-controls" onclick="reset(${data.id})">
                    <button type="button" id="reset">
                        <span>
                            <i class="fa-solid fa-rotate-left"></i> 
                        </span>
                    </button>
                </div> 
            </div>
        </div>
    </div>
    `
};

function renderMasbahas (){
    let value = '';
    dataValues.forEach((data)=>{
        value += renderMasbaha(data);
    })
    console.log(value)
};



// console.log(renderMasbaha(dataValue));
// console.log(renderMasbaha(dataValues));
// console.log(renderMasbahas(dataValue));

console.log(renderMasbahas(dataValues));
// let renderCounter = ()
// console.log(renderMasbaha(dataValue));
// console.log(renderMasbaha(data));


// model to go by 

// let counters = [
//     {
//         id: 'counter0',
//         title: "سبحان الله",
//         count: 0,
//     },
//     {
//         id: 'counter1',
//         title: "الحمد لله",
//         count: 0,
//     },
// ]

// let renderCounters = () => {
//     let html = '';
//     counters.forEach((data) => {
//         html += renderCounter(data);
//     })

//     console.log(html)
//     // document.body.innerHTML = html;

//     document.querySelector('#putHere').innerHTML = html;
// }

// let renderCounter = (data) => {
//     return `
// <div class="msbha" 
//  id="${data.id}" 
//  onClick="increment('${data.id}')"
//  >

// <div class="msbha-text">${data.title}</div>
// <div class="msbha-count">${data.count}</div>
// </div>
//     `;


// }


// let saveData = () => {
//     localStorage.setItem('counters', JSON.stringify(counters));
// }

// let loadData = () => {
//     let data = localStorage.getItem('counters');
//     if (data) {
//         counters = JSON.parse(data);
//     }
// }


// let increment = (id) => {
//     counters.find((data) => {
//         if (data.id == id) {
//             data.count++;
//         }
//     })
//     saveData();
//     renderCounters();
// }


// let main = () => {
//     loadData();
//     renderCounters();
// }

// main()