import "./App.css";
import backgroundVideo from "/Videos/Background-video.mp4";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="h-screen relative">
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

      <div className="fixed top-0 left-0 w-full h-full bg-blackOverlay">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
