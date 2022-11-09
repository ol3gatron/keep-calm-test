import Header from './components/Header/Header'
import Section from './components/Section/Section'
import Footer from './components/Footer/Footer'
import AppSlider from './components/AppSlider/AppSlider'
import './App.css'

import image from "./assets/images/Mask Group.png"
import image1 from "./assets/images/Mask Group1.png"
import image2 from "./assets/images/Mask Group2.png"
import image3 from "./assets/images/Mask Group3.png"


const App = () => {
  const TITLE = "ut aliquip ex ea commodo consequat"
  const SUBTITLE = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  const TEXT = "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

  return (
    <div className='app'>
      <Header />
      <h1 className='app-title'>{TITLE}</h1>
      <Section image={image} subtitle={SUBTITLE} text={TEXT} />
      <Section image={image1} subtitle={SUBTITLE} text={TEXT} />
      <AppSlider/>
      <h1 className='app-title'>{TITLE}</h1>
      <Section image={image2} subtitle={SUBTITLE} text={TEXT} />
      <Section image={image3} subtitle={SUBTITLE} text={TEXT} />
      <Footer />
    </div>
  )
}

export default App
