'use strict';
(function() {
	var app = angular.module('vs');

	app.controller("SituacaoPrefeituraController", function SituacaoPrefeituraController(toastr, SituacaoPrefeituraService) {

        var self = this;

       	self.situacaoPrefeitura;

       	self.mudarEstado = function(novoEstado) {
       		self.situacaoPrefeitura = novoEstado;
       		SituacaoPrefeituraService.mudarEstado(novoEstado);
       	};

       	(function main() {
       		SituacaoPrefeituraService.getSituacaoAtual().then(function(info){
       			if(info.data === 0){
       				self.situacaoPrefeitura = "Normal";
       			}else if (info.data === 1) {
       				self.situacaoPrefeitura = "Extra";
       			} else {
       				self.situacaoPrefeitura = "Caos";
       			}
       		});
       	})();
	   
	});

})();