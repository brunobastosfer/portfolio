import BotaoChat from "@/components/chat/BotaoChat";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <BotaoChat />
    </div>
  );
}