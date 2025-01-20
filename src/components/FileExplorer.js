import { useLocation } from "react-router-dom";
import BreadCrumbBar from "./BreadCrumbBar";
import FileContainer from "./FileContainer";
import FolderContainer from "./FolderContainer";
import useBreadcrumbs from "../hooks/useBreadcrumbs";
import useMyDrive from "../hooks/useDrive";


const FileExplorer = () => {

    const location = useLocation();
    useBreadcrumbs(location.pathname);
    
    const data = useMyDrive();

    if (!data) {
        return (
            <h1 className="font-bold text-xl">Fetching Drives...</h1>
        )
    }

    return (
        <div>
            <div className="pt-6 px-4">
                <BreadCrumbBar/>
            </div>

            <div className="p-6">
                <FolderContainer folders = {data.subFolders}/>
                <FileContainer files = {data.files}/>
            </div>
        </div>
    );
};

export default FileExplorer;