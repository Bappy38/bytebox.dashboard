const FileCard = ({file}) => {

    const {fileId, fileName, thumbnailUrl} = file;

    return (
        <div className="w-[230px] h-[300px] px-3 py-2 bg-slate-200 rounded-lg hover:bg-slate-300 cursor-default">

            <div className="h-[10%] text-ellipsis overflow-hidden whitespace-nowrap">📄 {fileName}</div>

            <div className="h-[90%] flex items-center justify-center py-1">
                {
                    thumbnailUrl? (
                        <img
                            src={thumbnailUrl}
                            alt={`${fileName} thumbnail`}
                            className="rounded-md max-w-full max-h-full object-cover"
                        />
                    ) : (
                        <div className="bg-gray-200 text-gray-600 rounded-lg">
                            <span>Loading...</span>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default FileCard;