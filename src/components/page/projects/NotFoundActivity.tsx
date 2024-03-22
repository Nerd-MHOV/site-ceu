'use client'
import { Button } from "@mui/material"
import { useRouter, usePathname } from "next/navigation";

interface NotFoundActivisProps {
    type: string,
}
const NotFoundActivity = ({type}: NotFoundActivisProps) => {
    const router = useRouter();
    const pathname = usePathname();
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-full flex justify-center items-center">
            <img src={'/images/sad-alien.png'} className="max-w-[150px] max-h-[200px] opacity-80"/>

            <p
                className='mt-3 text-secondary text-[17px] max-w-3xl  leading-[30px] mb-3 text-center'
            >
             Infelizmente não encontramos nenhuma atividade <br /> de "{type.toUpperCase()}" para seu filtro
            </p>
        </div>

        <Button className="max-w-[200px]" variant="outlined" color="inherit" size="small" onClick={() => {
            router.push(`${pathname}`, {
                scroll: false,
            });
        }}  >
            Remover Filtros
        </Button>
        </div>
    )
}

export default NotFoundActivity