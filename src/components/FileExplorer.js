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
        <div className="p-6">
            <BreadCrumbBar/>
            <FolderContainer/>
            <FileContainer/>
        </div>
    );
};

export default FileExplorer;