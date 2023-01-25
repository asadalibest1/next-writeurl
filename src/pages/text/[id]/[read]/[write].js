"use client"
import React, { useEffect, useState } from "react";
// import "../../../styles.css";
// import "../../../../app/editor.css";


import useMediaQuery from "../../../../Components/mediaquery";
import logo from '../../../../assests/icons/Icon-WriteURL.png'
import { useRouter } from "next/router";
import useNavigate from "@/assests/elements/useNavigate";
import Link from "next/link";
import Image from "@/assests/elements/Image";

export const Editor = () => {
    const router = useRouter()
    const param = router.query;

    const loadScripts = async () => {
        const Newscript = document.createElement("script");
        Newscript.src = "https://api.writeurl.com/last.js";
        Newscript.async = true;
        document.body.appendChild(Newscript);
    };

    useEffect(() => {

        const script = document.createElement("script");
        script.src = "https://api.writeurl.com/script.js";

        script.async = true;
        document.body.appendChild(script);
        script.onload = () => loadScripts();

        // debugger;
        // //u9zl6hh6itypgj0jz117/m8k9v05y2d7f8n167t2i
        // console.log("gggg", window.nbe.config.new_url())
        // http://localhost:3000/text/sqs3ou3xlx6gu1mv4522/ch8lxqsaibyn9ou79cvn/0dkbyn2a40cu0ela17oh/new
        // window.nbe.site.embed_write('editor', {
        //   id: param.id,
        //   read: param.read,
        //   write: param.write
        // })

        // var a = window.nbe.site.status_panel(param.id)
        // a.display(document.getElementById('panel'))
        // window.nbe.site.embed('text', 'title', 'status_panel', {
        //   id: param.id,
        //   read: param.read,
        //   write: param.write
        // }, false, 'wss://api.writeurl.com/operations', false, true, function (key, value) {
        //   //console.log(key, value);
        // });
    }, []);

    const [state, setState] = React.useState({ value: null, delta: null });

    const handleChange = (value, delta, source, editor) => {
        setState({ value, delta, source, editor: editor });
    };
    const isMobile = useMediaQuery("(max-width: 600px)");
    const { navigate } = useNavigate();

    return (
        <>
            {/* <EditNavbar /> */}

            <body id="editor">
                {/* <EditNavbar /> */}
                {/* <EditNavbar data={state} /> */}

                <div style={{ position: 'absolute' }}>
                    <Link href="/" onClick={() => {
                        navigate("/");
                        window.location.reload()
                    }} style={{
                        position: 'relative', top: '25px',
                        left: '21px'
                    }}>
                        <Image src={logo} style={{ width: "120px", height: "21px" }} />
                    </Link>
                </div>
                <div>
                    <div id="panel">
                        <a id="feedback" class="circle_button" style={{ top: "23px", right: "62px" }} title="Feedback">
                            !
                        </a>
                        <a id="faq" class="circle_button" style={{ top: "23px", right: "31px" }} href="http://localhost:3000/publish/mtr41inolg5jee4phz31" target="_blank" title="FAQ">
                            ?
                        </a>
                    </div>
                    <aside id="panel-bottom"></aside>
                    <article id="frontpage"></article>
                </div>
            </body>
        </>
    );
};

export default Editor;
