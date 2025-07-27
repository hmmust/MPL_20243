// callback function
const printMax = (x,y,ps) => {
    ps();
    console.log(x>y?x:y);
    ps();
};
const printStars = ()=>{console.log("********");};
printMax(10,20,printStars);

