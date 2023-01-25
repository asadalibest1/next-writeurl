import React from "react";
import "./Demo.css";
import { useEffect } from "react";
import { GetPublished } from "../api";
import { useState } from "react";
import "./footer.css";

const Demo = (props) => {
    console.log('props.res', props.data[0]);
    const [data, setData] = useState([]);
    const [html, setHTML] = useState({ __html: "" });


    // useEffect(() => {
    //     GetPulbished()
    //         .then((res) => {
    //             setData(res?.data);
    //             console.log(res.data);
    //         })
    //         .catch((e) => console.log(e));
    // }, []);

    const onDivclick = (docID) => {
        window.open(`/publish/${docID}`);

    }
    return (
        <>
            {Object.keys(props.data)?.map((i) => (
                <div className="demo-div" onClick={() => { onDivclick(props.data[i].docID) }}>
                    {
                        props.data[i]?.title != "My Title" && props.data[i]?.title != "Untitled" &&
                        <div style={{ padding: 0, margin: 0, paddingLeft: "1px" }}>{props.data[i]?.title}</div>
                    }
                    <div>
                        {props.data[i]?.doc?.indexOf('class="wu-root"') + 400 >

                            props.data[i]?.doc?.length ? (
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: props.data[i]?.doc?.slice(
                                        props.data[i]?.doc?.indexOf('class="wu-root"') + 16
                                    ),
                                }}
                            />
                        ) : (
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: props.data[i]?.doc?.slice(
                                        props.data[i]?.doc?.indexOf('class="wu-root"') + 16,
                                        props.data[i]?.doc?.indexOf('class="wu-root"') + 400
                                    ),
                                }}
                            />
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};


export default Demo;
