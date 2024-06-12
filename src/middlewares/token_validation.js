const { verify } = require("jsonwebtoken");

module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get("authorization");
        if (token) {
        token = token.slice(7); // Remove "Bearer " from token
        verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
            return res.json({
                success: 0,
                message: "Invalid Token..."
            });
            } else {
            req.decoded = decoded;
            next();
            }
        });
        } else {
        return res.json({
            success: 0,
            message: "Access Denied! Unauthorized User"
        });
        }
    }
};
