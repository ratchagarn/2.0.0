import DownArrowIcon from '../resources/down-arrow-icon.svg'
import NavigationBar from './NavigationBar'
import ReactBKKLogo from '../resources/reactbkk.svg'

export default function HeroUnit () {
  return (
    <header>
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
          background: url(static/hero-bg.jpg) center no-repeat;
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
      <div className='down-arrow-icon-wrapper'>
        <DownArrowIcon onClick={downArrowIconHandler} />
      </div>
      <style jsx>{`
        .nav {
          margin-bottom: 30px;
        }
        .down-arrow-icon-wrapper {
          display: inline-block;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

function downArrowIconHandler () {
  window.scrollTo(0, document.getElementById('tickets').offsetTop)
}
