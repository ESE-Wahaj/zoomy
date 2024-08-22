const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  userInfo: undefined,
  isDarkTheme: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.isDarkTheme = action.payload.isDarkTheme;
    },
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

exports.authSlice = authSlice;
exports.setUser = authSlice.actions.setUser;
exports.changeTheme = authSlice.actions.changeTheme;
