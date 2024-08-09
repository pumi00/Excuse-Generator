let who = ["cat", 'My Grandma', 'My Dad', 'bird', 'tiger'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when i was sleeping', 'while I was exercising', 'during my luch', 'while I was praying'];

function getRandomNumber(a,b){
    return Math.floor(Math.random() * b-a) + a;
}

function getRandom(anyArray){
    let max = who.length;
    let min = 0;
    console.log(max, min, anyArray)
    let random = getRandomNumber(min, max);
    return anyArray[random];
}

window.onload = function(){
    console.log(who);
    document.querySelector('#excuse').innerHTML = getRandom(who)+ ' ' + getRandom(action) + ' ' + getRandom(what) + ' ' + getRandom(when)
};