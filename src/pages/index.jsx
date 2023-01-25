import React from 'react'
import Demo from '../Components/Demo.js'
import Navbar from '../Components/Navbar.js'
import WriteUrl from '../Components/WriteUrl.js'
import './css/homePage.css'
import './css/globals.css'
import './css/editor.css'
import { GetPublished } from "../api";

export var BaseURL = "https://api.writeurl.com"

export const HomePage = (props) => {
  console.log(props);
  // useEffect(() => {
  //   var perfEntries = performance.getEntriesByType("navigation");
  //   if (perfEntries[0].type === "back_forward") {
  //     window.location.reload(true);
  //   }
  // }, [])

  return (
    <>
      <Navbar />
      <div className='wrapper_container main-wrapper-container'>
        <div className='main-content'>
          <Demo data={props.res}/>
        </div>
        <div className='side-advertise'>
          <WriteUrl />
        </div>
      </div>
    </>
  )
}


export async function getServerSideProps(context) {

  const api = await GetPublished();
  const res = await api
  return {
    props: {
      res: { ...res.data } // <== here is a solution

    },

  };
}


export default HomePage;