/*Aplique o padrão de projeto Observer para criar um simples editor de texto. 
Considere a solução apresentada no Hipertexto 6 e utilize o código visto para 
- implementar novas classes. Os requisitos para avaliar o projeto são implementar uma subclasse da classe Editor chamada textEditor 
- aplicar o método insertLine, que recebe os parâmetros lineNumber e text
- inserir o texto na ordem correspondente a lineNumber e deslocar as linhas posteriores se necessário;
- aplicar o método <b>removeLine</b>, que recebe lineNumber como parâmetro, deleta o texto da linha correspondente e desloca as linhas posteriores se necessário
- instanciar um TextEditor e disparar o evento open receber as linhas de texto, que serão inseridas no objeto textEditor, do usuário até que ele envie o texto “EOF”, que não deve ser inserido no objeto <b>textEditor</b>;&nbsp;
- por fim, o textEditor deve disparar o evento “save” para que o conteúdo seja salvo no arquivo configurado e imprimir todo o conteúdo do arquivo na tela
*/


interface Observer {
    update: (line: string) => void;
}

class TextEditor {
    private lines: string[] = [];
    private observers: Observer[] = [];

    insertLine(lineNumber: number, text: string) {
        this.lines.splice(lineNumber, 0, text);
        this.notifyObservers();
    }

    removeLine(lineNumber: number) {
        if(lineNumber >= 0 && lineNumber < this.lines.length) {
            this.lines.splice(lineNumber, 1);
            this.notifyObservers();
        }
    }

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer) {
        const index = this.observers.indexOf(observer);
        if(index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    public notifyObservers() {
        this.observers.forEach((observer) => {
            observer.update(this.getAllLines());
        });
    }
    
    getAllLines() {
        return this.lines.join('\n');
    }
}

class ConsoleObserver implements Observer {
    update(line: string) {
        console.log(line);
    }
}

class FileSaverObserver implements Observer {
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
    }

    update(line: string) {
        console.log(`Salvando conteúdo em ${this.fileName}:\n${line}`);
    }
}

const textEditor = new TextEditor();

const consoleObserver = new ConsoleObserver();
textEditor.addObserver(consoleObserver);

const fileSaverObserver = new FileSaverObserver('arquivoTeste.txt');
textEditor.addObserver(fileSaverObserver);

const userInput = ['1.Linha', '2.Linha', '3.Linha', '4.Linha', 'EOF'];

for(const line of userInput) {
    if(line == 'EOF') {
        textEditor.notifyObservers();
        break;
    } else {
        textEditor.insertLine(textEditor.getAllLines().split('\n').length, line)
    }
}