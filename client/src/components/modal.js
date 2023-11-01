import axios from "axios";
import { useEffect, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const TranscriptionModal = ({
  file,
  setFile,
  visible,
  onClose,
  setTranscriptionRecords,
  transcriptionRecords,
}) => {
  const [transcription, setTranscription] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTranscribe = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("audio", file);

      try {
        const response = await axios.post(
          "https://trancriber-backend.onrender.com/transcribe",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setTranscription(response.data.transcription);

        onClose();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const addTranscriptionRecord = (audioName, transcript, duration) => {
    const newRecord = {
      audioName,
      transcript,
      dateCreated: new Date().toLocaleString(),
      duration,
    };
    setTranscriptionRecords([...transcriptionRecords, newRecord]);
    console.log("Table updted");
  };

  useEffect(() => {
    if (file && transcription) {
      addTranscriptionRecord(
        file.name,
        transcription,
        Math.floor(Math.random() * 300)
      );
    }
  }, [transcription]);

  return (
    visible && (
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white w-1/3 p-6 rounded-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Transcribe File</h2>
            <button onClick={onClose} className="text-lg">
              <RxCross2 />
            </button>
          </div>

          <div className="mt-4">
            <label className="block mb-2">Transcription Language</label>
            <select className="w-full border rounded-lg p-2 mb-4 text-xs">
              <option>English</option>
            </select>

            <div className="border-2 border-gray-300 p-5 mb-5 rounded-md flex flex-col items-center justify-center">
              <button
                className="bg-blue-100 text-blue-500 w-14 h-14 flex items-center justify-center rounded-full mb-4"
                onClick={() => {}}
              >
                <FiUploadCloud size={24} />
              </button>
              <input type="file" onChange={handleFileChange} accept="audio/*" />
              <p className="mb-1 text-lg font-semibold">
                Click to upload or drag and drop
              </p>
              <p className="text-sm text-gray-400 text-center">
                Supported formats: mp3, mp4, wav, caf, avi, flv, mp4, mov, wmv,
                wma
              </p>
            </div>

            <label className="block mb-2">Import from Link</label>
            <input
              type="text"
              placeholder="Paste a Dropbox, Google Drive or Youtube URL here"
              className="w-full border rounded-lg p-2 mb-4"
            />

            <div className="flex items-center mb-8 ml-3">
              <input type="checkbox" id="speaker" className="mr-2" />
              <label htmlFor="speaker">Speaker identification</label>
            </div>

            <button
              className="bg-blue-custom-5 text-white py-2 px-4 rounded-lg w-full"
              onClick={handleTranscribe}
            >
              Transcribe File
            </button>
          </div>
        </div>
      </div>
    )
  );
};
export default TranscriptionModal;
