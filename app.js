// CHAPTER 17 TO 20

// ANSWER NO: 01
// var arr = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ];

// ANSWER NO:02
// var arr = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ];
// // var new_arr = (arr.join(''));
// for (var i = 0; i < 3; i++) {
//   document.write(`${arr[i]}<br>`);
// }

// ANSWER NO:03
// for(let i = 1; i <= 10; i++){
//   document.write(`${i}<br>`);
// }

// ANSWER NO:04
// let table = +prompt("Enter a number to show its Multiplication table.."),
//   count = +prompt("Enter a length Multiplication table.."),
//   result;
// for (let i = 1; i <= count; i++) {
//   result = table * i;
//   document.write(`${table} x ${i} = ${result}<br>`);
// }

// ANSWER NO:05
// let fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
// for (let i = 0; i < 5; i++) {
//   document.write(`${fruits[i]}<br>`);
// }
// for (let i = 0; i < 5; i++) {
//   document.write(`Element at index ${i} is ${fruits[i]} <br>`);
// }

// ANSWER NO:06
// document.write("Counting:<br> ");
// for (let i = 1; i <= 15; i++) {
//   document.write(`${i},`);
// }
// document.write("<br>Reverse Counting:<br> ");
// for (let i = 10; i >= 1; i--) {
//   document.write(`${i},`);
// }
// document.write("<br>Even:<br> ");
// for (let i = 0; i <= 10; i++) {
//   document.write(`${i * 2},`);
// }
// document.write("<br>Odd:<br>");
// for (let i = 0; i <= 10; i++) {
//   document.write(`${i + i + 1},`);
// }
// document.write("<br>Series:<br>");
// for(let i = 1; i <= 10; i++){
//   document.write(`${i * 2}K ,`)
// }

// ANSWER NO:07
// let arr = ["Cake", "Applepie", "Cookie", "Chips", "Patties"];
// let search = prompt(
//   "Welcome to ABC Bakery, What do you want to order Sir/Mam.."
// );
// if (
//   search == "Cake" ||
//   search == "cake" ||
//   search == "Applepie" ||
//   search == "applepie" ||
//   search == "Chips" ||
//   search == "chips" ||
//   search == "Patties" ||
//   search == "patties" ||
//   search == "Cookie" ||
//   search == "cookie"
// ) {
//   alert(`${search} is available in our bakery..`);
// } else {
//   alert(`We are Sorry! ${search} is not available in our Bakery..`);
// }

// ANSWER NO:08
// let num = [24, 53, 78, 91, 12],
//   largeNum;
// largeNum = Math.max(...num);
// document.write(`Array items ${num}<br>`);
// document.write(`The largest Number is: ${largeNum}`);

// ANSWER NO:09
// let num = [24, 53, 78, 91, 12],
//   largeNum;
// largeNum = Math.min(...num);
// document.write(`Array items ${num}<br>`);
// document.write(`The smallest Number is: ${largeNum}`);

// ANSWER NO:10
// for (let i = 1; i <= 20; i++) {
//   document.write(`${i * 5} `);
// }

// <<<<<<   CHAPTER 21 TO 25  >>>>>>

// ANSWER NO: 01
// let firstName = prompt("Enter your first name.."),
//   lastName = prompt("Enter your last name.."),
//   fullName;
// fullName = firstName + lastName;
// alert(`Welcome! ${fullName}`);

// ANSWER NO: 02
// let mobile = prompt("Enter the name of your favourite mobile phone.."), inputLength = mobile.length;
// alert(`The lenght of your input is ${inputLength}`);

// ANSWER NO: 03
// let str = "Pakistani", strLength;
// strLength = str.indexOf("n");
// document.write(`The string is: ${str}`);
// document.write(`<br>The index of "n" is: ${strLength}`);

// ANSWER NO: 04
// let str = "Hello World", strLast;
// strLast = str.lastIndexOf("l");
// alert(`Last index of letter "l" is: ${strLast}`);

// ANSWER NO: 05
// let str = "Pakistani", char;
// char = str.charAt(3);
// alert(char);

// ANSWER NO: 06
// let firstName = prompt("Enter your first name..");
// let lastName = prompt("Enter your last name..");
// let fullName = firstName.concat(" ",lastName);
// alert(`Welcome! ${fullName}`);

// ANSWER NO: 07
// let str = "Hyderabad",
//   result;
// document.write(`Before Replacement: ${str}`);
// result = str.replace("Hyder", "Islam");
// document.write(`<br>After replacement: ${result}`);

// ANSWER NO: 08
// let str = "Ali and Sami are the best friends. They play Cricket and Football together", result;
// alert(str);
// result = str.replace(/and/gi, "&");
// alert(result);

// ANSWER NO: 09
// let str = "472",
//   result;
// document.write(`value: ${str}<br> Type: ${typeof str}`);
// result = +str;
// document.write(`<br><br>value: ${result}<br> Type: ${typeof result}`);

// ANSWER NO: 10
// let input = prompt("Enter any sentence in Lowercase..");
// alert(`User input: "${input}"`);
// let result = input.toUpperCase();
// alert(`Output: ${result}`)

// ANSWER NO: 11
// let input = prompt("Enter any word..");
// alert(`User input: "${input}"`);
// let result = input.charAt(0).toUpperCase() + input.slice(1);
// alert(`Output: ${result}`)

// ANSWER NO: 12
// let num = 35.36;
// document.write(`Number: ${num}`);
// num = num.toString().replace(".", "");
// document.write(`<br>Result: ${num}`);

// ANSWER NO: 13
// let input = prompt("Enter a username..");
// for (let i = 0; i < input.length; i++) {
//   if (
//     input.charAt(i) == "@" ||
//     input.charAt(i) == "," ||
//     input.charAt(i) == "." ||
//     input.charAt(i) == "!"
//   ) {
//     alert("The username cannot contain these symbols (@ , . !)");
//   }
// }
// alert("Your username is " + input)

// ANSWER NO: 14
// let arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt(
//   "Welcome to ABC Bakery. What do you want to order Sir/Ma'am..?"
// );
// let lower = userInput.toLowerCase();

// if (lower.indexOf(userInput) !== -1) {
//   alert(`${userInput} is available in our bakery`);
// } else {
//   alert(`${userInput} is not available in our bakery `);
// }

// ANSWER NO: 15


