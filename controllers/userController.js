const users = require('../data/users');

const getUsers = (req, res) => {
  let { page, limit, search, role } = req.query;
  page = parseInt(page) || 1;
  limit = parseInt(limit) || 10;

  let filtered = users.filter((user) => {
    const matchSearch = search
      ? user.name.toLowerCase().includes(search.toLowerCase())
      : true;
    const matchRole = role ? user.role === role : true;
    return matchRole && matchSearch;
  });

  const total = filtered.length;
  const startIndex = (page - 1) * limit;
  const paginated = filtered.slice(startIndex, startIndex + limit);

  res.json({
    data: paginated,
    total,
  });
};

module.exports = { getUsers};
