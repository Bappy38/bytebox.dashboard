import FileCard from "./FileCard";


const FileContainer = ({ files }) => {
    
    return (
        <div className="py-3">
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