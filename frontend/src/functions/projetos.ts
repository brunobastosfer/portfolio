import { Projeto, Tipo } from "@core"
import { HttpGet } from "./api"

export async function obterProjetos() {
  const projetos: Projeto[] = await HttpGet("/projetos")

  return {
    todos: projetos,
    get Mobile() {
      return projetos.filter((projeto) => projeto.tipo === Tipo.MOBILE)
    },
    get Web() {
      return projetos.filter((projeto) => projeto.tipo === Tipo.WEB)
    },
    get jogos() {
      return projetos.filter((projeto) => projeto.tipo === Tipo.JOGO) 
    },
    get destaque() {
      return projetos.filter((projeto) => projeto.destaque)
    }
  }
}

export async function obterProjeto(id: string): Promise<Projeto | null> {
  const projeto = await HttpGet(`/projetos/${id}`)
  return projeto;
}