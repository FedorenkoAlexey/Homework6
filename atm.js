class Atm {
  constructor() {
    this.cashAtm = [];
    this.sumAtm = 0;
  }
  addMoney(sum, arrBanknote) {
    let but5 = document.getElementById("screen");
    let tempSum = 0;
    arrBanknote.forEach(function(item) {
      if (
        item != 50 &&
        item != 100 &&
        item != 200 &&
        item != 500 &&
        item != 1000
      )
        return (but5.innerHTML = "Check summ and banknotes");
      else tempSum += item;
    });
    if (tempSum == sum) {
      this.cashAtm = this.cashAtm.concat(arrBanknote);
      this.sumAtm += sum;
      but5.innerHTML =
        "Added to ATM: " + sum + " [ " + arrBanknote.join(" ") + " ] ";
    } else return (but5.innerHTML = "Check summ and banknotes");
    form.reset();
  }
  showBalance() {
    // console.log(this.cashAtm);
    let but6 = document.getElementById("screen");
    return (but6.innerHTML =
      "Balance ATM: " + this.sumAtm + " [" + this.cashAtm.join(" ") + "] ");
  }
  withdrawCash(card, sum) {
    let but2 = document.getElementById("screen");
    let drawCash = 0;
    let banknotes = [];
    let newArr = [];
    let newSum = sum;
    let sortArr = this.cashAtm
      .slice()
      .sort(function(a, b) {
        return a - b;
      })
      .reverse();
    if (card.sumCard < sum)
      return (but2.innerHTML = "Not enough money in Card");
    if (sum > this.sumAtm) return (but2.innerHTML = "Not enough money in ATM");
    else if (sum <= 0) but2.innerHTML = "Enter positive number";
    for (let i = 0; i <= sortArr.length; i++) {
      if (newSum >= sortArr[i]) {
        drawCash += sortArr[i];
        newSum -= sortArr[i];
        banknotes.push(sortArr[i]);
        sortArr.splice(i, 1, 0);
        if (drawCash == sum) {
          this.sumAtm -= drawCash;
          card.sumCard -= sum;
          for (let i = 0; i <= sortArr.length; i++) {
            if (sortArr[i] != 0) newArr.push(sortArr[i]);
          }
          this.cashAtm = newArr;
          form.reset();
          return (but2.innerHTML =
            "Great, here is you money: " +
            drawCash +
            " [ " +
            banknotes.join(" ") +
            " ] ");
        }
      } else if (sum < sortArr[i]) continue;
    }
    if (drawCash < sum) {
      let res = sum - drawCash;
      return (but2.innerHTML =
        "There is no " + res + " in ATM. Choose another summ");
    }
  }
}

class Card {
  constructor() {
    this.sumCard = 0;
  }

  addMoney(sum) {
    let but1 = document.getElementById("screen");
    but1.innerHTML = "You added to card: " + sum;
    form.reset();

    if (sum > 0) this.sumCard += sum;
    else but1.innerHTML = "Enter positive number";
  }
  showBalance() {
    let but3 = document.getElementById("screen");
    return (but3.innerHTML = "Balance Card: " + this.sumCard);
  }
}

let atm = new Atm();
let card = new Card();
