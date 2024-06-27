const jwt = require('jsonwebtoken');


const createToken = (userId) => {
    const token = jwt.sign({ _id: userId }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return token;
}

const checkToken = (token) => jwt.verify(token, process.env.JWT_SECRET)

module.exports = { createToken, checkToken };