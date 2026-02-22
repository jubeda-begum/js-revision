function createBankAccount() {
  let balance = 0;
  let transactions = [];
  return {
    deposit(amount) {
      if (amount <= 0) return "Deposit must be positive";
      balance += amount;
      transactions.push(`Deposited: ${amount}`);
      return `Deposited ${amount}`;
    },
    withdraw(amount) {
      if (amount > balance) return "Insufficient balance";
      balance -= amount;
      transactions.push(`Withdrawn: ${amount}`);
      return `Withdrawn ${amount}`;
    },
    getBalance() {
      return balance;
    },
    getTransactionHistory() {
      return transactions;
    }
  };
}
const account = createBankAccount();
console.log(account.deposit(100));
console.log(account.withdraw(50));
console.log("Balance:", account.getBalance());
console.log("History:", account.getTransactionHistory());