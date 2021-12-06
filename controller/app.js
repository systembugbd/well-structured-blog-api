const getAppHealthCheckerController = (req, res, next) => {
  res.status(200).json({
    message: 'API health is good to go...',
  });
};

module.exports = getAppHealthCheckerController;
