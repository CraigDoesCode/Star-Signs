const starSigns = {
    aries:{
        startDate: new Date(0000, 2, 21),
        endDate: new Date(0000, 3, 19), 
        positiveQuotes: ['pos 1', 'pos 2', 'pos3', 'pos 4', 'pos5'],
        negativeQuotes: ['neg 1', 'neg 2', 'neg 3', 'neg 4', 'neg 5'], 
        Actions: ['punch', 'kick', 'kiss'] 

    }, 
    taurus: {
        startDate: new Date(0000, 2, 21),
        endDate: new Date(0000, 3, 19), 
        positiveQuotes: ['pos 1', 'pos 2', 'pos3', 'pos 4', 'pos5'],
        negativeQuotes: ['neg 1', 'neg 2', 'neg 3', 'neg 4', 'neg 5'], 
        Actions: ['punch', 'kick', 'kiss'] },
    gemmini: {
        startDate: new Date(0000, 2, 21),
        endDate: new Date(0000, 3, 19), 
        positiveQuotes: ['pos 1', 'pos 2', 'pos3', 'pos 4', 'pos5'],
        negativeQuotes: ['neg 1', 'neg 2', 'neg 3', 'neg 4', 'neg 5'], 
        Actions: ['punch', 'kick', 'kiss'] 
    },
    cancer:{
        startDate: new Date(0000, 2, 21),
        endDate: new Date(0000, 3, 19), 
        positiveQuotes: ['pos 1', 'pos 2', 'pos3', 'pos 4', 'pos5'],
        negativeQuotes: ['neg 1', 'neg 2', 'neg 3', 'neg 4', 'neg 5'], 
        Actions: ['punch', 'kick', 'kiss'] 
    },
    leo:{
        startDate: new Date(0000, 2, 21),
        endDate: new Date(0000, 3, 19), 
        positiveQuotes: ['pos 1', 'pos 2', 'pos3', 'pos 4', 'pos5'],
        negativeQuotes: ['neg 1', 'neg 2', 'neg 3', 'neg 4', 'neg 5'], 
        Actions: ['punch', 'kick', 'kiss'] 
    },
    virgo: {
        startDate: new Date(0000, 2, 21),
        endDate: new Date(0000, 3, 19), 
        positiveQuotes: ['pos 1', 'pos 2', 'pos3', 'pos 4', 'pos5'],
        negativeQuotes: ['neg 1', 'neg 2', 'neg 3', 'neg 4', 'neg 5'], 
        Actions: ['punch', 'kick', 'kiss'] 
    },
    libra: {
        startDate: new Date(0000, 2, 21),
        endDate: new Date(0000, 3, 19), 
        positiveQuotes: ['pos 1', 'pos 2', 'pos3', 'pos 4', 'pos5'],
        negativeQuotes: ['neg 1', 'neg 2', 'neg 3', 'neg 4', 'neg 5'], 
        Actions: ['punch', 'kick', 'kiss'] 
    },
    scorpio: {
        startDate: new Date(0000, 2, 21),
        endDate: new Date(0000, 3, 19), 
        positiveQuotes: ['pos 1', 'pos 2', 'pos3', 'pos 4', 'pos5'],
        negativeQuotes: ['neg 1', 'neg 2', 'neg 3', 'neg 4', 'neg 5'], 
        Actions: ['punch', 'kick', 'kiss'] 
    }, 
    sagittarius: {
        startDate: new Date(0000, 2, 21),
        endDate: new Date(0000, 3, 19), 
        positiveQuotes: ['pos 1', 'pos 2', 'pos3', 'pos 4', 'pos5'],
        negativeQuotes: ['neg 1', 'neg 2', 'neg 3', 'neg 4', 'neg 5'], 
        Actions: ['punch', 'kick', 'kiss'] 
    }, 
    capricorn: {
        startDate: new Date(0000, 2, 21),
        endDate: new Date(0000, 3, 19), 
        positiveQuotes: ['pos 1', 'pos 2', 'pos3', 'pos 4', 'pos5'],
        negativeQuotes: ['neg 1', 'neg 2', 'neg 3', 'neg 4', 'neg 5'], 
        Actions: ['punch', 'kick', 'kiss'] 
    }, 
    aquarius: {
        startDate: new Date(0000, 2, 21),
        endDate: new Date(0000, 3, 19), 
        positiveQuotes: ['pos 1', 'pos 2', 'pos3', 'pos 4', 'pos5'],
        negativeQuotes: ['neg 1', 'neg 2', 'neg 3', 'neg 4', 'neg 5'], 
        Actions: ['punch', 'kick', 'kiss'] 
    }, 
    pisces: {
        startDate: new Date(0000, 2, 21),
        endDate: new Date(0000, 3, 19), 
        positiveQuotes: ['pos 1', 'pos 2', 'pos3', 'pos 4', 'pos5'],
        negativeQuotes: ['neg 1', 'neg 2', 'neg 3', 'neg 4', 'neg 5'], 
        Actions: ['punch', 'kick', 'kiss'] 
    }};
// make star signs objects with with dates, - positive / negative predictions - positive / negative actions - emotacons


const prompt = require('prompt-sync')();


let dateValid = false
let dateRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/

// Initial prompt
 let dateOfBirthInput = prompt('Please enter your date of birth (dd/mm/yyyy):');
 
 // make sure it is a date in the correct format use regex
// if not prompt again
//console.log(dateOfBirth);
while (dateValid === false){
    if (dateRegex.test(dateOfBirthInput)){
        console.log('worked')
        dateValid = true;
    }else{
        console.log('\nThe date is not correctly formatted (dd/mm/yyyy)\n')
        dateOfBirthInput = prompt('Please enter your date of birth (dd/mm/yyyy):');
    }
}
// Turn input into Date object
const dateParts = dateOfBirthInput.split('/');
console.log(dateParts);
const dateOfBirth = new Date(0000, dateParts[1]-1, dateParts[0]);
console.log(dateOfBirth.toDateString());

for (sign in starSigns){
    console.log(starSigns[sign].startDate)
    if (dateOfBirth > starSigns[sign].startDate && dateOfBirth < starSigns[sign].endDate) {
        console.log(`you are a ${sign}!`);
    } 
}
// use date of birth to select star sign 
    //turn input date into date object

// pick a positive or negaive prediction
// for the chosen list pick a random phrase
// then pick an action pick an action 
// print results 