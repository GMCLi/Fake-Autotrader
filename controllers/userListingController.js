const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.UserListing.find(req.query)
      .then(dbUserListing => res.json(dbUserListing))
      .catch(err => console.log(err));
  },
  findOne: (req, res) => {
    db.UserListing.findById(req.params.id)
      .then(dbUserListing => res.json(dbUserListing))
      .catch(err => console.log(err));
  },
  create: (req, res) => {
    db.UserListing.create(req.body.listing)
      .then(dbUserListing => res.json(dbUserListing))
      .catch(err => console.log(err));
  },
  update: (req, res) => {
    console.log(req.params.id)
    console.log(req.body.listing)
    db.UserListing.findByIdAndUpdate(req.params.id, { make: req.body.listing.make, model: req.body.listing.model, year: req.body.listing.year })

      // db.UserListing.findOneAndUpdate({ id: req.params.id }, req.body.listing)
      .then(dbUserListing => res.json(dbUserListing))
      .catch(err => console.log(err));
  },
  remove: (req, res) => {
    db.UserListing.findById(req.params.id)
      .then(dbUserListing => dbUserListing.remove())
      .then(dbUserListing => res.json(dbUserListing))
      .catch(err => console.log(err));
  }
}