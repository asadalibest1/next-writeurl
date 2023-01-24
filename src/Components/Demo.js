"use client"; // this is a client component

import React from "react";
import "./Demo.css";
import { useEffect } from "react";
import { GetPublished } from "../api";
import { useState } from "react";
import "./footer.css";

const Demo = () => {
    const [data, setData] = useState([]);
    const [html, setHTML] = useState({ __html: "" });



    useEffect(() => {
        GetPublished()
            .then((res) => {
                setData(res?.data);
                console.log(res.data);
            })
            .catch((e) => console.log(e));
    }, []);

    const onDivclick = (docID) => {
        window.open(`/publish/${docID}`);

    }
    return (
        <>
            {data?.map((datas) => (
                <div className="demo-div" onClick={() => { onDivclick(datas.docID) }}>
                    {
                        datas?.title != "My Title" && datas?.title != "Untitled" &&
                        <div style={{ padding: 0, margin: 0, paddingLeft: "1px" }}>{datas?.title}</div>
                    }
                    <div>
                        {datas?.doc?.indexOf('class="wu-root"') + 400 >

                            datas?.doc?.length ? (
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: datas?.doc?.slice(
                                        datas?.doc?.indexOf('class="wu-root"') + 16
                                    ),
                                }}
                            />
                        ) : (
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: datas?.doc?.slice(
                                        datas?.doc?.indexOf('class="wu-root"') + 16,
                                        datas?.doc?.indexOf('class="wu-root"') + 400
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
