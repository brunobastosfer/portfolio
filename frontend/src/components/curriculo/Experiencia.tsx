export default function Experiencia() {
  return (
    <div className="flex flex-col sm:flex-row lg:flex-col flex-col items-center gap-6 p-6 justify-around bg-black border border-zinc-800 rounded-2xl">
      <Item principal="+150" label="países atendidos" />
      <Item principal="+20" label="anos de experiência" />
      <Item principal="+420k" label="clientes satisfeitos" />
    </div>
  )
}

function Item(props: { principal: string, label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-red-500 text-3xl font-bold leading-6">
        {props.principal}
      </span>
      <span className="text-zinc-400 text-sm text-center">
        {props.label}
      </span>
    </div>
  )
}