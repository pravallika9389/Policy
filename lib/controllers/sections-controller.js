var utils = require('../models/utilities');
var SectionsManagementService = require('../services/sections-management-service');
// var Validator = require('../security/validator');


exports.getAllSections = (req, res) => {
  "use strict";

  SectionsManagementService.getAllSections()
  .then(sections => { return res.status('200').send(sections); })
  .catch(err => { return res.status('500').send('error encountered while reading sections from DB'); })
};


exports.addSection = (req, res) => {
  if (!req || !req.body) return res.status(400).send('Bad Request');

SectionsManagementService.addSection(req.body)
  .then(savedSection => { return res.status('201').send(savedSection); })
  .catch(err => {
    console.error('error occurred %s: %s ', err, err.stack);
    return res.status('500').send('error encountered while adding Section to DB');
  })
};
