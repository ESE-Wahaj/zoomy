const { configureStore } = require("@reduxjs/toolkit");
const { authSlice } = require("./slices/AuthSlice");
const { meetingsSlice } = require("./slices/MeetingSlice");

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    meetings: meetingsSlice.reducer,
  },
});

exports.store = store;

exports.RootState = store.getState();
exports.AppDispatch = store.dispatch;
