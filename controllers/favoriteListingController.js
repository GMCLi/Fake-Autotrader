const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.FavoriteListing.find(req.query)
            .then(dbListing => res.json(dbListing))
            .catch(err => console.log(err));
    },
    findById: (req, res) => {
        db.FavoriteListing.findById(req.params.id)
            .then(dbListing => res.json(dbListing))
            .catch(err => console.log(err));
    },
    create: (req, res) => {
        db.FavoriteListing.create(req.body)
            .then(dbListing => res.json(dbListing))
            .catch(err => console.log(err));
    },
    update: (req, res) => {
        db.FavoriteListing.findOneAndUpdate({ id: req.params.id }, req.body)
            .then(dbListing => res.json(dbListing))
            .catch(err => console.log(err));
    },
    remove: (req, res) => {
        db.FavoriteListing.findById(req.params.id)
            .then(dbListing => dbListing.remove())
            .then(dbListing => res.json(dbListing))
            .catch(err => console.log(err));
    }
};