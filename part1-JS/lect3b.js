function findMax(x,y=0){ // from right should have default
    if(x>y) return x;
    else return y;
}
console.log(findMax(5,7));
console.log(findMax(5)); // y =0