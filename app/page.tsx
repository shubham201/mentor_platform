import Navbar from "./components/navbar";
import AboutUs from "./components/aboutUs";
import Feedback from "./components/feedback";
import Mentors from "./components/mentors";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <AboutUs></AboutUs>
      <Feedback></Feedback>
      <Mentors></Mentors>
      <Footer></Footer>
    </div>
  );
}
