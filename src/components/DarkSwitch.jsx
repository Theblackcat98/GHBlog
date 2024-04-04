import React from "react";
import { useState, useEffect } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../../public/Moonicon.jsx";
import { SunIcon } from "../../public/Sunicon.jsx";
/*
export default function App() {
  return (
    <div>
      <Switch
        defaultSelected
        size="lg"
        color="secondary"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )
        }
      >
        Dark mode
      </Switch>
    </div>
  );
}
*/

export default function DarkSwitch() {
  const [darkMode, setDarkMode] = useState(true); // Default to light mode

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark"); // Add dark class to body
      document.body.classList.remove("light"); // Remove light class from body
    } else {
      document.body.classList.remove("dark"); // Remove dark class from body
      document.body.classList.add("light"); // Add light class to body
    }
  }, [darkMode]);

  return (
    <Switch
      defaultSelected={darkMode}
      onChange={() => setDarkMode(!darkMode)}
      size="lg"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    ></Switch>
  );
}
