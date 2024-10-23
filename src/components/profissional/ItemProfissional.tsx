import Profissional from '@/core/servico/Profissional';
import Image from 'next/image'

export interface ItemProfissionalProps {
    profissional: Profissional;
}

export default function ItemProfissional(props: ItemProfissionalProps) {
    const { profissional } = props
    return (

        <div className='flex rounded-xl overflow-hidden bg-zinc-800' >
            <Image src={profissional.imagemURL} width={350} height={350} alt={profissional.nome} />
            <div className='flex flex-col p-5 gap-2'>
                <span className=' text-xl text-bold text-white'>{profissional.nome}</span>
                <span className='text-xs text-zinc-400'>{profissional.descricao}</span>
            </div>
        </div>
    )
}


