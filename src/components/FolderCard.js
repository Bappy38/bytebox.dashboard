import { useLocation, useNavigate } from 'react-router-dom';
import FolderCardActions from './FolderCardActions';
import { useDispatch } from 'react-redux';
import { addBreadcrumb } from '../store/breadCrumbSlice';

const FolderCard = ({ folder }) => {
    const { folderId, folderName } = folder;

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

    return (
        <div className="flex items-center justify-between bg-slate-200 w-[230px] px-3 py-2 rounded-md hover:bg-slate-300 cursor-default">
            <div
                className="flex items-center gap-2 overflow-hidden"
                onClick={() => handleFolderClick(folder)}>
                <span>📁</span>
                <span className="truncate">{folderName}</span>
            </div>

            <div className="flex items-center">
                <FolderCardActions folderId={folderId} folderName={folderName} />
            </div>
        </div>
    );
};

export default FolderCard;