// chapter# 12-13

// Qno#1

// var character = "A";

// var Code = character.charCodeAt(0);
// var characterType;

// if (charCode >= 48 && charCode <= 57) {
//     characterType = "Number";
// } else if (charCode >= 65 && charCode <= 90) {
//     characterType = "Uppercase Letter";
// } else if (charCode >= 97 && charCode <= 122) {
//     characterType = "Lowercase Letter";
// } else {
//     characterType = "Unknown Character";
// }

// console.log(`The character "${character}" is a ${characterType}.`);

// Qno#2

// var num1 = 10; 
// var num2 = 20;

// var largerNumber;
// var message;

// if (num1 > num2) {
//     largerNumber = num1;
//     message = "The first number is larger.";
// } else if (num2 > num1) {
//     largerNumber = num2;
//     message = "The second number is larger.";
// } else {
//     message = "Both numbers are equal.";
// }

// console.log(message);
// console.log(`The larger number is: ${largerNumber || "N/A"}`);

// Qno#3

// var userInput = parseFloat(prompt("Enter a number:"));

// var message;

// if (!isNaN(userInput)) {

//     if (userInput > 0) {
//         message = "The number is positive.";
//     } else if (userInput < 0) {
//         message = "The number is negative.";
//     } else {
//         message = "The number is zero.";
//     }
// } else {
//     message = "Invalid input. Please enter a valid number.";
// }

// console.log(message);

// Qno#4

// var character = 'A'; 

// var isVowel = false;
// var charLower = character.toLowerCase();

// if (charLower === 'a' || charLower === 'e' || charLower === 'i' || charLower === 'o' || charLower === 'u') {
//     isVowel = true;
// }

// console.log(`Is "${character}" a vowel? ${isVowel}`);

// Qno#5

// const correctPassword = "ghafoor121"; 

// const userPassword = prompt("Enter your password:");

// if (userPassword) {
//     console.log("Please enter your password.");
// } else if (userPassword === correctPassword) {
//     console.log("Correct! The password you entered matches the original password.");
// } else {
//     console.log("Incorrect password.");
// }

// Qno#6

// var greeting;
// var hour = 17;
// if(hour < 18){
//     greeting = "Good day";
// }else{
//     greeting = "Good evening";
// }
// alert(greeting)

// Qno#7

// var time = parseInput(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):"));

// if (time >= 0 && time <= 1159) {
//     console.log("Good morning!");
// } else if (time >= 1200 && time <= 1759) {
//     console.log("Good afternoon!");
// } else if (time >= 1800 && time <= 2359) {
//     console.log("Good evening!");
// } else {
//     console.log("Invalid input.");
// }

 // chapter# 12-13 is complete...\


// chapter# 14-16 is start

// Qno#1

// var arr = []
// arr[0] = "Abdul"
// arr[1] = "ghafoor"
// console.log(arr);                                

// Qno#2

// var fruit = ["apple" , "banana" , "orange" , "Mango"];
// console.log(fruit);

// Qno#3

// var numarr = [10 , 20 , 30];
// console.log(numarr);

// Qno#4

// var boolean = [true , fals , true , fals]
// console.log(boolean);

// Qno#5

// var mixedArray = [42, "Hello", true, [1, 2, 3], { key: "value" }];
// console.log(mixedArray);

// Qno#6

// document.write("<h2>Educational Qualifications in Pakistan:</h2>");
// document.write("<ul>");
// ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"].forEach(qualification => document.write("<li>" + qualification + "</li>"));
// document.write("</ul>");

// Qno#7

// var studentNames = ["ali", "hussain", "ahmed"];

// var scores = [420, 380, 450]; 

// var percentages = scores.map(score => (score / 500) * 100);

// document.write("<h2>Student Scores and Percentages:</h2>");
// document.write("<table border='1'>");
// document.write("<tr><th>Student Name</th><th>Score</th><th>Percentage</th></tr>");
// for (let i = 0; i < studentNames.length; i++) {
//     document.write("<tr>");
//     document.write("<td>" + studentNames[i] + "</td>");
//     document.write("<td>" + scores[i] + "</td>");
//     document.write("<td>" + percentages[i].toFixed(2) + "%</td>");
//     document.write("</tr>");
// }
// document.write("</table>");

// Qno#8

// var colors = ["red", "green", "blue"];
// document.write("<b>Original Array:</b> " + colors.join(", ") + "<br>");

// colors.unshift(prompt("Enter color to add to the beginning:"));
// document.write("<b>After adding color to the beginning:</b> " + colors.join(", ") + "<br>");

// colors.push(prompt("Enter color to add to the end:"));
// document.write("<b>After adding color to the end:</b> " + colors.join(", ") + "<br>");

// colors.unshift("yellow", "orange");
// document.write("<b>After adding two more colors to the beginning:</b> " + colors.join(", ") + "<br>");

// colors.shift();
// document.write("<b>After deleting the first color:</b> " + colors.join(", ") + "<br>");

// colors.pop();
// document.write("<b>After deleting the last color:</b> " + colors.join(", ") + "<br>");

// var indexToAdd = prompt("Enter the index to add color:");
// var colorToAdd = prompt("Enter the color to add:");
// colors.splice(indexToAdd, 0, colorToAdd);
// document.write("<b>After adding color at index " + indexToAdd + ":</b> " + colors.join(", ") + "<br>");

// var indexToDelete = prompt("Enter the index to delete color(s):");
// var deleteCount = prompt("Enter how many colors to delete:");
// colors.splice(indexToDelete, deleteCount);
// document.write("<b>After deleting " + deleteCount + " color(s) at index " + indexToDelete + ":</b> " + colors.join(", "));


// Qno#10

// var arraysrc = [320, 230, 480 , 120]
// arraysrc.sort((a, b) => a - b);
// document.write("scores of student:" + "arraysrc <br>")
// document.write("ordered scores of students:" , "arraysrc.sort <br>")

// Qno#11

// let cities = ["karachi", "Quetta", "gawadar", "lahore", "islamabad"];

// let selectedCities = [];

// selectedCities = cities.slice(0, 5);

// console.log("Selected cities:", selectedCities);


// Qno#12

// var arr = ["This", "is", "my", "cat"];
// var result = arr.join(" "); 
// console.log(result); 
