// Clouser Memory Project
// Goal: Create a bank account that remembers its balance.

// We need three functions:
function createAccount(owner) {
  let balance = 0;

  return {
    // Create a deposit function
    deposit(amount) {
      balance += amount;
      console.log(`${owner}'s balance is: $${balance}`);
    },

    // Create a Withdraw function
    withdraw(amount) {
      if (amount >= balance) {
        console.log(
          `Insufficient funds for ${owner}. Current balance is: $${balance}`
        );
      } else {
        balance -= amount;
        console.log(`${owner}'s balance is: $${balance}`);
      }
    },
  };
}

// time to give owner and amount for the account
// Hold the main function in a variables
const myAccount = createAccount("Bob");

// Try Deposit
myAccount.deposit(100); // Bob's balance is: $100

// Try Withdraw for then the balance.
myAccount.withdraw(200); // Insufficient funds for Bob. Current balance is: $100

// Try Withdraw for valid amount
myAccount.withdraw(50); // Bob's balance is: $50