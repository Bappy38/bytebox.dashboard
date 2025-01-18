import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FolderCard = ({folder}) => {

    const {folderId, folderName} = folder;

    return (
        <div className="flex bg-slate-200 w-[230px] px-3 py-2 rounded-md hover:bg-slate-300 cursor-default">
            <div className='w-11/12'>
                📁  {folderName}
            </div>

            <div className='w-1/12 px-4 flex items-center justify-center hover:bg-slate-400 rounded-full'>
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
        </div>
    );
};

export default FolderCard;