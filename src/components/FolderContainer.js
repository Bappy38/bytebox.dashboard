import FolderCard from "./FolderCard";

const FolderContainer = ( {folders} ) => {

    if (!folders || folders.length === 0) {
        return (<></>)
    }

    return (
        <div className="">
            <h1 className="font-semibold">Folders</h1>
            <div className="flex flex-wrap gap-4 pt-2">
                {folders.map(folder => (
                    <div key={folder.folderId} className="pr-4">
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