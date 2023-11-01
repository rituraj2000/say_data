const TranscriptModal = ({ visible, onClose, transcript }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      onClick={() => {
        onClose();
      }}
    >
      <div className="bg-white w-1/3 p-6 rounded-lg">{transcript}</div>
    </div>
  );
};

export default TranscriptModal;
