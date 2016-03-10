function Plan(name, price, space, transfer, pages, discountMonths){
	this.name = name;
	this.price = price;
	this.space = space;
	this.transfer = transfer;
	this.pages = pages;
	this.discountMonths = discountMonths;
};

Plan.prototype.calcAnnual = function(percentIfDisc){
	var bestPrice = this.price;
	var currDate = new Date();
	var currMonth = currDate.getMonth();
		for(i=0; i<this.discountMonths.length; i++){
			if(this.discountMonths[i]==currMonth){
				bestPrice = this.price * percentIfDisc;
			break;
 			}
	 	}
	 	return bestPrice * 12;
	 
};

var plan1 = new Plan("Basic", 99, 100, 1000, 10, [0, 1]);
var plan2 = new Plan("Premium", 199, 500, 5000, 50, [2, 3]);
var plan3 = new Plan("Diamond", 299, 1000, 2000, 500, [4, 5]);

console.log(plan1);
console.log(plan2);
console.log(plan3);
