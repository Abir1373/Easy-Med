import Banner from "./Components/Homepage/Banner"
import ContactForm from "./Components/Homepage/ContactForm"
import ExpertDoctors from "./Components/Homepage/OurDoctors/ExpertDoctors"
import OurServices from "./Components/Homepage/OurServices"
import OurTiming from "./Components/Homepage/OurTiming"
import Reviews from "./Components/Homepage/Reviews"


function App() {

  return (
    <>
      <Banner />
      <div className="mx-4 lg:mx-48">
        <OurServices />
        <OurTiming />
        <Reviews />
        <ExpertDoctors />
        <ContactForm />
      </div>
    </>
  )
}

export default App
