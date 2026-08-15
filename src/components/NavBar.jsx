import { useState, useEffect } from "react";
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
      <h2 className="text-white">dunctionality</h2>
    </nav>
  );
}
export default NavBar;
