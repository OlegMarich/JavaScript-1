const questions = [
	{
		id: 5.1_1,
		question: "Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.",
		checkFunction: function () {
			function getSeason(season) {
				if (monthNumber >= 3 && monthNumber <= 5) season = 'Весна'
				else if (monthNumber >= 6 && monthNumber <= 8) season = 'Літо'
				else if (monthNumber >= 9 && monthNumber <= 11) season = 'Осінь'
				else season = 'Зима'
				return season
			}

			let monthNumber = parseInt(prompt('Введіть вибраний Вами місяць (від 1 до 12)'))
			let divisionsOfTheYear = getSeason(3)

			document.write(
				`<div>Вибраний Вами місяць означає що зараз на дворі: ${divisionsOfTheYear}</div> 
				<div><a href="../components/lesson7.html">Повернутися до уроку</a></div>`)
		}
	},
	{
		id: 5.1_2,
		question: "Задача 3. Створити окремі функції, які для 4 чисел знаходять: 1)суму; 2)добуток;	3)середнє арифметичне;	4)мінімальне значення.",
		checkFunction: function () {
			function getSum(a, b, c, d) {
				let sum = a + b + c + d;
				return sum
			}

			function getProduct(a, b, c, d) {
				let product = a * b * c * d;
				return product
			}

			function getAverage(a, b, c, d) {
				let average = (a + b + c + d) / 4;
				return average
			}

			function getMin(a, b, c, d) {
				let min = Math.min(a, b, c, d);
				return min
			}

			let a = parseFloat(prompt('Перше число'))
			let b = parseFloat(prompt('Друге число'))
			let c = parseFloat(prompt('Третє число'))
			let d = parseFloat(prompt('Четверте число'))
			
			let sum = getSum(a, b, c, d)
			let product = getProduct(a, b, c, d)
			let average = getAverage(a, b, c, d)
			let min = getMin(a, b, c, d)
		
			document.write(
				`<div> Ваші числа: ${a}, ${b}, ${c}, ${d} </br>
				Сума Ваших чисел: ${sum}, добуток: ${product}, середнє арифметичне: ${average}, мінімальне значення: ${min} </div>
				<div><a href="../components/lesson7.html">Повернутися до уроку</a></div>`)
		}
	},
	// {
	// 	id: 5.1_,
	// 	question: "",
	// 	checkFunction: function () {
	// 		//alert(resultMessage)
	// 		//document.write(`<div> ${}</div><div><a href="../components/lesson7.html">Повернутися до уроку</a></div>`)
	// 	}
	// },

	// ======================================
	{
		id: 5.2_1,
		question: "Задача 1. Створити функцію, яка за номером місяця повертає його назву.",
		checkFunction: function () {
			function getMonthName(monthNumber) {
				let monthName
				if (monthNumber === 1) monthName = 'Січень'
				if (monthNumber === 2) monthName = 'Лютий'
				if (monthNumber === 3) monthName = 'Березень'
				if (monthNumber === 4) monthName = 'Квітень'
				if (monthNumber === 5) monthName = 'Травень'
				if (monthNumber === 6) monthName = 'Червень'
				if (monthNumber === 7) monthName = 'Липень'
				if (monthNumber === 8) monthName = 'Серпень'
				if (monthNumber === 9) monthName = 'Вересень'
				if (monthNumber === 10) monthName = 'Жовтень'
				if (monthNumber === 11) monthName = 'Листопад'
				if (monthNumber === 12) monthName = 'Грудень'
				return monthName
			}

			let monthNumber = parseInt(prompt('Введіть номер місяця (від 1 до 12)'))
			let monthName = getMonthName(monthNumber)

			document.write(
				`<div> Вибраний Вами місяць: ${monthName}</div>
				<div><a href="../components/lesson7.html">Повернутися до уроку</a></div>`
			)
		}
	},
	{
		id: 5.2_2,
		question: "Задача 2. Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.",
		checkFunction: function () {
			function getWorkingPeriod() {
				let dayType
				if (dayNumber >= 6 && dayNumber <= 7) dayType = 'Вихідний'
				else dayType = 'Робочий день'
				return dayType
			}

			let dayNumber = parseInt(prompt('Оберіть Ваш день (від 1 до 7)'))
			let dayType = getWorkingPeriod()

			document.write(
				`<div> Ваш день є ${dayType}</div>
				<div><a href="../components/lesson7.html">Повернутися до уроку</a></div>`
			)
		}
	},
	// {
	// 	id: 5.2_,
	// 	question: "",
	// 	checkFunction: function () {
	// 		//alert(resultMessage)
	// 		//document.write(`<div> ${}</div><div><a href="../components/lesson7.html">Повернутися до уроку</a></div>`)
	// 	}
	// },

	//========================================
	{
		id: 5.3_1,
		question: "Знайти суму трьох чисел",
		checkFunction: function () {
			function getSum(num1, num2, num3) {
				let sum = num1 + num2 + num3
				return sum
			}
			let a = parseFloat(prompt('Перше число'))
			let b = parseFloat(prompt('Друге число'))
			let c = parseFloat(prompt('Третє число'))
			let s = getSum(a, b, c)
			//alert(resultMessage)
			document.write(
				`Сума чисел = ${s} 
				<a href="../components/lesson7.html">Повернутися до уроку</a>`
			)
		}
	},
	{
		id: 5.3_2,
		question: "Знайти вартість оренди авто за заданою вартістю на місяць і кількістю місяців",
		checkFunction: function () {
			function getTotalRentalCost(costPerMonth, numberOfMonth) {
				return costPerMonth * numberOfMonth
			}
			let costPerMonth = parseFloat(prompt('Вартість за місяць'))
			let numberOfMonth = parseFloat(prompt('Скільки місяців?'))

			let money = getTotalRentalCost(costPerMonth, numberOfMonth)

			document.write(
				`Загальна вартість оренди = ${money}
				<a href="../components/lesson7.html">Повернутися до уроку</a>`
			)
		}
	},
	{
		id: 5.3_3,
		question: "Знайти прибуток банку при купівлі та реалізації доларів",
		checkFunction: function () {
			function getBankProfit(dollarBuyRate, dollarSaleRate, dollarAmount) {
				return (dollarSaleRate - dollarBuyRate) * dollarAmount
			}

			let dollarBuyRate = parseFloat(prompt('Курс купівлі'))
			let dollarSaleRate = parseFloat(prompt('Курс продажу'))
			let dollarAmount = parseFloat(prompt('Кількість долларів'))

			let profit = getBankProfit(dollarBuyRate, dollarSaleRate, dollarAmount)
			//alert(resultMessage)
			document.write(
				`Заробіток банку становить ${profit}`
					`<a href="../components/lesson7.html">Повернутися до уроку</a>`
			)
		}
	},
	{
		id: 5.3_4,
		question: "Знайти вартісь путівки на вказану кількість днів (вказано вартість проживання, харчування, комплекса процедур)",
		checkFunction: function () {
			function getTripCost(livingCost, foodCost, proceduresCost, daysNumber) {
				return (livingCost + foodCost + proceduresCost) * daysNumber
			}
			let livingCost = parseFloat(prompt('Вартість проживання'))
			let foodCost = parseFloat(prompt('Вартість харчування'))
			let proceduresCost = parseFloat(prompt('Вартість комплекса процедур'))
			let daysNumber = parseInt(prompt('Період нроживання(кількість днів)'))

			let total = getTripCost(livingCost, foodCost, proceduresCost, daysNumber)

			document.write(
				`Путівка коштує = ${total} 
				<a href="../components/lesson7.html">Повернутися до уроку</a>`
			)
		}
	},
	{
		id: 5.3_5,
		question: "Задано ширину елемента у відсотках та ширину контейнера у пікселях. Визначити ширину елемента у пікселях",
		checkFunction: function () {
			function getElementWidthInPx(containerWidthPx, elementWidthPercent) {
				return containerWidthPx * elementWidthPercent / 100
			}
			const containerWidthPx = parseFloat(prompt('Введіть ширину контейнера (px)'))
			const elementWidthPercent = parseFloat(prompt('Введіть ширину елемента у відсотках'))
			const elementWidthInPx = getElementWidthInPx(containerWidthPx, elementWidthPercent)

			document.write(
				`Ширина елемента = ${elementWidthInPx}px
				<a href="../components/lesson7.html">Повернутися до уроку</a>`
			)
		}
	},
	{
		id: 5.3_6,
		question: "Задано ширину контейнера у пікселях та мінімальну ширину K елементів. Визначити чи можна розмістити елементи в одному рядку",
		checkFunction: function () {
			function isSpaceAvalible(elementWidth, containerWidth, elementsNumber) {
				return elementWidth * elementsNumber <= containerWidth
			}

			let elementWidth = parseFloat(prompt('Ширина елемента (px)'))
			let containerWidth = parseFloat(prompt('Ширина контейнера (px)'))
			let elementsNumber = parseInt(prompt('Кількість елементів'))

			if (isSpaceAvalible(elementWidth, containerWidth, elementsNumber))
				alert('Помістяться')
			else alert('Не помістяться')
			//document.write(`${}`)
		}
	},
	{
		id: 5.3_7,
		question: "Задано показники таймера відліку. Знайти колір, який треба застосувати для його виведення (100 - 80 зелений, 79 - 30 жовтий, 29 - 0 червоний).",
		checkFunction: function () {
			function getTimerColor(timerValve) {
				let color
				if (timerValve >= 80) color = 'green'
				else if (timerValve >= 30) color = 'yellow'
				else color = 'red'
				return color
			}

			const timerValve = parseInt(prompt('Які показники таймера?'))
			const timeColor = getTimerColor(timerValve)

			document.write(
				`<div style="background-color:${timeColor}; width:${timerValve}%">${timerValve}</div>
				<a href="../components/lesson7.html">Повернутися до уроку</a>`
			)
		}
	},
	{
		id: 5.3_8,
		question: "Двоє гравців кидають два рази кубик і визначається загальна кількість балів. Визначити переможця",
		checkFunction: function () {
			function getRandomeScore(edgeNumber) {
				return 1 + Math.floor(Math.random() * edgeNumber)
			}
			function getTotalPlayerScore(edgeNumber) {
				let score1 = getRandomeScore(edgeNumber)
				let score2 = getRandomeScore(edgeNumber)
				return score1 + score2
			}

			let edgeNumber = parseInt(prompt('Скільки граней у кубика'))

			let player1ScoreTotal = getTotalPlayerScore(edgeNumber)
			let player2ScoreTotal = getTotalPlayerScore(edgeNumber)

			alert(
				`Релультат першого гравця :${player1ScoreTotal},  Результат другого гравця:${player2ScoreTotal}`
			)

			if (player1ScoreTotal > player2ScoreTotal) alert('Виграв перший гравець')
			else if (player1ScoreTotal < player2ScoreTotal) alert('Виграв другий гравець')
			else alert('Нічия')
			//document.write(`${}<a href="../components/lesson7.html">Повернутися до уроку</a>`)
		}
	},
	// {
	// 	id: 5.3_,
	// 	question: "",
	// 	checkFunction: function () {
	// 		//alert(resultMessage)
	// 		//document.write(`${}<a href="../components/lesson7.html">Повернутися до уроку</a>`)
	// 	}
	// },
];

function showQuestion(questionId) {
	const questionObj = questions.find(question => question.id === questionId);
	if (questionObj) {
		questionObj.checkFunction();
	} else {
		document.getElementById('question-content').innerText = "Це питання відсутнє";
	}
}