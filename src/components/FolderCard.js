import FolderCardActions from './FolderCardActions';

const FolderCard = ({ folder }) => {
    const { folderId, folderName } = folder;

    return (
        <div className="flex items-center justify-between bg-slate-200 w-[230px] px-3 py-2 rounded-md hover:bg-slate-300 cursor-default">
            <div className="flex items-center gap-2 overflow-hidden">
                <span>📁</span>
                <span className="truncate">{folderName}</span>
            </div>

            <div className="flex items-center gap-2">
                <FolderCardActions folderId={folderId} folderName={folderName} />
            </div>
        </div>
    );
};

export default FolderCard;