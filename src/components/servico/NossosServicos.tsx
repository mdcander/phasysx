import { servicos } from '@/data/constants/servicos'
import ItemServico from './ItemServico'
import TituloSecao from '../shared/TituloSecao'

export default function NossosServicos() {
    return (
        <div className='flex flex-col gap-y-8'>
             <TituloSecao
                principal='Desenvolvimento ágil com entrega de valor'
                secundario='Aumente a eficiência dos seus processos e maximize seus lucros com soluções exclusivas'
                tag="Serviços"
            />
            <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
                {servicos.map( servico => (
                    <ItemServico key={servico.id} servico={servico} />
                ))}
            </div>
        </div>
    )
}