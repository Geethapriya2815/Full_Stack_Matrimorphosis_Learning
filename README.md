---

# 📘 **Matrimorphosis Learning – Full Stack Application **
**AIM for Full Stack Capstone Project**

A complete full-stack learning project built using **Angular**, **Node.js (Express)**, **TypeScript**, **MySQL**, and **Unit Testing** using **Jest + JSDOM**.

This repository is designed as a practical learning path that covers both **frontend** and **backend**, along with **database integration** and **testing**.

---

# 🌟 **Tech Stack Overview**

### 🎨 Frontend: **Angular**

* Angular 17+
* TypeScript
* Components, Services, Routing
* Reactive Forms
* API Integration

### ⚙️ Backend: **Node.js + Express + TypeScript**

* Express.js server
* REST API endpoints
* TypeScript-based backend
* MySQL DB connection using `mysql2`
* `.env` configuration for DB credentials

### 🗄️ Database: **MySQL**

* MySQL Workbench
* food_delivery database
* CRUD operations
* Connection pooling

### 🧪 Unit Testing: **Jest + TypeScript + JSDOM**

* DOM testing (HTML structure tests)
* TypeScript test setup
* Jest environment configuration
* Successfully tested sample HTML

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
```

---

# 🚀 **How to Run the Project**

---

## 🔹 **1. Frontend (Angular)**

### Install dependencies:

```
cd Angular_Matrimorphosis
npm install
```

### Start Angular app:

```
ng serve -o
```

Runs at: **[http://localhost:4200](http://localhost:4200)**

---

## 🔹 **2. Backend (Express + TypeScript)**

### Install dependencies:

```
cd Backend
npm install
```

### Create `.env` file:

```
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=food_delivery
DB_PORT=3306
PORT=3000
```

### Start backend server:

```
npx ts-node server.ts
```

Runs at: **[http://localhost:3000](http://localhost:3000)**

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

### Install dependencies:

```
cd TEST_CASES_TO_EXPLAIN
npm install
```

### Run tests:

```
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

### ✔ Angular UI with components & services

### ✔ MySQL database integration

### ✔ Node.js API with TypeScript

### ✔ CORS-enabled API communication

### ✔ HTML DOM validation using Jest + JSDOM

### ✔ Clean folder structure

### ✔ Working CRUD endpoints

### ✔ Environment variable support (dotenv)

---

# 📈 **Learning Outcomes**

By working on this project, you learn:

### 🔹 Full-stack application flow

### 🔹 How Angular interacts with REST APIs

### 🔹 How to build APIs using Express

### 🔹 How to structure a TypeScript backend

### 🔹 How to connect Node.js with MySQL

### 🔹 How to write test cases using Jest

### 🔹 How to validate HTML DOM using JSDOM

### 🔹 How to push projects to GitHub

---

# ❤️ **Author**

**Geethapriya S L**
Full Stack Developer (Learning Track)
Angular | Node.js | TypeScript | MySQL | Jest Testing

---

