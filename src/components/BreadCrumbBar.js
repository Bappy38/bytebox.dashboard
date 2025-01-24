import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeBreadcrumbsAfter } from "../store/breadCrumbSlice";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";


const BreadCrumbBar = () => {

    const breadcrumbs = useSelector((state) => state.breadcrumb);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [collapse, setCollapse] = useState(true);
    const dropdownRef = useRef(null);

    const handleBreadcrumbClick = (breadcrumb) => {
        dispatch(removeBreadcrumbsAfter(breadcrumb));
        navigate(breadcrumb.path);
    }

    const handleOutsideOfDropdownClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setCollapse(true);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideOfDropdownClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideOfDropdownClick);
        };
    }, [])

    if (!breadcrumbs || breadcrumbs.length === 0) {
        return (<></>);
    }

    const collapsedItems = breadcrumbs.slice(0, -2);
    const visibleItems = breadcrumbs.slice(-2);

    return (
        <div className="flex items-center space-x-2">
            {breadcrumbs.length >= 3 && (

                <div className="relative flex" ref={dropdownRef}>
                    <span
                        className="cursor-pointer text-gray-500 px-3 py-1 hover:bg-gray-200 rounded-md flex items-center"
                        onClick={() => setCollapse(!collapse)}
                    >
                        <FontAwesomeIcon icon={faEllipsis} />
                    </span>

                    <span className="text-gray-400">/</span>

                    {!collapse && (
                        <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md border z-10 w-60">
                            {collapsedItems.map((breadcrumb) => (
                                <div
                                    key={breadcrumb.id}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-blue-600"
                                    style={{
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis"
                                    }}
                                    title={breadcrumb.label}
                                    onClick={() => {
                                        handleBreadcrumbClick(breadcrumb);
                                        setCollapse(true);
                                    }}
                                    >
                                        📁 {breadcrumb.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
            {visibleItems.map((breadcrumb, index) => (
                <React.Fragment key={breadcrumb.id}>
                    <span
                        className="cursor-pointer text-blue-600 font-medium px-3 py-1 rounded-md 
                        hover:bg-blue-100 hover:text-blue-800 transition duration-200"
                        onClick={() => handleBreadcrumbClick(breadcrumb)}
                    >
                        {breadcrumb.label}
                    </span>

                    {index < visibleItems.length - 1 && (
                        <span className="text-gray-400">/</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

export default BreadCrumbBar;