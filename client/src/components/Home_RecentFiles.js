import React from "react";
import toast from "react-hot-toast";

const TranscribeRecordsTable = ({ transcriptionRecords }) => {
  return (
    <div className="h-full bg-white rounded-xl border px-8 py-5">
      <h2 className="text-lg font-semibold mb-4">Recent Files</h2>
      <table className="min-w-full">
        <thead className="">
          <tr>
            <th className="text-left px-2 py-2 text-blue-custom-5 bg-blue-custom-3 rounded-l-lg">
              Name
            </th>
            <th className="text-left px-2 py-2 text-blue-custom-5 bg-blue-custom-3">
              Type
            </th>
            <th className="text-left px-2 py-2 text-blue-custom-5 bg-blue-custom-3">
              Duration
            </th>
            <th className="text-left px-2 py-2 text-blue-custom-5 bg-blue-custom-3">
              Date Created
            </th>
            <th className="text-left px-2 py-2 text-blue-custom-5 bg-blue-custom-3">
              Transcript
            </th>
            <th className="text-left px-2 py-2 text-blue-custom-5 bg-blue-custom-3 rounded-r-lg">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {transcriptionRecords.map((file, index) => (
            <tr key={index} className="border-b">
              <td className="text-left px-2 py-2">{file.audioName}</td>
              <td className="text-left px-2 py-2">{"Audio"}</td>
              <td className="text-left px-2 py-2 font-semibold">
                {file.duration} sec
              </td>
              <td className="text-left px-2 py-2">{file.dateCreated}</td>
              <td
                className="text-left px-2 py-2 truncate max-w-xs cursor-pointer hover:bg-gray-100 transition-colors"
                style={{ maxWidth: "200px" }}
                onClick={() => {
                  toast(file.transcript, {
                    duration: 60000,
                  });
                }}
              >
                {file.transcript.length > 20
                  ? file.transcript.substring(0, 20) + "..."
                  : file.transcript}
              </td>
              <td className="text-left px-2 py-2">
                {/* Add actions here, like buttons or links */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TranscribeRecordsTable;
