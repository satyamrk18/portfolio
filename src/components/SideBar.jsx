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
      <div className="h-[70%] flex flex-col items-center gap-2 justify-evenly">
        <div className="relative group">
          <img src={firefox} className="h-[40px] hover:cursor-pointer" />
          <span
            className="absolute left-1/2 -translate-x-1/2 top-full mt-1
                     hidden group-hover:block
                     rounded bg-gray-800 px-2 py-1 text-sm text-white
                     whitespace-nowrap"
          >
            Browser
          </span>
        </div>
        <div className="relative group">
          <img src={computer} className="h-[40px] hover:cursor-pointer" />
          <span
            className="absolute left-1/2 -translate-x-1/2 top-full mt-1
                     hidden group-hover:block
                     rounded bg-gray-800 px-2 py-1 text-sm text-white
                     whitespace-nowrap"
          >
            I am
          </span>
        </div>
        <div className="relative group">
          <img src={github} className="h-[40px] hover:cursor-pointer" />
          <span
            className="absolute left-1/2 -translate-x-1/2 top-full mt-1
                     hidden group-hover:block
                     rounded bg-gray-800 px-2 py-1 text-sm text-white
                     whitespace-nowrap"
          >
            GitHub
          </span>
        </div>
        <div className="relative group">
          <img src={leetcode} className="h-[55px] hover:cursor-pointer" />
          <span
            className="absolute left-1/2 -translate-x-1/2 top-full mt-1
                     hidden group-hover:block
                     rounded bg-gray-800 px-2 py-1 text-sm text-white
                     whitespace-nowrap"
          >
            LeetCode
          </span>
        </div>
        <div className="relative group">
          <img src={linkedin} className="h-[55px] hover:cursor-pointer" />
          <span
            className="absolute left-1/2 -translate-x-1/2 top-full mt-1
                     hidden group-hover:block
                     rounded bg-gray-800 px-2 py-1 text-sm text-white
                     whitespace-nowrap"
          >
            LinkedIn
          </span>
        </div>
        <div className="relative group">
          <img src={peerlist} className="h-[40px] hover:cursor-pointer" />

          <span
            className="absolute left-1/2 -translate-x-1/2 top-full mt-1
                   hidden group-hover:block
                   bg-gray-800 text-white text-sm px-2 py-1 rounded
                   whitespace-nowrap"
          >
            Peerlist
          </span>
        </div>
      </div>
      <div className="h-[30%] flex items-end justify-center in-hover:cursor-pointer">
        <img src={keypad} className="h-[40px] mb-10" />
      </div>
    </div>
  );
}
export default SideBar;
