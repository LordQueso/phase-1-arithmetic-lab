// multiply has to equal 62 via an equation
let num1 = Math.min(2,3,4,5)
let num2 = Math.max(1,2,3,4, 31)
let multiply = num1 * num2
console.log(multiply)

 // Generate a random integer greater than 0
function rando() {
   
    let randoGen = Math.floor(Math.random() * 100) + 1;
    return randoGen
}
let random = rando(1)
console.log(random)

// Calculate the remainder when the random number is divided by 5

let num3 = 29
let num4 = 5
let mod = num3 % num4
console.log(mod)

//will return 20 as the highest number in the set

function highNumber(){
    let bigNumber = Math.max(5,10,15,20)
    return bigNumber
}
let max = highNumber()
console.log(max)