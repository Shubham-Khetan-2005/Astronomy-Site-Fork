"use client"
import React from 'react'
import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.


const ParticleEffect = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    "fullScreen": {
                        "enable": false,
                        "zIndex": -1,

                    },
                    // background: {
                    //     color: {
                    //         value: "#0d47a1",
                    //     },
                    // },
                    fpsLimit: 120,

                    interactivity: {
                        events: {
                            // onClick: {
                            //     enable: true,
                            //     mode: "push",
                            // },
                            // onHover: {
                            //     enable: true,
                            //     mode: "repulse",
                            // },
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
                        // links: {
                        //     color: "#ffffff",
                        //     distance: 150,
                        //     enable: true,
                        //     opacity: 0.5,
                        //     width: 1,
                        // },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
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
                            value: { min: 0.7, max: 3 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </>
    )
}

export default ParticleEffect