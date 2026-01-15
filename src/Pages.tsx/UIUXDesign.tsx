import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import UIUXSection from '../components/UIUXSection'
import Philosophy from '../components/Philosophy'
import Expert from '../components/Expert'
import FaqsUIUX from '../components/FaqsUIUX'
import Message from '../components/Message'
import Innovator from '../components/Innovator'

const UIUXDesign = () => {
  return (
    <div>
      <Navbar />
      <UIUXSection />
      <Philosophy />
      <Expert />
      <Message />
      <FaqsUIUX />
      <Innovator />
      <Footer />
    </div>
  )
}

export default UIUXDesign
