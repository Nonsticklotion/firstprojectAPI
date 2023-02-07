module.exports = (err, res, req, next) => {
  res.status(err.statusCode).json({ message: err.message });
};
