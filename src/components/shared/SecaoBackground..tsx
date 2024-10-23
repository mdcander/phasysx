export interface SecaoBackgroundProps {
    children: React.ReactNode
    imagem: string
}

export default function SecaoBackground(props: SecaoBackgroundProps){
    return (
        <div className="relative">
            <div className='bg-black/10 sm:bg-transparent bg-gradient-to-r from-black/70 via-black/95 to-black/70'>
                <div className='container py-10'>{props.children}</div>
            </div>
        </div>
    )
}