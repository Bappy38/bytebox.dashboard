import BreadCrumbBar from "./BreadCrumbBar";
import FileContainer from "./FileContainer";
import FolderContainer from "./FolderContainer";


const FileExplorer = () => {

    return (
        <div className="p-4">
            <BreadCrumbBar/>
            <FolderContainer/>
            <FileContainer/>
        </div>
    );
};

export default FileExplorer;