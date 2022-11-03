import React from 'react'
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/brian-ariel-ogas/"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a>
          <BsInstagram />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/_digitalArtisan"
        >
          <BsTwitter />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia