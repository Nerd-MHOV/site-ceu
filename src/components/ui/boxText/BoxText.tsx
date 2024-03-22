

interface BoxtextRoot extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}
const BoxTextRoot = ({ children, ...rest }: BoxtextRoot) => {
    return <div {...rest}>
     {children}
    </div>
}

export default BoxTextRoot