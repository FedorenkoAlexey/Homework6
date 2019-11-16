class Atm {
  constructor() {
    this.cashAtm = [100, 200, 500, 100, 1000, 200, 50];
    this.sumAtm = 2150; // сумма
    // this.drawCash = 0; // сумма выдана на руки.
  }
  addMoney(sum, arrBanknote) {
    let tempSum = 0;
    arrBanknote.forEach(function(item) {
      tempSum += item;
    });
    if (tempSum == sum) {
      this.cashAtm = this.cashAtm.concat(arrBanknote);
      this.sumAtm += sum;
    } else return console.log("Error!");
  }
  showBalance() {
    console.log(this.cashAtm);
    let but6 = document.getElementById("screen");
    return (but6.innerHTML = this.sumAtm + "[" + this.cashAtm + "]");
  }
  withdrawCash(card, sum) {
    let drawCash = 0;
    let banknotes = [];
    let newSum = sum;
    let sortArr = this.cashAtm
      .slice()
      .sort(function(a, b) {
        return a - b;
      })
      .reverse();
    if (card.sumCard < sum) return console.log("Not enought money in Card");
    if (sum > this.sumAtm || sum < 0) return console.log("Not enought money");
    for (let i = 0; i <= sortArr.length; i++) {
      if (newSum >= sortArr[i]) {
        drawCash += sortArr[i];
        newSum -= sortArr[i];
        banknotes.push(sortArr[i]);
        sortArr.splice(i, 1, 0);
        if (drawCash == sum) {
          this.cashAtm = sortArr;
          this.sumAtm -= drawCash;
          card.sumCard -= sum;
          return console.log("Good", drawCash, banknotes);
        }
      } else if (sum < sortArr[i]) continue;
    }
    if (drawCash < sum)
      return console.log("NO", sum, this.cashAtm, "draw", drawCash, sortArr);
  }
}

class Card {
  constructor() {
    this.sumCard = 0;
  }

  addMoney(sum) {
    if (sum > 0) this.sumCard += sum;
  }
  showBalance() {
    return this.sumCard;
  }
}

let atm = new Atm();
let card = new Card();

card.addMoney(1000);

// atm.addMoney(950, [100, 50, 200, 500, 100]);
// atm.showBalance(); // наличие денег в АТМ
// atm.withdrawCash(card, 800); // снятие денег с АТМ и карты

// card.addMoney()  // деньги на карту
// card.showBalance()  // баланс карты
