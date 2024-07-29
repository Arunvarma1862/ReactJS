const set1=[1,2,3,4,5];
const set2=[...set1,6,7,8,9,10];
console.log(set2)


const obj={
    names:"dsbc",
    age:63,
    classs:7
}
// const {classs, ...ax}= obj;
console.log({...obj, role:"dksbch",names:"jhbdshdb"})
// console.log(ax);


const a={
    names:"cjdbj",
    email:"cdbh@gmail.com"
}
const b={
    ...a,
    age:96,
}
console.log(b)