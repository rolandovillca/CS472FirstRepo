class Bank {
    constructor() {
        this._accounts = [];
    }

    addAccount() {
        let account = new Account(123);
        this._accounts.push(account);
        return account.getNumber();
    }
    
    addSavingAccount(interest) {
        let savingAccount = new SavingAccount(456, interest);
        this._accounts.push(savingAccount);
        return savingAccount.getNumber();
    }
    
    addCheckingAccount(overdraft) {
        let checkingAccount = new CheckingAccount(789, overdraft)
        this._accounts.push(checkingAccount);
        return checkingAccount.getNumber();
    }

    closeAccount(number) {
        this._accounts = this._accounts.filter((a) => a.getNumber != number);
    }
}