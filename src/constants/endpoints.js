export const FILESTORE_BASE_URL = process.env.REACT_APP_FILESTORE_BASE_URL;

export const ENDPOINTS = {
    GET_MY_DRIVE: FILESTORE_BASE_URL + '/Drives/My-Drive',
    GET_SHARED_DRIVE: FILESTORE_BASE_URL + '/Drives/Shared-Drive',
    GET_FOLDER: (FolderId) => `${process.env.REACT_APP_FILESTORE_BASE_URL}/Folders/${FolderId}`
}