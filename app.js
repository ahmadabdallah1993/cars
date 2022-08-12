'use strict';

const bodyEl = document.getElementsByTagName('body');
const h1El = document.createElement('h1');
h1El.textContent = "Car Website";
bodyEl[0].appendChild(h1El);


const formEl = document.getElementById('form');
bodyEl[0].appendChild(formEl);


const bigArray = [];

function Car(name, price) {
    this.name = name;
    this.price = price;

    bigArray.push(this);
}

Car.prototype.render = function() {
    const divEl = document.createElement('div');
    bodyEl[0].appendChild(divEl);

    const h2El = document.createElement('h2');
    h2El.textContent = `${this.name}`;
    divEl.appendChild(h2El);

    const pEl = document.createElement('p');
    pEl.textContent = `${this.price} JD`;
    divEl.appendChild(pEl);
}




const c1 = new Car('bmw', 10000);
const c2 = new Car('volvo', 5000);

if(formEl !== null) {
    formEl.addEventListener('submit', handleSubmit);

}

let x = 2;

function handleSubmit(event) {
    //event.preventDefault();

    console.log(event);
    let n = event.target.carName.value;
    let p = event.target.carPrice.value; //event.target.price.value;

    let newItem = new Car(n, p);

    saveData(bigArray);

}

function saveData(data) {
    let d = JSON.stringify(data);
    localStorage.setItem('item', d);

}

function getData() {
    let retreveData = localStorage.getItem('item');
    let arrayData = JSON.parse(retreveData);

    if(arrayData !== null) {
        for(let i =x; i < arrayData.length; i++) {
            new Car(arrayData[i].n, arrayData[i].p);
        }
        x ++;
    }


    for(let i = 0; i < bigArray.length; i ++) {
        bigArray[i].render();
    }

    
    

}

getData();






