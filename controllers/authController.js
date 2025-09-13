const users = require('../data/users');
const {generateToken} = require('../utils/token');

// const login = (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find(
//     (u) => u.username === username && u.password === password
//   );

//   if (!user) return res.status(401).json({ message: 'Invalid credentials' });

//   const token = generateToken(user);
//   res.cookie('token', token, {  
//     httpOnly: true,
//     secure: true,
//     sameSite: 'none',
//     maxAge: 1000 * 60 * 60 * 3, 
//     expires: new Date(Date.now() + 3 * 60 * 60 * 1000) ,
//     path : '/'
//   });

//   res.json({
//     user: {
//       id: user.id,
//       name: user.name,
//       email: user.email,
//       dob: user.dob,
//       role: user.role,
//     },
//   });
// };

const login = (req, res) => {
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user);
    
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // ใช้ secure ใน production เท่านั้น
      sameSite: 'none',
      maxAge: 1000 * 60 * 60 * 3, 
      path: '/'
    });

    res.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        dob: user.dob,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const logout = (req,res)=>{
    res.clearCookie('token');
    res.json({message: "Logged Out"});
}

module.exports = {login, logout};
