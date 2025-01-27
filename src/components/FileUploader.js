import { useRef } from "react"
import UploadNotificationBar from "./UploadNotificationBar";
import useFileUploader from "../hooks/useFileUploader";

const FileUploader = ({ folderId, onUploadComplete }) => {

    const fileInputRef = useRef(null);

    const { uploadFile, progress, uploadStatus, setUploadStatus } = useFileUploader();

    const handleFileChange = async (e) => {

        const uploadedFile = await uploadFile(e.target.files[0], folderId);
        onUploadComplete(uploadedFile);
    }

    const handleFileUpload = () => {
        fileInputRef.current.click();
    };

    const handleCloseNotification = () => {
        setUploadStatus(null);
    };

    return (
        <div>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{display: 'none'}}
            />

            <button
                className="bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500"
                onClick={handleFileUpload}
            >
                📄 File Upload
            </button>

            <UploadNotificationBar
                progress={progress}
                status={uploadStatus}
                onClose={handleCloseNotification}/>
        </div>
    )
}

export default FileUploader;