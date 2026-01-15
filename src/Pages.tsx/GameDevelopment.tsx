import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import GameDevSection from '../components/GameDevSection'
import GameDevSolutions from '../components/GameDevSolutions'
import GameDevTech from '../components/GameDevTech'
import FaqsGame from '../components/FaqsGame'
import Message from '../components/Message'
import Innovator from '../components/Innovator'

const GameDevelopment = () => {
  return (
    <div>
      <Navbar />
      <GameDevSection />
      <GameDevSolutions />
      <GameDevTech />
      <Message />
      <FaqsGame />
      <Innovator />
      <Footer />
    </div>
  )
}

export default GameDevelopment
