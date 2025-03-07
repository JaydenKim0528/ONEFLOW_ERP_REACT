import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formData: {
        userId: "",
        password: "",
        userName: "",
        userEmail: "",
        company: "",
        userDepartment: "",
        userPosition: "",
        userPhone: "",
        userRole: "",
    },
    imageFile: null,
    preview: null,
    message: "",
};

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.formData[action.payload.name] = action.payload.value;
        },
        setImageFile: (state, action) => {
            state.imageFile = action.payload;
        },
        setPreview: (state, action) => {
            state.preview = action.payload;
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        resetForm: () => initialState,
    },
});

export const { setUserInfo, setImageFile, setPreview, setMessage, resetForm } = registerSlice.actions;
export default registerSlice.reducer;
