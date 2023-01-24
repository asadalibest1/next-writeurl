import Imageo from 'next/image'
import React from 'react'

const Image = (props) => {
    return <Imageo {...props} style={{ ...props.style, objectFit: 'contain' }} />
}

export default Image