export interface IUser {
    id?: number;
    email:string;
    password:string;
    empresa: string;
    cnpj:string;
    nome: string
}

export class User implements IUser{
    nome!: string;
    empresa!: string;
    cnpj!: string;
    id?: number;
    email!:string;
    password!:string
}
