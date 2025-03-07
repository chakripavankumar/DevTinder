const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
      console.log("Token:", token);
    if (!token) {
      return res.status(401).send("Please Login!");
     
    }

    const decodedObj = jwt.verify(token, "Pavan@8096");
      console.log("Decoded Object:", decodedObj);

    const { _id } = decodedObj;

    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not found");
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
};

module.exports = {
  userAuth,
};
