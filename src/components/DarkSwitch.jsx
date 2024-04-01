import React from "react";
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
export default function App() {
  return (
    <Switch
      defaultSelected={true}
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
  );
}
