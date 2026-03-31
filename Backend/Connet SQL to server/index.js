// Import faker package
const { faker } = require('@faker-js/faker');

// ============================================
// 1. BASIC FAKER USAGE - Single Data Generation
// ============================================

console.log('===== BASIC FAKER EXAMPLES =====\n');

// Person Data
console.log('--- Person Data ---');
console.log('Full Name:', faker.name.fullName());
console.log('First Name:', faker.name.firstName());
console.log('Last Name:', faker.name.lastName());
console.log('Email:', faker.internet.email());
console.log('Phone:', faker.phone.number());
console.log('Username:', faker.internet.userName());
console.log('Password:', faker.internet.password());

// Address Data
console.log('\n--- Address Data ---');
console.log('Street Address:', faker.address.streetAddress());
console.log('City:', faker.address.city());
console.log('State:', faker.address.state());
console.log('ZIP Code:', faker.address.zipCode());
console.log('Country:', faker.address.country());
console.log('Full Address:', faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.state());

// Company Data
console.log('\n--- Company Data ---');
console.log('Company Name:', faker.company.name());
console.log('Job Title:', faker.name.jobTitle());
console.log('Department:', faker.commerce.department());

// Date & Time
console.log('\n--- Date & Time ---');
console.log('Current Date:', faker.date.recent());
console.log('Random Date:', faker.date.past());
console.log('Future Date:', faker.date.future());

// Internet & Web
console.log('\n--- Internet Data ---');
console.log('URL:', faker.internet.url());
console.log('Domain Name:', faker.internet.domainName());
console.log('Color:', faker.color.human());

// Commerce
console.log('\n--- Commerce Data ---');
console.log('Product Name:', faker.commerce.productName());
console.log('Price:', faker.commerce.price());
console.log('Product Description:', faker.commerce.productDescription());

// ============================================
// 2. GENERATE MULTIPLE USERS - Array of Objects
// ============================================

console.log('\n\n===== GENERATING 5 FAKE USERS =====\n');

function generateUsers(count) {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push({
      id: i + 1,
      fullName: faker.name.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
      address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
      },
      company: faker.company.name(),
      jobTitle: faker.name.jobTitle(),
      createdAt: faker.date.past(),
      avatar: faker.image.avatar()
    });
  }
  return users;
}

const users = generateUsers(5);
console.log(JSON.stringify(users, null, 2));

// ============================================
// 3. GENERATE PRODUCTS - E-commerce Example
// ============================================

console.log('\n\n===== GENERATING 3 FAKE PRODUCTS =====\n');

function generateProducts(count) {
  const products = [];
  for (let i = 0; i < count; i++) {
    products.push({
      id: i + 1,
      productName: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price({ min: 5, max: 1000 }),
      quantity: faker.datatype.number({ min: 0, max: 500 }),
      category: faker.commerce.department(),
      image: faker.image.imageUrl(),
      createdAt: faker.date.past()
    });
  }
  return products;
}

const products = generateProducts(3);
console.log(JSON.stringify(products, null, 2));

// ============================================
// 4. DATABASE SEEDING EXAMPLE
// ============================================

console.log('\n\n===== DATABASE SEEDING SQL QUERIES =====\n');

function generateUsersSQLInsert(count) {
  let sqlQueries = [];
  for (let i = 0; i < count; i++) {
    const user = {
      fullName: faker.name.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      city: faker.address.city(),
      country: faker.address.country()
    };

    const query = `INSERT INTO users (fullName, email, phone, city, country) VALUES ('${user.fullName}', '${user.email}', '${user.phone}', '${user.city}', '${user.country}');`;
    sqlQueries.push(query);
  }
  return sqlQueries;
}

const sqlInserts = generateUsersSQLInsert(3);
sqlInserts.forEach(query => console.log(query));

// ============================================
// 5. REALISTIC CUSTOMER DATASET
// ============================================

console.log('\n\n===== GENERATING REALISTIC CUSTOMER OBJECTS =====\n');

function generateCustomers(count) {
  const customers = [];
  for (let i = 0; i < count; i++) {
    customers.push({
      customerId: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      streetAddress: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      postalCode: faker.address.zipCode(),
      country: faker.address.country(),
      registrationDate: faker.date.past({ years: 2 }),
      lastOrderDate: faker.date.recent(),
      totalOrders: faker.datatype.number({ min: 1, max: 50 }),
      totalSpent: parseFloat(faker.commerce.price({ min: 100, max: 10000 })),
      isActive: faker.datatype.boolean()
    });
  }
  return customers;
}

const customers = generateCustomers(3);
console.log(JSON.stringify(customers, null, 2));

// ============================================
// 6. FAKER WITH SEEDING (Reproducible Data)
// ============================================

console.log('\n\n===== SEEDED FAKER (Reproducible) =====\n');

// Set seed for reproducible results
faker.seed(12345);

console.log('With Seed 12345:');
console.log(faker.name.fullName());
console.log(faker.internet.email());

// Reset seed to get same results
faker.seed(12345);
console.log('\nWith Same Seed 12345 (Should Match Above):');
console.log(faker.name.fullName());
console.log(faker.internet.email());

// ============================================
// 7. GENERATE ORDERS WITH ITEMS
// ============================================

console.log('\n\n===== GENERATING ORDERS WITH ITEMS =====\n');

function generateOrder(orderId) {
  const itemCount = faker.datatype.number({ min: 1, max: 5 });
  const items = [];

  for (let i = 0; i < itemCount; i++) {
    items.push({
      itemId: i + 1,
      productName: faker.commerce.productName(),
      quantity: faker.datatype.number({ min: 1, max: 10 }),
      unitPrice: parseFloat(faker.commerce.price({ min: 5, max: 500 })),
      subtotal: 0 // Will be calculated
    });
  }

  const order = {
    orderId: orderId,
    customerName: faker.name.fullName(),
    customerEmail: faker.internet.email(),
    orderDate: faker.date.recent(),
    shippingAddress: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode()
    },
    items: items,
    orderStatus: faker.helpers.arrayElement(['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled']),
    totalAmount: 0 // Will be calculated
  };

  return order;
}

const order = generateOrder(faker.datatype.uuid());
console.log(JSON.stringify(order, null, 2));

// ============================================
// 8. PICK RANDOM ITEMS FROM ARRAYS
// ============================================

console.log('\n\n===== FAKER HELPERS - RANDOM SELECTION =====\n');

const categories = ['Electronics', 'Clothing', 'Food', 'Books', 'Toys'];
const statuses = ['Active', 'Inactive', 'Pending', 'Archived'];

console.log('Random Category:', faker.helpers.arrayElement(categories));
console.log('Random Status:', faker.helpers.arrayElement(statuses));
console.log('Multiple Random Items:', faker.helpers.multiple(() => faker.commerce.productName(), { count: 3 }));

// ============================================
// SUMMARY - Common Faker Methods
// ============================================

console.log('\n\n===== QUICK REFERENCE =====\n');
console.log(`
PERSON:
- faker.name.fullName()
- faker.name.firstName()
- faker.name.lastName()
- faker.name.jobTitle()

CONTACT:
- faker.internet.email()
- faker.phone.number()
- faker.internet.userName()
- faker.internet.url()

ADDRESS:
- faker.address.streetAddress()
- faker.address.city()
- faker.address.state()
- faker.address.zipCode()
- faker.address.country()

COMPANY:
- faker.company.name()
- faker.commerce.department()

DATA TYPES:
- faker.datatype.number()
- faker.datatype.boolean()
- faker.datatype.uuid()

DATE & TIME:
- faker.date.past()
- faker.date.recent()
- faker.date.future()

COMMERCE:
- faker.commerce.productName()
- faker.commerce.price()
- faker.commerce.productDescription()

HELPERS:
- faker.helpers.arrayElement(array)
- faker.helpers.multiple(generator, options)
- faker.seed(number) - For reproducible data
`);
