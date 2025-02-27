import { createSlice } from "@reduxjs/toolkit";


const fileExplorerSlice = createSlice({
    name: 'fileExplorer',
    initialState: {
        folderId: '',
        folderName: '',
        folderSizeInMb: 0,
        files: [],
        subFolders: []
    },
    reducers: {
        initializeFileExplorer: (_, action) => {
            return action.payload;
        },
        addFile: (state, action) => {
            state.files.push(action.payload);
        },
        removeFile: (state, action) => {
            state.files = state.files.filter((file) => file.fileId !== action.payload);
        },
        addFolder: (state, action) => {
            state.subFolders.push(action.payload);
        },
        removeFolder: (state, action) => {
            state.subFolders = state.subFolders.filter((folder) => folder.folderId !== action.payload);
        },
        resetFileExplorer: () => {
            return {
                folderId: '',
                folderName: '',
                folderSizeInMb: 0,
                files: [],
                subFolders: []
            };
        }
    }
});

export const { initializeFileExplorer, addFile, removeFile, addFolder, removeFolder, resetFileExplorer } = fileExplorerSlice.actions;

export default fileExplorerSlice.reducer;