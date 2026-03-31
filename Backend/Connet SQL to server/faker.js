const { faker } = require('@faker-js/faker');

// ===== GENERATE 10 RANDOM USERS =====
console.log('========== RANDOM USERS ==========\n');

function generateUsers(count) {
  for (let i = 0; i < count; i++) {
    console.log(`User ${i + 1}:`);
    console.log(`  Name: ${faker.name.fullName()}`);
    console.log(`  Email: ${faker.internet.email()}`);
    console.log(`  Phone: ${faker.phone.number()}`);
    console.log(`  Address: ${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}`);
    console.log(`  Company: ${faker.company.name()}`);
    console.log(`  Job Title: ${faker.name.jobTitle()}`);
    console.log();
  }
}

generateUsers(10);

// ===== GENERATE 5 RANDOM PRODUCTS =====
console.log('\n========== RANDOM PRODUCTS ==========\n');

function generateProducts(count) {
  for (let i = 0; i < count; i++) {
    console.log(`Product ${i + 1}:`);
    console.log(`  Name: ${faker.commerce.productName()}`);
    console.log(`  Price: $${faker.commerce.price()}`);
    console.log(`  Description: ${faker.commerce.productDescription()}`);
    console.log(`  Category: ${faker.commerce.department()}`);
    console.log();
  }
}

generateProducts(5);

// ===== GENERATE RANDOM ORDERS =====
console.log('\n========== RANDOM ORDERS ==========\n');

function generateOrders(count) {
  for (let i = 0; i < count; i++) {
    console.log(`Order ${i + 1}:`);
    console.log(`  Order ID: ${faker.datatype.uuid()}`);
    console.log(`  Customer: ${faker.name.fullName()}`);
    console.log(`  Email: ${faker.internet.email()}`);
    console.log(`  Product: ${faker.commerce.productName()}`);
    console.log(`  Quantity: ${faker.datatype.number({ min: 1, max: 10 })}`);
    console.log(`  Price: $${faker.commerce.price()}`);
    console.log(`  Order Date: ${faker.date.recent()}`);
    console.log();
  }
}

generateOrders(5);

// ===== RANDOM WEBSITES =====
console.log('\n========== RANDOM WEBSITES ==========\n');

for (let i = 0; i < 5; i++) {
  console.log(`${i + 1}. ${faker.internet.url()}`);
}

// ===== RANDOM DATES =====
console.log('\n========== RANDOM DATES ==========\n');

for (let i = 0; i < 5; i++) {
  console.log(`${i + 1}. ${faker.date.recent()}`);
}

// ===== RANDOM COLORS =====
console.log('\n========== RANDOM COLORS ==========\n');

for (let i = 0; i < 5; i++) {
  console.log(`${i + 1}. ${faker.color.human()}`);
}

// ===== BULK DATA AS JSON =====
console.log('\n========== BULK DATA (JSON) ==========\n');

const bulkUsers = [];
for (let i = 0; i < 3; i++) {
  bulkUsers.push({
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    country: faker.address.country(),
    createdAt: faker.date.past()
  });
}

console.log(JSON.stringify(bulkUsers, null, 2));
