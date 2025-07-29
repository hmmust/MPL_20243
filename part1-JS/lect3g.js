// callback function
const printMax = (x,y,ps) => {
    ps();
    console.log(x>y?x:y);
    ps();
};

printMax(10,20,()=>{console.log("###########");});
printMax(100,200,()=>{console.log("------------");});
