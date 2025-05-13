import Image from "next/image";

export default function MiniCurriculo() {
  return (
    <div className="flex flex-1 flex-col-reverse gap-6 md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start  lg:items-center xl:items-start bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
      <div className="relative min-w-72 h-64 xl:self-end">
        <Image src="/minha-foto.png" alt="Minha Foto" fill/>
      </div>
      <div className="flex flex-col gap-5 self-center py-6 items-center md:items-start lg:items-center xl:items-start">
        <div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
          <span className="bg-gradient-to-r from-red-500 via-white to-white text-transparent bg-clip-text text-2xl font-bold">Bruno Bastos</span>
          <span>C&O da ZayTech</span>
        </div>
        <p className="text-sm text-center md:text-left lg:text-center xl:text-left">Formado em Análise e Desenvolvimento de Sistema, já passou por empresas como Americanas S.A, Serasa, Uniodonto...
          Há 3 anos atua na área como desenvolvedor de softwares.
        </p>
      </div>
    </div>
  )
}