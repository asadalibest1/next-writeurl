import Link from 'next/link'
import React from 'react'
import './css/faqs.css'
import ContentBox from '../Components/contentBox'
const FAQs = () => {

  return (
    <div className='faq_outer_container'>
      <h3 style={{ fontSize: '29px', marginTop: "100px", marginBottom: "50px", color: "black" }}>FAQ for WriteURL - a Collaborative Real-time Online Text editor</h3>


      <ContentBox
        heading='What is WriteURL?'
        para='WriteURL is an online web browser based rich text editor. A group of people can work on the same document simultaneously without mailing a file back and forth, and without coordinating the work. You always have access to the latest version of  the document. The document is shared just by emailing the url to collaborators. Other people can get read access to the document, and can follow all changes without having the right to change the content.'
      />

      <ContentBox
        heading='Do I need to register?'
        para='No, there is no registration. Your collaborators do not need to register either. They just need the url.'
      />

      <ContentBox
        heading='What does it cost to use the editor??'
        para='It is free. If you want a customized version of it, please contact us.'
      />


      <ContentBox
        heading='Which web browsers are supported?'
        para='All browsers that have implemented enough of the html5 standards. We have tested the application in 
            Firefox, Chrome, Safari,  and Opera. It should also work in IE10 but not in older versions of IE..'

      />

      <div>
        <h3 style={{ fontSize: "25px", fontWeight: "400", color: "black" }}>
          What is the url structure?</h3>
        <p>A document has an id, a read password, and a write password. The id is used to identify the document, the read password is used to get access to a readable version of the document, and the write password is needed to edit the document. The url to edit the document, the writeurl looks like:
          <br /><b>www.writeurl.com/text/id/read-password/write-password</b></p>

        <br />
        <p>The readable, non writeable, version of the document is found on the url:
          <br /><b>www.writeurl.com/text/id/read-password </b></p>

        <br />
        <p>A new document can be created with the url:
          <br /><b>www.writeurl.com/text/id/read-password/write-password/new</b></p>

        <br />
        <p>The id and the two passwords must be at least 3 characters long, and composed of lower case letters, a-z, and digits 0-9.
          When youy click new document on the home page, the three strings are generated automatically, and are basically impossible to guess. You are free to choose your own id, and passwords, but you take the risk that someone else can guess them if they are too simple.</p>

        <br />
        <p>
          A new document with automatically generated ids can be created with the url:
          <br /><b>www.writeurl.com/new</b>

        </p>
        <br />
        <p>
          The urls can easily be shared with your collaborators by using the share button.
        </p>



        <h3 style={{ fontSize: "25px", fontWeight: "400", color: "black" }}>
          Can I publish a document?
        </h3>


        <p>
          A snapshot of the document can be stored as a html document on our server by clicking the publish button in the share window.
          <br />The published document is the available at the url:
          <br /><b>www.writeurl.com/publish/id</b>
        </p>

        <p>
          This FAQ, for example, is written with the editor, and has the url:
          <br /><b>www.writeurl.com/publish/faq</b>
        </p>
      </div>




      <ContentBox
        heading="Can I work offline?"
        para='Yes. We use the html5 manifest, which is a way for a web page to be stored on the local computer and displayed even in case the user is offline. The text of the document is stored in local storage, another html5 way of storing data locally. If You are offline, you can continue writing in the document, and when the internet connection returns, the application will automatically send it to the server. The icons next to the share button show whether there is an internet connection to the server, and whether there are unsaved changes. The html5 manifest and local storage also makes the application load faster even in cases with an internet connection. The startup time is like that of a locally installed application.'
      />


      <h3 style={{ fontSize: "25px", fontWeight: "400", color: "black" }}>
        Are there keyboard shortcuts?
      </h3>

      <p>Yes, there are a few.</p>

      <p>copy : ctrl-c
        <br />paste : ctrl-v
        <br />cut : ctrl-x
        <br />undo : ctrl-z
        <br />redo : ctrl-shift-z</p>


      <ContentBox
        heading="How do I keep track of all my documents?"
        para="You need to remember the urls somehow, exactly like you do with ordinary files. you could keep them in a text file, save the emails where you got the invitation. We could make a separate document handler application with user names and login for keeping track of documents if there is interest for that."
      />
      <ContentBox
        heading="How do you communicate changes in the document to the other collaborators so fast?"
        para="We use the html5 technique web sockets. They are open connections between the browser and the server. Whenever a document is changed in a browser, a message is sent to the server, which then notifies the other online browsers."
      />
      <ContentBox
        heading="Are my documents secure?"
        para="As long as no unauthorized person gets the url, the document is safe. The security is that no one can guess the id and passwords.
                     If you work on a public computer, you might want to deny the application access to local storage or clear the local storage after use. 
                     Even if you do not clear the local storage, it is very unlikely that anyone would search the computer for your document. If you have extreme needs for security, you should not use an online based editor to start with. If you are interested in a local server installation of WriteURL, please contact us."
      />





      <ContentBox
        heading="Can we get a local server installation of the editor"
        para="Yes, please contact us."
      />

      <ContentBox
        heading="Can I print a WriteURL document?"
        para="Yes, just use the browser's print command."
      />
      <ContentBox
        heading="How do I export the document to other formats?"
        para="The easiest method is to copy/paste the document into another editor. You can get a html version of the document by publishing it, and downloading the published html page. A pdf version can be obtained from the browsers print command."
      />
      <ContentBox
        heading="Can I insert equations, tables or videos?"
        para="There is no equation editor at the moment. You can always write a simple equation with characters like this."
      />

      <div>
        <p style={{ textAlign: 'center' }}>∫ x2 dx = 1/3 x3</p>
        <p>Tables and videos can not be inserted right now, but we could easily implement it. Please give us feedback.</p>

      </div>

      <ContentBox
        heading="Which programming language is WriteURL written in?"
        para="Most of the WriteURL program runs in the browser and is written in Javascript. The server program is also written in Javascript for node.js. The web server nginx is used to serve static content, even though node.js could have done that  as well."
      />

      <ContentBox
        heading="Embedding of the editor"
      />

      <p>
        The editor can be embedded in other web sites through the embed functions as explained on <Link target="_blank" style={{ textDecoration: "underline" }} href="/embed">writeurl embedding</Link>.
      </p>
    </div>





  )
}


export default FAQs