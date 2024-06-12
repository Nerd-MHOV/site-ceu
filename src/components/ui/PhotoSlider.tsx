import { Dialog } from '@mui/material';
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react';

interface ShowFullImageProps  {
    open: boolean,
    onClose: VoidFunction,
    image: string | null,
}
const ShowFullImage = (props: ShowFullImageProps) => {
    const { onClose, open, image } = props;
    if(!image) return null;

    return <Dialog onClose={onClose} open={open}>
        <img 
            src={image}
            className='w-full h-full object-cover rouded-2xl'
        />
    </Dialog>
}

const PhotoSlider = ({ images }: { images: string[] }) => {
    if (images.length === 0) return null
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleClickOpen = (img: string) => {
        setSelectedImage(img)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    }
    const content = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    useEffect(() => {
        if (content.current)
            setWidth(content.current.scrollWidth - content.current.offsetWidth)
    }, [])

    return (
        <motion.div
            className='cursor-grab overflow-hidden'
            whileTap={{ cursor: 'grabbing' }}
            ref={content}
        >
            <ShowFullImage 
                image={selectedImage}
                onClose={handleClose}
                open={open}
            />
            <motion.div
                className=" mb-5 flex gap-5 max-h-[650px] "
                drag='x'
                dragConstraints={{ right: 0, left: -width }}
                initial={{ x: 0 }}
                animate={{ x: -width }}
                transition={{ duration: images.length * 2, ease: 'linear', repeat: Infinity }}

            >

                {
                    images.map((image, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                            onClick={() => {handleClickOpen(image)}}
                        >
                            <motion.div
                                className='bg-black-100 p-5 rounded-2xl w-[320px] h-full pointer-events-none select-none flex flex-col justify-between'
                            >
                                <motion.div className="relative w-full h-[230px]">
                                    <motion.img
                                        src={image}
                                        alt={`img-${image}`}
                                        className='w-full h-full object-cover rouded-2xl'
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))
                }
            </motion.div>
        </motion.div>
    )
}

export default PhotoSlider