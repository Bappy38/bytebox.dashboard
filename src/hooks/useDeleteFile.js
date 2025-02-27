import fileStoreApi from "../interceptors/errorHandlingInterceptor"
import { ENDPOINTS } from "../constants/endpoints"
import { useDispatch } from "react-redux"
import { removeFile } from "../store/fileExplorerSlice"


const useDeleteFile = () => {

    const dispatch = useDispatch();

    const deleteFile = async (fileId) => {
        
        try {
            await fileStoreApi.delete(ENDPOINTS.DELETE_FILE(fileId));
            dispatch(removeFile(fileId));
        } catch (err) {
            console.error('Failed to delete file: ', err);
        }
    };

    return deleteFile;
}

export default useDeleteFile;