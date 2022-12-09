import React from "react";
import { ImCross } from "react-icons/im";
function MobileNavBar({ MobileNavBarFlip }) {
  const onMobileNavBarFlip = () => MobileNavBarFlip();
  return (
    <div>
      <div className=" p-4 flex border-2 border-white flex-col items-center bg-red-600 space-y-4 text-white text-2xl ">
        <h1>Home</h1>

        <h1>Contact</h1>
        <h1>private policy</h1>
        <h1>Thiland Tour</h1>
        <h1>FAQs</h1>
        <ImCross onClick={onMobileNavBarFlip} />
      </div>
    </div>
  );
}

export default MobileNavBar;
