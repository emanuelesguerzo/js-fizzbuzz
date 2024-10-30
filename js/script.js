const maxNum = parseInt(prompt("Quanti numeri vuoi stampare?"));
const fizzWord = "Fizz";
const buzzWord = "Buzz";



for (let i = 1; i <= maxNum; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)){
        console.log(fizzWord + buzzWord);
    } else if (i % 3 === 0) {
		console.log(fizzWord);
	} else if (i % 5 === 0) {
		console.log(buzzWord);
	} else {
        console.log(i);
    }
}

