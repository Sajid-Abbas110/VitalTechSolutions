import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import DigitalMarketingSection from '../components/DigitalMarketingSection'
import DigitalMarketingSolutions from '../components/DigitalMarketingSolutions'
import Succeed from '../components/Succeed'
import FaqsDigital from '../components/FaqsDigital'
import Message from '../components/Message'
import Innovator from '../components/Innovator'

const DigitalMarketing = () => {
  return (
    <div>
      <Navbar />
      <DigitalMarketingSection />
      <DigitalMarketingSolutions />
      <Message />
      <Succeed />
      <FaqsDigital />
      <Innovator />
      <Footer />
    </div>
  )
}

export default DigitalMarketing
