import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(400).json({ message: "Not authorized, login again" });
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    
    if (!verifyToken || verifyToken.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({ message: "Access denied. Invalid admin credentials." });
    }

    req.adminEmail = verifyToken.email; 
    next();
  } catch (error) {
    console.log("adminAuth error:", error.message);
    return res.status(500).json({ message: `adminAuth error: ${error.message}` });
  }
};

export default adminAuth;
