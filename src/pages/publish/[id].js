"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import "../../app/editor.css"
// import "../../app/globals.css"
// import "../../pages/styles.css"
// import "../../Components/WriteUrl.css";

import WriteUrl from "../../Components/WriteUrl";
import Navbar from "../../Components/Navbar";
import { BaseURL } from "../../pages/index";
import { FaShare } from 'react-icons/fa'
import Overlay from 'react-bootstrap/Overlay';

import { CopyToClipboard } from 'react-copy-to-clipboard';

export const Publish = () => {
    const router = useRouter();
    const param = router.query;
    const [html, setHTML] = useState({ __html: "" });
    const baseURL = `${BaseURL}/publish/`;
    const [show, setShow] = useState(false);

    const basePath = `http://localhost:3000/publish/${param.id}`;
    const _copy = async () => window.Clipboard.setData("Text", basePath);



    setTimeout(() => {
        createMarkup();
    }, 1500);

    async function createMarkup() {
        try {
            //dummy
            // http://localhost:8000/backed_api/html_response/?user_email=chriss%40comtura.ai
            let response = await fetch(`${baseURL}${param.id}`)
            const backendHtmlString = await response.text()

            console.log(backendHtmlString)
            setHTML({ __html: backendHtmlString });
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <Navbar />

            <div className="publish_share_mobile">
                <CopyToClipboard text={basePath}
                    onCopy={() => { setShow(!show) }}>
                    <button
                        className="startWritingBtn"
                        style={{ margin: '20px', marginTop: '30px', display: "flex", alignItems: 'center' }}
                    >
                        Share
                        <FaShare style={{ marginLeft: '4px', height: '15px' }} />
                    </button>
                </CopyToClipboard>
            </div>

            <div className="wrapper_container">
                <div className='publish-container'>
                    <div dangerouslySetInnerHTML={html} />
                </div>
                <div className='side-advertise'>
                    <WriteUrl />
                </div>
            </div>

            <div className="publish_share_desktop">
                <CopyToClipboard text={basePath}
                    onCopy={() => { setShow(!show) }}>
                    <button
                        className="startWritingBtn"
                        style={{ margin: '20px', marginTop: '30px', display: "flex", alignItems: 'center' }}
                    >
                        Share
                        <FaShare style={{ marginLeft: '4px', height: '15px' }} />
                    </button>
                </CopyToClipboard>
            </div>

            {
                show &&
                <div style={{
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: ' rgba(0, 0, 0, 0.5)',
                    zIndex: 2,
                    cursor: 'pointer',
                    translate: 'all .3s',
                }} onClick={() => setShow(!show)}>
                    <div style={{
                        position: 'absolute',
                        textAlign: 'center',
                        top: '50%',
                        left: '50%',
                        fontSize: '40px',
                        color: 'white',
                        transform: 'translate(-50%, -50%)',
                        msTransform: 'translate(-50%, -50%)',
                    }}>URL Copied</div>
                </div>
            }

        </>

    )
};

export default Publish;
