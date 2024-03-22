
interface BoxTextButtonProps {
    link: string,
    text: string,
    children: React.ReactNode,
}
const BoxTextButton = ({ link, text, children }: BoxTextButtonProps) => {
    return (
        <a href={link}
            className='bg-logo-yel p-1 flex m-5 max-w-[300px] text-center items-center pointer-events-auto cursor-pointer  '>
            <p className='text-center font-bold m-auto text-black-200'>{text}</p>
            {children}
        </a>
    )
}

export default BoxTextButton