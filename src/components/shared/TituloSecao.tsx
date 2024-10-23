export interface TituloSecaoProps {
    tag?: string
    principal?: string
    secundario?: string
}

export default function TituloSecao ( props: TituloSecaoProps ){
    return(
        <div className="flex flex-col items-center py-2">
            {props.tag && (
                    <div className="bg-zinc-700 px-4 py-1.5 rounded-md font-black mb-2 text-white tex-sm md:text-base">
                        {props.tag}
                    </div>
            )}

            {props.principal && (
                <div className="py-1">
                    <h2 className="text-2xl sm:text-4x md:text-4xl font-bold text-gradient justify-center items-center">{props.principal}</h2>
                </div>
            )}
            {props.secundario && (
                <div className="p-1 ">
                    <h3 className="text-zinc-500 md:w-[450-px] px-7 md:px-0 text-center" >{props.secundario}</h3>
                </div>
            )}
        </div>
    )
}