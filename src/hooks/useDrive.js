import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ENDPOINTS } from "../constants/endpoints";

const useDrive = (pathname) => {
    
    const [ data, setData ] = useState();
    const { folderId } = useParams();

    useEffect(() => {
        fetchDrives();
    }, [pathname]);

    const fetchDrives = async() => {

        const endpoint = getEndpoint();
        const response = await fetch(endpoint);
        const json = await response.json();
        setData(json);
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

    return data;
}

export default useDrive;