import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import SEOSection from '../components/SEOSection'
import SEOCoreValues from '../components/SEOCoreValues'
import SEOEmpower from '../components/SEOEmpower'
import FaqsSEO from '../components/FaqsSEO'
import Message from '../components/Message'
import Innovator from '../components/Innovator'

const SEOAndContentWriting = () => {
  return (
    <div>
      <Navbar />
      <SEOSection />
      <SEOCoreValues />
      <SEOEmpower />
      <Message />
      <FaqsSEO />
      <Innovator />
      <Footer />
    </div>
  )
}

export default SEOAndContentWriting
