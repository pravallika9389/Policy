var utils = require('../models/utilities');
var OptionsManagementService = require('../services/options-management-service');
// var Validator = require('../security/validator');


exports.getOptionsByQUuid = (req, res) => {
  "use strict";

  OptionsManagementService.getOptionsByQUuid(req.params.questionUuid)
  .then(options => { return res.status('200').send(options); })
  .catch(err => { return res.status('500').send('error encountered while reading options from DB'); })
};


exports.addOption = (req, res) => {
  if (!req || !req.body) return res.status(400).send('Bad Request');

OptionsManagementService.addOption(req.body)
  .then(savedOption => { return res.status('201').send(savedOption); })
  .catch(err => {
    console.error('error occurred %s: %s ', err, err.stack);
    return res.status('500').send('error encountered while adding option to DB');
  })
};
