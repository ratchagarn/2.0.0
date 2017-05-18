import ReactDOM from 'react-dom';

import DownArrowIcon from '../resources/down-arrow-icon.svg'
import NavigationBar from './NavigationBar'
import ReactBKKLogo from '../resources/reactbkk.svg'

export default function HeroUnit () {
  return (
    <header>
      <HeroUnitBg delay={5000} />
      <div className='bg-overlay' />
      <div className='spacer' />
      <div className='center'>
        <HeroUnitLogo />
      </div>
      <div className='footer'>
        <HeroUnitFooter />
      </div>
      <style jsx>{`
        header {
          text-align: center;
          position: relative;
          background-size: cover;
        }
        .bg-overlay {
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          background: #222;
          opacity: 0.9;
        }
        .center {
          position: relative;
          padding-top: 160px;
        }
        .footer {
          position: relative;
          padding-bottom: 40px;
          padding-top: 80px;
        }
        @media (max-width: 639px) {
          .center { padding-top: 80px; }
          .footer { padding-top: 40px; }
        }
      `}</style>
    </header>
  )
}

function HeroUnitLogo () {
  return (
    <div>
      <div className='logo'><ReactBKKLogo /></div>
      <h1>React Bangkok</h1>
      <style jsx>{`
        h1 {
          font-size: 70px;
          font-weight: normal;
          margin: 1ex 0 0;
          color: #00D8FF;
        }
        @media (max-width: 639px) {
          h1 { font-size: 50px; }
          .logo :global(svg) { width: 196px; height: 175px; }
        }
        @media (max-width: 399px) {
          h1 { font-size: 44px; }
          .logo :global(svg) { width: 171px; height: 154px; }
        }
      `}</style>
    </div>
  )
}

function HeroUnitFooter () {
  return (
    <div className='footer'>
      <div className='nav'>
        <NavigationBar />
      </div>
      <DownArrowIcon />
      <style jsx>{`
        .nav {
          margin-bottom: 30px;
        }
      `}</style>
    </div>
  )
}

class HeroUnitBg extends React.Component {
  componentDidMount () {
    const { delay } = this.props;
    const bgHeroSet = ReactDOM.findDOMNode(this)
    const img = bgHeroSet.querySelectorAll('img')

    let pointer = 0
    const maxItems = img.length

    setInterval(() => {
      if (pointer < maxItems - 1) {
        img[pointer].className = 'fade-out'
        img[pointer + 1].className = 'fade-in'
        pointer++
      } else {
        img[pointer].className = 'fade-out'
        img[0].className = 'fade-in'
        pointer = 0
      }
    }, delay)
  }

  render () {
    return (
      <div className='bg-hero-set'>
        <img src='static/hero-bg-01.jpg' alt='' className='fade-in' />
        <img src='static/hero-bg-02.jpg' alt='' />
        <img src='static/hero-bg-03.jpg' alt='' />
        <style jsx>{`
          .bg-hero-set {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
          .bg-hero-set > img {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            opacity: 0;
            transform: translateX(-50%) translateY(-50%);
            transition: opacity 1s;
          }
          .bg-hero-set > img.fade-in {
            opacity: 1;
          }
          .bg-hero-set > img.fade-out {
            opacity: 0;
          }
          @media (max-width: 1024px) {
            .bg-hero-set > img {
              width: auto;
              height: 100%;
            }
          }
        `}</style>
      </div>
    )
  }
}
