import React from "react";

const UploadNotificationBar = ({ progress, status, onClose }) => {
  if (status === null) return null;

  const getMessage = () => {
    if (status === "success") return "File uploaded successfully!";
    if (status === "error") return "Error uploading file. Please try again.";
    return `Uploading... ${progress}%`;
  };

  return (
    <div className="notification-bar fixed top-4 right-4 bg-white shadow-md p-4 rounded-lg flex items-center space-x-4">
      <div className="flex-grow">
        <p className="text-sm font-medium">{getMessage()}</p>
      </div>
      <button
        className="text-gray-500 hover:text-gray-700"
        onClick={onClose}
      >
        ✕
      </button>
    </div>
  );
};

export default UploadNotificationBar;
