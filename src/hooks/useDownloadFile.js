import { ENDPOINTS } from "../constants/endpoints"
import { NOTIFICATION_TYPE } from "../constants/notificationType";
import fileStoreApi from "../interceptors/errorHandlingInterceptor"


const useDownloadFile = () => {

    const downloadFile = async (fileId, fileName) => {
        try {
            const response = await fileStoreApi.get(ENDPOINTS.DOWNLOAD_FILE(fileId));
            const { downloadUrl } = response.data;

            const fileResponse = await fetch(downloadUrl, {
                redirect: "follow"
            });
            if (!fileResponse.ok) {
                throw new Error('Failed to fetch file');
            }

            const contentLength = fileResponse.headers.get("Content-Length");
            const totalSize = contentLength ? parseInt(contentLength, 10) : 0;

            const reader = fileResponse.body?.getReader();
            const chunks = [];
            let receivedLength = 0;

            while (true) {
                const {done, value} = await reader.read();

                if (done) {
                    break;
                }

                chunks.push(value);
                receivedLength += value.length;

                const downloadProgress = totalSize ? Math.round((receivedLength / totalSize) * 100) : 0;
                window.showNotification(crypto.randomUUID(), `File Download Progress : ${downloadProgress}%`, NOTIFICATION_TYPE.INFO);
            }

            const blob = new Blob(chunks);
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
            window.showNotification(crypto.randomUUID(), 'File Download Failed', NOTIFICATION_TYPE.ERROR);
        }
    };

    return downloadFile;
}

export default useDownloadFile;