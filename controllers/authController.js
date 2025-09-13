const users = require('../data/users');
const {generateToken} = require('../utils/token');

const login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const token = generateToken(user);
  res.cookie('token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60 * 3, 
    expires: new Date(Date.now() + 3 * 60 * 60 * 1000) ,
    path : '/'
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
};

const logout = (req,res)=>{
    res.clearCookie('token');
    res.json({message: "Logged Out"});
}

module.exports = {login, logout};
