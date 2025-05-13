import Curriculo from "@/components/curriculo";
import Principal from "@/components/landing/Principal";
import Projetos from "@/components/projetos/Projetos";
import Container from "@/components/shared/Container";
import { obterProjetos } from "@/functions/projetos";
import { obterTecnologias } from "@/functions/tecnologias";

export default async function Home() {
  const tecnologias = await obterTecnologias();
  const projetos = await obterProjetos();
  return (
    <div>
      <Principal tecnologias={tecnologias.destaques}/>
      <Container className="py-16 flex flex-col items-center gap-10">
        <Projetos titulo="Destaques" projetos={projetos.destaque} />
        <Projetos titulo="Web" projetos={projetos.Web} />
        <Projetos titulo="Mobile" projetos={projetos.Mobile} />
        <Projetos titulo="Jogos" projetos={projetos.jogos} />
        <Curriculo tecnologias={tecnologias.todas} />
      </Container>
    </div>
  );
}
