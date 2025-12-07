import Sparkle from './components/Sparkle'
import Star from './components/Star'
import './App.css'

function App() {

  return (
    <div className="app">
      <div className="container">

        <section id="about" className="about">
          <div className="name-title-wrapper">
            <h1 className="name-title">May Hathaway</h1>
            <Star className="name-star" />
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                Hi, I'm May. I graduated from the University of Pennsylvania in 2025 with a degree in Computer Science and Cognitive Science and minors in Consumer Psychology and English. I'm currently working as a software engineer at LinkedIn.
              </p>
              <p>
                I'm from New York City, and I currently live in the Bay Area. I enjoy crossword puzzles, running, and knitting.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
