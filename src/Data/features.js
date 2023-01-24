import icons from '../layer.png'
import textEditor from '../assests/icons/text_editor.svg'
import denied from '../assests/icons/denied.svg'
import fork from '../assests/icons/fork.svg'
import collaborative from '../assests/icons/collaborative.svg'
import cloud from '../assests/icons/cloud.svg'
import bolt from '../assests/icons/bolt.svg'
import secure from '../assests/icons/secure.svg'
import undo from '../assests/icons/undo.svg'
import Link from 'next/link'


export const features = [
    {
        icon: textEditor,
        heading: "Rich Text editor",
        text: <div>WriteURL is a <b>rich text editor</b>. You can write in all languages. The text can be formatted with <b>bold, italic, underline, fonts, text size, line spacing</b> etc. <br/><b>Links</b> and <b>images</b> can be included</div>
    },
    {
        icon: denied,
        heading: "No registration",
        text: <div >WriteURL has <b>no registration</b> and is <b>free</b> to use. WriteURL is the simplest way to <Link data-tip  data-for="newdocumentTip" href="/editor" target="_blank" style={{textDecoration: "underline"}}>start writing</Link> lists, notes, blog posts and more</div>
    },
    {
        icon: fork,
        heading: "Simple sharing",
        text: <div>Sharing is as simple as emailing a URL. Collaborators get the <b>write URL</b>, live readers get the <b>read URL</b>. You can always publish a snapshot of the document as a web page with a <b>publish URL</b>.</div>
    },
    
    {
        icon: collaborative,
        heading: "Collaborative",
        text: <div>Collaborators can <b>work simultaneously</b>. Changes to the document are visible to all writers and readers in <b>real-time</b>.</div>
    },
    {
        icon: cloud,
        heading: "No files",
        text: <div>No emails with file attachments. No confusion about who has the latest version. No need to merge changes into the document.</div>
    },
    {
        icon: bolt,
        heading: "Offline",
        text: <div>You can start new documents and edit existing documents <b>offline</b>. Changes to the document are <b>saved on your device</b> and sent to the server when <b>online</b> again.</div>
    },
    {
        icon: secure,
        heading: "Secure",
        text: <div>Your content is always secure and only visible if you share a write URL, read URL or publish your work with a publish URL.</div>
    },
    {
        icon: undo,
        heading: "History",
        text: <div>The entire document <b>history</b> is stored on the server. In a future version you will be able to view the <b>timeline</b>.</div>
    },

]

