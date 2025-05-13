import Cabecalho from "@/components/shared/Cabecalho";
import CarroselImagens from "@/components/shared/CarroselImagens";
import Container from "@/components/shared/Container";
import Tecnologias from "@/components/tecnologias/Tecnologias";
import { getReadme } from "@/functions/github";
import { obterProjeto } from "@/functions/projetos";

export default async function PaginaProjeto(props: { params: Promise<{id: string}>}) {
  const { id } = await props.params
  const project = await obterProjeto(id)
  if(!project) return null
  const readme = await getReadme(project.repositorio)
  return (
    <div className="bg-blak">
      <Cabecalho />
      <Container className="py-7 flex flex-col items-center gap-10">
        <h1 className="text-3xl font-bold self-start">{project.nome}</h1>
        <CarroselImagens imagens={project.imagens.slice(1)}/>
        <Tecnologias tecnologias={project.tecnologias} tamanhoMenor/>
        <div>{readme}</div>
      </Container>
    </div>
  )
}