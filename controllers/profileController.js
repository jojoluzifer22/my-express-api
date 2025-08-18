const users = require('../data/users');

const updateProfile = (req, res) => {
  const { id, name, email, role, dob } = req.body;
  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users[userIndex] = {
    ...users[userIndex],
    name,
    email,
    role,
    dob,
  };

  res.json({success: true, user: users[userIndex]});
};

const getMe = (req, res) => {
    res.json({user: req.user});
};

module.exports = { updateProfile, getMe };
