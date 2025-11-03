// RECEIPT
// lotus Digital Studios
// singapore 038988


// let details={
//     receiptNo:"Sg-oo1",
//     receiptDate:"29/01/2019",
//     poBox: "1320/2019",
//     dueDate:"26/04/2019",
//     quantity: [
//         {
//         description:"carryingCase",
//         unitPrice:100.50,
//         amount:100.50,
//         },

//          {
//         description:"storyBoard",
//         unitPrice:45.55,
//         amount:91.10,
//         },

//          {
//         description:"highLighter",
//         unitPrice:16,
//         amount:160,
//         },




//     ],

//     totalAmount:351.60
// }



// // favorite movie show
// let favouriteMovie={
//     title:"Grey's Anatomy",
//     yearReleased:2005,
//     actors:[
//         {
//             name:"Ellen Pompeo", role: "Dr meredith Grey"
//         },
//         {
//             name:"sandra oh", role: "Dr Christina Yang",
//         },
//         {
//             name:"Patrick Dempsey", role: "Dr Derek Shepherd",
//         }

//     ],

//     availableOnNetflix: true,
//     rating: 0.85,
//     description: "Along running medical drama"
// };

// console.log(
//     "Movie title:",favouriteMovie.title,
//     "Release year:",favouriteMovie.yearReleased,
//     "Rating:",favouriteMovie.rating,
//     "Available on netflix:",favouriteMovie.availableOnNetflix,
//     "Main actors:",favouriteMovie.actors,
//     "description:",favouriteMovie.description,





// );

// operators(arithmetic)
// looping
// condition

// arithmetic operators...
// + addition
// - subract
// / divide
// % modula- what remains after division
// * multiply
// ** exponential

// example 

// let a = 9;
// let b = 4;

// let sub =a+b;
// let div=a/b;
// let mul=a*b;
// let exp=a**b;
// let mod=a%b;

// console.log(sub)
// console.log(div)
// console.log(mul)
// console.log(exp)
// console.log(mod)

// sub *=2;
// exp **=2;
// console.log(sub)
// console.log(exp)

// let x = a + b
// console.log(x)

// // put in quotes makes a string
// let p= "11"+"1"
// console.log(p)

// shorthand


// <lesser  >greater  >=greater or equal  <=lesser or equal  ===strictly equal  ==relatively equal  !==strictly not equal

// if condition or statement
// else condition negates the whole concept if the first one doesn't apply

// age=32
// if(age<18){
//     console.log("you are too young!")}
// // }else if(18<=age<=25){
// //     console.log("young adult")
// // }else if(25<=age<=40)
//   { console.log("go home")
// }

// logical operators
// && and
// || or
// ?? nullish/undefined 
// ! not
// console.log (true||false)

// personal bank details


// let personalBank = {
//     fname: "Rachael ",
//     lname: "Mbugua",
//     email: "mbura@gmail.co.ke",
//     bank: "KCB",
//     address: {
//         postalCode: 40405,
//         streetName: "JKUAT Entrance Lane"
//     },
//     balance: 4000.05,
//     currency: "Ksh",
//     transactions: [
//         {
//             date: "04/04/2025",
//             amount: 120.08,
//             branch: "Main"
//         },
//         {
//             date: "04/08/2025",
//             amount: 110.08,
//             branch: "Main"
//         },
//     ]
// }

function myBank(bankName,branches=[]) {
    try{
        const person= {
            createAccount(firstName, lastName, phoneNumber, email, branchNumber=0) {
                try{
                    if(!branches[branchNo]){
                        throw Error(`Branch number ${branchNo} does not exist!`)
                    }
                    if(!email&&firstName){
                        throw Error("email and first name must be provided")
                    }
                    return{firstName, lastName, phoneNumber, email, branchNumber

                    }

                }
                catch(e){
                    console.error(e.message)
                }
            }

        }

    }

    catch(e){

    }
    
}

function greet(name="rachael"){
    // craeting the error
    name ="paul"
    try{
        if(name===undefined||null){
            throw Error("nae is required")
        }
        console.log("welcome"+name)
    
    }
    catch(e){
        console.error(e.message)
    }
    }


/**
 * DOM
 * 
 * (Document, Element, Attr, Node)
 * 
 * Selecting Html Elements in the Dom
 * 
 * 1: .querySelector('selector')
 * 2: .querySelectorAll('selector')
 * 3: .getElementById('idSelector')
 * 4: .getElementByClassName('className')
 * 5: .getElementByTagName('tag')
 */

// const h1 = document.querySelector("H1") tag selection
// const h1 = document.querySelector("#h1-4") id selection
// const h1 = document.querySelector(".h1-4") class selection
// const h1 = document.getElementById("h1-4") 
// const h1 = document.getElementsByClassName("h1-4")
// const h1 = document.getElementsByTagName("H1") 
// console.log(h1);
// if (!h1) {
//     console.log("Not found the node")
// }

// const h1s = document.querySelectorAll("H1")
// console.log(h1s);

// for (let i = 0; i < h1s.length; i++) {
//     console.log(h1s[i])
// }



// for (const h1 of h1s) {
//     console.log(h1)
// }



const container = document.querySelector(".container")
const ps = document.querySelectorAll("p.red")
console.log(ps);

