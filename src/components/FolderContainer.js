import { useLocation, useNavigate } from "react-router-dom";
import FolderCard from "./FolderCard";
import { useDispatch } from "react-redux";
import { addBreadcrumb } from "../store/breadCrumbSlice";

const FolderContainer = ( {folders} ) => {

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleFolderClick = (folder) => {

        const basePath = location.pathname.startsWith('/my-drive') ? '/my-drive' : '/shared-drive';

        const breadcrumbToAdd = {
            id: folder.folderId,
            path: `${basePath}/folders/${folder.folderId}`,
            label: folder.folderName
        };
        dispatch(addBreadcrumb(breadcrumbToAdd));

        navigate(`${basePath}/folders/${folder.folderId}`);
    }

    if (!folders || folders.length === 0) {
        return (<></>)
    }

    return (
        <div className="">
            <h1 className="font-semibold">Folders</h1>
            <div className="flex flex-wrap gap-4 pt-2">
                {folders.map(folder => (
                    <div key={folder.folderId} className="pr-4" onClick={() => handleFolderClick(folder)}>
                        <FolderCard
                            folder={folder}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FolderContainer;