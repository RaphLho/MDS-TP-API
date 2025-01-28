const jwt = require('jsonwebtoken');
const secretKey = 'ddrace';

const authenticateJWT = (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');
        
        if (!authHeader) {
            return res.status(401).json({ 
                error: 'Authorization header missing',
                message: 'No token provided'
            });
        }

        const token = authHeader.split(' ')[1];
        
        if (!token) {
            return res.status(401).json({
                error: 'Token missing',
                message: 'Bearer token is required' 
            });
        }

        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                if (err.name === 'TokenExpiredError') {
                    return res.status(401).json({
                        error: 'Token expired',
                        message: 'Your session has expired. Please login again.'
                    });
                }
                return res.status(403).json({
                    error: 'Invalid token',
                    message: 'The provided token is not valid'
                });
            }
            req.user = user;
            next();
        });

    } catch (error) {
        return res.status(500).json({
            error: 'Authentication error',
            message: 'An error occurred during authentication'
        });
    }
};

module.exports = authenticateJWT;