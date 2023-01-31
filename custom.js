// ---------------
//     Practise Problem - 1
// ---------------

// Question-
// You are given an array:
// var fruits = ['Apple', 'Banana', 'Orange'];
// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

// Answer-
// var fruits = ['Apple', 'Banana', 'Orange'];
// fruits[1] = "Mango"
// fruits.pop()
// fruits.push("Watermelon")
// console.log(fruits);


// ---------------
//     Practise Problem - 2
// ---------------

// Question-
// You and your friends Tom, Jane, Peter and John got their final exam results. Your total
// score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
// and John’s total score is 40. The grading chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade
// Write a program to find your and your friends’ grades using if-else.

// Answer-
// let takeNumber = parseInt(prompt("Enter Your Number: "));
// if (takeNumber >= 80) {
//     console.log("A Grade");
// }
// else if (takeNumber >= 60 && takeNumber < 80) {
//     console.log("B Grade");
// }
// else if (takeNumber >= 50 && takeNumber < 60) {
//     console.log("C Grade");
// }
// else if (takeNumber >= 40 && takeNumber < 50) {
//     console.log("D Grade");
// }
// else {
//     console.log("F Grade");
// }


// ---------------
//     Practise Problem - 3
// ---------------

// Question-
// You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.

// Answer-
// let a = 13;
// let b = 79;
// let c = 45;
// if (a > b && a > c) {
//     console.log("a is greater")
// }
// else if (b > c && b > a) {
//     console.log("b is greater")
// }
// else {
//     console.log("c is greater");
// }

// Question-
// You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.

// Answer-
// let a = 9;
// let b = 8;
// let c = 9;
// if (a == b || b == c || a == c) {
//     console.log("The triangle is Isosceles");
// }
// else {
//     console.log("The triangle is not Isosceles");
// }


// ---------------
//     Practise Problem - 4
// ---------------

// Question-
// Your father gives you some money to buy a electronic accessories. If you have around 20000 tk then you will buy a second hand laptop. If you have around 40000 tk then you will buy a lenovo yoga computer. If you have around 60000 tk then you will go for a gaming laptop. or If you have more than 80000 tk then you will buy a Macbook pro. Otherwise you will continue to work with your mobile phone.

// Answer-
// let myMoney = parseInt(prompt("I have: "));
// if (myMoney >= 80000) {
//     console.log("I will buy a Mackbook pro laptop")
// }
// else if (myMoney >= 60000 && myMoney < 80000) {
//     console.log("I will Buy a Gaming Laptop")
// }
// else if (myMoney >= 40000 && myMoney < 60000) {
//     console.log("I will buy a Lenovo yoga laptop")
// }
// else if (myMoney >= 20000 && myMoney < 40000) {
//     console.log("I will buy a second hand laptop")
// }
// else {
//     console.log("I will continue work with my mobile phone")
// }


// ---------------
//     Practise Problem - 5
// ---------------

// Question-
// "Ajke amar mon valo nei" print the sentence 39 times.

// Answer-
// for (let i = 1; i < 40; i++) {
//     console.log("Ajke amar mon valo nei", i);
// }

// or using while loop
// let i = 0;
// while (i < 40) {
//     console.log("Ajke amar mon valo nei", i);
//     i++;
// }


// ---------------
//     Practise Problem - 6
// ---------------

// Question-
// 1. Print all the number between  58 to 96
// 2. Print all the Odd number between 581 to 623
// 3. Print all the Even number between 412 to 456

// Answer-