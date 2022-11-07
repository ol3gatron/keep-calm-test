import Header from './components/Header/Header'
import Section from './components/Section/Section'
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <main>
        <Section />
        <Section />
      </main>
    </div>
  )
}

export default App
