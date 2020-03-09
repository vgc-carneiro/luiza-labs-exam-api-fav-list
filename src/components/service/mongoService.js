const mongodb = require('../../config/mongodb');
const FavoriteList = require('../model/FavoriteList');
const log = require('log4js').getLogger('mongoService');

async function tryConnectToMongo() {
	if(mongodb.checkState() !== 1) {
		await mongodb.connection();
	}
}

function getFavoriteList(data){
	return new Promise((resolve, reject) => {
		tryConnectToMongo().then(() => {
			FavoriteList.findOne(data).then((result) => {
				resolve(result);
			}, (error) => {
				log.error('getFavoriteList:', error);
				reject(error);
			});
		});
	});
}

module.exports = {getFavoriteList};