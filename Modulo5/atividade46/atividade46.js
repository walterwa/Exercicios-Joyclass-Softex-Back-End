/*Aplique o padrão de projeto Observer para criar um simples editor de texto.
Considere a solução apresentada no Hipertexto 6 e utilize o código visto para
- implementar novas classes. Os requisitos para avaliar o projeto são implementar uma subclasse da classe Editor chamada textEditor
- aplicar o método insertLine, que recebe os parâmetros lineNumber e text
- inserir o texto na ordem correspondente a lineNumber e deslocar as linhas posteriores se necessário;
- aplicar o método <b>removeLine</b>, que recebe lineNumber como parâmetro, deleta o texto da linha correspondente e desloca as linhas posteriores se necessário
- instanciar um TextEditor e disparar o evento open receber as linhas de texto, que serão inseridas no objeto textEditor, do usuário até que ele envie o texto “EOF”, que não deve ser inserido no objeto <b>textEditor</b>;&nbsp;
- por fim, o textEditor deve disparar o evento “save” para que o conteúdo seja salvo no arquivo configurado e imprimir todo o conteúdo do arquivo na tela
*/
var TextEditor = /** @class */ (function () {
    function TextEditor() {
        this.lines = [];
        this.observers = [];
    }
    TextEditor.prototype.insertLine = function (lineNumber, text) {
        this.lines.splice(lineNumber, 0, text);
        this.notifyObservers();
    };
    TextEditor.prototype.removeLine = function (lineNumber) {
        if (lineNumber >= 0 && lineNumber < this.lines.length) {
            this.lines.splice(lineNumber, 1);
            this.notifyObservers();
        }
    };
    TextEditor.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    TextEditor.prototype.removeObserver = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    };
    TextEditor.prototype.notifyObservers = function () {
        var _this = this;
        this.observers.forEach(function (observer) {
            observer.update(_this.getAllLines());
        });
    };
    TextEditor.prototype.getAllLines = function () {
        return this.lines.join('\n');
    };
    return TextEditor;
}());
var ConsoleObserver = /** @class */ (function () {
    function ConsoleObserver() {
    }
    ConsoleObserver.prototype.update = function (line) {
        console.log(line);
    };
    return ConsoleObserver;
}());
var FileSaverObserver = /** @class */ (function () {
    function FileSaverObserver(fileName) {
        this.fileName = fileName;
    }
    FileSaverObserver.prototype.update = function (line) {
        console.log("Salvando conte\u00FAdo em ".concat(this.fileName, ":\n").concat(line));
    };
    return FileSaverObserver;
}());
var textEditor = new TextEditor();
var consoleObserver = new ConsoleObserver();
textEditor.addObserver(consoleObserver);
var fileSaverObserver = new FileSaverObserver('arquivoTeste.txt');
textEditor.addObserver(fileSaverObserver);
var userInput = ['1.Linha', '2.Linha', '3.Linha', '4.Linha', 'EOF'];
for (var _i = 0, userInput_1 = userInput; _i < userInput_1.length; _i++) {
    var line = userInput_1[_i];
    if (line == 'EOF') {
        textEditor.notifyObservers();
        break;
    }
    else {
        textEditor.insertLine(textEditor.getAllLines().split('\n').length, line);
    }
}
