import Convidado from "../model/Convidado";
import validarConvidado from "./validarConvidado";

export default function complementarConvidado(convidado: Partial<Convidado>): Convidado {
    const erros = validarConvidado(convidado);

    if(erros.length > 0){
        throw new Error(erros.join("\n"));
    }

    const qtddeAcompanhantes = convidado.qtdeAcompanhantes ?? 0;
    const possuiAcompanhantes = convidado.possuiAcompanhantes && convidado.confirmado && qtddeAcompanhantes > 0;
    const convidadoAtualizado = {
        ...convidado,
        confirmado: true,
        qtdeAcompanhantes: possuiAcompanhantes? qtddeAcompanhantes : 0,
        possuiAcompanhantes: possuiAcompanhantes,
    }

    return convidadoAtualizado as Convidado;
}