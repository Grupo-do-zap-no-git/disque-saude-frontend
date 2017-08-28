'use strict';
(function() {
    var app = angular.module('vs');

    app.controller("RegistraQueixaCtrl", function RegistraQueixaCtrl(toastr, $state, QueixaService) {

        var registraQueixaCtrl = this;

        registraQueixaCtrl.tipoSelecionado = 'ANIMAL';
        registraQueixaCtrl.animal = '';
        registraQueixaCtrl.local = '';

        registraQueixaCtrl.registraQueixa = function registraQueixa(queixa) {
            queixa.tipoDeQueixa = registraQueixaCtrl.tipoSelecionado;
            addAtrr(queixa);
            QueixaService.registraQueixa(queixa)
                .then(function success(response) {
                    toastr.success("Queixa adicionada com sucesso!");
                    $state.go('vs.sucesso', {id: response.data.id});
                }, function error() {
                    toastr.error("Problemas ao tentar adicionar queixa.");
                });
        }

        function addAtrr(queixa) {
            if(registraQueixaCtrl.tipoSelecionado === 'ANIMAL') {
                queixa.tipoAnimal = registraQueixaCtrl.animal;
                queixa.local = registraQueixaCtrl.local;
            }
        }
    });
})();