const starSigns = {
    aries:{
        startDate: new Date(0000, 2, 21),
        endDate: new Date(0000, 3, 19), 
        positiveQuotes: ['pos 1', 'pos 2', 'pos3', 'pos 4', 'pos5'],
        negativeQuotes: ['neg 1', 'neg 2', 'neg 3', 'neg 4', 'neg 5'], 
        actions: ['punch', 'kick', 'kiss'],
        result: ['death', 'life', 'everything in between' ]
    }, 
    taurus: {
        startDate: new Date(0000, 3, 20),
        endDate: new Date(0000, 4, 20), 
        positiveQuotes: ['pos 1', 'pos 2', 'pos3', 'pos 4', 'pos5'],
        negativeQuotes: ['neg 1', 'neg 2', 'neg 3', 'neg 4', 'neg 5'], 
        actions: ['punch', 'kick', 'kiss'],
        result: ['death', 'life', 'everything in between' ] 
    },
    gemmini: {
        startDate: new Date(0000, 4, 21),
        endDate: new Date(0000, 5, 21), 
        positiveQuotes: ['pos 1', 'pos 2', 'pos3', 'pos 4', 'pos5'],
        negativeQuotes: ['neg 1', 'neg 2', 'neg 3', 'neg 4', 'neg 5'], 
        actions: ['punch', 'kick', 'kiss'],
        result: ['death', 'life', 'everything in between' ]  
    },
    cancer:{
        startDate: new Date(0000, 5, 22),
        endDate: new Date(0000, 6, 22), 
        positiveQuotes: ['pos 1', 'pos 2', 'pos3', 'pos 4', 'pos5'],
        negativeQuotes: ['neg 1', 'neg 2', 'neg 3', 'neg 4', 'neg 5'], 
        actions: ['punch', 'kick', 'kiss'],
        result: ['death', 'life', 'everything in between' ] 
    },
    leo:{
        startDate: new Date(0000, 6, 23),
        endDate: new Date(0000, 7, 22), 
        positiveQuotes: ['pos 1', 'pos 2', 'pos3', 'pos 4', 'pos5'],
        negativeQuotes: ['neg 1', 'neg 2', 'neg 3', 'neg 4', 'neg 5'], 
        actions: ['punch', 'kick', 'kiss'],
        result: ['death', 'life', 'everything in between' ]  
    },
    virgo: {
        startDate: new Date(0000, 7, 23),
        endDate: new Date(0000, 8, 22), 
        positiveQuotes: ['pos 1', 'pos 2', 'pos3', 'pos 4', 'pos5'],
        negativeQuotes: ['neg 1', 'neg 2', 'neg 3', 'neg 4', 'neg 5'], 
        actions: ['punch', 'kick', 'kiss'],
        result: ['death', 'life', 'everything in between' ]  
    },
    libra: {
        startDate: new Date(0000, 9, 23),
        endDate: new Date(0000, 10, 21), 
        positiveQuotes: ['pos 1', 'pos 2', 'pos3', 'pos 4', 'pos5'],
        negativeQuotes: ['neg 1', 'neg 2', 'neg 3', 'neg 4', 'neg 5'], 
        actions: ['punch', 'kick', 'kiss'],
        result: ['death', 'life', 'everything in between' ]  
    },
    scorpio: {
        startDate: new Date(0000, 10, 22),
        endDate: new Date(0000, 11, 21), 
        positiveQuotes: ['pos 1', 'pos 2', 'pos3', 'pos 4', 'pos5'],
        negativeQuotes: ['neg 1', 'neg 2', 'neg 3', 'neg 4', 'neg 5'], 
        actions: ['punch', 'kick', 'kiss'],
        result: ['death', 'life', 'everything in between' ]  
    }, 
    sagittarius: {
        startDate: new Date(0000, 11, 22),
        endDate: new Date(1971, 0, 19), 
        positiveQuotes: ['pos 1', 'pos 2', 'pos3', 'pos 4', 'pos5'],
        negativeQuotes: ['neg 1', 'neg 2', 'neg 3', 'neg 4', 'neg 5'], 
        actions: ['punch', 'kick', 'kiss'],
        result: ['death', 'life', 'everything in between' ]  
    }, 
    capricorn: {
        startDate: new Date(0000, 0, 20),
        endDate: new Date(0000, 1, 18), 
        positiveQuotes: ['pos 1', 'pos 2', 'pos3', 'pos 4', 'pos5'],
        negativeQuotes: ['neg 1', 'neg 2', 'neg 3', 'neg 4', 'neg 5'], 
        actions: ['punch', 'kick', 'kiss'],
        result: ['death', 'life', 'everything in between' ]  
    }, 
    aquarius: {
        startDate: new Date(0000, 1, 19),
        endDate: new Date(0000, 2, 19), 
        positiveQuotes: ['pos 1', 'pos 2', 'pos3', 'pos 4', 'pos5'],
        negativeQuotes: ['neg 1', 'neg 2', 'neg 3', 'neg 4', 'neg 5'], 
        actions: ['punch', 'kick', 'kiss'],
        result: ['death', 'life', 'everything in between' ]  
    }, 
    pisces: {
        startDate: new Date(0000, 2, 21),
        endDate: new Date(0000, 3, 19), 
        positiveQuotes: ['pos 1', 'pos 2', 'pos3', 'pos 4', 'pos5'],
        negativeQuotes: ['neg 1', 'neg 2', 'neg 3', 'neg 4', 'neg 5'], 
        actions: ['punch', 'kick', 'kiss'],
        result: ['death', 'life', 'everything in between' ]  
    }};
// make star signs objects with with dates, - positive / negative predictions - positive / negative actions - emotacons
// ******* remember issue with dec to jan *******

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
       // console.log('worked')
        dateValid = true;
    }else{
        //console.log('\nThe date is not correctly formatted (dd/mm/yyyy)\n')
        dateOfBirthInput = prompt('Please enter your date of birth (dd/mm/yyyy):');
    }
}
// Turn input into Date object
const dateParts = dateOfBirthInput.split('/');
//console.log(dateParts);
const dateOfBirth = new Date(0000, dateParts[1]-1, dateParts[0]);
//console.log(dateOfBirth.toDateString());
let phrase = "";
for (sign in starSigns){
    //console.log(starSigns[sign].startDate)
    if (dateOfBirth > starSigns[sign].startDate && dateOfBirth < starSigns[sign].endDate) {
        
        phrase += `You are a ${sign}!`;
        //random generate a boolean for 
        const isPositive = Math.random() < 0.5;
        if (isPositive){
            let index = Math.floor(Math.random() * starSigns[sign].positiveQuotes.length)
            phrase += ` ${starSigns[sign].positiveQuotes[index]}`;

        } else {  
            console.log('is negative');
            let index = Math.floor(Math.random() * starSigns[sign].negativeQuotes.length);
            phrase += ` ${starSigns[sign].negativeQuotes[index]}`;
        }
        index = Math.floor(Math.random() * starSigns[sign].actions.length);
        phrase += ` ${starSigns[sign].actions[index]}`;
        index = Math.floor(Math.random() * starSigns[sign].result.length);
        phrase += ` ${starSigns[sign].result[index]}`;
        console.log(phrase);   
    } 
}
// use date of birth to select star sign 
    //turn input date into date object

// pick a positive or negaive prediction
// for the chosen list pick a random phrase
// then pick an action pick an action 
// print results 