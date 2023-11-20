"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SistemaSeguranca = /** @class */ (function () {
    function SistemaSeguranca() {
        this.senha = "12345";
    }
    SistemaSeguranca.getInstance = function () {
        if (!this.instance) {
            this.instance = new SistemaSeguranca();
        }
        return this.instance;
    };
    SistemaSeguranca.prototype.acessarBase = function (senha) {
        if (senha === this.senha) {
            console.log('Acesso autorizado!');
        }
        else {
            console.log('Acesso negado! Senha incorreta.');
        }
    };
    return SistemaSeguranca;
}());
exports.default = SistemaSeguranca;
