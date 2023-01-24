import React, { useEffect } from "react";
import "./WriteUrl.css";
import GoogleAds from "./GoogleAds"
import Link from "next/link";

const WriteUrl = () => {

    const createdocument = () => {
        var ids = window.nbe.site.embed_new("text-editors");
        window.open(`/text/${ids?.id}/${ids?.read}/${ids?.write}`, '_blank');
    };
    useEffect(() => {
        setTimeout(() => {

            const script = document.createElement('script');
            script.src = "http://localhost:9000/script.js";
            script.async = true;
            document.body.appendChild(script);
            window.nbe.site.display_feedback();
        }, 1200);
    }, [])
    return (
        <>
      <div className="outerDiv">

                <div className="headerSection">

                    <h2 className="lastHeading">Write something awesome.</h2>


                    <button
                        onClick={() => {
                            createdocument();
                        }}
                        className="startWritingBtn"
                    >
                        Launch Editor
                    </button>

                    <p>A rich text editor for writing, <br />collaborating and sharing</p>

                </div>
                <div>
                    <div style={{ position: 'relative' }} className='sidebar-ad'>

                        <GoogleAds />

                        {/* <button className="addgoogle" style={{ left: '12%' }}>Ads by Google</button>
          <img className="adimage" src={logo} />
          <button className="crossgoogle" style={{ left: '12%' }}><img src={addcross} /></button> */}
                    </div>
                </div>

                <div className="footer-container">
                    <div className="advertise-footer">
                        {/* <a href="javascript:void(0)" onClick={() => navigate("feature")}> */}
                        {" "}
                        <Link href='/features' target='_blank'>
                            Features
                        </Link>
                        {/* </a> */}
                        <a href='http://localhost:3000/publish/rxja04il9lfbbk0ddu2x' target='_blank'>
                            {" "}
                            Contact
                        </a>
                        {/* <Link> */}
                        <aside id="panel">
                            <a id="feedback" class="circle_button feedbacks" title="Feedback">Feedback</a>
                        </aside>
                        {/* </Link> */}
                        <a href='http://localhost:3000/publish/mtr41inolg5jee4phz31' target='_blank'>
                            <aside id="panel">
                                <a id="feedback" class="circle_button feedbacks" title="FAQ">FAQ</a>
                            </aside>
                        </a>

                        <a href='http://localhost:3000/publish/y9mqcl53y7sguun610em' target='_blank'>
                            {" "}
                            Privacy Policy
                        </a>
                        <a href='http://localhost:3000/publish/lmc83uoxbv69337g8u62' target='_blank'>
                            {" "}
                            Terms & Conditions{" "}
                        </a>
                        {/* <a href='https://textdoc.co/channels' target="_blank" > Free Chat Room |</a> */}
                    </div>
                    <a>©2023 WriteURL</a>
                    <a>All Rights Reserved</a>
                </div>




            </div>
        </>
    );
};

export default WriteUrl;
