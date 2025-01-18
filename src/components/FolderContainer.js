import FolderCard from "./FolderCard";

const FolderContainer = () => {

    const folders = [
        {
            folderId: "abc123",
            folderName: "Academic Certificate"
        },
        {
            folderId: "abc124",
            folderName: "Book I read"
        },
        {
            folderId: "abc125",
            folderName: "Credentials"
        },
        {
            folderId: "abc126",
            folderName: "Family"
        }
    ];

    return (
        <div className="px-2">
            <h1 className="font-semibold">Folders</h1>
            <div className="flex pt-2">
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