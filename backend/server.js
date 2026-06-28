const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory data storage
let products = [
  {
    id: 1,
    title: "Pashmina Shawl",
    description: "Hand-woven traditional shawl",
    price: 4500,
    category: "shawls",
  },
  {
    id: 2,
    title: "Woolen Blanket",
    description: "Pure wool blanket",
    price: 3200,
    category: "blankets",
  },
  {
    id: 3,
    title: "Wood Carving",
    description: "Handcrafted artifact",
    price: 1800,
    category: "carvings",
  },
];

let nextId = 4;

// ============ API ENDPOINTS ============

// 6. SEARCH - MUST come BEFORE /:id route!
app.get("/api/products/search/:query", (req, res) => {
  const query = req.params.query.toLowerCase();

  const results = products.filter(
    (p) =>
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query),
  );

  res.status(200).json({
    success: true,
    count: results.length,
    data: results,
  });
});

// 1. GET all products
app.get("/api/products", (req, res) => {
  res.status(200).json({
    success: true,
    count: products.length,
    data: products,
  });
});

// 2. GET single product
app.get("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({
    success: true,
    data: product,
  });
});

// 3. POST - Create product
app.post("/api/products", (req, res) => {
  const { title, description, price, category } = req.body;

  if (!title || !price) {
    return res.status(400).json({
      success: false,
      message: "Title and price are required",
    });
  }

  const newProduct = {
    id: nextId++,
    title,
    description: description || "",
    price: parseFloat(price),
    category: category || "other",
  };

  products.push(newProduct);

  res.status(201).json({
    success: true,
    message: "Product created successfully",
    data: newProduct,
  });
});

// 4. PUT - Update product
app.put("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  const { title, description, price, category } = req.body;

  products[productIndex] = {
    ...products[productIndex],
    title: title || products[productIndex].title,
    description: description || products[productIndex].description,
    price: price ? parseFloat(price) : products[productIndex].price,
    category: category || products[productIndex].category,
  };

  res.status(200).json({
    success: true,
    message: "Product updated successfully",
    data: products[productIndex],
  });
});

// 5. DELETE product
app.delete("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  products.splice(productIndex, 1);

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
});

// ============ ERROR HANDLING ============
// These MUST be at the very bottom!

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Server Error",
    error: err.message,
  });
});

// 404 handler - MUST BE LAST!
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
