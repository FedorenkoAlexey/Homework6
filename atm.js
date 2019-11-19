class Atm {
  constructor() {
    this.cashAtm = [];
    this.sumAtm = 0;
  }
  reset() {
    const but4 = document.getElementById("form").reset();
  }
  addAtm() {
    let sum1 = parseInt(document.getElementById("atm-cash").value);
    let arr1 = document
      .getElementById("atm-bills")
      .value.split(",")
      .map(Number);
    return this.addMoney(sum1, arr1);
  }

  drawMoney(card) {
    let card1 = card;
    let sum1 = parseInt(document.getElementById("atm-cash").value);
    return this.withdrawCash(card1, sum1);
  }

  addMoney(sum, arrBanknote) {
    const but5 = document.getElementById("screen");
    let tempSum = 0;
    let arrPrint = arrBanknote.join(" ");
    arrBanknote.forEach(item => {
      if (
        item !== 50 &&
        item !== 100 &&
        item !== 200 &&
        item !== 500 &&
        item !== 1000
      ) {
        return (but5.innerHTML = "Check summ and banknotes.");
      } else tempSum += item;
    });
    if (tempSum === sum) {
      this.cashAtm = this.cashAtm.concat(arrBanknote);
      this.sumAtm += sum;
      but5.innerHTML = "Added to ATM: " + sum + " [ " + arrPrint + " ] ";
    } else {
      return (but5.innerHTML = "Check summ and banknotes");
    }
    this.reset();
  }
  showBalance() {
    let printCashAtm = this.cashAtm.join(" ");
    const but6 = document.getElementById("screen");
    return (but6.innerHTML =
      "Balance ATM: " + this.sumAtm + " [" + printCashAtm + "] ");
  }
  withdrawCash(card, sum) {
    const but2 = document.getElementById("screen");
    let drawCash = 0;
    let banknotes = [];
    let printBanknotes = "";
    let newArr = [];
    let newSum = sum;
    let sortArr = this.cashAtm
      .slice()
      .sort((a, b) => a - b)
      .reverse();

    if (card.sumCard < sum) {
      return (but2.innerHTML = "Not enough money in Card");
    }
    if (sum > this.sumAtm) {
      return (but2.innerHTML = "Not enough money in ATM");
    } else if (sum <= 0) {
      but2.innerHTML = "Enter positive number";
    }
    for (let i = 0; i <= sortArr.length; i++) {
      if (newSum >= sortArr[i]) {
        drawCash += sortArr[i];
        newSum -= sortArr[i];
        banknotes.push(sortArr[i]);
        sortArr.splice(i, 1, 0);

        if (drawCash === sum) {
          this.sumAtm -= drawCash;
          card.sumCard -= sum;
          for (let i = 0; i <= sortArr.length; i++) {
            if (sortArr[i] !== 0) {
              newArr.push(sortArr[i]);
            }
          }
          this.cashAtm = newArr;
          this.reset();
          printBanknotes = banknotes.join(" ");
          return (but2.innerHTML =
            "Great, here is you money: " +
            drawCash +
            " [ " +
            printBanknotes +
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
  addToCard() {
    const sum1 = parseInt(document.getElementById("atm-cash").value);
    return this.addMoney(sum1);
  }

  addMoney(sum) {
    const but1 = document.getElementById("screen");
    but1.innerHTML = "You added to card: " + sum;
    document.getElementById("form").reset();

    if (sum > 0) {
      this.sumCard += sum;
    } else {
      but1.innerHTML = "Enter positive number";
    }
  }
  showBalance() {
    const but3 = document.getElementById("screen");
    return (but3.innerHTML = "Balance Card: " + this.sumCard);
  }
}

let atm = new Atm();
let card = new Card();
