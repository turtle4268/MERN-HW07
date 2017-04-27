var express = require('express'),
    index   = require('../controllers/index'),
    enter   = require('../controllers/enter'),
    story   = require('../controllers/story'),
    about   = require('../controllers/about'),
    char   = require('../controllers/char'),
    chat   = require('../controllers/chat'),
    create  = require('../controllers/create'),
    read    = require('../controllers/read'),
    readall = require('../controllers/readall'),
    update  = require('../controllers/update'),
    del     = require('../controllers/del'),
    router  = express.Router();

router.route('/').get(enter);
router.route('/story').get(story);
router.route('/about').get(about);
router.route('/char').get(char);
router.route('/chat').get(chat);
router.route('/person')
  .post(create)
  .get(readall);
router.route('/person/:id')
  .get(read)
  .put(update)
  .delete(del);

module.exports = router;
