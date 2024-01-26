import React, { Suspense, useState } from "react";
import Bigbutton from "./big-button";
import Model from "../Model";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Html, useProgress } from "@react-three/drei";

function Loader() {
    const { progress } = useProgress();
    return <Html center>{progress} % loaded</Html>
}

export default function Infobox(props) {
    const [screenWidth, setScreenWidth] = useState(screen.width);

    const buttons = props.data.buttons != undefined ? props.data.buttons.map((button) =>
        <Bigbutton key={button.text} name={button.text} link={button.link}/>
    ) : null;


    const synth = window.speechSynthesis;

    function findRoot(root) {
        if (typeof root == "string" || root == undefined) {
            if (root != undefined) {
                const utter = new SpeechSynthesisUtterance(root);
                utter.voice = synth.getVoices()[10];
                synth.speak(utter);
            }
            return;
        }

        if (root.props != undefined) {
            if (Array.isArray(root.props.children)) {
                for (let prop of root.props.children) {
                    findRoot(prop);
                }
            }
            else {
                findRoot(root.props.children);
            }
        }
    }

    function speak() {
        findRoot(props.data.text);
    }

    addEventListener("resize", () => { setScreenWidth(window.innerWidth); });

    return (
        <div className="infobox">

            <div className="infoheader" style={{marginBottom: (screenWidth > 1366 && props.data.image != undefined) ? "120px" : "0px"}}>
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
                        <Canvas camera={{position: [0, 2, 0], fov: 70}} shadows dpr={[1, 1.5]} gl={{  }}>
                            <Suspense fallback={<Loader />}>
                                <Model position={[0, 0, 0]} scale={1} />
                                <Environment preset="city" />
                            </Suspense>
                            <ContactShadows blur={0.9} opacity={0.5} />
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
                <button className="btn-access" onClick={speak}> <img src="speaker.png" alt="speak" /> </button>
                {props.data.text != undefined &&
                    props.data.text
                }
            </div>
        </div>
    );
}