import Image from "next/image";
import Cabecalho from "../shared/Cabecalho";
import Link from "next/link";

export default function Slogan () {
    return (
        <div className="relative h-[400px] md:h-[500px] bg-zinc-600">
            <Image src="/banners/topo.webp" alt="Phasys" fill className="object-cover" />     
            <div className="
                flex flex-col items-center justify-center
                 absolute top-0 left-0 w-full h-full
                 bg-black/50
                 "
            >
            <Cabecalho  />
            <div className="flex flex-col justify-center items-center flex-1 gap-5">
                <h1 className="flex flex-col justify-center items-center ">
                    <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gradient text-center p-2">phasys</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin tracking-wider p-2">Soluções de Tecnologia</span>
                    <p className="text-zinc-400 text-base sm:text-lg font-extralight p-3">Consultoria e desenvolvimento de sistemas</p>
                </h1>
                <Link href="/contato" className=" justify-center
                    bg-gradient-to-r from-green-500 to-green-600
                    text-white font-semibold text-base md:text-lg
                    px-4 py-2 rounded-sm hover:from-green-600  hover:to-green-600
                  ">
                    Entre em contato
                </Link>
            </div>
            </div>
        </div>
    )
}