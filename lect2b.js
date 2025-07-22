const student = Array('Malik','Ibrahim','Tamer');
const student2 = ['Malik','Ibrahim','Tamer'];
const all_students = student.concat(student2)
console.log(all_students);
const all_students2 = [...student,...student2];
all_students2.sort();
all_students2.reverse();
console.log(all_students2);
console.log(all_students2.indexOf("Ibrahim"));
console.log(all_students2.find((e)=>{
    return e == "Ibrahim";
}));
console.log(all_students2.find((e)=>e==="Ibrahim"));


