import { useLocation, useNavigate } from "react-router-dom";
import FolderCard from "./FolderCard";

const FolderContainer = ( {folders} ) => {

    const location = useLocation();
    const navigate = useNavigate();

    const handleFolderClick = (folderId) => {

        const basePath = location.pathname.startsWith('/my-drive') ? '/my-drive' : '/shared-drive';
        navigate(`${basePath}/folders/${folderId}`);
    }

    if (!folders || folders.length === 0) {
        return (<></>)
    }

    return (
        <div className="">
            <h1 className="font-semibold">Folders</h1>
            <div className="flex pt-2">
                {folders.map(folder => (
                    <div key={folder.folderId} className="pr-4" onClick={() => handleFolderClick(folder.folderId)}>
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