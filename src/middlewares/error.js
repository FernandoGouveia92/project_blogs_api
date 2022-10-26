const error = (err, req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || 'Some required fields are missing';

  return res.status(status).json({ message });
};

module.exports = error;