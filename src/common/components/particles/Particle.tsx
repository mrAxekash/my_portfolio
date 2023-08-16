import Particles from "react-particles";
import {loadSlim} from "tsparticles-slim"
import type {Container, Engine} from "tsparticles-engine";
import {useCallback} from "react";
import particleStyle from './Particle.module.scss'
import type {ISourceOptions} from "tsparticles-engine";


type Props = {};
export const Particle = (props: Props) => {

    // const particlesOptions = {
    //     particles: {
    //         number: {
    //             value: 80,
    //             density: {
    //                 enable: true,
    //                 value_area: 800
    //             }
    //         }
    //     }
    // };

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    const options: ISourceOptions = {
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        background: {

            color: {
                value: "#0d47a1",
            },
        },
        fpsLimit: 120,
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
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    };


    return (
        <Particles
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
            className={particleStyle.particles}
        />
    );
};