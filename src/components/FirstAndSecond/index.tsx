import React from "react"
import {Sticky} from "../../styles";
import {motion, useScroll, useTransform} from "framer-motion";
import AnimatedTextHeader from "../AnimatedTextHeader";
import ParticlesComponent from "../Particles";

const FirstAndSecond: React.FC = () => {
    const {scrollYProgress} = useScroll();

    const frameOpacity = useTransform(scrollYProgress, [0.196, 0.198], [0, 1])
    const frameScale = useTransform(scrollYProgress, [0.558, 0.627], [0.511, 0.8])
    return <Sticky className="second">
        <First />
        <motion.div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "100vh",
            borderRadius: 8,
            border: "4px solid #fff",
            opacity: frameOpacity,
            scale: frameScale,
        }}>

        </motion.div>
    </Sticky>

}

const First: React.FC = () => {
    const {scrollYProgress} = useScroll();

    const firstScale = useTransform(scrollYProgress,
        [0.198, 0.264, 0.558, 0.627],
        [1, 0.511, 0.511, 1],
        )

    const firstRadius = useTransform(scrollYProgress,
        [0.198, 0.264, 0.558, 0.627],
        [0, 8, 8, 0],
    )

    const leftSideHeight = useTransform(scrollYProgress,
        [0, 0.058],
        ["10vh", "100vh"],
    )

    const rightSideScale = useTransform(
        scrollYProgress,
        [0.047, 0.093],
        [0, 0.511],
    )

    const rightSideY = useTransform(
        scrollYProgress,
        [0.047, 0.093],
        ['58vh', '0vh']
    )

    const offsetY = useTransform(
        scrollYProgress,
        [0.328, 0.397, 0.461, 0.53],
        ['0%', '-100%', '-100%', '-200%']
    )

    const leftSideOpacity = useTransform(
        scrollYProgress,
        [0, 0.016],
        [0, 1]
    )

    const particleOpacity = useTransform(
        scrollYProgress,
        [0, 0.025],
        [1, 0]
    )





    return <Sticky className="first" style={{
        scale: firstScale,
        borderRadius: firstRadius,
    }}>
        <motion.div
            className='offset'
            style={{
                y: offsetY
            }}
        >

            <div className="a">
                <motion.div
                    style={{
                        opacity: particleOpacity
                    }}
                >
                    <ParticlesComponent />
                </motion.div>
                <AnimatedTextHeader />

                <motion.div
                    className="left-side"
                    style={{
                        height: leftSideHeight,
                        opacity: leftSideOpacity
                    }}
                />
                <div className="right-side">
                    <motion.div
                        className="right-image"
                        style={{
                            y: rightSideY,
                            scale: rightSideScale,
                        }}
                    />
                </div>
                </div>

            <div className="b"></div>
            <div className="c"></div>
        </motion.div>
    </Sticky>
}

export default FirstAndSecond