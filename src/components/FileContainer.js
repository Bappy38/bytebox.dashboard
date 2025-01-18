import FileCard from "./FileCard";


const FileContainer = () => {

    const files = [
        {
            fileId: "abc123",
            fileName: "Academic Certificate",
            thumbnailUrl: ''
        },
        {
            fileId: "abc124",
            fileName: "Book I read",
            thumbnailUrl: ''
        },
        {
            fileId: "abc125",
            fileName: "Credentials",
            thumbnailUrl: ''
        },
        {
            fileId: "abc126",
            fileName: "Family",
            thumbnailUrl: ''
        }
    ];
    
    return (
        <div className="p-2">
            <h1 className="font-semibold">Files</h1>
            <div className="flex pt-2">
                {files.map(file => (
                    <div key={file.fileId} className="pr-4">
                        <FileCard
                            file={file}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FileContainer;