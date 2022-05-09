import './index.scss'
import LogoS from '../../assets/images/CircleLogo.png'
// import LogoSubtitle from '../../assets/images/JAY.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <a className="logo" href="/">
        <img src={LogoS} alt="Logo" />
        {/* <img className="sub-logo" src={LogoSubtitle} alt="Jonathan" /> */}
      </a>
      <nav>
        <a exact="true" activeclassname="active" href="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </a>
        <a activeclassname="active" className="about-link" href="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </a>
        <a activeclassname="active" className="contact-link" href="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </a>
      </nav>
      <ul>
        <li>
          <a
            href="https://linkedin.com/in/jonathan-johnson-b7259437"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/jayBassMan"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCBu5ulO4d-d47lAVybpRTkw"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a href="skype:live:bobangajicsm" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
