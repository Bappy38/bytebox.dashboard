import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { ENDPOINTS } from "../constants/endpoints";
import fileStoreApi from "../interceptors/errorHandlingInterceptor";

const FolderCreator = ({ parentFolderId, onCreateComplete }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [folderName, setFolderName] = useState("");

  const handleCreateFolder = async () => {

    if (!folderName) {
        return;
    }

    try {
      const createFolderResponse = await fileStoreApi.post(
        ENDPOINTS.CREATE_FOLDER,
        {
            ParentFolderId: parentFolderId,
            FolderName: folderName
        }
      );
      const createdFolderId = createFolderResponse.data;
      const createdFolder = {
          folderId: createdFolderId,
          folderName: folderName
      };

      onCreateComplete(createdFolder);
    }
    catch (error) {
      console.error("Error occurred while creating folder: ", error);
    }
    finally {
      setFolderName("");
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        className="bg-gray-200 py-2 px-2 text-gray-700 rounded-l-lg border-r-2 border-r-gray-300 hover:bg-gray-300"
        onClick={() => setIsOpen(true)}
      >
        📁 Create Folder
      </button>

        <Dialog as="div" className="relative z-10" open={isOpen} onClose={() => setIsOpen(false)}>

          <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true"></div>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create Folder
                  </DialogTitle>

                  <div className="mt-4">
                    <input
                      type="text"
                      className="border rounded-lg px-3 py-2 w-full"
                      placeholder="Enter folder name"
                      value={folderName}
                      onChange={(e) => setFolderName(e.target.value)}
                    />
                  </div>

                  <div className="mt-4 flex justify-end space-x-2">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                      onClick={handleCreateFolder}
                    >
                      Create
                    </button>
                    <button
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </DialogPanel>
            </div>
          </div>
        </Dialog>
    </>
  );
};

export default FolderCreator;
