import Header from '../components/header.jsx'
import Meme from '../components/meme-generator.jsx'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Meme />
      </div>
    </>
  )
}

export default App
