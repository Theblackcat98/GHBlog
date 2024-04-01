import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { SITE_TITLE } from "../consts";
import DarkSwitch from "../components/DarkSwitch.jsx";

export default function App() {
  return (
    <Navbar>
      <NavbarBrand justify="left">
        <Link href="/" className="font-bold text-inherit">
          {SITE_TITLE}
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="accent" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="primary" href="/blog" aria-current="page">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="accent" href="/about">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <DarkSwitch client:load />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
