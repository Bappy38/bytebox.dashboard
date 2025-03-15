import { faEllipsisVertical, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import useDeleteFolder from "../hooks/useDeleteFolder";

const FolderCardActions = ({ folderId, folderName }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const deleteFolder = useDeleteFolder();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current
                && !dropdownRef.current.contains(event.target)
                && !event.target.closest(".action-button")
            ) {
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

    const handleRenameFolder = () => {
        // TODO:: Implement business logic to handleRenameFolder
        setIsDropdownOpen(false);
    };

    const handleDeleteFolder = () => {
        deleteFolder(folderId);
        setIsDropdownOpen(false);
    };

    return (
        <div className="relative">
            <div
                className="action-button w-5 h-5 px-2 flex items-center justify-center hover:bg-slate-400 rounded-full"
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
                    className="z-10 absolute right-0 top-8 w-max bg-white border border-gray-200 rounded-lg shadow-lg"
                >
                    <ul className="py-1">
                        <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={handleRenameFolder}
                        >
                            <FontAwesomeIcon className="pr-2" icon={faPencil} />
                            Rename Folder
                        </li>
                        <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={handleDeleteFolder}
                        >
                            <FontAwesomeIcon className="pr-2" icon={faTrash} />
                            Delete Folder
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FolderCardActions;