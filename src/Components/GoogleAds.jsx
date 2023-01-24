
import React, { useEffect } from "react";
function GoogleAds(props) {
    const { currentPath } = props;
    useEffect(() => {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
    }, []);
    return (
        <ins
            class="adsbygoogle"
            style={{ display: "inline-block", width: "300px", height: "250px" }}
            data-ad-client="ca-pub-9524640381347126"
            data-ad-slot="2286929630"
            data-full-width-responsive="true"
        ></ins>
    );
}
export default GoogleAds;
