export interface Imodelos {
    id?:number;
    nome:string;
    colecao:string;
    bordado:string;
    tipo:string
    responsavel:string;
    estampa:string
}

export class Modelos implements Imodelos{

    id?: number | undefined;
    nome!: string;
    colecao!: string;
    bordado!: string;
    tipo!: string;
    responsavel!: string;
    estampa!: string;
}
