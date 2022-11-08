import Header from './components/Header/Header'
import './App.css'

import firstImage from "./assets/images/Mask Group.png"
import secondImage from "./assets/images/Mask Group1.png"
import thirdImage from "./assets/images/Mask Group2.png"
import fourthImage from "./assets/images/Mask Group3.png"

const App = () => {
  return (
    <div className='app'>
      <Header />
      <main>
        <h1 className="main-title">ut aliquip ex ea commodo consequat</h1>
        <section className="section-first">
          <div className="section-image">
            <img src={firstImage} alt=""/>
          </div>
          <div className="section-text">
            <h2 className="section-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
            <div className="section-desc">
              <p className="desc-text">Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
        </section>
        <section className="section-first">
          <div className="section-image">
            <img src={secondImage} alt=""/>
          </div>
          <div className="section-text">
            <h2 className="section-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
            <div className="section-desc">
              <p className="desc-text">Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
        </section>

        {/* <Slider /> */}

        <h1 className="main-title">ut aliquip ex ea commodo consequat</h1>
        <section className="section-first">
          <div className="section-image">
            <img src={thirdImage} alt=""/>
          </div>
          <div className="section-text">
            <h2 className="section-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
            <div className="section-desc">
              <p className="desc-text">Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
        </section>
        <section className="section-first">
          <div className="section-image">
            <img src={fourthImage} alt=""/>
          </div>
          <div className="section-text">
            <h2 className="section-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
            <div className="section-desc">
              <p className="desc-text">Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
