import React from 'react'
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsGithub />
        </div>
        <div>
            <BsLinkedin />
        </div>
        <div>
            <BsInstagram />
        </div>
    </div>
  )
}

export default SocialMedia