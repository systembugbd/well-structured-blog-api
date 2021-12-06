const paginationAPI = (blogData) => {
  return async (req, res, next) => {
    // const blogData = await fetch('./data.json');

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const results = {};

    const startPoint = (page - 1) * limit;
    const endPoint = page * limit;

    const sliceItem = blogData.slice(startPoint, endPoint);

    const nextPage = page + 1;
    const prevPage = page - 1;

    if (startPoint > 0) {
      results.previous = {
        page: prevPage,
        limit: limit,
      };
    }
    if (endPoint < blogData.length) {
      results.next = {
        page: nextPage,
        limit: limit,
      };
    }

    results.blog = sliceItem;
    res.paginatedResults = results;
    next();
  };
};

module.exports = {
  paginationAPI,
};
