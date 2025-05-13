import { Tecnologia } from "@core";

export interface TecnologiasUtilizadasProps {
  tecnologias: Tecnologia[]
}

export default function TecnologiasUtilizadas(props: TecnologiasUtilizadasProps) {
  return props.tecnologias ? (
    <div className="flex justify-center items-center p-6 w-full lg:w-72 bg-black border border-zinc-800 rounded-2xl">
      <div className="flex justify-center gap-x-3 flex-wrap">
        {
          props.tecnologias.map((tecnologia) => (
            <div key={tecnologia.id}>
              <span className="text-red-500 font-bold">#</span>
              <span>{tecnologia.nome}</span>
            </div>
          ))
        }
      </div>
    </div>
  ) : null
}