import FileCard from "./FileCard";


const FileContainer = ({ files }) => {

    if (!files || files.length === 0) {
        return (<></>)
    }
    
    return (
        <div className="py-3">
            <h1 className="font-semibold">Files</h1>
            <div className="flex flex-wrap gap-4 pt-2">
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