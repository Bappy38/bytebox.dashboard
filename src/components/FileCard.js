import { useState } from "react";
import FilePreview from "./FilePreview";
import { FILE_TYPES, getFileType } from "../utils/fileTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faImage } from "@fortawesome/free-solid-svg-icons";

const FileCard = ({file}) => {

    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const {fileId, fileName, fileType, thumbnailUrl} = file;

    const mappedFileType = getFileType(fileType);

    return (
        <>
            <div
                onClick={() => setIsPreviewOpen(true)}
                className="w-[230px] h-[300px] px-3 py-2 bg-slate-200 rounded-lg hover:bg-slate-300 cursor-default">

                <div className="h-[10%] text-ellipsis overflow-hidden whitespace-nowrap">📄 {fileName}</div>

                <div className="h-[90%] flex items-center justify-center py-1">
                    {
                        thumbnailUrl? (
                            <img
                                src={thumbnailUrl}
                                alt={`${fileName} thumbnail`}
                                className="rounded-md max-w-full max-h-full object-cover"
                            />
                        ) : mappedFileType === FILE_TYPES.IMAGE? (
                            <FontAwesomeIcon className="w-[60%] h-[60%]" icon={faImage} />
                        ) : mappedFileType === FILE_TYPES.PDF? (
                            <FontAwesomeIcon className="w-[60%] h-[60%]" icon={faFilePdf} />
                        ) : (
                            <div className="bg-gray-200 text-gray-600 rounded-lg">
                                <span>Loading...</span>
                            </div>
                        )
                    }
                </div>
            </div>

            {
                isPreviewOpen
                &&
                <FilePreview
                    fileId={fileId}
                    fileName={fileName}
                    fileType={fileType}
                    onClose={() => setIsPreviewOpen(false)}
                />
            }
        </>
    );
};

export default FileCard;