import ImageThumbnail from "../assets/thumbnails/ImageThumbnail.jpg";

const FileCard = ({file}) => {

    const {fileId, fileName, thumbnailUrl} = file;

    return (
        <div className="w-[230px] h-[300px] px-3 py-2 bg-slate-200 rounded-lg hover:bg-slate-300 cursor-default">

            <div className="h-[10%]">📄 {fileName}</div>

            <div className="h-[90%] flex items-center justify-center py-1">
                <img
                    src={ImageThumbnail}
                    alt={`${fileName} thumbnail`}
                    className="rounded-md max-w-full max-h-full object-cover"
                />
            </div>

        </div>
    );
};

export default FileCard;