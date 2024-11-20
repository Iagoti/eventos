import Convidado from "../model/Convidado";

export default function validarConvidado(convidado: Partial<Convidado>): string[] {
    const erros: string[] = [];

    if(!convidado.nome){
        erros.push("Nome é obrigatorio");
    }

    if(!convidado.email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(convidado.email)){
        erros.push("Email inválido");
    }
    
    return erros;
}