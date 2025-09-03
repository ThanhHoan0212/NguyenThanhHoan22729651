class BankAccount{
    balance: number

    constructor(balance: number){
        this.balance=balance
    }

    public deposit(a: number): number{
        this.balance = this.balance + a
        console.log(`Balance: ${this.balance}`)
        return this.balance
    }
    public withdraw(b: number): number{
        this.balance = this.balance - b
        console.log(`Balance: ${this.balance}`)
        return this.balance
    }
}

var bank = new BankAccount(200000)

bank.deposit(100000)
bank.withdraw(50000)