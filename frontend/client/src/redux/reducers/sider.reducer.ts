import { createSlice } from "@reduxjs/toolkit";

const initialState: { search_visible: boolean, notification_visible: boolean, messages_visible: boolean } = {
    search_visible: false,
    notification_visible: false,
    messages_visible: location.pathname.includes("/direct") || false
};

const siderSlice = createSlice({
    name: "sider",
    initialState,
    reducers: {
        setSiderState: (state, action) => {
            return {
                ...state,
                search_visible: action.payload.search_visible,
                notification_visible: action.payload.notification_visible,
                messages_visible: action.payload.messages_visible,
            };
        },
        clearSiderState: (state) => {
            return {
                ...state,
                notification_visible: false,
                search_visible: false,
                messages_visible: false
            };
        },
    },
});

export const { setSiderState, clearSiderState } = siderSlice.actions;
export default siderSlice.reducer;
