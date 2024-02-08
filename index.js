////////////////
// // Module 16
////////////////
// ///////////////// Problem 1

// const cashPayment = 1000;
// const orangePrice = 300;
// const applePrice = 400;
// console.log(`Exchange returned: ${cashPayment - (orangePrice + applePrice)}`);

// ///////////////// Problem 2

// const scores = [75.25, 65, 80, 35.45, 99.5];
// let sum = 0;
// for (const score of scores) {
//   sum += score;
// }
// const avg = +(sum / scores.length).toFixed(2);
// console.log(avg);

// ///////////////// Problem 3

// const input = 119;
// const result = input % 5;
// console.log(result);

// ///////////////// Problem 4

// var a = isNaN("11");
// var b = isNaN(2 - 10);
// console.log(`The result of this a and b will be false and false`);
// console.log(a, b);

////////////////
// // Module 17
////////////////
// ///////////////// Problem 1

// const burgerCost = 500;
// let coke = burgerCost >= 500 ? "Free" : "30 Tk";
// console.log(coke);

// ///////////////// Problem 2

// const userWeight = 60;
// const userHeight = 1.778;
// const BMI = userWeight / Math.pow(userHeight, 2);
// console.log(BMI);
// if (BMI < 18.5) {
//   console.log("You are underweight");
// } else if (BMI >= 18.5 && BMI <= 24.9) {
//   console.log("You are normal");
// } else if (BMI >= 25 && BMI <= 29.9) {
//   console.log("You are overweight");
// } else {
//   console.log("You are obese");
// }

// ///////////////// Problem 3

// const examScore = 10;
// if (examScore >= 0 && examScore <= 59) {
//   console.log("F");
// } else if (examScore >= 60 && examScore <= 69) {
//   console.log("D");
// } else if (examScore >= 70 && examScore <= 79) {
//   console.log("C");
// } else if (examScore >= 80 && examScore <= 89) {
//   console.log("B");
// } else if (examScore >= 90 && examScore <= 100) {
//   console.log("A");
// } else {
//   console.log("Invalid score");
// }

// ///////////////// Problem 4

// const yourScore = 81;
// const friendScore = 39;
// if (yourScore > 80) {
//   if (friendScore >= 80) {
//     console.log("Go for a lunch with your friend!");
//   } else if (friendScore >= 60 && friendScore < 80) {
//     console.log("Tell your friend, good luck next time!");
//   } else if (friendScore >= 40 && friendScore < 60) {
//     console.log("Keep your friend's message unseen!");
//   } else {
//     console.log("Block your friend!");
//   }
// } else {
//   console.log("Go to home and sleep and act sad!");
// }

// ///////////////// Problem 5

// const num1 = 450;
// const num2 = 50;
// const result = num1 > num2 ? num1 * 2 : num1 + num2;
// console.log(result);

// ///////////////// Problem 6

// const passengerAge = 60;
// let ticketFare = 800;
// if (passengerAge < 10) {
//   ticketFare = 0;
// } else if (passengerAge >= 60) {
//   ticketFare = ticketFare - ticketFare * 0.15;
// } else if (passengerAge >= 12 && passengerAge <= 25) {
//   ticketFare = ticketFare - ticketFare * 0.5;
// }
// console.log(ticketFare);

////////////////
// // Module 17.5
////////////////
// ///////////////// Problem 1

// const fruits = ["banana", "apple", "orange", "mango", "strawberry"];
// console.log(fruits[3]);
// fruits[2] = "lichi";
// console.log(fruits);

// ///////////////// Problem 2

// const places = ["saint martin", "khagrachori", "kuakata"];
// places.push("cox's bazar");
// places.push("bandorban", "sajeg");
// places.pop();
// console.log(places);

// ///////////////// Problem 3

// const books = [
//   "Iron Flame",
//   "Gothikana",
//   "The Heaven & Earth Grocery Store",
//   "Icebreaker",
//   "Throne of Glass",
//   "Javascript",
// ];
// const javascriptIsPresent = books.includes("Javascript")
//   ? "Present"
//   : "Not present";
// console.log(javascriptIsPresent);

// ///////////////// Problem 4

// const destinations = ["saint martin", "khagrachori", "kuakata"];
// const price = 50;
// const isArray = Array.isArray(price);
// console.log(isArray);

// ///////////////// Problem 5

// const numbers1 = [120, 110, 150];
// const numbers2 = [10, 30, 40, 60, 80];
// const concatArray = numbers1.concat(numbers2);
// console.log(numbers1);
// console.log(numbers2);
// console.log(concatArray);

////////////////
// // Module 18
////////////////
// ///////////////// Problem Break 1

// for (let x = 1; x <= 200; x++) {
//   console.log(x);
//   if (x === 100) break;
// }

// ///////////////// Problem Break 2

// let sum = 0;
// let x = 1;
// while (sum <= 100) {
//   sum += x;
//   x++;
// }
// console.log(sum);

// ///////////////// Problem Break 3

// for (let x = 1; x <= 100; x++) {
//   if (Math.sqrt(x) % 1 === 0) {
//     continue;
//   }
//   console.log(x);
// }

// ///////////////// Problem Continue 1

// for (let x = 1; x <= 40; x++) {
//   if (x % 2 !== 0) continue;
//   console.log(x);
// }

// ///////////////// Problem Continue 2

// for (let x = 55; x <= 85; x++) {
//   if (x % 5 === 0) continue;
//   if (x % 2 !== 0) console.log(x);
// }

// ///////////////// Problem For 1

// for (let x = 0; x < 60; x++) {
//   console.log(
//     `I will invest at least 6 hrs every single day for next ${60 - x} days!`
//   );
// }

// ///////////////// Problem For 2

// for (let x = 61; x <= 100; x++) {
//   if (x % 2 !== 0) console.log(x);
// }

// for (let x = 78; x <= 98; x++) {
//   if (x % 2 === 0) console.log(x);
// }

// ///////////////// Problem For 3

// let sum1 = 0;
// for (let x = 91; x <= 129; x++) {
//   if (x % 2 !== 0) sum1 += x;
// }
// console.log(sum1);

// let sum2 = 0;
// for (let x = 51; x <= 85; x++) {
//   if (x % 2 === 0) sum2 += x;
// }
// console.log(sum2);

// ///////////////// Problem For 4

// for (let x = 1; x <= 10; x++) {
//   console.log(
//     `9 X ${String(x).padStart(2, "0")} =  ${String(9 * x).padStart(2, "0")}`
//   );
// }

// ///////////////// Problem For 5

// for (let x = 81; x >= 65; x--) {
//   console.log(x);
// }

// ///////////////// Problem While 1

// let x = 0;
// while (x < 60) {
//   console.log(
//     `I will invest at least 6 hrs every single day for next ${60 - x} days!`
//   );
//   x++;
// }

// ///////////////// Problem While 2

// let x = 61;
// while (x <= 100) {
//   if (x % 2 !== 0) console.log(x);
//   x++;
// }

// let y = 78;
// while (y <= 98) {
//   if (y % 2 === 0) console.log(y);
//   y++;
// }

// ///////////////// Problem While 3

// let x = 81;
// let sum1 = 0;
// while (x <= 131) {
//   if (x % 2 !== 0) sum1 += x;
//   x++;
// }
// console.log(sum1);

// let y = 206;
// let sum2 = 0;
// while (y <= 311) {
//   if (y % 2 === 0) sum2 += y;
//   y++;
// }
// console.log(sum2);

// ///////////////// Problem While 4

// let x = 1;
// while (x <= 10) {
//   console.log(
//     `9 X ${String(x).padStart(2, "0")} =  ${String(9 * x).padStart(2, "0")}`
//   );
//   x++;
// }

// ///////////////// Problem For 5

// let x = 81;
// while (x >= 65) {
//   console.log(x);
//   x--;
// }

////////////////
// // Module 19
////////////////
// ///////////////// Problem Object 1

// const colors = {
//   red: '#ff0000',
//   green: '#00ff00',
//   blue: '#0000ff',
//   'golden rod': '#daa520',
// };
// console.log(colors['golden rod']);

// ///////////////// Problem Object 2

// const car = {
//   make: 'Toyota',
//   model: 'Corolla',
//   year: 2020,
// };
// car['passenger capacity'] = 5;
// console.log(car);

// ///////////////// Problem Object 3

// const student = {
//   name: 'Hamim Sakep',
//   id: 5421,
//   physics: {
//     subject: 'HSC Physics',
//     author: 'Shahjahan Tapan',
//     marks: 30,
//   },
// };
// console.log(student.physics.marks);

// ///////////////// Problem Object 4

// let student = {
//   name: 'Ariana Grande',
//   age: 21,
//   city: 'Gaibandha',
//   isStudent: true,
// };
// console.log(Object.keys(student).length);

// ///////////////// Problem Object 5

// let myObject = {
//   name: 'John Doe',
//   age: 25,
//   city: 'Dhaka',
//   isStudent: true,
// };
// for (const key in myObject) {
//   console.log(`Key: ${key} | Type: ${typeof myObject[key]}`);
// }

// ///////////////// Problem String 1

// const str =
//   'Books were very scarce and very precious, and only a few men could read them.';
// console.log(str.split('a').length - 1);

// ///////////////// Problem String 2

// const str2 =
//   'Dropping to one of the benches, she opened one of the books and leafed through the colorful pages, pausing when she recognized a plant.';
// console.log(str2.toLowerCase().split('a').length - 1);

// ///////////////// Problem String 3

// const str2 =
//   "That quick beige fox jumped in the air over each thin dog. Look out, I shout, for he's foiled you again, creating chaos!";
// str2.toLowerCase().includes('a') &&
//   str2.toLowerCase().includes('e') &&
//   str2.toLowerCase().includes('i') &&
//   str2.toLowerCase().includes('o') &&
//   str2.toLowerCase().includes('u') &&
//   console.log('This string contains all the vowel');

// ///////////////// Problem String 4

// let str =
//   "That quick beige fox jumped in the air over each thin dog. Look out, I shout, for he's foiled you again, creating chaos!";
// for (const letter of str) {
//   if (str.includes('x')) {
//     str = str.replace('x', 'y');
//   }
//   if (str.includes('x')) {
//     str = str.replace('X', 'Y');
//   }
// }
// console.log(str);

// ///////////////// Problem String 5

// const str =
//   "That quick beige fox jumped in the air over each thin dog. Look out, I shout, for he's foiled you again, creating chaos!";

// const splitArray = str.toLowerCase().split(' ');
// for (let x = 0; x < splitArray.length; x++) {
//   splitArray[x] =
//     splitArray[x].charAt(0).toUpperCase() + splitArray[x].slice(1);
// }
// const strTitleCase = splitArray.join(' ');
// console.log(strTitleCase);

// const str = 'That quick beige fox jumped in the air over each thin dog.';
// const tempArr = str
//   .toLowerCase()
//   .split(' ')
//   .map((word) => {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   });

// const strTitleCase = tempArr.join(' ');
// console.log(strTitleCase);

////////////////
// // Module 19.5
////////////////
// ///////////////// Problem 1

// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// const reversedColors = [];
// for (const color of colors) {
//   reversedColors.unshift(color);
// }
// console.log(reversedColors);

// ///////////////// Problem 2

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);

// ///////////////// Problem 3

// let nicknames = ['Tom', 'Tim', 'Tin', 'Tik'];
// let str = '';
// for (const nickname of nicknames) {
//   str += nickname;
// }
// console.log(str);

// ///////////////// Problem 4

// const statement = 'I am a hard working person';
// const tempArr = [];
// for (const word of statement.split(' ')) {
//   tempArr.unshift(word);
// }
// const reversedStatement = tempArr.join(' ');
// console.log(reversedStatement);

////////////////
// // Module 20
////////////////
// ///////////////// Problem 1

// function multiply(num1, num2, num3, num4) {
//   return num1 * num2 * num3 * num4;
// }
// const result = multiply(4, 5, 2, 6);
// console.log(result);

// ///////////////// Problem 2

// function conditionalMath(num) {
//   return num % 2 !== 0 ? num * 2 : num / 2;
// }
// console.log(conditionalMath(10));
// console.log(conditionalMath(5));

// ///////////////// Problem 3

// function makeAvg(arr) {
//   let temp = 0;
//   for (const item of arr) {
//     temp += item;
//   }
//   return temp / arr.length;
// }
// console.log(makeAvg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// ///////////////// Problem 4

// function countZero(str) {
//   let temp = 0;
//   for (const letter of str) {
//     letter === '0' && temp++;
//   }
//   return temp;
// }
// console.log(countZero('213021301231031231203120'));

// ///////////////// Problem 5

// function oddEven(number) {
//   if (number === 0) return 'Zero';
//   return number % 2 === 0 ? 'Even' : 'Odd';
// }
// console.log(oddEven(10));

////////////////
// // Module 21
////////////////
// ///////////////// Problem 1

// function tempConverter(celsius) {
//   return celsius * (9 / 5) + 32;
// }
// console.log(tempConverter(20));

// ///////////////// Problem 2

// const numbers = [5, 6, 11, 12, 98, 5];
// function numFinder(arr, number) {
//   let temp = 0;
//   for (const item of arr) {
//     item === number && temp++;
//   }
//   return temp;
// }
// console.log(numFinder(numbers, 25));

// ///////////////// Problem 3

// const str =
//   "That quick beige fox jumped in the air over each thin dog. Look out, I shout, for he's foiled you again, creating chaos!";
// function vowelsFinder(str) {
//   const lowerCaseStr = str.toLowerCase();
//   let result = 0;
//   for (let i = 0; i < lowerCaseStr.length; i++) {
//     if (
//       lowerCaseStr[i] === 'a' ||
//       lowerCaseStr[i] === 'e' ||
//       lowerCaseStr[i] === 'i' ||
//       lowerCaseStr[i] === 'o' ||
//       lowerCaseStr[i] === 'u'
//     )
//       result++;
//   }
//   return result;
// }
// console.log(vowelsFinder(str));

// ///////////////// Problem 4

// const str = 'I am learning Programming to become a programmer';
// function longestWordFinder(str) {
//   const arr = str.split(' ');
//   let longest = arr[0];
//   for (const item of arr) {
//     if (item.length > longest.length) longest = item;
//   }
//   return longest;
// }
// console.log(longestWordFinder(str));

// ///////////////// Problem 5

// function randomNumber(lower, upper) {
//   return Math.floor(Math.random() * (upper - lower + 1) + lower);
// }
// console.log(randomNumber(10, 20));

////////////////
// // Module 22
////////////////
// ///////////////// Problem 1

// const numbers = [167, 190, 120, 165, 137];
// const lowest = Math.min(...numbers);
// console.log(lowest);

// ///////////////// Problem 2

// const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
// let lowest = friends[0];
// for (const friend of friends) {
//   if (friend.length < lowest.length) lowest = friend;
// }
// console.log(lowest);

// ///////////////// Problem 3

// function calculateElectronicsBudget(
//   laptopQuantity,
//   tabletQuantity,
//   MobileQuantity
// ) {
//   const price = {
//     laptop: 35000,
//     tablet: 15000,
//     mobile: 20000,
//   };
//   return (
//     price.laptop * laptopQuantity +
//     price.tablet * tabletQuantity +
//     price.mobile * MobileQuantity
//   );
// }
// console.log(calculateElectronicsBudget(1, 2, 1));

// ///////////////// Problem 4

// const phones = [
//   { model: 'PhoneA', brand: 'Iphone', price: 95000 },
//   { model: 'PhoneB', brand: 'Samsung', price: 40000 },
//   { model: 'PhoneC', brand: 'Oppo', price: 26000 },
//   { model: 'PhoneD', brand: 'Nokia', price: 35000 },
//   { model: 'PhoneE', brand: 'Iphone', price: 105000 },
//   { model: 'PhoneF', brand: 'HTC', price: 48000 },
// ];
// function avgPhonePrice(arr) {
//   let total = 0;
//   for (const item of arr) {
//     total += item.price;
//   }
//   return Math.round(total / arr.length);
// }
// console.log(avgPhonePrice(phones));

// ///////////////// Problem 5

// const employees = [
//   { name: 'shahin', experience: 5, starting: 20000, increment: 5000 },
//   { name: 'shihab', experience: 3, starting: 15000, increment: 7000 },
//   { name: 'shikot', experience: 9, starting: 30000, increment: 1000 },
//   { name: 'shohel', experience: 0, starting: 29000, increment: 4000 },
// ];

// let totalSalary = 0;
// for (const employee of employees) {
//   totalSalary += employee.starting + employee.increment * employee.experience;
// }
// console.log(totalSalary);
