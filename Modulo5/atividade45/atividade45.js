"use strict";
/*Interface Strategy com método abstrato execute()
- implementar 3 classes concretas para operações de Soma, Subtração e Multiplicação
- o método execute() recebe dois números inteiros como parâmetro e retorna o resultado como número inteiro
- como input do usuário, a aplicação recebe um valor e depois outro valor e a operação que o usuário deseja fazer
- a aplicação deve definir a strategy que será usada com base na operação informada e imprimir o resultado da operação
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var inputValor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//passar os valores e operadores via input
var Soma = /** @class */ (function () {
    function Soma() {
    }
    Soma.prototype.execute = function (numero1, numero2) {
        return numero1 + numero2;
    };
    return Soma;
}());
var Subtracao = /** @class */ (function () {
    function Subtracao() {
    }
    Subtracao.prototype.execute = function (numero1, numero2) {
        return numero1 - numero2;
    };
    return Subtracao;
}());
var Multiplicacao = /** @class */ (function () {
    function Multiplicacao() {
    }
    Multiplicacao.prototype.execute = function (numero1, numero2) {
        return numero1 * numero2;
    };
    return Multiplicacao;
}());
var Divisao = /** @class */ (function () {
    function Divisao() {
    }
    Divisao.prototype.execute = function (numero1, numero2) {
        return numero1 / numero2;
    };
    return Divisao;
}());
//testes
// const soma1 = new Soma;
// const subtracao1 = new Subtracao;
// const multiplicacao1 = new Multiplicacao;
// const divisao1 = new Divisao;
function acionaCalculadora() {
    return __awaiter(this, void 0, void 0, function () {
        var numero1, _a, operador, numero2, _b, soma1, subtracao1, multiplicacao1, divisao1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, , 4, 5]);
                    _a = parseFloat;
                    return [4 /*yield*/, new Promise(function (resolve) {
                            inputValor.question("Digite o primeiro valor: ", function (answer) {
                                resolve(answer);
                            });
                        })];
                case 1:
                    numero1 = _a.apply(void 0, [_c.sent()]);
                    return [4 /*yield*/, new Promise(function (resolve) {
                            inputValor.question("Digite um operador (+, -, *, /): ", function (answer) {
                                resolve(answer);
                            });
                        })];
                case 2:
                    operador = _c.sent();
                    _b = parseFloat;
                    return [4 /*yield*/, new Promise(function (resolve) {
                            inputValor.question("Digite o segundo número: ", function (answer) {
                                resolve(answer);
                            });
                        })];
                case 3:
                    numero2 = _b.apply(void 0, [_c.sent()]);
                    switch (operador) {
                        case '+':
                            soma1 = new Soma();
                            console.log("".concat(numero1, " ").concat(operador, " ").concat(numero2, " = "));
                            console.log(soma1.execute(numero1, numero2));
                            break;
                        case '-':
                            subtracao1 = new Subtracao();
                            console.log("".concat(numero1, " ").concat(operador, " ").concat(numero2, " = "));
                            console.log(subtracao1.execute(numero1, numero2));
                            break;
                        case '*':
                            multiplicacao1 = new Multiplicacao();
                            console.log("".concat(numero1, " ").concat(operador, " ").concat(numero2, " = "));
                            console.log(multiplicacao1.execute(numero1, numero2));
                            break;
                        case '/':
                            divisao1 = new Multiplicacao();
                            console.log("".concat(numero1, " ").concat(operador, " ").concat(numero2, " = "));
                            console.log(divisao1.execute(numero1, numero2));
                            break;
                        default:
                            console.log("Operador inválido.");
                    }
                    return [3 /*break*/, 5];
                case 4:
                    console.log("Fim da opera\u00E7\u00E3o");
                    inputValor.close();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
}
console.log(acionaCalculadora());
