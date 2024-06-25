const jwt = require('jsonwebtoken');


const createToken = (userId) => {
    const token = jwt.sign({ _id: userId }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return token;
}

const checkToken = (token) => {
    const payload = jwt.verify( token , process.env.JWT_SECRET)
    return payload;
}

module.exports = { createToken ,checkToken };