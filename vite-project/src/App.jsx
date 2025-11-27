import Header from "./Components/Header.jsx";
import "./Components/Header.css";
import Partner from "./Components/Partner.jsx";
import Courses from "./Components/Courses.jsx";
import BenefitSection from "./Components/BenefitSection.jsx";
import Testimonial from "./Components/Testimonial.jsx";
import Banner from "./Components/Banner.jsx";
import PricingComponent from "./PricingComponent.jsx";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Partner />
      <Courses />
      <BenefitSection />
      <Testimonial />
      <PricingComponent />
    </>
  );
}

export default App;
