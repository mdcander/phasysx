import Link from 'next/link'
import Logo from './Logo'


export interface CabecalhoProps {
    titulo: string
    descricao: string
}

export default function Cabecalho() {
    return (
        <header className='container flex items-centerflex-row justify-between bg-black/50 '>
             <nav className="container flex flex-col ">
                <div className="flex flex-col md:flex-row items-center 
                        md:items-start justify-between text-center md:text-left gap-5 md:gap-0">
                    <Logo />
                    <div className="flex flex-col p-5 justify-between items-center">
                        <Link href="./paginas/sobre" className='font-extralight pb-4" '>Sobre a phasys</Link>
                    </div>
                    <div className="flex flex-col  p-5  justify-between items-center">
                        <Link href="./paginas/contato" className='font-extralight pb-4" '>Contato</Link>
                    </div>
                    <div className="flex flex-col  p-5 justify-between items-center">
                        <Link href="./paginas/blog" className='font-extralight pb-4" '>Blog tech</Link>
                    </div>
                    <div className="flex flex-col  p-5 justify-between items-center">
                        <Link href="./paginas/entrar" className='font-extralight pb-4" '>Entrar</Link>
                    </div>
                </div>
            </nav>         
        </header>
    )
}
