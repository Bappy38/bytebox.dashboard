import { useState } from "react";
import fileStoreApi from "../interceptors/errorHandlingInterceptor";
import { ENDPOINTS } from "../constants/endpoints";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const RenameFolderDialog = ({ isOpen, onClose, folderId, folderName, onComplete }) => {
    const [newFolderName, setNewFolderName] = useState(folderName);

    const isFolderNameModified = newFolderName && newFolderName !== folderName;

    const handleRenameFolder = async () => {
        if (folderName === newFolderName) {
            return;
        }

        try {
            await fileStoreApi.patch(
                ENDPOINTS.RENAME_FOLDER(folderId),
                {
                    FolderId: folderId,
                    FolderName: newFolderName,
                }
            );

            const renamedFolder = {
                folderId: folderId,
                folderName: newFolderName,
            };

            onComplete(renamedFolder);
        } catch (error) {
            console.error("Error occurred while renaming folder: ", error);
        } finally {
            onClose();
        }
    };

    return (
        <Dialog as="div" className="relative z-50" open={isOpen} onClose={onClose}>
            <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true"></div>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <DialogTitle as="h3" className="text-lg font-medium leading-6 text-gray-900">
                            Rename Folder
                        </DialogTitle>

                        <div className="mt-4">
                            <input
                                type="text"
                                className="border rounded-lg px-3 py-2 w-full"
                                placeholder="Enter folder name"
                                value={newFolderName}
                                onChange={(e) => setNewFolderName(e.target.value)}
                            />
                        </div>

                        <div className="mt-4 flex justify-end space-x-2">
                            <button
                                className={`bg-blue-500 text-white px-4 py-2 rounded-lg ${isFolderNameModified? "hover:bg-blue-600" : "opacity-50 cursor-not-allowed"}`}
                                onClick={handleRenameFolder}
                                disabled={!isFolderNameModified}
                            >
                                Rename
                            </button>
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};

export default RenameFolderDialog;