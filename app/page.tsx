import Navbar from "./components/navbar";
import AboutUs from "./components/aboutUs";
import Feedback from "./components/feedback";
import Mentors from "./components/mentors";
import Footer from "./components/footer";
import Different from "./components/different";
export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <AboutUs></AboutUs>
      <Different></Different>
      <Feedback></Feedback>
      <Mentors></Mentors>
      <Footer></Footer>
    </div>
  );
}
