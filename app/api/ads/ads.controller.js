var Ads = require('./ads.model');
var _ = require('lodash');
// Get list of ads
exports.showAllAds = function (req, res) {
    Ads.find(function (err, ads) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(ads);
    });
};
// Get a single ad
exports.showOne = function (req, res) {
    Ads.findOne({'_id': req.params.id}, function (err, ad) {
        if (err) {
            return handleError(res, err);
        }
        if (!ad) {
            return res.status(404);
        }
        return res.status(200).json(ad);
    });
};
// Creates a new Ad in the DB.
exports.create = function (req, res) {
    Ads.create(req.body, function (err, ad) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(201).json(ad);
    });
};
// Updates an existing ad in the DB.
exports.update = function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    Ads.findById(req.params.id, function (err, ad) {
        if (err) {
            return handleError(res, err);
        }
        if (!ad) {
            return res.send(404);
        }
        var updated = _.merge(ad, req.body);
        updated.save(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.json(200, ad);
        });
    });
};
// Deletes an ad from the DB.
exports.destroy = function (req, res) {
    Ads.findById(req.params.id, function (err, ad) {
        if (err) {
            return handleError(res, err);
        }
        if (!ad) {
            return res.sendStatus(404);
        }
        ad.remove(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.sendStatus(204);
        });
    });
};
function handleError(res, err) {
    return res.status(500).send(err);
}