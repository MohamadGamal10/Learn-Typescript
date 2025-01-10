"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = 0;
        this.owner = "";
        this.balance = 0;
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("amount must be greater than 0");
        }
        this.balance += amount;
    }
}
let account = new Account(1, "ali", 100);
account.deposit(100);
console.log(account.balance);
