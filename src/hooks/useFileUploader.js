import axios from "axios";
import { useCallback, useState } from "react";
import { ENDPOINTS } from "../constants/endpoints";


const CHUNK_SIZE = 5 * 1024 * 1024;

export const useFileUploader = () => {

    const [progress, setProgress] = useState(0);
    const [uploadStatus, setUploadStatus] = useState(null);

    const uploadFile = useCallback(async (file, folderId) => {

        if (!file) {
            throw new Error("No file selected");
        }

        try {
            setProgress(0);
            setUploadStatus('inprogress');

            const initiateUploadResponse = await axios.post(
                ENDPOINTS.INITIATE_UPLOAD,
                {
                    FolderId: folderId,
                    FileSizeInMb: (file.size / (1024 * 1024)).toFixed(3),
                    FileName: file.name,
                    ContentType: file.type
                }
            );
            const { fileId, uploadId } = initiateUploadResponse.data;

            const parts = [];
            const totalChunks = Math.ceil(file.size / CHUNK_SIZE);

            for (let partNumber = 1 ; partNumber <= totalChunks ; partNumber++) {

                const start = (partNumber - 1) * CHUNK_SIZE;
                const end = Math.min(partNumber * CHUNK_SIZE, file.size);

                const chunk = file.slice(start, end);

                const presignedGenerateResponse = await axios.post(
                    ENDPOINTS.GENERATE_UPLOAD_PRESIGNED_URL(fileId),
                    {
                        fileId,
                        uploadId,
                        PartNumber: partNumber
                    }
                );
                const { preSignedUrl } = presignedGenerateResponse.data;

                const chunkUploadResponse = await axios.put(preSignedUrl, chunk, {
                    headers: { "Content-Type": file.type }
                });
                const { headers } = chunkUploadResponse;
                const eTag = headers.etag;
                parts.push({
                    PartNumber: partNumber.toString(),
                    Etag: eTag
                });

                setProgress(Math.round((partNumber / totalChunks) * 100));
            }

            const completeUploadResponse = await axios.post(ENDPOINTS.COMPLETE_UPLOAD, {
                fileId,
                FileName: file.name,
                FileSizeInMb: (file.size / (1024 * 1024)).toFixed(3),
                ContentType: file.type,
                FolderId: folderId,
                uploadId,
                Parts: parts
            });

            setUploadStatus("success");
            return completeUploadResponse.data;
        } catch (error) {
            console.error("Error uploading file: ", error);
            setUploadStatus("error");
        }
    }, []);

    return { uploadFile, progress, uploadStatus, setUploadStatus };
}

export default useFileUploader;