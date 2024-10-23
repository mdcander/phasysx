import { profissionais } from "@/data/constants/profissionais.";
import ItemProfissional from "./ItemProfissional";
import TituloSecao from "../shared/TituloSecao";


export default function NossosProfissionais(){
    return(
        <div className="flex flex-col gap-y-16">
            <TituloSecao 
                principal="Nossos Colaboradores" 
                secundario="Equipe tecnicamente qualificada e certificada para melhor atende-los" 
                tag="Time" 
            />
            <div className='object-fill' >
                {profissionais.map((profissional) => (
                    <ItemProfissional key={profissional.id} profissional={profissional}/>
                ))}
            </div>
        </div>
    )
}