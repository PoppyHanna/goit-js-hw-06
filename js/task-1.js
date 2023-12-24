'use strict'

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

// Method calls to test the code
console.log(customer.getBalance()); // 24000
console.log(customer.getDiscount()); // 0.1
customer.setDiscount(0.2);
console.log(customer.getDiscount()); // 0.2
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad"]
customer.addOrder(150, "Soup");
console.log(customer.getBalance()); // 23850
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Soup"]
