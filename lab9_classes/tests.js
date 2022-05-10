// mocha.setup("bdd"); // initialize mocha
// let assert = chai.assert;

describe("Account", () => {
    it("getNumber", () => {
        let account = new Account(12345);
        assert.equal(account.getNumber(), 12345);
    });
    it("getBalance", () => {
        let account = new Account(12345);
        assert.equal(account.getBalance(), 0.0);
    });
    it("deposit", () => {
        let account = new Account(12345);
        account.deposit(100000);
        assert.equal(account.getBalance(), 100000);
    });
    it("withdraw", () => {
        let account = new Account(12345);
        account.deposit(100000);
        account.withdraw(100000);
        assert.equal(account.getBalance(), 0.0);
    });
    it("toString", () => {
        let account = new Account(12345);
        account.deposit(100000);
        const expected = "Account 12345: balance 100000";
        assert.equal(account.toString(), expected);
    });
    it("endOfMonth", () => {
        let account = new Account(12345);
        assert.equal(account.endOfMonth(), "");
    });
});

describe("SavingAccount", () => {
    it("addInterest", () => {
        let savingAccount = new SavingAccount(12345, 10);
        savingAccount.deposit(100000);
        savingAccount.addInterest();
        assert.equal(savingAccount.getBalance(), 110000);
    });
    it("toString", () => {
        let savingAccount = new SavingAccount(12345, 10);
        savingAccount.deposit(100000);
        savingAccount.addInterest();
        const expected = "SavingAccount 12345: balance 110000";
        assert.equal(savingAccount.toString(), expected);
    });
});

describe("CheckingAccount", () => {
    it("getOverdraft", () => {
        let checkingAccount = new CheckingAccount(12345, 50);
        assert.equal(checkingAccount.getOverdraft(), 50);
    });
    it("setOverdraft", () => {
        let checkingAccount = new CheckingAccount(12345, 50);
        checkingAccount.setOverdraft(10);
        assert.equal(checkingAccount.getOverdraft(), 10);
    });
    it("toString", () => {
        let checkingAccount = new CheckingAccount(12345, 50);
        checkingAccount.deposit(100);
        checkingAccount.withdraw(70);
        const expected = "CheckingAccount 12345: balance 30";
        assert.equal(checkingAccount.toString(), expected);
    });
});

describe("Bank", () => {
    it("addAccount", () => {
        let bank = new Bank();
        let number = bank.addAccount();
        assert.equal(number, 123);
    });
    it("addSavingAccount", () => {
        let bank = new Bank();
        let number = bank.addSavingAccount(10);
        assert.equal(number, 456);
    });
    it("addCheckingAccount", () => {
        let bank = new Bank();
        let number = bank.addCheckingAccount(50);
        assert.equal(number, 789);
    });
});