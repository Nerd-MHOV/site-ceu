import React from "react";
import {Container} from "./styles.ts";
import {useScroll, useTransform} from "framer-motion";
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton} from "@mui/material";
const Header: React.FC = () => {
    const {scrollYProgress} = useScroll()
    const headerY = useTransform(scrollYProgress,
        [0.048, 0.060], ['0%', '-100%'])
    return <Container
        style={{
            y: headerY,
        }}
    >
        <div className="header">
            <div>
                <img src={"/vite.svg"} />
            </div>
            <div>
                <h3>Centro de Estudos do Universo</h3>
            </div>
            <IconButton>
                <MenuIcon fontSize="medium" />
            </IconButton>
        </div>
    </Container>
}

export default Header