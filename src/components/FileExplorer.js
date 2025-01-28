import { useLocation } from "react-router-dom";
import BreadCrumbBar from "./BreadCrumbBar";
import FileContainer from "./FileContainer";
import FolderContainer from "./FolderContainer";
import useBreadcrumbs from "../hooks/useBreadcrumbs";
import useDrive from "../hooks/useDrive";
import FileUploader from "./FileUploader";
import { useEffect, useState } from "react";
import FolderCreator from "./FolderCreator";


const FileExplorer = () => {
    const location = useLocation();
    useBreadcrumbs(location.pathname);
    
    const data = useDrive(location.pathname);

    const [files, setFiles] = useState([]);
    const [subFolders, setSubFolders] = useState([]);

    useEffect(() => {
        if (data) {
            setFiles(data.files);
            setSubFolders(data.subFolders);
        }
    }, [data]);

    const handleFolderCreated = (newFolder) => {
        
        if (!newFolder) {
            return;
        }
        setSubFolders((prevFolders) => [...prevFolders, newFolder]);
    }

    const handleFileUploadComplete = (newFile) => {

        if (!newFile) {
            return;
        }
        setFiles((prevFiles) => [...prevFiles, newFile]);
    };

    if (!data) {
        return (
            <h1 className="font-bold text-xl">Fetching Drives...</h1>
        )
    }

    return (
        <div>
            <div className="pt-6 px-4 flex items-center justify-between">
                <BreadCrumbBar />

                <div className="flex space-x-0">
                    <FolderCreator parentFolderId={data.folderId} onCreateComplete={handleFolderCreated} />
                    <FileUploader folderId={data.folderId} onUploadComplete={handleFileUploadComplete} />
                </div>
            </div>

            <div className="p-6">
                <FolderContainer folders = {subFolders}/>
                <FileContainer files = {files}/>
            </div>
        </div>
    );
};

export default FileExplorer;