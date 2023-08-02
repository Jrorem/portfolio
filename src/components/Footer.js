import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
  <div class="footer">
    <div class="foot">
      <a
        href="https://github.com/Jrorem"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
        href="https://linkedin.com/in/joe-rorem"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://stackoverflow.com/users/22311164/roardawg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faStackOverflow} size="2x" />
      </a>
    </div>
  </div>
  )
}

export default Footer