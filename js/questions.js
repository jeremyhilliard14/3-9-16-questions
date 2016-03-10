// var questions = [
// 	{
// 		question: "What does HTML mean?",
// 		answer: "Hyper Text Markup Language",
// 		difficulty: 1
// 	},

// 	{
// 		question: "What does CSS mean?",
// 		answer: "Cascading Style Sheets",
// 		difficulty: 1
// 	},

// 	{
// 		question: "An element that is positioned absolutely must be inside an element with a position of what?",
// 		answer: "Relative",
// 		difficulty: 4
// 	},

// 	{
// 		question: "What does box-sizing: border-box do?",
// 		answer: "It keeps the over-all dimensions of the box the same when adding padding.  It pushes the content in rather than out.",
// 		difficulty: 3
// 	},

// 	{
// 		question: "What does it mean to make a site responsive?",
// 		answer: "The site will size correctly as the screen size becomes smaller/larger.",
// 		difficulty: 3
// 	},

// 	{
// 		question: "What is targeted with a # in css?",
// 		answer: "An id.",
// 		difficulty: 1
// 	},

// 	{
// 		question: "What is targeted with a '.' in css?",
// 		answer: "A class.",
// 		difficulty: 1
// 	},

// 	{
// 		question: "What is in the center of the box model?",
// 		answer: "Content.",
// 		difficulty: 2
// 	},

// 	{
// 		question: "What is needed at the top of an HTML document?",
// 		answer: "<!DOCTYPE html>",
// 		difficulty: 2
// 	},

// 	{
// 		question: "How do you display an alert with a string in javascript?",
// 		answer: "alert('String')",
// 		difficulty: 1
// 	}
// ]

// var theClass = [
// 	"Tristan",
// 	"Josh",
// 	"Bogdan",
// 	"Laz",
// 	"Keith",
// 	"Will",
// 	"Curtis",
// 	"Joe",
// 	"Koshan",
// 	"Patrick",
// 	"Jon",
// 	"Jeremy"	
// ];

// //console.log(theClass);


// //console.log(questions);
// // for(i=0; i<questions.length; i++){
// // 	console.log(questions[i].question);
// // }


// function ClassQuizItem(parameter1, parameter2, parameter3){
// 	this.question = parameter1;
// 	this.answer = parameter2;
// 	this.difficulty = parameter3;
// }

// var question = new ClassQuizItem("What does HTML stand for?", "Hyper Text Markup Language", 1)
// //console.log(question.answer);

// var questionArray = [];

// questionArray.push(new ClassQuizItem("What does HTML mean", "Hyper Text Markup Language", 1));
// questionArray.push(new ClassQuizItem("What does CSS mean", "Cascading Style Sheets", 1));
// questionArray.push(new ClassQuizItem("An element that is positioned absolutely must be inside an element with a position of what", "Relative", 4));
// questionArray.push(new ClassQuizItem("What does box-sizing: border-box do", "It keeps the over-all dimensions of the box the same when adding padding.  It pushes the content in rather than out.", 3));
// questionArray.push(new ClassQuizItem("What does it mean to make a site responsive", "It provides optimal viewing on multiple devices", 3));
// questionArray.push(new ClassQuizItem("What is targeted with a # in css", "An id.", 1));
// questionArray.push(new ClassQuizItem("What is targeted with a '.' in css", "A class.", 1));
// questionArray.push(new ClassQuizItem("What is in the center of the box model", "Content.", 2));
// questionArray.push(new ClassQuizItem("What is needed at the top of an HTML document", "<!DOCTYPE html>", 2));
// questionArray.push(new ClassQuizItem("How do you display an alert with a string in javascript", "alert('String')", 1));

// //console.log(questionArray);

// //for(i=0; i<questionArray.length; i++){
// 	// var rand = Math.floor(Math.random() * questionArray.length);
// 	// var rand2 = Math.floor(Math.random() * theClass.length);
// 	// document.getElementById('question-text').innerHTML = questionArray[rand].question + ', ' + ' ' + theClass[rand2] + '?';
// //}

// function askQuestion(){
// 	var rand = Math.floor(Math.random() * questionArray.length);
// 	var rand2 = Math.floor(Math.random() * theClass.length);
// 	document.getElementById('question-text').innerHTML = questionArray[rand].question + ', ' + ' ' + theClass[rand2] + '?';
// }
//constructor for a business that has plans for websites
function Plan(name, price, space, transfer, pages, discountMonths){
	this.name = name;
	this.price = price;
	this.space = space;
	this.transfer = transfer;
	this.pages = pages;
	this.discountMonths = discountMonths;
	this.calcAnnual = function(percentIfDisc){
		var bestPrice = price;
		var currDate = new Date();
		var currMonth = currDate.getMonth();
		for(i=0; i<this.discountMonths.length; i++){
			if(discountMonths[i]==currMonth){
				bestPrice = price * percentIfDisc;
				break;
			}
		}
		return bestPrice * 12;
	}
};

var plan1 = new Plan("Basic", 99, 100, 1000, 10, [0, 1]);
var plan2 = new Plan("Premium", 199, 500, 5000, 50, [2, 3]);
var plan3 = new Plan("Diamond", 299, 1000, 2000, 500, [4, 5]);

console.log(plan1);
console.log(plan2);
console.log(plan3);
