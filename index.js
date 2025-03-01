// Loop through all numbers from 1 to 100.
for (let n = 1; n <= 100; n = n + 1) {
  console.log(n);
}
for (let n = 1; n <= 100; n++) {
	let answer = "";
	if (n % 3 == 0) answer += "Fizz";
	if (n % 5 == 0) answer += "Buzz";
	console.log(answer || n);
  }