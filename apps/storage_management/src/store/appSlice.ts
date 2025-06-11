import { createSlice } from "@reduxjs/toolkit";

import { RootState } from ".";

export interface IAppData {
  applicationName: string;
  baseUrl: string;
  sidebarOpened: boolean;
}
const initialState: IAppData = {
  applicationName: "mdt-storage-management",
  baseUrl: "",
  sidebarOpened: false
};

export const appSlice = createSlice({
  name: "mdt-storage-management",
  initialState,
  reducers: {
    setBaseUrl: (state, data) => {
      const newBaseUrl = `${data.payload.length === 0 ? "/" : data.payload}`;

      state.baseUrl = newBaseUrl.endsWith("/") ? newBaseUrl : `${newBaseUrl}/`;
    },
    setSidebar: (state, data) => {
      state.sidebarOpened = data.payload;
    },
    reset: () => initialState
  }
});

// Slice action creators
export const { reset, setBaseUrl, setSidebar } = appSlice.actions;

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;
