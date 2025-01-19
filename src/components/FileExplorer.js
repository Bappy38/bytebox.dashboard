import { useLocation } from "react-router-dom";
import BreadCrumbBar from "./BreadCrumbBar";
import FileContainer from "./FileContainer";
import FolderContainer from "./FolderContainer";
import useBreadcrumbs from "../hooks/useBreadcrumbs";


const FileExplorer = () => {

    const location = useLocation();
    useBreadcrumbs(location.pathname);
    console.log(location);

    return (
        <div>
            <div className="pt-6 px-4">
                <BreadCrumbBar/>
            </div>

            <div className="p-6">
                <FolderContainer/>
                <FileContainer/>
            </div>
        </div>
    );
};

export default FileExplorer;