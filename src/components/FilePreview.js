import { useEffect, useState } from "react";
import { ENDPOINTS } from "../constants/endpoints";
import fileStoreApi from "../interceptors/errorHandlingInterceptor";
import { FILE_TYPES, getFileType } from "../utils/fileTypes";
import { NOTIFICATION_TYPE } from "../constants/notificationType";

const FilePreview = ({ fileId, fileName, fileType, onClose }) => {
  const [fileUrl, setFileUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mappedFileType = getFileType(fileType);

  useEffect(() => {
    if (!fileId) return;

    const fetchPresignedUrl = async () => {
      try {
        setLoading(true);
        const response = await fileStoreApi.get(ENDPOINTS.DOWNLOAD_FILE(fileId));
        setFileUrl(response.data.downloadUrl);
      } catch (err) {
        setError("Failed to load file preview");
      } finally {
        setLoading(false);
      }
    };

    fetchPresignedUrl();
  }, [fileId]);

  if (mappedFileType === FILE_TYPES.UNSUPPORTED){
    window.showNotification(crypto.randomUUID(), 'Unsupported File Format', NOTIFICATION_TYPE.ERROR);
    return;
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg flex flex-col max-w-[90vw] max-h-[90vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{fileName}</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            ✕
          </button>
        </div>

        {loading && <p className="text-gray-600">Loading preview...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {fileUrl && (
          <div className="flex justify-center items-center flex-grow">
            {mappedFileType === FILE_TYPES.IMAGE ? (
              <img src={fileUrl} alt="Preview" className="max-w-full max-h-[75vh] object-contain rounded-md" />
            ) : mappedFileType === FILE_TYPES.PDF ? (
              <iframe src={fileUrl} className="w-[80vw] h-[75vh] border-none"></iframe>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilePreview;
