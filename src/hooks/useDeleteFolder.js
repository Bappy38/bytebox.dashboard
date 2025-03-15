import { useDispatch } from "react-redux"
import fileStoreApi from "../interceptors/errorHandlingInterceptor";
import { ENDPOINTS } from "../constants/endpoints";
import { removeFolder } from "../store/fileExplorerSlice";


const useDeleteFolder = () => {

    const dispatch = useDispatch();

    const deleteFolder = async (folderId) => {

        try {
            await fileStoreApi.delete(ENDPOINTS.DELETE_FOLDER(folderId));
            dispatch(removeFolder(folderId));
        } catch (err) {
            console.error('Failed to delete folder: ', err);
        }
    };

    return deleteFolder;
}

export default useDeleteFolder;