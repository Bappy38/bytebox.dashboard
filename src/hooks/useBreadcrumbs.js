import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { initializeBreadcrumbs } from "../store/breadCrumbSlice";


const useBreadcrumbs = (currentPath) => {

    const breadcrumbs = useSelector((state) => state.breadcrumb);
    const dispatch = useDispatch();

    useEffect(() => {

        const fetchBreadcrumbs = () => {

            if (breadcrumbs && breadcrumbs.length > 0) {
                return;
            }

            try {
                const initialBreadcrumb = {
                    id: currentPath === '/my-drive'? 'my-drive' : 'shared-drive',
                    label: currentPath === '/my-drive'? 'My Drive' : 'Shared Drive',
                    path: currentPath === '/my-drive'? '/my-drive' : '/shared-drive'
                };

                // const response = await axios.get('/api/breadcrumbs', {
                //     params: {
                //         folderId: ''
                //     }
                // });

                // const fetchedBreadcrumbs = response.data;
                const fetchedBreadcrumbs = [];
                const updatedBreadcrumbs = [initialBreadcrumb, ...fetchedBreadcrumbs];
                dispatch(initializeBreadcrumbs(updatedBreadcrumbs));
            }
            catch (error) {
                console.error('Error fetching breadcrumbs: ', error);
            }
        }

        fetchBreadcrumbs();
    }, [breadcrumbs, currentPath, dispatch]);

    return breadcrumbs;
}

export default useBreadcrumbs;