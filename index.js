const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// const {router : profileRoutes, users} = require('./routes/profile');

const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const userRoutes = require("./routes/userRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const creditRoutes = require('./routes/creditRoutes');

const app = express();
app.use(
  cors({
    origin:[ 'http://localhost:5173',"https://react-web-project-delta.vercel.app" , "https://react-web-project-1s2kkg19b-kitsada-papanudias-projects.vercel.app" ],
    
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

// Routes
app.use('/auth' , authRoutes);
app.use('/profile' , profileRoutes);
app.use('/users' , userRoutes);
app.use('/dashboard' , dashboardRoutes);
app.use('/api/credit' , creditRoutes);

app.get('/' , (req,res)=>{
  res.json({message: "Hello from express on Railway"});
});


app.listen(3000, () => {
  console.log('Backend running at http://localhost:3000');


});
