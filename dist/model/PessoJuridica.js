"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoJuridica = void 0;
const Pessoa_1 = require("./Pessoa");
class PessoJuridica extends Pessoa_1.Pessoa {
    constructor(_nome, _cnpj) {
        super(_nome);
        this.cnpj = _cnpj;
    }
    setCnpj(_cnpj) {
        this.cnpj = _cnpj;
    }
    getCnpj() {
        return this.cnpj;
    }
    documentoIdentificador() {
        return this.cnpj;
    }
}
exports.PessoJuridica = PessoJuridica;
//# sourceMappingURL=PessoJuridica.js.map