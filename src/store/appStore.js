import { configureStore } from "@reduxjs/toolkit";
import breadcrumbReducer from './breadCrumbSlice';
import fileExplorerReducer from './fileExplorerSlice';

const appStore = configureStore({
    reducer: {
        breadcrumb: breadcrumbReducer,
        fileExplorer: fileExplorerReducer
    }
});

export default appStore;