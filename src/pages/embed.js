import React from 'react'
import './css/faqs.css'
import ContentBox from '../Components/contentBox'
const FAQs = () => {
    return (
        <div className='faq_outer_container'>
            <h3 style={{ fontSize: '29px', marginTop: "100px", marginBottom: "50px", color: "black" }}>Embedding of writeurl
            </h3>

            <ContentBox
                para="The writeurl editor can be embedded in other web pages through a set of functions." />

            <ContentBox
                para="A css and a javascript file must be included on the page 
                " />

            <p>{`<link rel="stylesheet" href="http://www.writeurl.com/style.css" type="text/css">`}
                <br />
                {` <script src="http://www.writeurl.com/script.js"></script>`}
            </p>



            <ContentBox
                para="The most general function is 
                "
            /> <ContentBox
                para="nbe.site.embed(el_text, el_title, el_panel, ids, new_doc, ws_url, local_storage, html_title, callback)
                "
            /> <ContentBox
                para="The arguments are"
            />
            <p>
                <br />el_text : a dom element where the text of the editor should be inserted.
                <br />el_title : a dom element for the title.
                <br />el_panel : a dom element for the formatting panel.
            </p>
            <ContentBox
                para="The elements can be null in which case there will be no insertion.
                "
            /> <ContentBox
                para="ids : an object with keys 'id', 'read', 'write'. The values are strings of characters [a-z0-9]. If write is null, the editor is a read only editor.
                "
            /> <ContentBox
                para="new_doc : a boolean that designates whether the document with the ids is new or not. If it is not new, a document with these ids must exist on the server.  
                "
            /> <ContentBox
                para="ws_url : the url for the web socket. The writeurl server uses 'ws://www.writeurl.com:8043'.
                "
            />
            <ContentBox
                para="local_storage : a boolean that contrls the use of local storage to store the document.
                "
            /> <ContentBox
                para="html_title : a boolean that tells whether the title of the document should be the title of the entire html page.
                "
            />
            <ContentBox
                para="callback(key, value) : a function that is called at certain events. 
                "
            />

            <span>
                The important keys are :
            </span>
            <p style={{ marginLeft: "20px", marginTop: "-20px" }}>
                <br />nunsaved : the value is the number of unsaved operations. The important point is whether the value is zero or not.
                <br />network : The value connected means that there is a connection to the server. Anythng else that there is no connection.
            </p>

            <ContentBox
                para="There are three helper functions
                "
            />

            <p>
                <br />nbe.site.embed_write(el, ids) :  This function displays an editable document with ids that already exist.
                <br />nbe.site.embed_read(el, ids) : This function displays a read only version of the document.
                <br />nbe.site.embed_new(el) : This function creates a new document, displays it like embed_write and returns the ids.
            </p>
            <ContentBox
                para="The arguments are ids, which are like above, and el which is ether an element or an id of an element.
                "
            />
        </div>


    )
}


export default FAQs