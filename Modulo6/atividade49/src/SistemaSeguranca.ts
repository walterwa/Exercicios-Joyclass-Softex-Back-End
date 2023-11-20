class SistemaSeguranca {
    private static instance: SistemaSeguranca;
    private senha: string = "12345";

    private constructor() {}

    public static getInstance(): SistemaSeguranca {
        if(!this.instance) {
            this.instance = new SistemaSeguranca();
        }
        return this.instance;
    }
    public acessarBase(senha: string): void {
        if(senha === this.senha) {
            console.log('Acesso autorizado!');
        } else {
            console.log('Acesso negado! Senha incorreta.')
        }
    }
}


export default SistemaSeguranca;