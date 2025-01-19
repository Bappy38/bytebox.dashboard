import { configureStore } from "@reduxjs/toolkit";
import breadcrumbReducer from './breadCrumbSlice';

const appStore = configureStore({
    reducer: {
        breadcrumb: breadcrumbReducer
    }
});

export default appStore;