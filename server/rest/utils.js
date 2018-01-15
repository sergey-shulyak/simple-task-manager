function passErrorNext(func) {
  return (req, res, next) => {
    try {
      func(req, res);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = {
  passErrorNext
};
