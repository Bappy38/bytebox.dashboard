import { useLocation } from "react-router-dom";
import BreadCrumbBar from "./BreadCrumbBar";
import FileContainer from "./FileContainer";
import FolderContainer from "./FolderContainer";
import useBreadcrumbs from "../hooks/useBreadcrumbs";
import useDrive from "../hooks/useDrive";
import FileUploader from "./FileUploader";
import FolderCreator from "./FolderCreator";
import { useDispatch, useSelector } from "react-redux";
import { addFile, addFolder } from "../store/fileExplorerSlice";


const FileExplorer = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    useBreadcrumbs(location.pathname);
    useDrive(location.pathname);

    const data = useSelector((state) => state.fileExplorer);

    const handleFolderCreated = (newFolder) => {
        
        if (!newFolder) {
            return;
        }
        dispatch(addFolder(newFolder));
    }

    const handleFileUploadComplete = (newFile) => {

        if (!newFile) {
            return;
        }
        dispatch(addFile(newFile));
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
                <FolderContainer folders = {data.subFolders}/>
                <FileContainer files = {data.files}/>
            </div>
        </div>
    );
};

export default FileExplorer;