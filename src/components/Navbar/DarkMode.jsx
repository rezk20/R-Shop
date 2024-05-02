import { useEffect, useState } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
  function toggle() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  // Save theme to Local Storage when changed
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="relative duration-200">
      <img
        onClick={toggle}
        src={theme === "dark" ? DarkButton : LightButton}
        alt="Toggle"
        className="w-12 cursor-pointer transition-all duration-300"
      />
    </div>
  );
}

export default DarkMode;
