import { Tecnologia } from "@core";
import TecnologiasUtilizadas from "./tecnologiasUtilizadas";
import Experiencia from "./Experiencia";
import MiniCurriculo from "./MiniCurriculo";

export interface CurriculoProps {
  tecnologias: Tecnologia[]
}

export default function Curriculo(props: CurriculoProps) {
  return(
    <div className="flex flex-col lg:flex-row gap-4 min-h-72 w-full">
      <MiniCurriculo />
      <Experiencia />
      <TecnologiasUtilizadas tecnologias={props.tecnologias} />
    </div>
  )
}