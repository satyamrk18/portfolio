import Particles from "./components/Particles";
import Home from "./Home";

function App() {
  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          className="absolute inset-0"
          particleCount={1500}
          particleBaseSize={500}
          particleSpread={18}
          speed={0.05}
          moveParticlesOnHover={true}
          particleHoverFactor={4}
          particleColors={["#ffffff"]}
        />
      </div>

      {/* Foreground */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <Home />
      </div>
    </div>
  );
}

export default App;
