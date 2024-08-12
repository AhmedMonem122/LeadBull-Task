import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HugeUpdates from "../../components/HugeUpdates/HugeUpdates";
import KeyIndicators from "../../components/KeyIndicators/KeyIndicators";
import Navbar from "../../components/Navbar/Navbar";
import OurSolution from "../../components/OurSolution/OurSolution";
import OverMillion from "../../components/OverMillion/OverMillion";
import Profile from "../../components/Profile/Profile";
import Updates from "../../components/Updates/Updates";
import WilliamJohnson from "../../components/WilliamJohnson/WilliamJohnson";
import backgroundVideo from "/Videos/Background-video.mp4";

const HomePage = () => {
  return (
    <main className="h-full relative after:content-[''] after:fixed after:left-0 after:top-0 after:w-full after:h-full after:bg-blackOverlay after:-z-[1]">
      <video
        src={backgroundVideo}
        autoPlay
        loop
        muted
        className="h-full w-full fixed top-0 left-0 object-cover -z-[1]"
      >
        <source src={backgroundVideo} type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>

      <Navbar />
      <Header />
      <HugeUpdates />
      <Profile />
      <OurSolution />
      <KeyIndicators />
      <OverMillion />
      <Updates />
      <WilliamJohnson />
      <Footer />
    </main>
  );
};

export default HomePage;
