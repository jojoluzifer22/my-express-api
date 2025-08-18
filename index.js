const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// const {router : profileRoutes, users} = require('./routes/profile');

const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());


// create JWT
// const generateToken = (user) => {
//   return jwt.sign({ id: user.id, name: user.name, email: user.email, role: user.role, dob:user.dob }, process.env.JWT_SECRET, {
//     expiresIn: '3h',
//   });
// };

// const authMiddleware = (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) return res.status(401).json({ message: 'Unautherized' });
//   try {
//     const user = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = user;
//     next();
//   } catch (err) {
//     res.status(401).json({ message: 'Invalid Token' });
//   }
// };

// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find(
//     (u) => u.username === username && u.password === password
//   );

//   if (!user) return res.status(401).json({ message: 'Invalid credentials' });

//   const token = generateToken(user);
//   res.cookie('token', token, {
//     httpOnly: true,
//     secure: false,
//     sameSite: 'lax',
//   });

//   res.json({ user: { id: user.id, name: user.name  , email: user.email, dob: user.dob, role: user.role} });
// });
// app.get('/test', (req, res) => {
//   res.json({ message: 'Test Backend' });
// });

// app.get('/me', authMiddleware, (req, res) => {
//   res.json({ user: req.user });
// });

// app.post('/logout', (req, res) => {
//   res.clearCookie('token');
//   res.json({ message: 'Loggedd' });
// });

// app.get("/users" , (req,res)=>{

//     let {page,limit,search, role } = req.query;

//     page = parseInt(page);
//     limit = parseInt(limit);

//     let filtered = users.filter(user => {
//         const matchSearch = search 
//         ? user.name.toLowerCase().includes(search.toLowerCase())
//         : true;
//         const matchRole = role 
//         ? user.role === role 
//         : true;

//         return matchRole && matchSearch;
//     });

//     const total = filtered.length;

//     const startIndex = (page - 1) * limit;
//     const paginated = filtered.slice(startIndex, startIndex+ limit);

//     res.json({
//         data: paginated,
//         total
//     });


// });

// app.use(profileRoutes);

// Routes
app.use('/auth' , authRoutes);
app.use('/profile' , profileRoutes);
app.use('/users' , userRoutes);


app.listen(3000, () => {
  console.log('Backend running at http://localhost:3000');


});
