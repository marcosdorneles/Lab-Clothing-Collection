export interface Imodelos {
    id?:number;
    bermuda:boolean
    biquini:boolean
    bolsa:boolean
    bone:boolean
    calca:boolean
    calcados:boolean
    camisa:boolean
    chapeu:boolean
    saia:boolean
}

export class Modelos implements Imodelos{

    id?:number;
    bermuda!:boolean
    biquini!:boolean
    bolsa!:boolean
    bone!:boolean
    calca!:boolean
    calcados!:boolean
    camisa!:boolean
    chapeu!:boolean
    saia!:boolean
}
