const starSigns = ['Aries', 'Taurus', 'Gemmini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const predictions = [];
const actions = [];


const prompt = require('prompt-sync')();

let dateOfBirth = prompt('Please enter your date of birth (dd/mm/yyyy):');
let dateValid = false
 let dateRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/

 // make sure it is a date in the correct format use regex
// if not prompt again
//console.log(dateOfBirth);
while (dateValid === false){
    if (dateRegex.test(dateOfBirth)){
        console.log('worked')
        dateValid = true;
    }else{
        console.log('\nThe date is not correctly formatted (dd/mm/yyyy)\n')
        dateOfBirth = prompt('Please enter your date of birth (dd/mm/yyyy):');
    }
}


// use date of birth to select star sign 
// pick a positive or negaive prediction
// for the chosen list pick a random phrase
// then pick an action pick an action 
// print results 