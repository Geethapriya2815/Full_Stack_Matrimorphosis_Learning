# 📘 **Full Stack Matrimorphosis Learning Repository**

This repository is a **complete full-stack learning collection**, containing all major concepts, assignments, tasks, and a capstone project.  
It includes **Angular**, **Node.js (with TypeScript)**, **Express**, **MySQL**, **NgRx**, and **Unit Testing** using **Jest + JSDOM**.

This repo serves as a **learning portfolio**, showcasing continuous progress from basic concepts to advanced full-stack application development.

---

# 🎯 **AIM of the Full Stack Capstone Project**

To design and develop an end-to-end full-stack application using **Angular**, **Node.js (Express + TypeScript)**, and **MySQL**, supported by **unit testing** using **Jest + JSDOM**, demonstrating complete mastery of frontend, backend, database, and testing workflows.

---

# 🌟 **What This Repository Contains**

### ✔ Angular Projects  
- Component-based learning  
- Services, Routing, Reactive Forms  
- Cart Explorer App  
- NgRx State Management Project  
- Food Application (Part 1)

### ✔ Backend (Node.js + Express + TypeScript)  
- REST APIs  
- MySQL database integration  
- Environment configuration  
- Core module fundamentals  
- TypeScript-based server structure

### ✔ Capstone: Full Stack Project  
- **Angular Frontend**  
- **Express + TypeScript Backend**  
- **MySQL** database with CRUD  
- **Unit Testing**  

### ✔ Unit Testing (Jest + TypeScript + JSDOM)
- HTML DOM structure testing  
- Jest configuration  
- TypeScript test environment  
- JSDOM setup  
- Working sample test suite  

---

# 📁 **Folder Structure Overview**

```

Full_Stack_Matrimorphosis_Learning/
│
├── Angular_Matrimorphosis/        # Main Angular application
│
├── Backend/                       # Node.js + TypeScript backend
│   ├── server.ts
│   ├── routes/
│   ├── controllers/
│   ├── dbconnection.ts
│   ├── .env
│   └── ...
│
├── TEST_CASES_TO_EXPLAIN/         # Unit Testing using Jest + TS + JSDOM
│   ├── sample.html
│   ├── sample.test.ts
│   ├── jest.config.js
│   ├── jest.setup.js
│   ├── tsconfig.json
│   └── package.json
│
├── Cart Explorer App (Angular Assignment)
│
├── FoodAppPart1/
│
├── NgRxUsingFoodTheme/            # NgRx state management project
│
├── Node-with-ts-main/             # Core Node + TypeScript learning
│
└── README.md                      # You are here!

```

---

# 🚀 **How to Run the Major Modules**

## 🔹 **1. Angular Projects**

```

cd Angular_Matrimorphosis
npm install
ng serve -o

```

---

## 🔹 **2. Backend (Express + TypeScript)**

```

cd Backend
npm install
npx ts-node server.ts

````

Backend runs at **http://localhost:3000**

---

## 🔹 **3. MySQL Database**

Create database:

```sql
CREATE DATABASE food_delivery;
````

Use table:

```sql
USE food_delivery;

CREATE TABLE food_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  category VARCHAR(50),
  price DECIMAL(10,2)
);
```

---

## 🔹 **4. Unit Testing (Jest + TypeScript + JSDOM)**

```
cd TEST_CASES_TO_EXPLAIN
npm install
npm test
```

Expected:

```
PASS sample.test.ts
✓ should contain a <ul> element
✓ should contain exactly 3 <li>
```

---

# 🛠 **Skills Practiced in This Repository**

### 🔹 Frontend Development

* Angular components
* Routing
* Services & HTTP
* Forms & Validation
* State Management (NgRx)

### 🔹 Backend Development

* Express API design
* TypeScript backend structure
* MySQL CRUD operations
* Environment config with dotenv

### 🔹 Testing

* Jest configuration
* JSDOM HTML testing
* TypeScript-based test cases

### 🔹 Tools & Practices

* GitHub version control
* Clean folder structuring
* Modular development
* Debugging backend + frontend

---

# 📈 **Learning Outcomes**

By working through this repo, the learner gains:

* Complete understanding of **full-stack architecture**
* Ability to build, test, deploy Angular apps
* Ability to design REST APIs in Express
* Strong TypeScript foundation (frontend + backend)
* Practical MySQL database skills
* Hands-on experience with Jest testing
* Real-world full-stack development experience

---

# ❤️ **Author**

**Geethapriya S L**
Full Stack Developer (Learning Path)
*Angular | Node.js | TypeScript | Express | MySQL | NgRx | Jest + JSDOM*

---
