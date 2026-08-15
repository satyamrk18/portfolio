import wallpaper from "./images/wallpaper.png";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar.jsx";
function Home() {
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="h-[3%] w-full bg-gray-800 flex items-center justify-center">
        <NavBar />
      </div>

      <div
        className="h-[97%] w-full bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${wallpaper})` }}
      >
        <div className="h-full w-[5%]">
          <SideBar />
        </div>
        <div className="h-full w-[95%]"></div>
      </div>
    </div>
  );
}

export default Home;
