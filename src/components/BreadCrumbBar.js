import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeBreadcrumbsAfter } from "../store/breadCrumbSlice";
import React from "react";


const BreadCrumbBar = () => {

    const breadcrumbs = useSelector((state) => state.breadcrumb);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleBreadcrumbClick = (breadcrumb) => {
        dispatch(removeBreadcrumbsAfter(breadcrumb));
        navigate(breadcrumb.path);
    }

    if (!breadcrumbs) {
        return (<></>);
    }

    return (
        <div className="flex items-center space-x-2">
            {breadcrumbs.map((breadcrumb, index) => (
                <React.Fragment key={breadcrumb.id}>
                    <span
                        className="cursor-pointer text-blue-600 font-medium px-3 py-1 rounded-md 
                        hover:bg-blue-100 hover:text-blue-800 transition duration-200"
                        onClick={() => handleBreadcrumbClick(breadcrumb)}
                    >
                        {breadcrumb.label}
                    </span>
                    {index < breadcrumbs.length - 1 && (
                        <span className="text-gray-400">/</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

export default BreadCrumbBar;