import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Dummy Orders Data
const orders = [
  { id: "O101", customer: "John Doe", amount: 1500, status: "pending" },
  { id: "O102", customer: "Jane Smith", amount: 3000, status: "shipped" },
  { id: "O103", customer: "Alice Brown", amount: 500, status: "delivered" },
  { id: "O104", customer: "David Johnson", amount: 7000, status: "pending" },
  { id: "O105", customer: "Chris Evans", amount: 2500, status: "shipped" },
];

// 📦 GET /orders → Filter orders
app.get("/orders", (req: Request, res: Response) => {
  let filteredOrders = [...orders];

  if (req.query.status) {
    filteredOrders = filteredOrders.filter(
      (o) =>
        o.status.toLowerCase() === (req.query.status as string).toLowerCase()
    );
  }

  if (req.query.minAmount) {
    filteredOrders = filteredOrders.filter(
      (o) => o.amount >= parseInt(req.query.minAmount as string)
    );
  }

  if (req.query.maxAmount) {
    filteredOrders = filteredOrders.filter(
      (o) => o.amount <= parseInt(req.query.maxAmount as string)
    );
  }

  if (req.query.customer) {
    filteredOrders = filteredOrders.filter((o) =>
      o.customer
        .toLowerCase()
        .includes((req.query.customer as string).toLowerCase())
    );
  }

  res.json(filteredOrders);
});

// 🛒 POST /placeorder → Receive order
app.post("/placeorder", (req: Request, res: Response) => {
  console.log(req.body);

  const { customerName, phoneNumber, address, items } = req.body;

  res
    .status(200)
    .send(
      `Received your order, ${customerName}. You will receive your order soon!`
    );
});

// 🚀 Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
