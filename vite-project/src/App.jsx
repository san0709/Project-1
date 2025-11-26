import Header from "./Components/Header.jsx";
import "./Components/Header.css";
import Partner from "./Components/Partner.jsx";
import Courses from "./Components/Courses.jsx";
// Banner and Image are used inside ThemeCompare; keep imports inside their components
import BenefitSection from "./Components/BenefitSection.jsx";
import Testimonial from "./Components/Testimonial.jsx";
import Banner from "./Components/Banner.jsx";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Partner />
      <Courses />
      <BenefitSection />
      <Testimonial />
    </>
  );
}

export default App;
