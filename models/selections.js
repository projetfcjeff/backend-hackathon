const mongoose = require('mongoose');

const selectionSchema = mongoose.Schema({
	departure: String,
	arrival: String,
	date: Date,
    price: Number,
    booked: Boolean,
});

const Selection = mongoose.model('selections', selectionSchemaSchema);

module.exports = Selection;