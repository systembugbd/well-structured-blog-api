const router = require('express').Router();
const { paginationAPI } = require('../middleware/pagination');
const {
  getHomeController,
  getBlogController,
  getBlogByIdController,
} = require('../controller');

router.route('/').get(getHomeController);
router.get('/blog', getBlogController);
router.get('/blog/:id', getBlogByIdController);

module.exports = router;
