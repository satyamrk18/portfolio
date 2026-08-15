import { useState, useEffect } from "react";
import dropArrow from "./../images/down-arrow.png";
import off from "./../images/on-off-button.png";
import flow from "./../images/version-control.png";
import volume from "./../images/volume-up.png";
function NavBar() {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const updateTime = () => {
      setDateTime(new Date());
    };

    // Update immediately
    updateTime();

    // Check every second
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <nav className="h-full w-[97%] flex items-center justify-between">
      {/* navbar content */}
      <h2 className="text-white">Activities</h2>
      <h2 className="text-white">
        {dateTime.toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
        })}
        {"  "}
        {dateTime.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </h2>
      <div className="border-white-2 flex items-center gap-5">
        <img src={flow} className="h-[17px]" />
        <img src={volume} className="h-[17px]" />
        <img src={off} className="h-[15px]" />
        <img src={dropArrow} className="h-[20px]" />
      </div>
    </nav>
  );
}
export default NavBar;
