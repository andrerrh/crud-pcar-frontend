import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className="footer">
            <p className="footer-list">Made by André Rodrigues, 2021</p>
            <a style={{textDecoration: 'none'}} href="/#" onClick={() => window.open("https://github.com/andrerrh")} className='footer-list fa'>
                <FontAwesomeIcon icon={faGithub} />
                <p className="footer-list text">My GitHub profile</p>
            </a>
        </footer>
    )
}

export default Footer