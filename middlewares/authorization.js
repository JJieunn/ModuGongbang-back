const { getUserByEmail } = require('../models/user_dao');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

const validateToken = async (req, res, next) => {
  try {
    const access_token = req.headers['authorization'];

    if (!access_token) {
      res.status(401).json({ error: 'TOKEN_NOT_PROVIDED' });
      return;
    }

    const userId = jwt.verify(access_token, SECRET_KEY);
    const foundUser = await getUserByEmail(userId.userEmail);

    if (!foundUser) {
      const error = new Error('USER_NOT_FOUND');
      error.statusCode = 404;
      throw error;
    }

    req.foundUser = foundUser;
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'INVALID_TOKEN' });
  }
};

module.exports = { validateToken };
