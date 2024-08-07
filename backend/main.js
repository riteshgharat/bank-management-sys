
document.addEventListener('DOMContentLoaded', function () {

class Customer {
  constructor(id, name, balance) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
}

// Banking management using arrays
class Bank {
  constructor() {
    this.customers = [];
  }

  addCustomer(id, name, initialBalance) {
    const customer = new Customer(id, name, initialBalance);
    this.customers.push(customer);
  }

  findCustomer(id) {
    return this.customers.find((customer) => customer.id === id);
  }

  deleteCustomer(id) {
    this.customers = this.customers.filter((customer) => customer.id !== id);
  }

  deposit(id, amount) {
    const customer = this.findCustomer(id);
    if (customer) {
      customer.balance += amount;
    } else {
      console.log("Customer not found");
    }
  }

  withdraw(id, amount) {
    const customer = this.findCustomer(id);
    if (customer) {
      if (customer.balance >= amount) {
        customer.balance -= amount;
      } else {
        console.log("Insufficient funds");
      }
    } else {
      console.log("Customer not found");
    }
  }

  getCustomerInfo(id) {
    const customer = this.findCustomer(id);
    if (customer) {
      // return customer;
      console.log(customer);
      return customer;

    } else {
      console.log("Customer not found");
    }
    // console.log(customer);
    
  }
}

const bank = new Bank();

document.getElementById('customerForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const id = parseInt(document.getElementById('accountId').value);
  const name = document.getElementById('name').value;
  const initialBalance = parseFloat(document.getElementById('initialDeposit').value);
  // console.log(id,name,initialBalance);
  
  bank.addCustomer(id,name, initialBalance);
  bank.getCustomerInfo(id);
  document.getElementById('customerForm').reset();
});

})