import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEllipsisVertical, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { removeFile } from "../store/fileExplorerSlice";

const FileCardActions = ({ fileId }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDropdownOpen]);

    const handleDownload = () => {
        console.log("Download File", fileId);
        // Implement download logic here
        setIsDropdownOpen(false); // Close dropdown after action
    };

    const handleDelete = () => {
        console.log("Delete File", fileId);
        // Implement delete logic here
        dispatch(removeFile(fileId));
        setIsDropdownOpen(false); // Close dropdown after action
    };

    return (
        <div className="relative">
            
            <div
                className="cursor-pointer"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                }}
            >
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>

            {isDropdownOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute right-0 top-8 w-max bg-white border border-gray-200 rounded-lg shadow-lg z-10"
                >
                    <ul className="py-1">
                        <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={handleDownload}
                        >
                            <FontAwesomeIcon className="pr-2" icon={faDownload} />
                            Download File
                        </li>
                        <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={handleDelete}
                        >
                            <FontAwesomeIcon className="pr-2" icon={faTrash} />
                            Delete File
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FileCardActions;