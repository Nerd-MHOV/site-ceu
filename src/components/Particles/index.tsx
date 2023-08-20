import Particles from "react-tsparticles";
import {useCallback} from "react";
import {loadSlim} from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const ParticlesComponent = () => {

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, [])
    return <Particles init={particlesInit} options={{
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: [
                    "#0072ce",
                    "#fdcb37",
                    "#455154",
                    "#fb7d3f",
                ]
            },
            links: {
                enable: true,
                color: {
                    value: [
                        "#0072ce",
                    ]
                },
                distance: 140,
                opacity: 0.2,
            },
            move: {
                enable: true,
                speed: {min: 1, max: 2},
            },
            opacity: {
                value: {min: 0.1, max: 0.9}
            },
            size: { value: {min: 1, max: 9}},
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 10,
            },
        }
    }} />
}

export default ParticlesComponent