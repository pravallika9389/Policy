var SectionMaster = require('../models/sectionmaster-model').SectionMaster;

exports.getAllSections = (callback) => {
  return new Promise(
    (resolve, reject) => {
      SectionMaster.find()
       .then(sections => { resolve(sections); })
       .catch(err => {
         console.error('error while reading sections from DB: %s: %s ', err, err.stack);
         reject(err);
       });
  });
}


exports.addSection = (section) => {
  return new Promise(
    (resolve, reject) => {
      var sectionToSave = new SectionMaster({
        uuid: utilities.getUuid(),
        timestamp: utilities.getTimestamp(),
        sectionname: section.sectionname,
        status: 'active',
        catid: section.catid
      });
      sectionToSave.save()
      .then(savedSection => { resolve(savedSection); })
      .catch(err => { reject(err); })
  });
}
