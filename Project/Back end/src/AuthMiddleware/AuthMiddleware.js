const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config(); 
const authMiddleware = (req, res, next) => {
   
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user; // Attach user object to request
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        console.error('Invalid token:', err);
        res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = authMiddleware;
