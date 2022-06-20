const { text } = require('express');
var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Armando',
    added: new Date().toDateString()
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toDateString()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', (req, res, next) => {
  res.render('form', { title: 'Mini Messageboard'})
})

router.post('/new', (req, res, next) => {
  messages.push({user: req.body.messageUser, text: req.body.messageText, added: new Date().toDateString()})
  res.redirect('/')
})

module.exports = router;
