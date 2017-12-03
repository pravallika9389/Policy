var bodyparser = require('body-parser');
var jsonParser = bodyparser.json();
var sections = require('../controllers/sections-controller');
var questions = require('../controllers/questions-controller');
var options = require('../controllers/options-controller');

module.exports = function(app) {
  "use strict";

  app.use(jsonParser);

  app.get('/sections', sections.getAllSections);
  app.post('/sections', jsonParser, sections.addSection);

  app.get('/questions/:sectionUuid', questions.getQuestions);
  app.post('/questions', jsonParser, questions.addQuestion);

  app.get('/options/:questionUuid', options.getOptionsByQUuid);
  app.post('/options', jsonParser, options.addOption);

};
