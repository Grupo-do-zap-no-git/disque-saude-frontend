'use strict';
(function() {
    var app = angular.module('vs');

    app.controller("SituacaoQueixasCtrl", function SituacaoQueixasCtrl(toastr, GeralService) {

        var situacaoQueixasCtrl = this;
        situacaoQueixasCtrl.situacao = "";

        var getSituacaoQueixas = function () {
            GeralService.getSituacaoQueixas()
                .then(function success(response) {
                    if (response.data == 2) {
                        situacaoQueixasCtrl.situacao = {
                            status: "RUIM",
                            cor: "label-danger"
                        };
                    } else if (response.data == 1) {
                        situacaoQueixasCtrl.situacao = {
                            status: "REGULAR",
                            cor: "label-primary"
                        };
                    } else {
                        situacaoQueixasCtrl.situacao = {
                            status: "BOM",
                            cor: "label-success"
                        };
                    }
                }, function error() {
                    toastr.error("Erro na busca");
                });
        }

        getSituacaoQueixas();
    });
})();