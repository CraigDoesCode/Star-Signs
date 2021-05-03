const starSigns = ['Aries', 'Taurus', 'Gemmini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const predictions = [];
const actions = [];


const prompt = require('prompt-sync')();

const dateOfBirth = prompt('Please enter your date of birth (dd/mm/yyyy):');


//console.log(dateOfBirth);
function checkDate(str){
    let date = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
    console.log(date)
    if (date === str){
        console.log(date, ': worked')
    }
}

checkDate(dateOfBirth);
// make sure it is a date in the correct format use regex
// if not prompt again

// use date of birth to select star sign 
// pick a positive or negaive prediction
// for the chosen list pick a random phrase
// then pick an action pick an action 
// print results 