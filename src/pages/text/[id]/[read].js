import React, { useEffect, useState } from "react";
import WriteUrl from "../../../Components/WriteUrl";
import Navbar from "../../../Components/Navbar";
import { useRouter } from "next/router";
export const ReadEditor = () => {

    const router = useRouter();
    const param = router.query;

    setTimeout(() => {

        const script = document.createElement('script');
        script.src = "https://api.writeurl.com/script.js";
        script.async = true;

        document.body.appendChild(script);
        console.log("p", param)


        window.nbe.site.embed_read('editor', {
            id: param.id,
            read: param.read,
        });

        // const ele = document.getElementById('editor');
        // document.getElementById('editor').innerHTML = ele.innerHTML
        // console.log('ab',);
    }, 2000);


    const [state, setState] = React.useState({ value: null, delta: null });


    const handleChange = (value, delta, source, editor) => {

        setState({ value, delta, source, editor: editor });


    };




    return (
        <div>
            <Navbar />
            <div className="wrapper_container">

                <div className="text-editor-o readcontainer" style={{}} id='text-editors' >

                    <div id='editor' className="text-editors"  >
                    </div>
                </div>

                <div className='side-advertise'>
                    <WriteUrl />
                </div>

            </div>
        </div>
    );
};




export default ReadEditor;
