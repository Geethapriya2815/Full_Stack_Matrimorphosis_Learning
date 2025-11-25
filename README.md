
# 📘 **Matrimorphosis Learning – Full Stack Application**

## 🎯 **AIM for Full Stack Capstone Project**
To design and develop a complete full-stack web application using **Angular**, **Node.js (Express)**, **TypeScript**, and **MySQL**, along with **Unit Testing** using **Jest + JSDOM**, ensuring seamless frontend–backend integration, efficient data management, and reliable application performance.

A complete full-stack learning project built using:

- **Angular** (Frontend)
- **Node.js + Express + TypeScript** (Backend)
- **MySQL** (Database)
- **Jest + JSDOM** (Unit Testing)

This repository is designed as a practical learning path that covers **frontend**, **backend**, **database integration**, and **testing fundamentals**.

---

# 🌟 **Tech Stack Overview**

### 🎨 Frontend: **Angular**
- Angular 17+
- TypeScript
- Components, Services, Routing
- Reactive Forms
- API Integration

### ⚙️ Backend: **Node.js + Express + TypeScript**
- Express.js server
- REST API endpoints
- TypeScript-based backend
- MySQL connection using `mysql2`
- `.env` configuration for sensitive credentials

### 🗄️ Database: **MySQL**
- MySQL Workbench
- `food_delivery` database
- CRUD operations
- Connection pooling

### 🧪 Unit Testing: **Jest + TypeScript + JSDOM**
- HTML DOM testing
- JSDOM environment configuration
- TypeScript test setup
- Verified working test cases

---

# 📂 **Project Structure**

```

Full Stack Matrimorphosis/
│
├── Angular_Matrimorphosis/       # Angular frontend
│   ├── src/
│   ├── components/
│   ├── services/
│   ├── environments/
│   └── ...
│
├── Backend/                      # Node.js + Express backend
│   ├── server.ts
│   ├── routes/
│   ├── controllers/
│   ├── dbconnection.ts
│   ├── .env
│   └── ...
│
├── TEST_CASES_TO_EXPLAIN/        # Unit testing (Jest + TS + JSDOM)
│   ├── sample.html
│   ├── sample.test.ts
│   ├── jest.config.js
│   ├── jest.setup.js
│   ├── tsconfig.json
│   └── package.json
│
└── README.md

````

---

# 🚀 **How to Run the Project**

## 🔹 **1. Frontend (Angular)**

Install dependencies:
```sh
cd Angular_Matrimorphosis
npm install
````

Run Angular app:

```sh
ng serve -o
```

👉 Runs at **[http://localhost:4200](http://localhost:4200)**

---

## 🔹 **2. Backend (Express + TypeScript)**

Install dependencies:

```sh
cd Backend
npm install
```

Create `.env` file:

```
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=food_delivery
DB_PORT=3306
PORT=3000
```

Start backend server:

```sh
npx ts-node server.ts
```

👉 Backend runs at **[http://localhost:3000](http://localhost:3000)**

---

# 🗄️ **MySQL Setup**

Run in MySQL Workbench:

```sql
CREATE DATABASE food_delivery;

USE food_delivery;

CREATE TABLE food_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  category VARCHAR(50) NOT NULL,
  price DECIMAL(10,2) NOT NULL
);

INSERT INTO food_items (name, category, price) VALUES
('Margherita Pizza', 'Main Course', 299.99),
('Veg Burger', 'Snacks', 149.50),
('French Fries', 'Snacks', 99.00),
('Paneer Butter Masala', 'Main Course', 250.00),
('Coca Cola', 'Beverage', 49.00),
('Chocolate Brownie', 'Dessert', 120.00);
```

---

# 🧪 **Unit Testing (Jest + TypeScript + JSDOM)**

Install dependencies:

```sh
cd TEST_CASES_TO_EXPLAIN
npm install
```

Run tests:

```sh
npm test
```

Expected output:

```
PASS ./sample.test.ts
✓ should contain a <ul> element
✓ should contain exactly 3 <li> elements
```

---

# 🛠️ **Features Implemented**

✔ Angular UI with components & services
✔ MySQL database integration
✔ Node.js REST API with TypeScript
✔ CORS-enabled communication
✔ HTML DOM validation using Jest + JSDOM
✔ Full CRUD functionality
✔ Environment variable support (dotenv)
✔ Clean folder structure for enterprise-level apps

---

# 📈 **Learning Outcomes**

You will learn:

* Full-stack workflow (frontend → backend → database)
* Angular component-based architecture
* REST API development in Express
* TypeScript backend structure
* MySQL database connectivity
* Writing Jest + JSDOM test cases
* HTML DOM testing
* Git & GitHub version control

---

# ❤️ **Author**

**Geethapriya S L**
Full Stack Developer (Learning Track)
*Angular | Node.js | TypeScript | MySQL | Jest | JSDOM*

---


Just tell me **“Add badges”** or **“Add architecture diagram”**!
```
