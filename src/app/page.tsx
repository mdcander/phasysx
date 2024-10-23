import Slogan from "@/components/landing/Slogan";
import NossosServicos from "@/components/servico/NossosServicos";
import Rodape from "@/components/shared/Rodape";
import SecaoBackground from "@/components/shared/SecaoBackground.";

export default function Landing() {
  return (
    <div className="flex flex-col text-white">
      <Slogan />
      <SecaoBackground imagem="/banners/fundo2.webp" >
        <NossosServicos />
      </SecaoBackground>
      <Rodape></Rodape>
    </div>
  )
}
