import React, { useState } from "react";
import {
  FaRegHome,
  FaRegFile,
  FaRegHeart,
  FaRegQuestionCircle,
  FaHeart,
  FaPlug,
  FaTrash,
  FaCog,
  FaQuestionCircle,
  FaRocket,
} from "react-icons/fa";
import { PiHouseBold, PiFolderSimpleBold, PiRocketLaunchDuotone } from "react-icons/pi";

const UpgradeAccount = () => {
  return (
    <div className="mt-10 px-4 py-6 bg-blue-50 rounded-lg flex flex-col items-center">
      <div className="flex flex-col items-center mb-3">
        <PiRocketLaunchDuotone className="text-blue-600 mb-2" size={22} />
        <span className="text-blue-700 font-semibold">Upgrade Account</span>
      </div>
      <p className="mb-4 text-blue-700 text-xs text-center">
        Access to Unlimited Transcription
      </p>
      <button className="w-full bg-blue-custom-5 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Upgrade
      </button>
    </div>
  );
};

const SidebarItem = ({ Icon, label, isSelected, onClick }) => (
  <li
    className={`flex items-center space-x-3 px-3 py-2 rounded-md ${
      isSelected ?  "bg-blue-custom-3" : ""
    }`}
  >
    <button className="flex items-center w-full text-left" onClick={onClick}>
      <Icon
        className={`${
          isSelected ? "text-blue-800" : "text-gray-500"
        } font-semibold mr-2`}
      />
      <span
        className={`${
          isSelected ? "text-blue-800" : "text-gray-500"
        } font-semibold`}
      >
        {label}
      </span>
    </button>
  </li>
);

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState("Home");

  return (
    <div className="bg-white h-screen w-64 p-6">
      <div className="mb-8">
        <img
          src="path_to_your_logo"
          alt="abc firm Logo"
          className="w-32 mb-6"
        />
      </div>

      <ul className="space-y-4 text-gray-600">
        <SidebarItem
          Icon={PiHouseBold}
          label="Home"
          isSelected={selectedItem === "Home"}
          onClick={() => setSelectedItem("Home")}
        />
        <SidebarItem
          Icon={PiFolderSimpleBold}
          label="All Files"
          isSelected={selectedItem === "All Files"}
          onClick={() => setSelectedItem("All Files")}
        />
      </ul>

      <div className="mb-0">
        <UpgradeAccount />
      </div>
    </div>
  );
};

export default Sidebar;
