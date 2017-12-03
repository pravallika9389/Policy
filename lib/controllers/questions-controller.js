var utils = require('../models/utilities');
var QuestionsManagementService = require('../services/questions-management-service');
// var Validator = require('../security/validator');


exports.getQuestions = (req, res) => {
  "use strict";

  QuestionsManagementService.getQuestions(req.params.sectionUuid)
  .then(sections => { return res.status('200').send(sections); })
  .catch(err => { return res.status('500').send('error encountered while reading questions from DB'); })
};


exports.addQuestion = (req, res) => {
  if (!req || !req.body) return res.status(400).send('Bad Request');

QuestionsManagementService.addQuestion(req.body)
  .then(savedQuestion => { return res.status('201').send(savedQuestion); })
  .catch(err => {
    console.error('error occurred %s: %s ', err, err.stack);
    return res.status('500').send('error encountered while adding Question to DB');
  })
};
