'use strict';
(function() {
    var app = angular.module('vs');

    app.controller("PesquisaEspecialidadeCtrl", function PesquisaEspecialidadeCtrl(toastr, EspecialidadeService) {

        var pesquisaEspecialidadeCtrl = this;
        pesquisaEspecialidadeCtrl.unidades = [];

            pesquisaEspecialidadeCtrl.pesquisaUnidadeSaude = function unidadesComEspecialidade(descricao) {
            UnidadeSaudeService.unidadesComEspecialidade(descricao)
                .then(function success(response) {
                    pesquisaUnidadeSaudeCtrl.idUnidades = [];
                    pesquisaUnidadeSaudeCtrl.idUnidades.push(response.data);
                }, function error() {
                    toastr.error("Erro na busca de especialidade");
                });
            }
    });
})();