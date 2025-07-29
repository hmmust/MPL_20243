const student = Array('Malik','Ibrahim','Tamer');
const student2 = ['Malik','Ibrahim','Tamer'];
const student3 = Array(10);
student3[1]= "Malik";
student3[5]= "Ibrahim";
student3.push("Tamer");
console.log(student3.length);
console.log(student2.slice(1,3));
for(let s of student3) //try in
    console.log(s);
student3.forEach((s)=>{
    console.log(s)
});