class BankAccount {
    userName: string;
    #userBalance: number;
    constructor(userID: number, userName: string, userBalance: number) {
        Object.defineProperty(this, "userID", {
            value: userID,
            writable: false,
            configurable: false,
            enumerable: true
        });
        this.userName = userName;
        this.#userBalance = userBalance
    }

    addingBalance(money: number) {
        this.#userBalance = this.#userBalance + money
    }

    getBalance() {
        return this.#userBalance
    }

    set addingAmount(amount: number) {
        this.#userBalance = this.#userBalance + amount
    }

    get showBalance() {
        return this.#userBalance
    }
}

const mushfikAccount = new BankAccount(111, 'mushfik', 1000);
console.log(mushfikAccount.getBalance());
mushfikAccount.addingBalance(500);
console.log(mushfikAccount.getBalance());
mushfikAccount.addingAmount = 50
console.log(mushfikAccount.showBalance);



