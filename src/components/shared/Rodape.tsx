import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp, IconBrandYoutube } from "@tabler/icons-react";
import Logo from "./Logo";

export default function Rodape() {
    return (
        <footer className="container flex flex-col bg-black text-zinc-400 py-10 gap-2">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left gap-5 md:gap-0">
                <Logo />
                <div className="flex flex-col gap-1">
                    <span className="text-2xl font-bold text-zinc-200 pb-2">Redes Sociais</span>
                    <div className="flex flex-row">
                        <IconBrandFacebook size={28} stroke={1} />
                        <IconBrandInstagram size={28} stroke={1} />
                        <IconBrandYoutube size={28} stroke={1} />
                        <IconBrandLinkedin size={28} stroke={1}  />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-2xl font-bold text-zinc-200 pb-2">Contato</span>
                    <span className="text-sm">suporte@phasysx.com.br</span>
                    <div className="text-sm flex items-center gap-2 justify-center md:justify-start">
                        <IconBrandWhatsapp size={20} className="text-green-500 jus" stroke={1} />
                        <span>WhatsApp (15) - 991376767</span>
                    </div>
                </div>
            </div>
           
        </footer>
    )
}