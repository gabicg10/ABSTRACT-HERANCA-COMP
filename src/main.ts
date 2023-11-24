import { NotaFiscal } from "./model/NotaFiscal";

const notaF1 = new NotaFiscal (`123456-789`);
notaF1.pessoaF.setNome(`José Mateus`);
notaF1.pessoaF.setCpf(`11122233345`);
console.log(`Nome: ${notaF1.pessoaF.getNome()}`);
console.log(`CPF: ${notaF1.pessoaF.getCpf()}`);
console.log(`Nota Fiscal n0: ${notaF1.getNotaFiscal()}`);

const notaF2 = new NotaFiscal (`012345-678`);
notaF2.pessoaF.setNome(`Mateus Jose`);
notaF2.pessoaF.setCpf(`66677788890`);
console.log(`Nome: ${notaF2.pessoaF.getNome()}`);
console.log(`CPF: ${notaF2.pessoaF.getCpf()}`);
console.log(`Nota Fiscal n0: ${notaF2.getNotaFiscal()}`);