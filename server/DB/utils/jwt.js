const jwt = require('jsonwebtoken');


const createToken = (userId, permission) => {
    const token = jwt.sign({ _id: userId, permission }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return token;
}

const checkToken = (token) => jwt.verify(token, process.env.JWT_SECRET)

module.exports = { createToken, checkToken };