// - Show the user 4 random numbers between 1 and 100 using an alert
// - Ask them to enter the numbers in the right order using a prompt
//     - Delay the prompt by 15 seconds (so they have time to forget)
// - Check how many numbers they entered correctly
// - Show the user their result

// function getRandomZ(max) {
//   return Math.floor(Math.random() * max);
// }

let getNumber = (max) => { return Number(Math.floor(Math.random() * max)) };
//console.log(getNumber(100));

function findRamdonList (listSize){
let listN = [];

for (let i = 0; i < listSize; i++) {
let allName = getNumber(100);

listN.push(allName)
}

return listN;
}

const listFourItems = findRamdonList(4);
console.log(listFourItems);

// - Show the user 4 random numbers between 1 and 100 using an alert
// alert("Pay atentions to these numbers: " + listFourItems );


// - Ask them to enter the numbers in the right order using a prompt
//     - Delay the prompt by 15 seconds (so they have time to forget)

// setTimeout(function(){prompt("Now write the numbers in the order they appeared:"); }, 2000);
// console.log(x);

let answer = prompt("Now write the numbers in the order that they appeared: ");

// - Check how many numbers they entered correctly
// - Show the user their result



// if(answer == String(listFourItems)){
// // alert("Good job")
// }else{
// // alert("Try again22")
// }
// console.log(String(listFourItems));