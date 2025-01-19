import { createSlice } from "@reduxjs/toolkit";


const breadcrumbSlice = createSlice({
    name: 'breadcrumb',
    initialState: [],
    reducers: {
        initializeBreadcrumbs: (_, action) => {
            return action.payload;
        },
        addBreadcrumb: (state, action) => {
            const exists = state.find((b) => b.id === action.payload.id);
            if (exists) {
                return;
            }
            state.push(action.payload);
        },
        removeBreadcrumbsAfter: (state, action) => {
            const index = state.findIndex((b) => b.id === action.payload.id);
            return index !== -1 ? state.slice(0, index + 1) : state;
        },
        resetBreadcrumbs: () => []
    }
});

export const {initializeBreadcrumbs, addBreadcrumb, removeBreadcrumbsAfter, resetBreadcrumbs} = breadcrumbSlice.actions;

export default breadcrumbSlice.reducer;