import Pagina from "@/components/template/Pagina";
import { Evento } from "@/core";

export default function Home() {
  const e: Partial<Evento> = {};
  return (
    <Pagina>
      <div>Início</div>
    </Pagina>
  )
}
