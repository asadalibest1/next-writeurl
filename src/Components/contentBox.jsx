import React from 'react'
import './contentBox.css'

 const  ContentBox = ({heading,para}) => {
  return (
   <div className='contextBox'>
    <h3 className='headingStyle'>{heading}</h3>
    <p className='paraStyle'>{para}</p>

   </div>
  )
}


export default ContentBox