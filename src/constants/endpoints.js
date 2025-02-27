export const FILESTORE_BASE_URL = process.env.REACT_APP_FILESTORE_BASE_URL;

export const ENDPOINTS = {
    GET_MY_DRIVE: FILESTORE_BASE_URL + '/Drives/My-Drive',
    GET_SHARED_DRIVE: FILESTORE_BASE_URL + '/Drives/Shared-Drive',
    GET_BREADCRUMBS: (FolderId) => `${FILESTORE_BASE_URL}/Folders/${FolderId}/Breadcrumbs`,

    GET_FOLDER: (FolderId) => `${FILESTORE_BASE_URL}/Folders/${FolderId}`,
    CREATE_FOLDER: FILESTORE_BASE_URL + '/Folders',
    
    INITIATE_UPLOAD: FILESTORE_BASE_URL + '/Files/Initiate-Multipart-Upload',
    GENERATE_UPLOAD_PRESIGNED_URL: (FileId) => `${FILESTORE_BASE_URL}/Files/${FileId}/Generate-Part-Presigned-Url`,
    COMPLETE_UPLOAD: FILESTORE_BASE_URL + '/Files/Complete-Multipart-Upload',
    
    DOWNLOAD_FILE: (FileId) => `${FILESTORE_BASE_URL}/Files/${FileId}`,
    DELETE_FILE: (FileId) => `${FILESTORE_BASE_URL}/Files/${FileId}`
}