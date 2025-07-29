// nested function
const printMax = (x,y) => {
    const printStars = ()=>{console.log("********");};
    printStars();
    console.log(x>y?x:y);
    printStars();
};

printMax(10,20);

