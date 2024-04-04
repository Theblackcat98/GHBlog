import React from "react";
import { Progress } from "@nextui-org/react";

export default function App() {
  return (
    <Progress
      isStriped
      aria-label="Loading..."
      color="secondary"
      value={60}
      className="max-w-md"
    />
  );
}

