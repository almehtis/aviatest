import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type shareStatus = {
  isLinkShared: boolean;
  isEmailShared: boolean;
};

type shareStatusState = {
  isLinkShared: shareStatus["isLinkShared"];
  isEmailShared: shareStatus["isEmailShared"];
};

const initialState: shareStatusState = {
  isLinkShared: false,
  isEmailShared: false,
};

export const shareSlice = createSlice({
  name: "shareStatus",
  initialState,

  reducers: {
    shareLink(state, action: PayloadAction<boolean>) {
      state.isLinkShared = true;
    },

    shareEmail(state, action: PayloadAction<boolean>) {
      state.isEmailShared = true;
    },
  },
});

export const { shareLink, shareEmail } = shareSlice.actions;
export default shareSlice.reducer;
