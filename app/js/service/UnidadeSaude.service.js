'use strict';

(function() {
	var app = angular.module('vs');

	app.service('UnidadeSaudeService', function UnidadeSaudeService($http, $q) {

		var service = this;

		var UNIDADE_URI =  "http://localhost:5000/SpringBootRestApi/api/unidade/";

		service.pesquisaUnidadeSaude = function pesquisaUnidadeSaude(bairro) {
			var deffered = $q.defer();
			$http.get(UNIDADE_URI + "busca?bairro=" + bairro).then(function success(response) {
				deffered.resolve(response);
			}, function error(response) {
				deffered.reject(response);
			});
			return deffered.promise;
		};

		service.adicionarUnidade = function adicionarUnidade(nome,bairro,tipo) {
			var deffered = $q.defer();
			var unidade = {
				nome: nome,
				bairro: bairro,
				tipo: tipo
			};
			$http.post(UNIDADE_URI, JSON.stringify(unidade)).then(function success(response) {
				deffered.resolve(response);
			}, function error(response) {
				deffered.reject(response);
			});
			return deffered.promise;
		};



	});
})();