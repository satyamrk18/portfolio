import firefox from "./../images/firefox.png";
import github from "./../images/github.png";
function SideBar() {
  return (
    <div className="h-full w-full bg-gray-950/50 flex justify-center flex-col">
      <div className="h-[70%] flex flex-col items-center justify-evenly">
        <img src={firefox} className="h-[50px]" />
        <img src={github} className="h-[50px]" />
        <img src={firefox} className="h-[50px]" />
        <img src={firefox} className="h-[50px]" />
        <img src={firefox} className="h-[50px]" />
        <img src={firefox} className="h-[50px]" />
        <img src={firefox} className="h-[50px]" />
      </div>
      <div className="h-[30%] border-2 ">
        <h1>hii</h1>
      </div>
    </div>
  );
}
export default SideBar;
