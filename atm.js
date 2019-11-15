class Atm {
	constructor() {
		this.cashAtm = [];
		this.sumAtm = 0;
		this.drawCash = 0;
	}
	addMoney(sum, arrBanknote) {
		let tempSum = 0;
		arrBanknote.forEach(function(item) {
			tempSum += item;
		});
		if (tempSum == sum) {
			this.cashAtm = arrBanknote;
			this.sumAtm = sum;
		} else return console.log("Error!");
	}
	showBalance() {
		return (this.sumAtm && this.cashAtm);
	}
	withdrawCash(sum) {
		while (sum > this.drawCash) {
		let newArr = [];
		let arrMax = 0;
		let maxInd = 0;
		if (sum != this.drawCash) {
			arrMax = Math.max(...this.cashAtm);
			maxInd = this.cashAtm.indexOf(arrMax);	
			if (sum > arrMax) {
				this.drawCash += arrMax;
				this.cashAtm.splice(maxInd, 1);
			} else if (sum < arrMax) {
				
				//////////////////////////////
			}
					
			console.log(arrMax, this.cashAtm, "draw", this.drawCash);
			console.log(newArr);
		} 
	}
	}
	
};

class Card {
	constructor() {
		this.sumCard = 0;
	}
	
	addMoney(sum) {
		if (sum >0) this.sumCard = sum;
	}
}

let atm = new Atm();
atm.addMoney(850, [100, 50, 200, 400, 100]);
atm.showBalance();