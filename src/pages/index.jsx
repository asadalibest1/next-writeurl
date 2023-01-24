"use client"
import React from 'react'
import Demo from '../Components/Demo.js'
import Navbar from '../Components/Navbar.js'
import WriteUrl from '../Components/WriteUrl.js'
import './css/homePage.css'
import './css/globals.css'
import './css/editor.css'
import { useEffect } from 'react'
// import Head from './head.jsx'

export var BaseURL = "https://api.writeurl.com"

export const HomePage = () => {
  // useEffect(() => {
  //   var perfEntries = performance.getEntriesByType("navigation");
  //   if (perfEntries[0].type === "back_forward") {
  //     window.location.reload(true);
  //   }
  // }, [])

  return (
    <>
      {/* <Head /> */}
      <Navbar />
      <div className='wrapper_container main-wrapper-container'>
        <div className='main-content'>
          <Demo />
        </div>
        <div className='side-advertise'>
          <WriteUrl />
        </div>
      </div>
    </>
  )
}
export default HomePage;