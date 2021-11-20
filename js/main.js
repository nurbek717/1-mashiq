/////// 1-masiq ___________________________________________________
var elForm = document.querySelector(".list")

function sumInput() {
	var numbers = [];
	var inPrompy = prompt("Faqat son kiriting:");
	numbers.push(inPrompy);
	
	for (var item of numbers) {
		item = Number(item)
		
		if(isNaN(item) || item <= 0 ) {
			function numbersAdd(numberContent) {
				var result = "";

				for (var namber of numberContent) {
					result = (result)/1 +   (namber)/1;
				}

    console.log([result]);
				return result
				
			}
			numbers.pop(addNumber);
		} else if(item >= 0) {
			var addNumber = prompt("Faqat son kiriting:");
			numbers.push(addNumber);
		}
		
	}
	elForm.textContent = (numbersAdd(numbers)) + ": Jami son qiymati";
	
	
}
var inputSum = sumInput();