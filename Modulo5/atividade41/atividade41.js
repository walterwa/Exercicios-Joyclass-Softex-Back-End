/*Os produtos devem implementar uma interface comum
- o cliente deve utilizar apenas a fábrica para criar instâncias
do tipo abstatro da interface
- todo computador precisa ter, com getter, os atributos: ram, hdd, cpu e types
- há dois computadores: pc e server, RAM e HD estão em GB
-CPU deve estar em GHZ
- através do tipo informado, a fábrica decide qual o tipo de computador será instanciado
- quando o método .toString() for aplicado a um computador, ele deve imprimir seus atributos*/

class Computador{
    constructor(ram, hdd, cpu, type) {
        this._ram = ram;
        this._hdd = hdd;
        this._cpu = cpu;
        this._type = type;
    }
    
    get ram() {
        return this._ram + "GB";
    }
    set setRam(ram) {
        this._ram = ram;
    }
    get hdd() {
        return this._hdd + "GB";
    }
    set setHdd(hdd) {
        this._hdd = hdd;
    }
    get cpu() {
        return this._cpu + "GHz";
    }
    set setCpu(cpu) {
        this._cpu = cpu;
    }
    get type() {
        return this._type;
    }
    set setType(type) {
        this._type = type;
    }
    toString() {
        return `Você passou as seguintes configurações: \nTipo de Computador: ${this.type}\n RAM:${this.ram}\n HDD: ${this.hdd}\n CPU (núcleos):${this.cpu}\n`
    }
}

//fazer class extends pc 
//fazer class extends server

class PC extends Computador {
    constructor(ram, hdd, cpu, type) {
        super(ram, hdd, cpu, type);
    }
}

class Server extends Computador {
    constructor(ram, hdd, cpu, type) {
        super(ram, hdd, cpu, type);
    }
}

class ComputadorFactory extends Computador {
    constructor(ram, hdd, cpu, type)   {
        if(type == "PC") {
            return new Computador(ram, hdd, cpu, type)
        }
        else if(type == "Server") {
            return new Computador(ram, hdd, cpu, type)
        }
    } 
}

const pc1 = new ComputadorFactory(16, 512, 12, "PC")
const server1 = new ComputadorFactory(32, 2000, 48, "Server")


console.log(pc1.toString())


console.log(server1.toString())

