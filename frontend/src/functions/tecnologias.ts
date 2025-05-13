import { Tecnologia } from '@core'
import { HttpGet } from './api'
export async function obterTecnologias() {
  const tecnologias: Tecnologia[] = await HttpGet("/tecnologias")

  return {
    todas: tecnologias,
    get destaques() {
      return tecnologias.filter((tecnologia: Tecnologia) => tecnologia.destaque)
    }
  }
}