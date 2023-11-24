import { Pessoa } from "./Pessoa";

export class PessoJuridica extends Pessoa{

    private cnpj : string;

    constructor (_nome:string, _cnpj:string){
        super(_nome);
        this.cnpj = _cnpj;
    }

    public setCnpj(_cnpj:string): void{
        this.cnpj = _cnpj;
    }

    public getCnpj(): string{
        return this.cnpj;
    }

    public documentoIdentificador(): string {
        return this.cnpj;
    }
}