"use client"
import ConteudoMD from "@/components/shared/ConteudoMD";
import useChat from "@/hooks/useChat"
import Mensagem from "@/model/Mensagem";
import Image from "next/image";
import { useState } from "react";

export default function Chat() {
  const { chatId, mensagens, adicionarMensagem, limparMensagens, pensando} = useChat();
  const [texto, setTexto] = useState("")
  return (
    <div>
      <h1>Chat</h1>
      <h2>Chat ID: {chatId}</h2>
      <button onClick={limparMensagens}>Limpar</button>

      <ul>
        {mensagens.map((mensagem: Mensagem) => (
          <li key={mensagem.id} className="flex flex-col gap-2">
            <div>{mensagem.autor}:</div>
            <ConteudoMD markdown={mensagem.texto}/>
          </li>
        ))}
      </ul>

      {
        pensando && (
          <div>
            <Image src="/pensando.gif" alt="Pensando" width={50} height={50}/>
          </div>
        )
      }

      <input className="border border-gray-700 rounded p-2" type="text" value={texto} onChange={(e) => {
        setTexto(e.target.value)
      }}
      onKeyDown={(e: React.KeyboardEvent) => {
        if(e.key === "Enter") {
          adicionarMensagem(texto)
          setTexto("")
        }
      }}
      />

    </div>
  )
}