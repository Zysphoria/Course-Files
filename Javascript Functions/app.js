// function add(x, y) {
//      return x + y;
// }

// const add = function (x,y) {
//     return x + y;
// }

// const square = function(x) {
//     return x * x;
// } //for some reason didnt work on this page but worked on the test page on Udemy??

//HIGHER ORDER FUNCTIONS BELOW

// function callTwice(func) {
//     func();
//     func();
// }

// function callTenTimes(f) {
//     for(let i = 0; i<10; i++){
//         f()
//     }
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1
//     console.log(roll)
// }

// callTwice(rollDie)

//RETURNING HIGHER ORDER FUNCTIONS

function makeMysteryFunc(){
    const rand = Math.random();
    if(rand > 0.5){
        return function(){
            console.log("GOOD FUNCTION")
            }
        }else {
            return function(){
                alert("You have been infected by a virus")
            }
        }
    }

  