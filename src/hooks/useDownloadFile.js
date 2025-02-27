import { ENDPOINTS } from "../constants/endpoints"
import { NOTIFICATION_TYPE } from "../constants/notificationType";
import fileStoreApi from "../interceptors/errorHandlingInterceptor"


const useDownloadFile = () => {

    const downloadFile = async (fileId, fileName) => {
        try {
            const response = await fileStoreApi.get(ENDPOINTS.DOWNLOAD_FILE(fileId));
            const { downloadUrl } = response.data;

            const fileResponse = await fetch(downloadUrl);
            if (!fileResponse.ok) {
                throw new Error('Failed to fetch file');
            }

            const blob = await fileResponse.blob();
            const blobUrl = window.URL.createObjectURL(blob);

            const downloadLink = document.createElement('a');
            downloadLink.href = blobUrl;
            downloadLink.setAttribute('download', fileName);
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);

            window.URL.revokeObjectURL(blobUrl);

            window.showNotification(crypto.randomUUID(), 'File Downloaded Successfully', NOTIFICATION_TYPE.SUCCESS);
        }
        catch (error) {
            console.error('Failed to download file: ', error);
        }
    };

    return downloadFile;
}

export default useDownloadFile;