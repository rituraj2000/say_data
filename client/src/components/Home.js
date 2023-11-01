import { FaBell, FaSearch } from "react-icons/fa";
import {
  PiFolderSimpleBold,
  PiMagnifyingGlassBold,
  PiBellDuotone,
  PiBellLight,
  PiUserLight,
} from "react-icons/pi";
import RecentFIles from "./Home_RecentFiles";
import { useEffect, useState } from "react";
import axios from "axios";
import TranscriptionModal from "./modal";

const Home = ({ setModalVisible, transcriptionRecords }) => {
  useEffect(() => {
    console.log(transcriptionRecords);
  }, []);

  return (
    <div className=" w-full h-full flex flex-col">
      <div className="bg-black h-2/6 flex flex-col">
        <div className="bg-white h-3/12 px-4 flex items-center">
          <HeaderSection />
        </div>
        <div className="bg-bg-custom h-4/12 flex w-full">
          <WelcomeSection setModalVisible={setModalVisible} />
        </div>
        <div className="flex bg-bg-custom py-2 pr-4 pl-7 h-5/12">
          <FileUploadComponent />
          <FileUploadComponent />
          <FileUploadComponent />
        </div>
      </div>

      {/* RecentFIles section */}
      <div className="h-4/6 py-2 px-8">
        <RecentFIles transcriptionRecords={transcriptionRecords} />
      </div>
    </div>
  );
};

const FileUploadComponent = () => {
  return (
    <div className="flex items-center justify-start p-4  bg-white border border-gray-300 rounded-2xl h-full mr-3 w-3/12">
      <div className=" bg-white border rounded-full p-3 flex items-center justify-center mb-2">
        <PiFolderSimpleBold className="text-gray-500" size={15} />
      </div>

      <div className="flex flex-col">
        <div className="text-lg font-semibold ml-1">100</div>
        <div className="text-gray-500 ml-1 text-xs">Uploaded Files</div>
      </div>
    </div>
  );
};

const HeaderSection = () => {
  return (
    <div className="flex items-center w-full justify-between bg-blac pr-4 pl-6">
      <div className="flex items-center bg-bg-custom px-4 rounded-lg w-2/3 h-9">
        <PiMagnifyingGlassBold className="text-gray-500" />
        <input
          type="text"
          placeholder="Search here..."
          className="ml-2 border-none focus:ring-0 outline-none bg-bg-custom text-sm"
        />
      </div>

      <div className="flex items-center">
        <div className="rounded-full p-2 bg-bg-custom mx-3">
          <PiBellLight className="text-gray-400" size={24} />
        </div>
        <div className="rounded-full p-2 bg-bg-custom">
          <PiUserLight className="text-gray-400" size={24} />
        </div>
      </div>
    </div>
  );
};

const WelcomeSection = ({
  onFileUpload,
  handleFileChange,
  setModalVisible,
}) => {
  return (
    <div className="flex justify-between items-center p-8 w-full">
      <div className="pl-3">
        <h1 className="text-xl font-bold">Welcome Shakirat</h1>
        <p className="text-sm font-semibold text-gray-500">
          Upload your audio and Video to convert to text
        </p>
      </div>

      <button
        className="bg-blue-custom-5 text-white px-6 py-2 rounded-md focus:outline-none focus:bg-blue-600"
        onClick={() => {
          setModalVisible(true);
        }}
      >
        Transcribe File
      </button>
    </div>
  );
};

export default Home;
