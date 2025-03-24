import { createSlice, createAsyncThunk, nanoid, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';

interface ItemType {
    id: string;
    fullName: string;
    email: string;
    number: string;
    dob: string;
    gender: string;
    height: string;
    portfolioLink: string;
    address: string;
    instagramHandle: string;
    profession: string;
    about: string;
    leftSideShot: string | null;
    rightSideShot: string | null;
    headShot: string | null;
    fullLength: string | null;
    privacyNotice: boolean;
    ageConsent: boolean;
}

const initialState: { slice: ItemType[]; loading: boolean; error: string | null } = { 
    slice: [],
    loading: false,
    error: null 
};

export const createModelRequest = createAsyncThunk(
    'slice/createModelRequest',
    async (newItem: Omit<ItemType, 'id'>) => {
        const response = await axios.post('/your-backend-endpoint', newItem);
        return response.data;
    }
);

export const getAllModelRequest = createAsyncThunk(
    'slice/getAllModelRequest',
    async () => {
        const response = await axios.get('/your-backend-endpoint');
        return response.data.modelRequests;
    }
);

export const addItems = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Omit<ItemType, 'id'>>) => {
            const addThis = {
                id: nanoid(),
                ...action.payload,
            };
            state.slice.push(addThis);
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(createModelRequest.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createModelRequest.fulfilled, (state, action) => {
                state.loading = false;
                state.slice.push({ id: nanoid(), ...action.payload });
            })
            .addCase(createModelRequest.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to send data';
            })
            .addCase(getAllModelRequest.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllModelRequest.fulfilled, (state, action: PayloadAction<ItemType[]>) => {
                state.loading = false;
                state.slice = action.payload;
            })
            .addCase(getAllModelRequest.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch data';
            });
    }
});

export const { addItem } = addItems.actions;

export default addItems.reducer;
