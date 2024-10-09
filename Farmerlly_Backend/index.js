const express = require('express');
const connectDB = require('./db'); // Import the database connection function
require('dotenv').config(); // Load environment variables

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
   res.send('Backend is running!');
});

// User routes
const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);

// Connect to the database
connectDB()

.then(()=>{
     app.listen(process.env.PORT || 8000, ()=>{
      console.log(`Server is running on Port : ${process.env.PORT} `);
      
     })
})
.catch((err)=>{
   console.log("MONGO DB connection failed", err);
   
})
