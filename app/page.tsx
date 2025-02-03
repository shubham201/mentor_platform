import Navbar from "./components/navbar";
import AboutUs from "./components/courses_overview";
import Feedback from "./components/feedback";
import Footer from "./components/footer";
import Different from "./components/different";
import Head from "next/head";
export default function Home() {
  return (
    <div>
     <Head>
        <title>Home - AtoInfinity Hub</title>
        <meta name="description" content="Explore our courses, feedback, and unique offerings to enhance your learning experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="courses, learning, mentorship, feedback" />
        <meta name="author" content="AtoInfinity Hub" />
        <meta property="og:title" content="Home - AtoInfinity Hub" />
        <meta property="og:description" content="Explore our courses, feedback, and unique offerings to enhance your learning experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mentor-platform-mu.vercel.app/" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Navbar></Navbar>
      <AboutUs></AboutUs>
      <Different></Different>
      <Feedback></Feedback>
      {/* <Mentors></Mentors> */}
      <Footer></Footer>
    </div>
  );
}
