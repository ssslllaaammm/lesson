




//let number1 = 10;
//let number2 = 20;
//let number3 = 11;

//if (number1 < number2 && number1 <number3)  {
  //  console.log (number1);
//} else if (number2 < number1 && number2 < number3) {
    //console.log (number2)
//}else if (number3 < number1 && number3 < number2) {
  //  console.log (number3)
//}else{
  //  console.log ('equal');
//}


//for (i=0; i<10; i = i+2) {
  //  console.log (i, "hi");
//}





//let a = 5;
//let b = 5;
//let c = 5;

//if (a == b && a == c || b == c) {
   // console.log ('3');
//} else if (a != b && a == c || b==c){
  //  console.log ('2')
//} else (a != b && a!=c && b !=c); {
  //  console.log ('0')
//}


//let a = 3;
//let b = 1;
//let c = 3;

//if (a == b && b == c && a == c) {
  //console.log ('3');
//}else if (a == b && b != c || a != b && b == c || a == c && b != c ){
  //console.log ('2')
//}else{
  //console.log ('0')
//}



//let name = 2;
//let admin = 5;

//if (name == admin) {
  //console.log ('Hi, user');
//} else{
 // console.log ('Hi, uknown');
//}



//let arr = [10, 85, 55, 70];
//for (let i = 1; i < arr.length; i += 2) {
  //console.log(arr[i]);
//}

//let arr = [5,10,15,20];
//let sum = 0;
  //for (let i = 0; i < arr.length; i = i + 1) {
    //if (arr[i] % 2 == 0)  
    //sum = sum + arr[i];
  //}
//console.log (sum)

//let arr = ['one','two','three','four'];
//let target = 'five';
//let isFound = false;
//for (let i = 0; i < arr.length; i = i + 1){
  //if (arr[i] === target) 
  //isFound = true;
//}
//if (isFound) {
  //console.log ('found')
//}else{
  //console.log ('not found')
//}



//Создайте массив чисел.
//let arr = [5, 10, 15, 20];
//let max = arr[0];  
//Напишите программу, которая находит и выводит максимальное значение в массиве.
//for (let i = 1; i < arr.length; i = i + 1) {
  //if (arr[i] > max) {
    //max = arr[i];  
  //}
//}
//console.log(max);



//function cToF(c) {
  //let f = (c * 9/5) + 32;
  //return f;
//}
//let result = cToF(30)
//console.log(result);


//function daytosec(day) {

  //const secPerday = 86400;
  //let total = day * secPerday
  //return total
//}

//let result = daytosec(10);
//console.log(result);



//function findArea(a,b) {
  //let area = a * b;
  //return area;
//}

//console.log ('result is'+ area )
//console.log('resultis', findArea (4,5));




//домашнее задание 1

//Напишите функцию, которая принимает массив чисел 
//и выводит минимальное значение в массиве на консоль.

//let arr = [5, -4, 15, 20];
//let min = arr[0];  

//for (let i = 1; i < arr.length; i = i + 1) {
  //if (arr[i] < min) {
    //min = arr[i];  
  //}
//}
//console.log(min);

//домашнее задание 2

//Напишите функцию, которая принимает массив чисел 
//и выводит среднее арифметическое значение на консоль. 

//  let arr = [5, 3, 15, 20];
  //const average = arr.reduce((sum, current) => sum + current, 0) / arr.length;

//  console.log(average);


//function calculateAverage(arr) {
  //if (arr.length === 0) {
    //return 0; 
  //} 

  //let sum = 0;
  //for (let i = 0; i < arr.length; i++) {
    //sum += arr[i];
  //}

  //let average = sum / arr.length;
  //return average;
//}

//let numbers = [5, 10, 15, 20, 25];
//let resultis = calculateAverage(numbers);
//console.log(resultis);


//Напишите функцию, которая принимает количество лет и считает количество недель

function yearsToWeeks(years) {
 const weeksInYear = 52; 
  let total = years * weeksInYear;
  return total;
}

let result = yearsToWeeks(10);
console.log(results);








