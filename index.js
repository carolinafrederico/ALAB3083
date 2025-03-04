// // Loop through all numbers from 1 to 100.
// for (let n = 1; n <= 100; n = n + 1) {
//   console.log(n);
// }
// // log FizzBuzz
// for (let n = 1; n <= 100; n++) {
// 	let answer = "";
// 	if (n % 3 == 0) answer += "Fizz";
// 	if (n % 5 == 0) answer += "Buzz";
// 	console.log(answer || n);
//   }

  // Feeling Loopy
  const inputStr = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
  const strRows = inputStr.split("\n");
  for (let i = 0; i <= strRows.length-1; i++) {
	const cell = strRows[i].split(",");
	console.log(cell[0], cell[1], cell[2], cell[3]);
  }
