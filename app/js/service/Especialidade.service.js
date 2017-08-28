'use strict';

(function() {
	var app = angular.module('vs');

	app.service('EspecialidadeService', function EspecialidadeService($http, $q) {

		var service = this;

		var ESPECIALIDADE_URI = "http://localhost:5000/SpringBootRestApi/api/especialidade/";

		service.unidadesComEspecialidade = function unidadesComEspecialidade(nome) {
			var deffered = $q.defer();
			$http.get(ESPECIALIDADE_URI + "unidadesComEspecialidade/" + nome).then(function success(response) {
				deffered.resolve(response);
			}, function error(response) {
				deffered.reject(response);
			});
			return deffered.promise;
		};

		service.todasEspecialidades = function todasEspecialidades() {
			var deffered = $q.defer();
			$http.get(ESPECIALIDADE_URI + 'todas').then(function success(response) {
				deffered.resolve(response);
			}, function error(response) {
				deffered.reject(response);
			});
			return deffered.promise;
		};

		service.adicionar = function adicionar(especialidade) {
			var deffered = $q.defer();
			$http.post(ESPECIALIDADE_URI, especialidade).then(function success(response) {
				deffered.resolve(response);
			}, function error(response) {
				deffered.reject(response);
			});
			return deffered.promise;
		};
	});
})();