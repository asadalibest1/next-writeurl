import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import fork from '../../assests/icons/export.svg'
import Input from '../input/input';
import './modal.css'

const Feedback = (props) => {
  const [data, setData] = useState([])
  const onchange = (e) => {
    setData((preValue) => {
      return {
        ...preValue,
        [e.target.name]: e.target.value,
      };
    });
  }
  const sendfeedback = (e) => {
    console.log("hello")
    // setData({...data,type:"feedback"})
    e.preventDefault()

    // axios.post('https://api.writeurl.com/xhr/feedback',
    //  { 
    //       'Accept': '*/*', 
    //       'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh-TW;q=0.7,zh;q=0.6,ar-SA;q=0.5,ar;q=0.4,pt-BR;q=0.3,pt;q=0.2,ru-RU;q=0.1,ru;q=0.1,he-IL;q=0.1,he;q=0.1,es-ES;q=0.1,es;q=0.1,it-IT;q=0.1,it;q=0.1,fr-FR;q=0.1,fr;q=0.1,th-TH;q=0.1,th;q=0.1,de-DE;q=0.1,de;q=0.1,ja-JP;q=0.1,ja;q=0.1,ko-KR;q=0.1,ko;q=0.1,tr-TR;q=0.1,tr;q=0.1,cs-CZ;q=0.1,cs;q=0.1,fa-IR;q=0.1,fa;q=0.1,hu-HU;q=0.1,hu;q=0.1,nl-NL;q=0.1,nl;q=0.1,pl-PL;q=0.1,pl;q=0.1,sk-SK;q=0.1,sk;q=0.1,uk-UA;q=0.1,uk;q=0.1,ug-CN;q=0.1,ug;q=0.1,vi-VN;q=0.1,vi;q=0.1,ro-RO;q=0.1,ro;q=0.1,ms-MY;q=0.1,ms;q=0.1,el-GR;q=0.1,el;q=0.1,da-DK;q=0.1,da;q=0.1,sv-SE;q=0.1,sv;q=0.1,fi-FI;q=0.1,fi;q=0.1', 
    //       'Connection': 'keep-alive', 
    //       'Content-Type': 'text/plain;charset=UTF-8'
    //     },
    // {
    //   ...data,
    //   type : "feedback"
    // }
    // )
    // .then((res)=>console.log(res))
    // .catch((e)=>console.log(e))
    // var config = {
    //   method: 'post',
    //   url: 'https://api.writeurl.com/xhr/feedback',
    //   headers: { 
    //     'Accept': '*/*', 
    //     'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh-TW;q=0.7,zh;q=0.6,ar-SA;q=0.5,ar;q=0.4,pt-BR;q=0.3,pt;q=0.2,ru-RU;q=0.1,ru;q=0.1,he-IL;q=0.1,he;q=0.1,es-ES;q=0.1,es;q=0.1,it-IT;q=0.1,it;q=0.1,fr-FR;q=0.1,fr;q=0.1,th-TH;q=0.1,th;q=0.1,de-DE;q=0.1,de;q=0.1,ja-JP;q=0.1,ja;q=0.1,ko-KR;q=0.1,ko;q=0.1,tr-TR;q=0.1,tr;q=0.1,cs-CZ;q=0.1,cs;q=0.1,fa-IR;q=0.1,fa;q=0.1,hu-HU;q=0.1,hu;q=0.1,nl-NL;q=0.1,nl;q=0.1,pl-PL;q=0.1,pl;q=0.1,sk-SK;q=0.1,sk;q=0.1,uk-UA;q=0.1,uk;q=0.1,ug-CN;q=0.1,ug;q=0.1,vi-VN;q=0.1,vi;q=0.1,ro-RO;q=0.1,ro;q=0.1,ms-MY;q=0.1,ms;q=0.1,el-GR;q=0.1,el;q=0.1,da-DK;q=0.1,da;q=0.1,sv-SE;q=0.1,sv;q=0.1,fi-FI;q=0.1,fi;q=0.1', 
    //     'Connection': 'keep-alive', 
    //     'Content-Type': 'text/plain;charset=UTF-8', 
    //     'Origin': 'http://localhost:3000', 
    //     'Referer': 'http://localhost:3000/', 
    //     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
    //   },
    //   data : data
    // };

    // axios(config)
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    var myHeaders = new Headers();
    myHeaders.append("Accept", "*/*");
    myHeaders.append("Accept-Language", "en-US,en;q=0.9,zh-CN;q=0.8,zh-TW;q=0.7,zh;q=0.6,ar-SA;q=0.5,ar;q=0.4,pt-BR;q=0.3,pt;q=0.2,ru-RU;q=0.1,ru;q=0.1,he-IL;q=0.1,he;q=0.1,es-ES;q=0.1,es;q=0.1,it-IT;q=0.1,it;q=0.1,fr-FR;q=0.1,fr;q=0.1,th-TH;q=0.1,th;q=0.1,de-DE;q=0.1,de;q=0.1,ja-JP;q=0.1,ja;q=0.1,ko-KR;q=0.1,ko;q=0.1,tr-TR;q=0.1,tr;q=0.1,cs-CZ;q=0.1,cs;q=0.1,fa-IR;q=0.1,fa;q=0.1,hu-HU;q=0.1,hu;q=0.1,nl-NL;q=0.1,nl;q=0.1,pl-PL;q=0.1,pl;q=0.1,sk-SK;q=0.1,sk;q=0.1,uk-UA;q=0.1,uk;q=0.1,ug-CN;q=0.1,ug;q=0.1,vi-VN;q=0.1,vi;q=0.1,ro-RO;q=0.1,ro;q=0.1,ms-MY;q=0.1,ms;q=0.1,el-GR;q=0.1,el;q=0.1,da-DK;q=0.1,da;q=0.1,sv-SE;q=0.1,sv;q=0.1,fi-FI;q=0.1,fi;q=0.1");
    myHeaders.append("Connection", "keep-alive");
    myHeaders.append("Content-Type", "text/plain;charset=UTF-8");
    myHeaders.append("Origin", "http://localhost:3000");
    myHeaders.append("Referer", "http://localhost:3000/");
    myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36");

    var raw = "{\"type\":\"feedback\",\"name\":\"test\",\"mail\":\"test@g.com\",\"message\":\"hello test\"}";

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://api.writeurl.com/xhr/feedback", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ backgroundColor: "transparent" }}
      >
        <Modal.Body style={{ border: "10px solid rgb(75, 68, 68)", borderRadius: "2%", }}>
          <div className='modal-header' style={{ borderBottom: "none" }}>
            <div className='modal-header-1'>
              {/* <img src={fork}/> */}
              <h5 style={{ marginLeft: 2, color: "black", fontWeight: "700" }}>!</h5>
              <h5 style={{ color: "black", fontWeight: "700" }}>Feedback</h5>
            </div>
            <div className='modal-header-1'>
              <p style={{ color: "black" }}>Your opinion is very valuable to us, please let us know what you think.</p>
            </div>
          </div>
          <form onSubmit={sendfeedback}>
            <div style={{ marginTop: 1 }}>
              <h5 style={{ margin: "0px", fontSize: "18px", color: "black" }}>Name</h5>
              <Input type='text' style={{ width: '100%' }} onChange={(e) => onchange(e)} name='name' />
            </div>

            <div style={{ marginTop: 15 }}>
              <h5 style={{ margin: "0px", fontSize: "18px", color: "black" }}>E-mail</h5>
              <Input type='text' style={{ width: '100%' }} onChange={(e) => onchange(e)} name='mail' />
            </div>

            <div style={{ marginTop: 15 }}>
              <h5 style={{ margin: "0px", fontSize: "18px", color: "black" }}>Message</h5>
              <textarea type='textarea' style={{ width: '100%', height: '100px' }} onChange={(e) => onchange(e)} name='message' />
            </div>


            <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between' }}>
              <button className='closebtn' style={{ border: "0.5px solid gray" }} onClick={() => props.onHide()} type='submit'>Send</button>
              <button className='closebtn' style={{ border: "0.5px solid gray" }} onClick={() => props.onHide()}>Close</button>
            </div>

          </form>

        </Modal.Body>
      </Modal>
    </>
  )
}
export default Feedback;