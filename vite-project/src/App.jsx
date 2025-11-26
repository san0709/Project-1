import Header from "./Components/Header.jsx";
import "./Components/Header.css";
import Partner from "./Components/Partner.jsx";
import Courses from "./Components/Courses.jsx";
// Banner and Image are used inside ThemeCompare; keep imports inside their components
import BenefitSection from "./Components/BenefitSection.jsx";
import Banner from "./Components/Banner.jsx";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Partner />
      <Courses />
      <BenefitSection />
    </>
  );
}

export default App;
