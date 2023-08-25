const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach((element,index) => {
    console.log(`Index:-${index}element,${element}`);
});
console.log(arrayNumbers);

console.log(`------------------------`);

const arrayNumbers2=[1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach(Number => {
    if(Number>0){
        console.log("Positive number in array",Number);
    }
});
console.log(Number);

console.log(`-----------------------`);

const array=[1,-7,40,502,-77,91,0,108,89,-601];
const negativeNumbers=[];

array.forEach(Numbers => {
    if (Numbers<0) {
       negativeNumbers.push(Numbers) ;
    }
    

});
console.log("Negative numbers in array",negativeNumbers);
console.log(`--------------------`);

const numbers=[1,-7,40,502,-77,91,0,108,89,-601];
numbers.forEach(number => {
    if (number%2===0) {
        console.log(number);
    }
});
console.log("Even Numbers",number);
console.log(`-----------------------`);