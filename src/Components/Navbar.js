"use client"
import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Feedback from "./modals/feedback";
import './Navbar.css';
import Overlays from "./overlays/Overlays";
import logo from '../assests/icons/Icon-WriteURL.png'
import plus from '../assests/icons/plus_button.png';
import { Head } from 'next/document'
import './editNavbar.css'
import Image from "next/image";
const Navbar = () => {
    const [feedmodal, setFeedmodal] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            const script = document.createElement('script');
            script.src = "http://localhost:9000/script.js";
            script.async = true;
            document.body.appendChild(script);
            window.nbe.site.display_feedback();
        }, 1000);
    }, [])

    const createdocument = () => {
        var ids = window.nbe.site.embed_new("text-editors");
        window.open(`/text/${ids?.id}/${ids?.read}/${ids?.write}`, '_blank');
    };

    return (
        <>
            <div className="navContainer">
                <div id="text-editors" style={{ display: "none" }}></div>
                <Overlays overlay="Home">
                    <div>
                        {/* <p className="writeUrl">*/}
                        <Link href="/" onClick={() => {
                            // navigate("/");
                            window.location.reload()
                        }}
                        >
                            <Image src={logo} style={{ width: '120px', objectFit: 'contain' }} />
                        </Link>
                        {/* </p> */}
                    </div>
                </Overlays>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>



                    <div onClick={createdocument}>
                        {/* <div className="actions-btns">+</div> */}
                        <Image src={plus} alt="plus_icon" style={{ width: "35px", cursor: "pointer", objectFit: 'contain', height: 'auto' }} />
                    </div>


                    <div>
                        {/* <Overlays overlay="Feedback"> */}

                        {/* <aside id="panel">
                        <a id="feedback" class="circle_button feedbacks" title="Feedback">!</a>
                    </aside> */}

                        {/* </Overlays> */}
                    </div>
                </div>

            </div>
            <Feedback show={feedmodal}
                onHide={() => setFeedmodal(false)} />

        </>
    )
}

export default Navbar;