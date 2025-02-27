import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ENDPOINTS } from "../constants/endpoints";
import { useDispatch } from "react-redux";
import { initializeFileExplorer } from "../store/fileExplorerSlice";

const useDrive = (pathname) => {
    
    const { folderId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        fetchDrives();
    }, [pathname, dispatch]);

    const fetchDrives = async() => {

        const endpoint = getEndpoint();
        const response = await fetch(endpoint);
        const json = await response.json();
        dispatch(initializeFileExplorer(json));
    }

    const getEndpoint = () => {

        switch(pathname) {
            case '/my-drive':
                return ENDPOINTS.GET_MY_DRIVE;
            case '/shared-drive':
                return ENDPOINTS.GET_SHARED_DRIVE;
            default:
                return ENDPOINTS.GET_FOLDER(folderId);
        }
    }
}

export default useDrive;