import Header from "./Components/Header.jsx";
import "./Components/Header.css";
import Banner from "./Components/Banner.jsx";
import Partner from "./Components/Partner.jsx";
import Courses from "./Components/Courses.jsx";
import Image from "./Components/Image.jsx";
import BenefitSection from "./Components/BenefitSection.jsx";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Partner />
      {/* <Image /> */}
      <BenefitSection />
      <Courses />
    </>
  );
}

export default App;
