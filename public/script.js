const db = firebase.firestore();

// // getting the objects from the database
// db.collection('test').get().then((snapshot) => {
//     let value = '';
//     snapshot.docs.forEach((doc) => {
//         console.log(doc.data());
//         value += renderMasbaha(doc.data());
//     });
//     document.querySelector('#addHere').innerHTML = value;
// });

// real-time database 
db.collection('test').onSnapshot((snapshot) => {
    let value = '';
    let changes = snapshot.docChanges();
    changes.forEach((change) => {
        if (change.type == 'added' && changes.length > 1) {
            value += renderMasbaha(change.doc.data());
        } else {
            snapshot.docs.forEach((doc) => {
                value += renderMasbaha(doc.data());
            })
        }
        document.querySelector('#addHere').innerHTML = value;
    });
});

// function to transfer the object that we have written in the database into html/css code
let renderMasbaha = (data) => {
    return `
            <div class="col">
                <div class="card card1 border border-2 border-secondary">
                    <div class="cancel border border-secondary" onclick="remove('${data.id}')"><i class="fa-solid fa-x"></i></div>
                    <div class="card-header header"><h2 id="header">${data.name}</h2></div>
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

// increment function (increasing the counter)
let increase = (id) => {
    db.collection('test').get()
        .then((snapshot) => {
            snapshot.docs.forEach(
                (doc) => {
                    if (doc.data().id === id) {
                        db.collection('test').doc(`${doc.id}`).update({
                            count: doc.data().count + 1
                        });
                    }
                }
            )
        })
};

// reset function (reseting the counter)
let reset = (id) => {
    db.collection('test').get()
        .then((snapshot) => {
            snapshot.docs.forEach(
                (doc) => {
                    if (doc.data().id === id) {
                        db.collection('test').doc(`${doc.id}`).update({
                            count: 0
                        })
                    }
                }
            )
        });
};

// cancel function (canceling the counter)
let remove = (id) => {

    // db.collection('counter') = db.collection('counter').filter((data) => data.id !== id)

    // console.log();
    db.collection('test').get()
        .then((snapshot) => {
            snapshot.docs.forEach(
                (doc) => {
                    if (doc.data().id === id) {
                        db.collection('test').doc(`${doc.id}`).delete();
                    }
                }
            )
        })

};

// adding counters (submit form to add counters from frontend into database)
onsubmit1 = (e) => {
    e.preventDefault();

    let newId = Math.floor(Math.random() * 1000000) + '';

    let newTittle = document.querySelector("#masbaha-name").value;

    if (newTittle == '') {
        alert('الرجاء ادخال صيغة التسبيح ');
    } else {
        db.collection('test').add({
            count: 0,
            name: newTittle,
            id: newId
        });
    }

    document.querySelector('#masbaha-name').value = '';

};

// whatsapp share button
function openWhatsApp() {
    openWhatsAppText('https://masbaha2.web.app/');

};

function openWhatsAppText(text) {
    window.open(`https://wa.me/?text=${text}`);
};
