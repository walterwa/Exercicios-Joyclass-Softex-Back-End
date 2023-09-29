function f() {
    console.log("f(): avaliada");
    return function (
        alvo: any,
        chaveDePropriedade: string,
        descritor: descritorDePropriedade
    ) {
        console.log("f(): chamada");
    };
}

function g() {
    console.log("g(): avaliada");
    return function (
        alvo: any,
        chaveDePropriedade: string,
        descritor: descritorDePropriedade
    ) {
        console.log("g(): chamada")
    };
}

class C {
    @f()
    @g()
    method() {}
}