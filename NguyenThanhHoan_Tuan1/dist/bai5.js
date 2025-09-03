"use strict";
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(a) {
        this.balance = this.balance + a;
        console.log(`Balance: ${this.balance}`);
        return this.balance;
    }
    withdraw(b) {
        this.balance = this.balance - b;
        console.log(`Balance: ${this.balance}`);
        return this.balance;
    }
}
var bank = new BankAccount(200000);
bank.deposit(100000);
bank.withdraw(50000);
