"use strict";
class Payment {
    constructor() {
        this.balance = 500;
    }
    get myBalance() {
        return this.balance;
    }
    set myBalance(value) {
        this.balance = value;
    }
}
const payment = new Payment();
console.log(payment.myBalance);
payment.myBalance = 1000;
console.log(payment.myBalance);
