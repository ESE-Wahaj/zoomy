const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  toasts: [],
};

const meetingsSlice = createSlice({
  name: "meetings",
  initialState,
  reducers: {
    setToasts: (state, action) => {
      state.toasts = action.payload;
    },
  },
});

exports.meetingsSlice = meetingsSlice;
exports.setToasts = meetingsSlice.actions.setToasts;
