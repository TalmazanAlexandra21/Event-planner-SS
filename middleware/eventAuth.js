function checkRole(role) {
  return (req, res, next) => {
    const userRole = req.query.role;

    if (userRole === role) {
      next();
    } else {
      res.status(403).json({ message: "Acces interzis" });
    }
  };
}

module.exports = checkRole;
