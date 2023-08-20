import React, {useEffect, useState} from "react";
import {Typography} from "@mui/material";
import {TypographyHead} from "./styles.ts";
import {useScroll, useTransform, motion} from "framer-motion";

const AnimatedTextHeader: React.FC = () => {
    const [matches, setMatches] = useState(false)


    const {scrollYProgress} = useScroll();
    const MainHeaderScrollY = useTransform(
        scrollYProgress,
        [0.015, 0.022],
        [1, 0]
    )
    const MainPScrollY = useTransform(
        scrollYProgress,
        [0.008, 0.016],
        [1, 0]
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 600px)")
            .addEventListener('change', e => setMatches( e.matches ));
    }, [])
    return <motion.div style={{
        opacity: MainHeaderScrollY
    }}>
        <TypographyHead >
            <Typography variant="h1"
                style={{
                    whiteSpace: "nowrap",
                    fontWeight: 400,
                    fontFamily: 'Bricolage Grotesque',
                    fontSize: matches ? '13em' : '6em'
                }}
             className="titleHead"
            >C.E.U.</Typography>
            <Typography variant="h5"
                        style={{
                            fontSize: matches ? '1.5em' : '1em'
                        }}

             className="titleHead" >
                UM DOS MAIS COMPLETOS
                CENTROS DE CIÊNCIAS
            </Typography>
            <Typography variant="h3" style={{
                fontWeight: "bold"
            }} className="titleHead" >da América Latina</Typography>

            <motion.p
                style={{
                    opacity:  MainPScrollY,
                }}
            >
                O Centro de Estudos do Universo atua há mais de 20 anos em diversos segmentos educacionais, proporcionando atividades que complementam o currículo escolar de forma pragmática, com uma linguagem popular e em um ambiente descontraído.
            </motion.p>
        </TypographyHead>


    </motion.div>
}

export default AnimatedTextHeader