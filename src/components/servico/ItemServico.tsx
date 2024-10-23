import Servico from '@/core/servico/Servico'
import Image from 'next/image'

export interface ItemServicoProps {
    servico: Servico;
}

export default function ItemServico(props: ItemServicoProps) {
    const { servico } = props
    return (
        <div className='flex rounded-xl overflow-hidden bg-zinc-800' >
            <Image src={servico.imagemURL} width={150} height={150} alt={servico.nome} />
            <div className='flex flex-col p-5 gap-2'>
                <span className=' text-xl text-bold text-white'>{servico.nome}</span>
                <span className='text-xs text-zinc-400'>{servico.descricao}</span>
            </div>
        </div>
    )
}