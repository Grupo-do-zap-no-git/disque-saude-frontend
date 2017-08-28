'use strict';

(function () {
	var app = angular.module('vs');

	app.service('SituacaoPrefeituraService', function SituacaoPrefeitura($http, $q) {
		
		var self = this;

		const SITUACAO_URI = "http://secret-fjord-22556.herokuapp.com/SpringBootRestApi/api/queixa/";

		self.mudarEstado = function(novoEstado) {
			var deffered = $q.defer();
			$http.put(SITUACAO_URI + 'situacao', JSON.stringify(novoEstado)).then(info =>{
				deffered.resolve(info);
			}).catch(err => deffered.reject(err));
		}

		self.getSituacaoAtual = function() {
			var deffered = $q.defer();

			$http.get(SITUACAO_URI + 'situacaoPrefeitura').then(info =>{
				deffered.resolve(info);
			}).catch(err => deffered.reject(err));

			return deffered.promise;
		}
	});
})();