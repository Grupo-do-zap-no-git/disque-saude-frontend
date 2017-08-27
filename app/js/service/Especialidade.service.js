'use strict';

(function() {
	var app = angular.module('vs');

	app.service('EspecialidadeService', function EspecialidadeService($http, $q) {

		var service = this;

		var ESPECIALIDADE_URI = "http://localhost:5000/SpringBootRestApi/api/especialidade/";

		service.unidadesComEspecialidade = function unidadesComEspecialidade(descricao) {
			var deffered = $q.defer();
			$http.get(ESPECIALIDADE_URI + "unidadesComEspecialidade/" + descricao).then(function success(response) {
				deffered.resolve(response);
			}, function error(response) {
				deffered.reject(response);
			});
			return deffered.promise;
		};
	});
})();