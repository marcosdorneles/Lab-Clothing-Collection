export interface Icolecoes {
  id?: number;
  nome: string;
  responsavel: string;
  estacao: string;
  marca: string;
  orcamento: number;
  anoLancamento: string;
}

export class Colecoes implements Icolecoes {
  id?: number;
  nome!: string;
  responsavel!: string;
  estacao!: string;
  marca!: string;
  orcamento!: number;
  anoLancamento!: string;
}
