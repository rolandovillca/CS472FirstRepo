class SavingAccount extends Account {
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    getInterest() {
        return this._interest;
    }

    setInterest(value) {
        this._interest = value;
    }

    addInterest() {
        this._balance += (this._balance * this._interest)/100;
    }

    toString() {
        return "SavingAccount " + this._number + ": balance " + this._balance;
    }
}