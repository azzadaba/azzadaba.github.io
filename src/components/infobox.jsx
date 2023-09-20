import React, { Suspense } from "react";
import Bigbutton from "./big-button";
import Model from "../Model";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Html, useProgress } from "@react-three/drei";

function Loader() {
    const { progress } = useProgress();
    return <Html center>{progress} % loaded</Html>
}

export default function Infobox(props) {
    const buttons = props.data.buttons != undefined ? props.data.buttons.map((button) =>
        <Bigbutton name={button.text}/>
    ) : null;

    return (
        <div className="infobox">

            <div className="infoheader">
                {props.data.image != undefined &&
                    <div className="header-image">
                        <img src={props.data.image} draggable={false} />
                    </div>
                }
                <div className="header-text">
                    {props.data.header != undefined &&
                        props.data.header
                    }

                    {props.data.subheader != undefined &&
                        <div className="header-subtext">
                            {props.data.subheader}
                        </div>
                    }
                </div>

                {props.data.hasModel &&
                    <div className="model">
                        <Canvas camera={{position: [6, 5, -6], fov: 40}} shadows dpr={[1, 1.5]} gl={{ preserveDrawingBuffer: true }}>
                            <Suspense fallback={<Loader />}>
                                <Model position={[1, 0, 1]} rotOffset={-35.2} scale={2.9} />
                                
                                
                                <Environment preset="city" />
                            </Suspense>
                            <ContactShadows rotation-x={Math.PI / 2} position={[0, -1.3, 0]} opacity={0.15} width={5} height={2} blur={1.1} far={1.3} />
                        </Canvas>
                    </div>
                }

                {props.data.buttons != undefined &&
                    <div className="header-buttons">
                        {buttons}
                    </div>
                }
            </div>
            <div className="infopage">
                {props.data.text != undefined &&
                    props.data.text
                }
            </div>
        </div>
    );
}