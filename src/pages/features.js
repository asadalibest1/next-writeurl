import React from 'react'
import { features } from '../Data/features'
import Image from '@/assests/elements/Image'
import Head from '@/app/head'
const Features = () => {

    React.useEffect(() => {
        setTimeout(() => {
            const script = document.createElement('script');
            script.src = "http://localhost:9000/script.js";
            script.async = true;
            document.body.appendChild(script);
            window.nbe.site.display_demo();
        }, 1000);
    }, [])


    return (

        <>
            <Head />
            <div className='divOfBox'>

                {
                    features?.map((item, ind) => {
                        return (
                            <div className='outerBoxdiv' key={ind}>
                                <Image className='featuresIcon' height="32px" src={item.icon} />
                                <h2 className='featuresHeading'>{item.heading}</h2>
                                <div className='featuresText'>{item.text}</div>
                            </div>
                        )
                    })
                }
            </div>

            <section id="demo">
                <h1>Demo</h1>
                <div>
                    <div id="demo_panel"></div>
                    {/* <div className='feature-demo'>
                <div style={{textAlign:'left'}}>
                <h2>Write URL</h2>
                </div>
                <div style={{textAlign:'left'}}>
                <h2>Read URL</h2>
                </div>
            </div> */}
                    <div className='feature-demo'>
                        <div className='main-demo-editor'>
                            <h2>Write URL</h2>
                            <div className='demo-editor'>
                                <div id="editor_write" style={{ clear: "both" }}></div>
                            </div>

                        </div>

                        <div className='main-demo-editor'>
                            <h2>Read URL</h2>
                            <div className='demo-editor'>
                                <div id="editor_read"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <hr></hr>

        </>
    )
}

export default Features