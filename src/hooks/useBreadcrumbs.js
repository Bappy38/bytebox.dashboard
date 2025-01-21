import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { initializeBreadcrumbs } from "../store/breadCrumbSlice";
import { ENDPOINTS } from "../constants/endpoints";
import { useParams } from "react-router-dom";


const useBreadcrumbs = (currentPath) => {

    const breadcrumbs = useSelector((state) => state.breadcrumb);
    const { folderId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        getBreadcrumbs();
    }, [ currentPath, dispatch]);

    const getBreadcrumbs = async() => {

        // TODO:: Ensure we aren't calling API to fetch breadcrumbs, if its already exist. We can check if breadcrumbs for a folder already exist by checking the folderId.
        // if (breadcrumbs && breadcrumbs.length > 0) {
        //     return;
        // }

        const initialBreadcrumb = {
            id: currentPath.startsWith('/my-drive')? 'my-drive' : 'shared-drive',
            label: currentPath.startsWith('/my-drive')? 'My Drive' : 'Shared Drive',
            path: currentPath.startsWith('/my-drive')? '/my-drive' : '/shared-drive'
        };

        const fetchedBreadcrumbs = await fetchBreadcrumbs(initialBreadcrumb);
        const updatedBreadcrumbs = [initialBreadcrumb, ...fetchedBreadcrumbs];
        dispatch(initializeBreadcrumbs(updatedBreadcrumbs));
    }

    const fetchBreadcrumbs = async (rootBreadcrumb) => {

        if (!folderId) {
            return [];
        }

        try {
            const endpoint = ENDPOINTS.GET_BREADCRUMBS(folderId);
            const response = await fetch(endpoint);
            const json = await response.json();

            const breadcrumbs = json.slice(1).map((folder) => ({
                id: folder.folderId,
                path: `${rootBreadcrumb.path}/folders/${folder.folderId}`,
                label: folder.folderName
            }));
            return breadcrumbs;
        }
        catch (error) {
            console.error('Error fetching breadcrumbs: ', error);
        }
    }

    return breadcrumbs;
}

export default useBreadcrumbs;