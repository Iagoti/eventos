import Evento from "../model/Evento";

export default function validarEvento(evento: Partial<Evento>): string[] {
    const erros: string[] = [];
    
    if(!evento.nome){
        erros.push("Nome é obrigatorio");
    }

    if(!evento.descricao){
        erros.push("Descrição é obrigatoria");
    }

    if(!evento.data){
        erros.push("Data é obrigatoria");
    }

    if(!evento.local){
        erros.push("Local é obrigatorio");
    }

    if(!evento.alias){
        erros.push("Alias é obrigatorio");
    }

    if(!evento.publicoEsperado || evento.publicoEsperado < 1){
        erros.push("Público esperado é obrigatorio");
    }
    
    return erros;
}