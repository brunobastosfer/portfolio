import { Tecnologia } from "@core";
import Cabecalho from "../shared/Cabecalho";
import Tecnologias from "../tecnologias/Tecnologias";

export interface PrincipalProps {
  tecnologias: Tecnologia[];
}

export default function Principal(props: PrincipalProps) {
  return(
    <div className="
      flex flex-col items-center justify-center h-[500px]
      bg-[url('/principal.jpg')] bg-cover bg-center
    ">
      <Cabecalho />
      <div className="flex-1 w-full flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col gap-1 items-center">
          <h1 className="flex gap-3 items-center">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span className="text-3xl sm:text-5xl font-bold text-center">Bruno Bastos</span>
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
          </h1>
          <h2 className="text-zinc-500 text-center">Desenvolvedor FullStack</h2>
        </div>
        <Tecnologias tecnologias={props.tecnologias} />
      </div>
    </div>
  )
}