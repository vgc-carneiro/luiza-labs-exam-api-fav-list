const mongoService = require('../service/mongoService');
const ObjectId = require('mongoose').Types.ObjectId;

function getFavoriteListClientById(id){
	return new Promise((resolve, reject) => {
		if(!id){
			reject({status: 400, data: {message: 'Falta de parâmetros.'}});
		}else{
			if (id.match(/^[0-9a-fA-F]{24}$/)) {
				let data = {
					clientId: ObjectId(id),
					active: true
				};
				mongoService.getFavoriteList(data).then((result) => {
					if(result){
						resolve(result);
					}else{
						reject({status: 404, data: {message: 'Cliente não encontrado.'}});
					}
				});
			} else {
				reject({status: 400, data: {message: 'ID malformado.'}});
			}
		}
	});
}

function getFavoriteListClientByEmail(email){
	return new Promise((resolve, reject) => {
		if(!email){
			reject({status: 400, data: {message: 'Falta de parâmetros.'}});
		}else{
			let data = {
				clientEmail: email,
				active: true
			};
			mongoService.getFavoriteList(data).then((result) => {
				if(result){
					resolve(result);
				}else{
					reject({status: 404, data: {message: 'Cliente não encontrado.'}});
				}
			});
		}
	});
}

module.exports = {getFavoriteListClientById, getFavoriteListClientByEmail};