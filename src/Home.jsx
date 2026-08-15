import wallpaper from "./images/wallpaper.png";
import NavBar from "./components/NavBar";

function Home() {
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="h-[3%] w-full bg-gray-800 flex items-center justify-center">
        <NavBar />
      </div>

      <div
        className="h-[97%] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${wallpaper})` }}
      ></div>
    </div>
  );
}

export default Home;
