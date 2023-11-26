import React from "react";

function NavBar() {
  return (
    <nav className="bg-yellow-400 w-full h-[10vh] font-bold px-10">
      <ul className="flex justify-evenly items-center h-full">
        <li>ALL CATEGORIES</li>
        <li className="text-[#b67f00]">TODAY DEALS</li>
        <li>ELECTRONICS</li>
        <li>CLOTHINGS</li>
        <li>COMPUTERS</li>
        <li>FURNITURES</li>
        <li>MOM & BABY</li>
        <li>BOOKS & MORE</li>
      </ul>
    </nav>
  );
}

export default NavBar;
