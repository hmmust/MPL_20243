AgeValidator = async (age)=>{
    if(age>=18)
        return age;
    else
        return Promise.reject("Age is below 18 =>"+age);
};
//modules.exports= {AgeValidator};
exports.AgeValidator= AgeValidator;
exports.Age= 15;

// AgeValidator(19).then((a)=>{
//             let birthyear = 2025-a;
//             return birthyear;
//         })
//         .then((by)=>{
//             console.log(by);
//         })
//         .catch((e)=>{
//                console.log(e);
//         });
