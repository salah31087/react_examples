import React, { useState } from "react";
import classNames from "classnames";
import { BsSearch } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import logo from "../assets/images/JustWatch-logo-large.webp";
import { Button, Input } from "@material-tailwind/react";
import Sidebar from "./Sidebar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import NavbarWithSearch from "./Navbar";



export default function Header() {
  return (
    <header className="my-6">
      {/* <Logo></Logo> */}
      {/* <Categories></Categories> */}
      {/* <Search></Search> */}
      <NavbarWithSearch></NavbarWithSearch>
        {/* <Input
          variant=""
          className=""
          color="white"
          icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          label="Search"
        /> */}
      {/* <Button variant="text" color="white" className="bg-[#ab8e22] text-nowrap" size="md">Sign in</Button> */}
      {/* <Sidebar></Sidebar> */}
    </header>
  );
}

export function Logo() {
  return (
    <a href="/">
      <img src={logo} alt="justwatch logo" className="w-40" />
    </a>
  );
}

export function Categories() {
  const categories = ["all", "movies", "tv shows"];

  return (
    <ul className="flex gap-x-4 flex-nowrap items-center">
      {categories.map((category, index) => (
        <li key={index}>
          <a href="/" className="capitalize text-md font-bold text-nowrap">
            {category}
          </a>
        </li>
      ))}
    </ul>
  );
}

