'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdsSchema = new Schema({
    _id: String,
    name: String,
    campaignName: String,
    picture: String,
    isActive: Boolean,
    impressions: Number,
    spend: Number,
    description: String,
    created: Date
});

module.exports = mongoose.model('Ads', AdsSchema);