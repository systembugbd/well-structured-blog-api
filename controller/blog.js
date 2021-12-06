const blogData = [
  {
    id: 1,
    title: 'Blog 1',
    desc: 'lorem ipsum dolor sit amet, consectetur adip',
  },
  {
    id: 2,
    title: 'Blog 2',
    desc: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
  },
  {
    id: 3,
    title: 'Blog 3',
    desc: 'lorem ipsum dolor sit amet, consectetur adip',
  },
  {
    id: 4,
    title: 'Blog 4',
    desc: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
  },
  {
    id: 5,
    title: 'Blog 5',
    desc: 'lorem ipsum dolor sit amet, consectetur adip',
  },
  {
    id: 6,
    title: 'Blog 6',
    desc: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
  },
  {
    id: 7,
    title: 'Blog 7',
    desc: 'lorem ipsum dolor sit amet, consectetur adip',
  },
  {
    id: 8,
    title: 'Blog 8',
    desc: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
  },
  {
    id: 9,
    title: 'Blog 9',
    desc: 'lorem ipsum dolor sit amet, consectetur adip',
  },
  {
    id: 10,
    title: 'Blog 10',
    desc: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
  },
];
/**
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return blog
 */
const getBlogController = (req, res, next) => {
  if (Object.keys(req.query).length > 0) {
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

    results.blog =
      endPoint < blogData.length
        ? sliceItem
        : 'There is no more blog item in this page, please go back to previous page';
    return res.status(200).json({ ...results });
  }
  res.status(200).json({ blog: blogData });
};

/**
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @params { id }
 * @return Blog Element by ID
 */
const getBlogByIdController = (req, res, next) => {
  const blogId = req.params.id;

  const item = blogData.find(({ id }) => id == blogId);

  res.status(200).json({ blog: item });
};

module.exports = {
  getBlogController,
  getBlogByIdController,
};
