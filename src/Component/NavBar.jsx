import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNavBar from "./MobileNavBar";
function NavBar() {
  const [handleHamburger, setHandleHamburger] = useState(true);
  const onhandleHamburger = () => setHandleHamburger(!handleHamburger);

  return (
    <div>
      <div className="flex justify-between sm:py-4 px-8 bg-red-600 items-center">
        <img
          src="https://cdn.discordapp.com/attachments/943172350139052092/1050486509146484737/IMG_20221209_002752.jpg"
          className="w-20 rounded-full"
        />
        <div className="hidden sm:block">
          <div className="space-x-4  flex text-white text-2xl ">
            <h1>Home</h1>
            <h1>Contact</h1>
            <h1>private policy</h1>
            <h1>Thiland Tour</h1>
            <h1>FAQs</h1>
          </div>
        </div>
        {handleHamburger && (
          <GiHamburgerMenu
            className="text-white text-4xl"
            onClick={onhandleHamburger}
          />
        )}
      </div>
      {!handleHamburger && (
        <MobileNavBar MobileNavBarFlip={onhandleHamburger}></MobileNavBar>
      )}
    </div>
  );
}

export default NavBar;
