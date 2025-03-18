const makeChange = (c) => {
const result={
	q:0,
	d:0,
	n:0,
	p:0,
};
	for(const coin in coins){
		while (amount>=coins[coin]) {
			amount-=coins[coin];
			result[coin]++;
		}
	}
	return result; 
  // your name here
};
console.log(makeChange);

// Do not the change the code below
// const c = prompt("Enter c: ");
// alert(JSON.stringify(makeChange(c)));
