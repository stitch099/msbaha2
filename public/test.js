let data = {
    tittle: "counter",
    count: 0,
};

console.log(renderMasbaha(data));

let dataValue = [
    {
    tittle: 'counter',
    count: 0,
    },
    {
    tittle: 'counterTwo',
    count: 0,
    },
    {
    tittle: 'counterThree',
    count: 0,
    },
    {
    tittle: 'counterFour',
    count: 0,
    },
]
function renderMasbaha(data){
    console.log(data.tittle); 
    console.log(data.count);
    return `
    <div class="row row-cols-lg-3 row-cols-xlg-4">
        <div class="col">
            <div class="card card1 border border-2 border-secondary">
                <div class="card-header"><h2 id="header">${data.tittle}</h2></div>
                <div class="counter" >
                    <div class="counter-value" >${data.count}</div>
                </div>
                <div class="counter-controls" >
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

console.log(renderMasbaha(dataValue))