const AgeValidator = require('./lect4b').AgeValidator;
const age = require('./lect4b').Age;
console.log(age);
//const {AgeValidator,Age} = require('./lect4b');
AgeValidator(19).then((a)=>{
            let birthyear = 2025-a;
            return birthyear;
        })
        .then((by)=>{
            console.log(by);
        })
        .catch((e)=>{
               console.log(e);
        });