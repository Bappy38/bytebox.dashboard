import React, { useEffect, useState } from "react";

const NotificationBar = ({ notificationId, message, type = "info", autoDismiss = true, dismissTimeout = 3000 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!message) {
      return;
    }
    setIsVisible(true);

    if (!autoDismiss) {
      return;
    }
    
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, dismissTimeout);

    return () => clearTimeout(timer);
    
  }, [notificationId, message, autoDismiss, dismissTimeout]);

  if (!isVisible || !message) return null;

  const getColorClass = () => {
    switch (type) {
      case "success":
        return "bg-green-100 text-green-800 border-green-300";
      case "error":
        return "bg-red-100 text-red-800 border-red-300";
      case "warning":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      default:
        return "bg-blue-100 text-blue-800 border-blue-300";
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={`notification-bar fixed top-4 right-4 shadow-md p-4 rounded-lg flex items-center space-x-4 border ${getColorClass()}`}
    >
      <div className="flex-grow">
        <p className="text-sm font-medium">{message}</p>
      </div>
      <button
        className="text-gray-500 hover:text-gray-700"
        onClick={handleClose}
      >
        ✕
      </button>
    </div>
  );
};

export default NotificationBar;
