// Ex 9 - MongoDB Shell commands for Electronics E-Mart
// Run inside mongosh line by line

use ElectronicsEMartDB

db.createCollection("products")

db.products.insertOne({
  productId: 201,
  name: "Galaxy Ultra S26",
  category: "Smartphones",
  brand: "Samsung",
  price: 124999,
  stock: 25,
  rating: 4.8
})

db.products.insertMany([
  { productId: 202, name: "ZenBook Pro 14", category: "Laptops",
    brand: "Asus", price: 89990, stock: 12, rating: 4.7 },
  { productId: 203, name: "SoundMax ANC Pro", category: "Audio",
    brand: "Sony", price: 14499, stock: 40, rating: 4.6 },
  { productId: 204, name: "PulseFit Watch 3", category: "Wearables",
    brand: "Noise", price: 9999, stock: 3, rating: 4.2 },
  { productId: 205, name: "iPhone 17 Pro", category: "Smartphones",
    brand: "Apple", price: 134900, stock: 18, rating: 4.9 }
])

// Display all products
db.products.find()

// Display products in readable format
db.products.find().pretty()

// Find a product by name
db.products.find({ name: "ZenBook Pro 14" })

// Find one smartphone
db.products.findOne({ category: "Smartphones" })

db.products.find({ price: { $gt: 50000 } })

db.products.find({
  price: { $gte: 10000, $lte: 100000 }
})

db.products.find({
  category: { $in: ["Laptops", "Audio"] }
})

// Update the price of one product
db.products.updateOne(
  { productId: 202 },
  { $set: { price: 84990 } }
)

// Increase stock of all smartphones
db.products.updateMany(
  { category: "Smartphones" },
  { $inc: { stock: 10 } }
)

// Verify changes
db.products.find()

// Delete one product
db.products.deleteOne({ productId: 203 })

// Delete products with stock less than 5
db.products.deleteMany({
  stock: { $lt: 5 }
})

// Verify remaining products
db.products.find()

// Sort products by price, highest first
db.products.find().sort({ price: -1 })

// Display the top two costliest products
db.products.find()
  .sort({ price: -1 })
  .limit(2)

// Count all products
db.products.countDocuments()

// Count smartphones
db.products.countDocuments({
  category: "Smartphones"
})

show dbs

db.stats()

show collections
