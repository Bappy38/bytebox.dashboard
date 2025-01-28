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
                className="bg-gray-200 py-2 px-2 rounded-r-lg text-gray-700 hover:bg-gray-300"
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