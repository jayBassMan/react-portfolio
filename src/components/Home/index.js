import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
// import LogoTitle from '../../assets/images/jonathanLogo.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = []
  const jobArray = [
    'J',
    'o',
    'n',
    'a',
    't',
    'h',
    'a',
    'n'
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}></span>
            <span className={`${letterClass} _12`}></span>
            <br />
            <span className={`${letterClass} _13`}></span>
            <span className={`${letterClass} _14`}></span>
            {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / Back End Developer / Software Developer</h2>
          <a href="/contact" className="flat-button">
            CONTACT ME
          </a>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
