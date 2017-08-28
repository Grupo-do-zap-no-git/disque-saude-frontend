'use strict';

(function() {
	var app = angular.module('vs');

	app.service('GeralService', function GeralService($http, $q) {

		var service = this;

		var GERAL_URI = "http://localhost:5000/SpringBootRestApi/api/unidade/";

		service.getMediaMedico = function getMediaMedico(unidadeSaudeId) {
			var deffered = $q.defer();
			$http.get(GERAL_URI + "medicos/" + unidadeSaudeId).then(function success(response) {
				deffered.resolve(response);
			}, function error(response) {
				console.log("AAQUI");
				deffered.reject(response);
			});
			return deffered.promise;
		};

		service.getSituacaoQueixas = function getSituacaoQueixas() {
			var deffered = $q.defer();
			$http.get(GERAL_URI + "situacao").then(function success(response) {
				deffered.resolve(response);
			}, function error(response) {
				deffered.reject(response);
			});
			return deffered.promise;
		};
	});
})();