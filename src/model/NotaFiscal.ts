import { PessoJuridica } from "./PessoJuridica";
import { PessoaFisica } from "./PessoaFisica";

export class NotaFiscal{

    private numeroNotaFiscal: string;
    public pessoaF = new PessoaFisica(``,``);
    public pessoaJ = new PessoaFisica(``,``);

    constructor(_numeroNotaFiscal: string){
        this.numeroNotaFiscal = _numeroNotaFiscal;
    }

    public setNumeroNotaFiscal(_numeroNotaFiscal:string){
        this.numeroNotaFiscal = _numeroNotaFiscal;
    }

    public getNotaFiscal():string{
        return this.numeroNotaFiscal;
    }
}