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
                        className="cursor-pointer font-bold p-2 hover:bg-slate-300 rounded-full"
                        onClick={() => handleBreadcrumbClick(breadcrumb)}
                    >
                        {breadcrumb.label}
                    </span>
                </React.Fragment>
            ))}
        </div>
    );
}

export default BreadCrumbBar;