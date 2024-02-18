"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import githubLogoDark from "../../../public/githubDark.svg";
import githubLogoLight from "../../../public/githubLight.svg";
import "material-icons/iconfont/material-icons.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

export default function Navbar() {
  const [theme, setTheme] = useState(true);
  const [hover, setHover] = useState(false);
  const [iconClassDark, setIconClassDark] = useState("material-icons md-light");
  const [iconClassLight, setIconClassLight] = useState(
    "material-icons md-dark",
  );
  const [navClass, setNavClass] = useState("navigation md-dark");
  const [homeTextColor, setHomeTextColor] = useState("#E41415");
  const [aboutTextColor, setAboutTextColor] = useState("white");
  const [showcaseTextColor, setShowcaseTextColor] = useState("white");
  const [contactTextColor, setContactTextColor] = useState("white");
  const [menuOpened, setMenuOpened] = useState(false);
  const [menuClass, setMenuClass] = useState("material-icons md-light md-32");
  const [position, setPosition] = useState("bottom");

  function changeMode(): void {
    setTheme(!theme);
  }
  function handleHover(): void {
    setHover(true);
  }
  function handleHover_(): void {
    setHover(false);
  }
  function openMenu(): void {
    setMenuOpened(!menuOpened);
  }
  var path = usePathname();

  useEffect(() => {
    const element = document.body;
    !theme
      ? setNavClass("navigation md-light")
      : setNavClass("navigation md-dark");
    theme
      ? setMenuClass("material-icons md-light md-32")
      : setMenuClass("material-icons md-dark md-32");

    if (path == "/") {
      setHomeTextColor("#E41415");
      if (theme) {
        setAboutTextColor("white");
        setShowcaseTextColor("white");
        setContactTextColor("white");
      } else {
        setAboutTextColor("black");
        setShowcaseTextColor("black");
        setContactTextColor("black");
      }
    } else if (path == "/About") {
      setAboutTextColor("#E41415");
      if (theme) {
        setHomeTextColor("white");
        setShowcaseTextColor("white");
        setContactTextColor("white");
      } else {
        setHomeTextColor("black");
        setShowcaseTextColor("black");
        setContactTextColor("black");
      }
    } else if (path == "/Showcase") {
      setShowcaseTextColor("#E41415");
      if (theme) {
        setAboutTextColor("white");
        setHomeTextColor("white");
        setContactTextColor("white");
      } else {
        setAboutTextColor("black");
        setHomeTextColor("black");
        setContactTextColor("black");
      }
    } else if (path == "/Contact") {
      setContactTextColor("#E41415");
      if (theme) {
        setAboutTextColor("white");
        setHomeTextColor("white");
        setShowcaseTextColor("white");
      } else {
        setAboutTextColor("black");
        setHomeTextColor("black");
        setShowcaseTextColor("black");
      }
    }

    element.classList.toggle("dark-mode", theme);
    element.classList.toggle("light-mode", !theme);
  }, [theme, usePathname()]);

  useEffect(() => {
    if (hover) {
      setIconClassDark("material-icons orange600");
      setIconClassLight("material-icons orange600");
    } else {
      setIconClassDark("material-icons md-light");
      setIconClassLight("material-icons md-dark");
    }
  }, [hover]);

  return (
    <div className="navbar">
      <nav className={navClass}>
        <Link
          className="githubLink"
          href="https://github.com/Vijayadityaraj-source"
        >
          {theme ? (
            <Image
              priority
              src={githubLogoDark}
              width={50}
              alt={"githubLogo"}
            />
          ) : (
            <Image
              priority
              src={githubLogoLight}
              alt={"githubLogo"}
              width={50}
            />
          )}
        </Link>
        <Link
          className="hide"
          style={{
            color: homeTextColor,
            textDecoration: "none",
            padding: 0,
            margin: "auto 0",
          }}
          href="/"
        >
          <p className="homeLink">Home</p>
        </Link>
        <Link
          className="hide"
          style={{
            color: aboutTextColor,
            textDecoration: "none",
            padding: 0,
            margin: "auto 0",
          }}
          href="/About"
        >
          <p className="aboutLink">About</p>
        </Link>
        <Link
          className="hide"
          style={{
            color: showcaseTextColor,
            textDecoration: "none",
            padding: 0,
            margin: "auto 0",
          }}
          href="/Showcase"
        >
          <p className="showcaseLink">Showcase</p>
        </Link>
        <Link
          className="hide"
          style={{
            color: contactTextColor,
            textDecoration: "none",
            padding: 0,
            margin: "auto 0",
          }}
          href="/Contact"
        >
          <p className="contactLink">Contact</p>
        </Link>
        <button
          onClick={changeMode}
          onMouseOver={handleHover}
          onMouseOut={handleHover_}
          className="toggle-button"
        >
          {theme ? (
            <span className={iconClassDark}>&#xe51c;</span>
          ) : (
            <span className={iconClassLight}>&#xe518;</span>
          )}
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button onClick={openMenu} className="toggle-menu">
              <span className={menuClass}>&#xe5d2;</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={position}
              onValueChange={setPosition}
            >
              <Link
                style={{
                  textDecoration: "none",
                  padding: "auto",
                  margin: "auto",
                }}
                href="/"
              >
                <DropdownMenuRadioItem value="home">Home</DropdownMenuRadioItem>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  padding: "auto",
                  margin: "auto",
                }}
                href="/About"
              >
                <DropdownMenuRadioItem value="about">
                  About
                </DropdownMenuRadioItem>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  padding: "auto",
                  margin: "auto",
                }}
                href="/Showcase"
              >
                <DropdownMenuRadioItem value="showcase">
                  Showcase
                </DropdownMenuRadioItem>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  padding: "auto",
                  margin: "auto",
                }}
                href="/Contact"
              >
                <DropdownMenuRadioItem value="contact">
                  Contact
                </DropdownMenuRadioItem>
              </Link>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </div>
  );
}
