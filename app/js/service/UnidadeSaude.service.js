'use strict';

(function() {
	var app = angular.module('vs');

	app.service('UnidadeSaudeService', function UnidadeSaudeService($http, $q) {

		var service = this;

		var UNIDADE_URI =  "http://localhost:5000/SpringBootRestApi/api/unidade/";

		service.pesquisaUnidadeSaude = function pesquisaUnidadeSaude(bairro) {
			var deffered = $q.defer();
			$http.get(UNIDADE_URI + "buscaPorBairro/" + bairro).then(function success(response) {
				deffered.resolve(response);
			}, function error(response) {
				deffered.reject(response);
			});
			return deffered.promise;
		};

		service.adicionarUnidade = function adicionarUnidade(bairro, tipo,especialidades,atendentes,taxa) {
			var deffered = $q.defer();

			var unidade = {
				especialidades: [{}],
				bairro: bairro,
				type: tipo,
				atendentes: atendentes,
				taxaDiariaAtendimentos: taxa
			};

			$http.post(UNIDADE_URI+"incluirUnidade", JSON.stringify(unidade)).then(function success(response) {
				deffered.resolve(response);
			}, function error(response) {
				deffered.reject(response);
			});
			return deffered.promise;
		};
	});
	
})();