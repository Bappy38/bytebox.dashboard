import React from "react";

const UploadNotificationBar = ({ progress, status, onClose }) => {
  if (status === null) return null;

  const getMessage = () => {
    if (status === "success") return "File uploaded successfully!";
    if (status === "error") return "Error uploading file. Please try again.";
    return `Uploading... ${progress}%`;
  };

  const getColorClass = () => {
    if (status === "success") return "bg-green-100 text-green-800 border-green-300";
    if (status === "error") return "bg-red-100 text-red-800 border-red-300";
    return "bg-yellow-100 text-yellow-800 border-yellow-300"; // For "in progress"
  };

  return (
    <div
      className={`notification-bar fixed top-4 right-4 shadow-md p-4 rounded-lg flex items-center space-x-4 border ${getColorClass()}`}
    >
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
