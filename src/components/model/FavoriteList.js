const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
	price: {type: Number},
	image: {type: String},
	brand: {type: String},
	id: {type: String, required: true},
	title: {type: String},
	reviewScore: {type: Number}
});

const favoriteListDataSchema = new Schema({
	clientId: { type: mongoose.Types.ObjectId, required: true },
	clientName: { type: String, required: true },
	clientEmail: { type: String, required: true },
	productList: [productSchema],
	active: {type: Boolean, required: true},
	updatedAt: { type: Date, required: true },
	createdAt: { type: Date, required: true }
}, { collection: 'favorite-list' });
const FavoriteList = mongoose.model('FavoriteList', favoriteListDataSchema);
module.exports = FavoriteList;