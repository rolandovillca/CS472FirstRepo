class CheckingAccount extends Account {
    constructor(number, overdraft) {
        super(number);
        this._overdraft = overdraft;
    }

    getOverdraft() {
        return this._overdraft;
    }

    setOverdraft(value) {
        this._overdraft = value;
    }

    withdraw(amount) {
        if (amount < this._overdraft) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    toString() {
        return "CheckingAccount " + this._number + ": balance " + this._balance;
    }
}