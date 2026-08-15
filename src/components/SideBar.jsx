import firefox from "./../images/firefox.png";
import computer from "./../images/computer.png";
import github from "./../images/github.png";
import leetcode from "./../images/leetcode.png";
import linkedin from "./../images/linkedin.webp";
import peerlist from "./../images/peerlist.webp";
import keypad from "./../images/keypad.png";
function SideBar() {
  return (
    <div className="h-full w-full bg-gray-950/50 flex  justify-center flex-col">
      <div className="h-[70%] flex flex-col items-center justify-evenly">
        <img src={firefox} className="h-[50px] in-hover:cursor-pointer" />
        <img src={computer} className="h-[50px] in-hover:cursor-pointer" />
        <img src={github} className="h-[50px] in-hover:cursor-pointer" />
        <img src={leetcode} className="h-[65px] in-hover:cursor-pointer" />
        <img src={linkedin} className="h-[65px] in-hover:cursor-pointer" />
        <img src={peerlist} className="h-[50px] in-hover:cursor-pointer" />
      </div>
      <div className="h-[30%] flex items-end justify-center ">
        <img src={keypad} className="h-[40px] mb-10" />
      </div>
    </div>
  );
}
export default SideBar;
