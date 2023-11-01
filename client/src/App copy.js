import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import TranscriptionModal from "./components/modal";
import TranscriptModal from "./components/trasncript_modal";

const Dashboard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [transModalisible, setTransModalVisible] = useState(false);
  const [file, setFile] = useState(null);
  const [transcriptionRecords, setTranscriptionRecords] = useState([]);

  return (
    <div className=" bg-bg-custom h-screen w-full flex">
      <Sidebar />
      <Home
        transcriptionRecords={transcriptionRecords}
        setModalVisible={() => {
          setModalVisible(true);
        }}
        openTransModal={() => {}}
      />
      <TranscriptionModal
        file={file}
        visible={modalVisible}
        setFile={setFile}
        onClose={() => {
          setModalVisible(false);
        }}
        transcriptionRecords={transcriptionRecords}
        setTranscriptionRecords={setTranscriptionRecords}
      />
    </div>
  );
};

export default Dashboard;
